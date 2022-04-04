function booWho(bool) {
  return (typeof bool === 'boolean');
}

console.log(booWho(null));
console.log(booWho(1));
console.log(booWho(true));
console.log(booWho(undefined));
console.log(booWho(false));
