function Voting(age, status) {
  let vote;
  if (age >= 18 && status === "citizen") {
    vote = `You are eligible to vote.<br>`;
  } else if (age < 18 && status === "citizen") {
    vote = `Underage: ${age} years old. <br>Status: ${status}.<br>You can't vote.<br>`;
  } else if (age >= 18 && status !== "citizen") {
    vote = `Eligible age: ${age} years old. <br>Status: ${status}.<br>You can't vote.<br>`;
  } else {
    vote = `Underage: ${age} years old.<br>Status: ${status}.<br>You can't vote.<br>`;
  }
  return `${vote}`;
}

function getVote() {
  let age = document.getElementById("age").value;
  let status = document.getElementById("status").checked;
  let resultDiv = document.getElementById("result3");

  let message = Voting(parseInt(age), status);
  resultDiv.innerHTML = message;
}
