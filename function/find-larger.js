function findLarger(x, y) {
    return (x > y) ? x : (x === y) ? "Numbers are equal" : y;
}

console.log(findLarger(5, 3));  // 5
console.log(findLarger(2, 3));  // 3
console.log(findLarger(4, 4));  // "Numbers are equal"
