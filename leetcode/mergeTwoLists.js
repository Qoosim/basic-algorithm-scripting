/*const mergeTwoLists = (list1, list2) => {
  let newList = new ListNode(0);

  let headOfNewList = newList;

  while(list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      newList.next = list1;
      
      list1 = list1.next;
    } else {
      newList.next = list2;

      list2 = list2.next;
    }
  }

  newList = newList.next

  if (list1 === null) {
    newList.next = list2;
  } else {
    newList.next = list1;
  }

  return headOfNewList.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
*/

const mergeTwoLists2 = (l1, l2) => {
  // If either list is empty, return the other list's node
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  // If l1 is lower
  if (l1.val < l2.val) {
     l1.next = mergeTwoLists2(l1.next, l2);
     return l1;
  }
  // If l2 is lower
  else {
     l2.next = mergeTwoLists2(l1, l2.next);
     return l2;
  }
};

console.log(mergeTwoLists2([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists2([], []));
console.log(mergeTwoLists2([], [0]));

