type WithoutTrailingSlash<S extends string> = S extends `${infer R}/` ? WithoutTrailingSlash<R> : S;

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
  /* While an edge case, to satisfy the WithoutTraililngSlash type properly we would need to
     account for the case where the baseUrl incorrectly contains multiple trailing slashes.  We
     could either throw an Error in that case, or just remove all of them.  The decision depends on
     the broader context in how this function is used - but for now I'm assuming that we want it to
     be a little bit more forgiving, and not throw an error. */
  let sanitized: string = baseUrl;
  while (sanitized.endsWith("/")) {
    sanitized = sanitized.slice(0, -1);
  }
  // This type coercion is safe because of the above logic.
  const base = sanitized as WithoutTrailingSlash<U>;
  return `${base}/${id}.pdf`;
};

export interface PdfPage {
  readonly page: number;
  readonly content: string[];
}

export interface PdfDocument {
  readonly pages: PdfPage[];
}
