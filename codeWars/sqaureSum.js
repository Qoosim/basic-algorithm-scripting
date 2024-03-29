const squareSum = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr**2, 0);
}

console.log(squareSum([1,2])); // 5
console.log(squareSum([0, 3, 4, 5])) // 50
console.log(squareSum([])) //0