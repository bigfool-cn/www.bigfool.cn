function string10to62(number) {
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split('')
  let radix = chars.length
  let qutient = +number
  let arr = []
  do {
    let mod = qutient % radix
    qutient = (qutient - mod) / radix
    arr.unshift(chars[mod])
  } while (qutient)
  return arr.join('')
}

function string62to10(number_code) {
  number_code = String(number_code)
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'
  let radix = chars.length
  let len = number_code.length
  let i = 0
  let origin_number = 0
  while (i < len) {
    origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0)
  }
  return origin_number
}

function string10to64(number) {
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ+/'.split('')
  let  radix = chars.length
  let  qutient = +number
  let  arr = []
  do {
    let mod = qutient % radix;
    qutient = (qutient - mod) / radix;
    arr.unshift(chars[mod]);
  } while (qutient);
  return arr.join('');
}

function string64to10(number_code) {
  number_code = String(number_code)
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ+/'
  let radix = chars.length
  let len = number_code.length
  let i = 0
  let origin_number = 0
  while (i < len) {
    origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0)
  }
  return origin_number;
}

export default function (value, hexType=10) {
  let hexResult = {
    hex_2: '',
    hex_8: '',
    hex_10: '',
    hex_16: '',
    hex_322: '',
    hex_62: '',
    hex_64: '',
  }
  switch (hexType) {
    case 2:
      hexResult.hex_2 = value
      hexResult.hex_10 = parseInt(value,2)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 8:
      hexResult.hex_8 = value
      hexResult.hex_10 = parseInt(value,8)
      hexResult.hex_2 = hexResult.hex_10.toString(2)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 10:
      hexResult.hex_10 = parseInt(value)
      hexResult.hex_2 = hexResult.hex_10.toString(2)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 16:
      hexResult.hex_16 = value
      hexResult.hex_10 = parseInt(value,16)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_2 = hexResult.hex_10.toString(2)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 32:
      hexResult.hex_32 = value
      hexResult.hex_10 = parseInt(value,32)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_2 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 62:
      hexResult.hex_62 = value
      hexResult.hex_10 = string62to10(value)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_2 = hexResult.hex_10.toString(2)
      hexResult.hex_64 = string10to64(hexResult.hex_10)
      break;
    case 64:
      hexResult.hex_64 = value
      hexResult.hex_10 = string64to10(value)
      hexResult.hex_8 = hexResult.hex_10.toString(8)
      hexResult.hex_16 = hexResult.hex_10.toString(16)
      hexResult.hex_32 = hexResult.hex_10.toString(32)
      hexResult.hex_62 = string10to62(hexResult.hex_10)
      hexResult.hex_2 = hexResult.hex_10.toString(2)
      break;
  }
  return hexResult
}
