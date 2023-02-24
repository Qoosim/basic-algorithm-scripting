const chromosomeCheck = sperm => {
    return `Congratulations! You're going to have a ${sperm === 'XX' ? 'daughter' : 'son'}.`
}

console.log(chromosomeCheck('XX'));
console.log(chromosomeCheck('XY'));
