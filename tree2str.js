const tree2str = (root) => {
  if (root === null) {
    return '';
  }

  const val = root.val;

  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (!left && !right) {
    return `${val}`;
  }

  if (!right) {
    return `${val}(${left})`;
  }

  return `${val}(${left})(${right})`;

}

console.log(tree2str([1, 2, 3, 4]));
console.log(tree2str([1, 2, 3, null, 4]));

