const deleteDuplicates = (head) => {
  head.forEach((item, index) => {
    while(item === head[index + 1]) {
      head.splice(index, 1);
    }
  })
  return head;
}

console.log(deleteDuplicates([1, 1, 2]));
console.log(deleteDuplicates([1, 1, 2, 3, 3]));

const deleteDupLinkedList = (head) => {
  const headPointer = head;
  while(head) {
    const headVal = head.val;
    if (head.next && head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return headPointer;
}



console.log(deleteDuplicates([1, 1, 2]));
console.log(deleteDuplicates([1, 1, 2, 3, 3]));
