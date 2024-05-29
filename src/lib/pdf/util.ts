export const sanitizePdfLine = (line: string): string | null => {
  const sanitized = line.trim();
  if (sanitized.length === 0) {
    return null;
  }
  return sanitized;
};
