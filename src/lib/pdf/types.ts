type WithoutTrailingSlash<S extends string> = S extends `${infer R}/` ? R : S;

export type BasePdfUrl<P extends string = string> = `http${"s" | ""}://${P}`;

const PdfIdRegex = /^[a-z0-9A-Z]+$/;

export const constructPdfUrl = <U extends BasePdfUrl<P>, P extends string, I extends string>(
  baseUrl: U,
  id: I,
): `${WithoutTrailingSlash<U>}/${I}.pdf` => {
  /* Validate the ID against a regex to make sure we are not performing a string manipulation that
     will lead to an invlalid URL, potentially with double back slashes or other issues. */
  if (!PdfIdRegex.test(id)) {
    throw new Error(`The provided ID ${id} is invalid!`);
  }
  let base: WithoutTrailingSlash<U>;
  if (baseUrl.endsWith("/")) {
    base = baseUrl.slice(0, -1) as WithoutTrailingSlash<U>;
  } else {
    base = baseUrl as WithoutTrailingSlash<U>;
  }
  return `${base}/${id}.pdf`;
};

export interface PdfPage {
  readonly page: number;
  readonly content: string[];
}

export interface PdfDocument {
  readonly pages: PdfPage[];
}
