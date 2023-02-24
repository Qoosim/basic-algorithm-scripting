function squareDigits(num){
    const numbers = num.toString().split('');
    return +numbers.map((num) => num ** 2).join('');
  }

  console.log(squareDigits(221));