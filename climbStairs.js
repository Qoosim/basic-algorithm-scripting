const climbStairs = (n) => {
    let newWays = new Array(n + 1).fill(0);
    newWays[0] = 1;
    newWays[1] = 1;

    for (let i = 2; i <= n; i++) {
        newWays[i] = newWays[i - 1] + newWays[i - 2];
    }
    return newWays[n]
}

console.log(climbStairs(2));
console.log(climbStairs(3));

const climbStairs2 = (n) => {
    let array = [1, 2];
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[n - 1];
}

console.log(climbStairs2(2));
console.log(climbStairs2(3));
