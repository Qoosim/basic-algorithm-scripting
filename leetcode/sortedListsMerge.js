const sortedListsMerge = (list1, list2) => {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = sortedListsMerge(list1.next, list2);
        return list1;
    } else {
        list2.next = sortedListsMerge(list1, list2.next);
        return list2;
    }
}

console.log(sortedListsMerge([1, 2, 4], [1, 3, 4]));                                                 
console.log(sortedListsMerge([], []));                                                               
console.log(sortedListsMerge([], [0]));