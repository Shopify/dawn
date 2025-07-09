export function extractNumber(str) {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}
