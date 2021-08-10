const diffTwoArray = (arrA, arrB) => {
  const union = new Set([...arrA, ...arrB]);
  const arrDiff = [];
  for (const elem of union) {
    if (arrA.includes(elem) && !arrB.includes(elem)) {
      arrDiff.push(elem);
    } else if (!arrA.includes(elem) && arrB.includes(elem)) {
      arrDiff.push(elem);
    }
  }
  return arrDiff;
};

console.log(diffTwoArray([1, 2, 3, 4, 5, 6], [1, 3, 5]));
