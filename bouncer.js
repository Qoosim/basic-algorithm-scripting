const bouncer = (arr) => {
  return arr.filter((item) => {
    if (item) {
      return item;
    }
  })
}

console.log(bouncer([7, "ate", "", false, 9]));
