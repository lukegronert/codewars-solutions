// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

function solution(number){
    // convert the number to a roman numeral
    let answer = [];
    const chooseLetters = (oneLetter, fiveLetter, tenLetter, amount) => {
      if(amount === 0) {
        return;
      } else if(amount <=3) {
        for(let i = 0; i<amount; i++) {
          answer.push(oneLetter)
        }
      } else if(amount === 4) {
        answer.push(oneLetter + fiveLetter)
      } else if(amount === 5) {
        answer.push(fiveLetter)
      } else if(amount > 5 && amount < 9) {
        let str = fiveLetter;
        for (let i = 0; i < amount-5; i++) {
          str = str + oneLetter;
        }
        answer.push(str);
      } else {
        answer.push(oneLetter + tenLetter)
      }
    }
    if(number%1000 !== number) {
      let numberOfThousands = Math.floor(number/1000);
      chooseLetters('M', 'M', 'M', numberOfThousands)
      number = number - (numberOfThousands * 1000)
    }
    if (number%100 !== number) {
      let numberOfHundreds = Math.floor(number/100);
      chooseLetters('C', 'D', 'M', numberOfHundreds)
      number = number - (numberOfHundreds * 100)
    }
    if(number%10 !== number) {
      let numberOfTens = Math.floor(number/10)
      chooseLetters('X', 'L', 'C', numberOfTens)
      number = number - (numberOfTens * 10)
    }
    chooseLetters('I', 'V', 'X', number)
    return answer.join('');
  }