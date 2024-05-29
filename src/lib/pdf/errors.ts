import { type BasePdfUrl, constructPdfUrl } from "~/lib/pdf/types";

interface PdfHttpErrorConfig {
  readonly id: string;
  readonly baseUrl: BasePdfUrl;
}

export abstract class PdfHttpError extends Error {
  protected readonly id: string;
  protected readonly baseUrl: BasePdfUrl;

  constructor({ id, baseUrl }: PdfHttpErrorConfig) {
    super();
    this.id = id;
    this.baseUrl = baseUrl;
  }

  protected get url() {
    return constructPdfUrl(this.baseUrl, this.id);
  }

  public get message() {
    return `There was an error making a request to ${this.url}.`;
  }
}

export class PdfNetworkError extends PdfHttpError {
  public readonly error: Error;

  constructor(error: Error, config: PdfHttpErrorConfig) {
    super(config);
    this.error = error;
  }

  public get message() {
    return `There was a network error making a request to ${this.url}:\n${this.error}`;
  }
}

export class PdfClientError extends PdfHttpError {
  public readonly status: number;

  constructor(config: PdfHttpErrorConfig, status: number) {
    super(config);
    this.status = status;
  }

  public get message() {
    return `[${this.status}] There was a client error making a request to ${this.url}.`;
  }
}

export class PdfExtractionError extends Error {}
