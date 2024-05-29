import { constructPdfUrl } from "~/lib/pdf/types";

describe("constructPdfUrl properly returns", () => {
  it("properly returns when no trailing slash is present", () => {
    expect(constructPdfUrl("http://example.com", "test")).toBe("http://example.com/test.pdf");
  });
  it("properly returns when a single trailing slash is present", () => {
    expect(constructPdfUrl("http://example.com/", "test")).toBe("http://example.com/test.pdf");
  });
  it("properly returns when multiple trailing slashes are present", () => {
    expect(constructPdfUrl("http://example.com///", "test")).toBe("http://example.com/test.pdf");
  });
  it("properly throws when ID is empty", () => {
    expect(() => constructPdfUrl("http://example.com///", "")).toThrow();
  });
  it("properly throws when domain is not present", () => {
    expect(() => constructPdfUrl("http://", "")).toThrow();
  });
  it("properly throws when ID is invalid", () => {
    expect(() => constructPdfUrl("http://example.com///", "test/")).toThrow();
  });
});
