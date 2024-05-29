// I have mild PDF.js PTSD, but here we go again.
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import { type TextItem } from "pdfjs-dist/types/src/display/api";

import type { PDFPageProxy } from "pdfjs-dist/types/web/interfaces";

import { PdfNetworkError, PdfClientError, PdfExtractionError } from "~/lib/pdf/errors";
import { logger } from "~/application/logger";

import { type PdfPage, type PdfDocument, type BasePdfUrl, constructPdfUrl } from "./types";
import { sanitizePdfLine } from "./util";

const extractPdfDocumentPage = async (
  document: pdfjs.PDFDocumentProxy,
  id: string,
  pageNum: number,
): Promise<PdfPage> => {
  let page: PDFPageProxy;
  try {
    page = await document.getPage(pageNum);
  } catch (e) {
    throw new PdfExtractionError(
      `Failed to extract page ${pageNum} from PDF document for document with ID '${id}'.`,
    );
  }
  let content: Awaited<ReturnType<typeof page.getTextContent>>;
  try {
    content = await page.getTextContent();
  } catch (e) {
    throw new PdfExtractionError(
      `Failed to extract text content from page ${pageNum} for document with ID '${id}'.`,
    );
  } finally {
    page.cleanup();
  }
  return {
    page: pageNum,
    content: content.items.reduce((prev: string[], item) => {
      // This is a safe typeguard to use to differentiate between TextItem and TextMarkedContent.
      if (typeof (item as TextItem).str === "string") {
        const sanitized = sanitizePdfLine((item as TextItem).str);
        return sanitized ? [...prev, sanitized] : prev;
      }
      return prev;
    }, [] as string[]),
  };
};

const extractPdfDocument = async (
  document: pdfjs.PDFDocumentProxy,
  id: string,
): Promise<PdfDocument> => {
  const numPages = document.numPages;

  const promises: Promise<PdfPage>[] = Array.from({ length: numPages }, (_, i) => i + 1).map(
    pageNum => extractPdfDocumentPage(document, id, pageNum),
  );
  try {
    return {
      pages: await Promise.all(promises),
    };
  } finally {
    document.destroy();
  }
};

/**
 * An interface for fetching and parsing PDF documents via HTTP requests.
 */
export class PdfClient {
  private readonly baseUrl: BasePdfUrl;

  constructor(baseUrl: BasePdfUrl) {
    this.baseUrl = baseUrl;
  }

  /* Note: Providing the argument as the ID of the PDF document dynamically and using in conjunction
     with the static instance variable baseUrl may not be the best pattern, because it may require
     instantiation of a lot of instances of PdfClient if other parts of the URL path tend to be
     more dynamic than static.  At this point though, we don't know - and we can revisit if/when
     that becomes the case. */
  private async fetch(id: string): Promise<Buffer> {
    const url = constructPdfUrl(this.baseUrl, id);
    logger.info(`Making a request to: ${url}.`, { id });

    let response: Response;
    try {
      response = await fetch(url);
    } catch (e) {
      /* This would be unexpectedly - is definitely an edge case, but something we should check to
         satisfy the compiler.  We are trying to write "type-safe" code after all. */
      if (!(e instanceof Error)) {
        throw e;
      }
      logger.error(`There was a network error making a request to ${url}:\n${e}`);
      throw new PdfNetworkError(e, { id, baseUrl: this.baseUrl });
    }
    if (!response.ok) {
      logger.error(`There was a ${response.status} client error making a request to ${url}.`, {
        response,
      });
      throw new PdfClientError({ id, baseUrl: this.baseUrl }, response.status);
    }
    const blob = await response.blob();
    // The blob must first be converted to an ArrayBuffer before it can be converted to a Buffer.
    const arrayBuffer = await blob.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  /**
   * Fetches the PDF document associated with the provided ID from the web and returns a parsed
   * {@link PdfDocument} object containing the text content of each page in the document.
   *
   * @param {string} id
   *   The ID of the PDF document to fetch.  This refers to the path parameter in the URL.
   * @returns {PdfDocument}
   */
  public async fetchDocument(id: string): Promise<PdfDocument> {
    const buffer = await this.fetch(id);
    const doc = await pdfjs.getDocument({
      data: new Uint8Array(buffer.buffer),
      useWorkerFetch: false,
      isEvalSupported: false,
      useSystemFonts: true,
    }).promise;
    return extractPdfDocument(doc, id);
  }
}
