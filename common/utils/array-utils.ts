/* eslint-disable @typescript-eslint/no-explicit-any */

/** used to identify if an array is filled with real values */
export function isFilledArray(potentialArray: unknown): potentialArray is any[] {
  return Boolean(Array.isArray(potentialArray) && potentialArray.length > 0 && potentialArray[0]);
}

export function mapStringsToSelectOptions(strings: string[]) {
  return strings.map(string => ({ label: string, value: string }));
}
