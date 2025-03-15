// function checkDiscount(age, isMember){
//     let discount = age >=60 ? "20% [senior discount]" : isMember ? "10% [member discount]" : "no discount";
//     console.log(`You are eligible for ${discount}`);
// }

// checkDiscount(60,true)
// checkDiscount(30,true)
// checkDiscount(20,false)

function checkDiscount(age, isMember) {
  let discount =
    age >= 60
      ? "20% [senior discount]"
      : isMember
      ? "10% [member discount]"
      : "no discount";
  return `You are eligible for ${discount}`;
}

function getDiscount() {
  let age = document.getElementById("age").value;
  let isMember = document.getElementById("member").checked;
  let resultDiv = document.getElementById("result1");

  let message = checkDiscount(age, isMember);
  resultDiv.innerHTML = message;
}
