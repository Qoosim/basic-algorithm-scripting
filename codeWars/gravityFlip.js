const gravityFlip = (d, a) => {
    if (d === 'R') {
        return a.sort((a, b) => a - b);
    }
    if (d === 'L') {
        return a.sort((a, b) => b -a);
    }
    return a;
}

console.log(gravityFlip('R', [3, 2, 1, 2]))  // [1, 2, 2, 3]
console.log(gravityFlip('L', [1, 4, 5, 3, 5]))  // [5, 5, 4, 3, 1]
