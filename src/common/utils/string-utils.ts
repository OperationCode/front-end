export function capitalizeFirstLetter(someString = ''): string {
  const stringCopy = [...someString].join('');

  return stringCopy.charAt(0).toUpperCase() + stringCopy.slice(1);
}

export function coerceEmptyStringToUndefined(someString: string): string | undefined {
  if (someString === '') {
    return undefined;
  }

  return someString;
}
