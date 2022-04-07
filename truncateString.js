function truncateString(str, num) {
  let truncate = '';
  if (str.length > num) {
    truncate += str.slice(0, num) + '...';
  } else {
    truncate += str;
  }
  return truncate;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Alaje", 8));
