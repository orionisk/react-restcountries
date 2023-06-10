export const normalizeStr = (str: string) =>
  str
    .normalize('NFKD')
    .replace(/[^\w\s]/gi, '')
    .toLowerCase();
