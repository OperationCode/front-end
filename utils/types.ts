export const objectKeys = <Type extends object>(value: Type) =>
  Object.keys(value) as (keyof Type)[];
