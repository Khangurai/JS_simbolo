//Capitalize the first letter
let str = "javascript is fun.";

function capitalizeFirstletter(str) {
  //extract frist letter
  firstLetter = str.slice(0, 1);
  //convert first letter to uppercase
  upper = firstLetter.toUpperCase(firstLetter);
  //extract the next characters..
  otherLetter = str.slice(1);
  //concat the two string.
  concat = upper.concat(otherLetter);

  return concat;
}

console.log(capitalizeFirstletter(str));

//nextLevel
function capitalizesFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizesFirstLetter("javascript is fun."));
