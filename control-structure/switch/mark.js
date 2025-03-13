let mark = 40;
let grade = "";

switch (true) {
  case mark > 80:
    grade = "A";
    break;
  case mark > 70:
    grade = "B";
    break;
  case mark > 60:
    grade = "C";
    break;

  default:
    grade="F";
    break;
}

console.log(grade);