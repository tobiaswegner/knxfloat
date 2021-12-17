
/*
 * Binary format of KNX float values according to KNX standard (DPT 9.xxx)
 *
 * S EEEE MMM  MMMMMMMM
 * 
 * S: 1 bit sign
 * E: 4 bit exponent
 * M: 11 bit mantisse
 * 
 * Mantisse is encoded as fixed point float with two decimal places, e.g. 20.00 is encoded as 2000
 * 
 */

export function ConvertKNXFloatToNumber( knxFloat: number ): number {
  let mantisse = knxFloat & 0x07ff;
  let exponent = (knxFloat & 0x7800) >> 11;

  // check sign bit
  if (knxFloat & 0x8000) {
    // negative number in two complement
    mantisse = ((~0) << 11) | mantisse;
  }

  // 
  let value = mantisse / 100.0;

  value = value * 2 ** exponent;

  return value;
}

export function ConvertNumberToKNXFloat( number: number ): number {
  // do range check
  if (number <= -671088.64) {
    return 0xffff;
  }

  if (number >= 670760.96) {
    return 0x7fff;
  }

  number = (number * 100);

  let sign = 0;
  let exponent = 0;
  let mantisse = number;

  if (number < 0) {
    sign = 1;
  }

  while ((mantisse < -2048) || (mantisse > 2047)) {
    mantisse /= 2.0;
    exponent++;
  }

  return (sign << 15) | (exponent << 11) | (mantisse & 0x7ff);
}