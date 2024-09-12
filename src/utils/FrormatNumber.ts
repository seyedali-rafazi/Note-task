const farsiDigits: readonly string[] = [
  "۰",
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
];

export function toPersianNumbersWithComma(n: number | string): string {
  const numWithCommas = numberWithCommas(n);
  return toPersianNumbers(numWithCommas);
}

function numberWithCommas(x: number | string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n: number | string): string {
  return n
    .toString()
    .replace(/\d/g, (digit: string): string => farsiDigits[parseInt(digit)]);
}
