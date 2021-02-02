module.exports = function toReadable (number) {
  let allNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty'
  }

  let decade = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }

  if (number === 0) {
    return `${allNumbers[number]}`
  }

  if (number%10 === 0 && number%100 !== 0 && number.toString().length === 2) {
    return `${decade[(number/10)]}`
  } else if (number%100 !== 0 && number.toString().length === 3 && number%10 === 0) {
    return `${allNumbers[Math.trunc(number/100)]} hundred ${decade[(number.toString())[1]]}`
  } else if (number%100 === 0) {
    return `${allNumbers[Math.trunc(number/100)]} hundred`
  }

  let str = number.toString();

  if (number <= 20) {
    return `${allNumbers[number]}`
  } else if (number < 100) {
    return `${decade[str[0]]} ${allNumbers[str[1]]}`
  } else if (number < 1000) {
    let str2 = str.slice(1)
    if(str2 <= 9) {
      str2 = `${allNumbers[str2.slice(1)]}`
    } else if(str2 <= 20) {
      str2 = `${allNumbers[str2]}`
    } else {
      str2 = `${decade[str2[0]]} ${allNumbers[str2[1]]}`
    }
    return `${allNumbers[str[0]]} hundred ${str2}`
  }
}
  

