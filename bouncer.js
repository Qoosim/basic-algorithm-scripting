const bouncer = (arr) => {
  return arr.filter((item) => {
    if (item) {
      return item;
    }
  })
}

console.log(bouncer([7, "ate", "", false, 9]));

function bouncerRefactor(arr) {
  return arr.filter((elem) => Boolean(elem) === true);
}

console.log(bouncerRefactor([0, 1, true, "new",  "ate", "", false, 9]));
