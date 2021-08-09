const reverseString = (str) => {
  var rString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rString += str[i];
  }
  return rString;
};
console.log(reverseString("abcde"));
