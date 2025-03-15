function Voting(age, status) {
  let vote;
  if (age >= 18 && status === "citizen") {
    vote = `You are eligible to vote.\n`;
  } else if (age < 18 && status === "citizen") {
    vote = `Underage: ${age} years old. \nStatus: ${status}.\nYou can't vote.\n`;
  } else if (age >= 18 && status !== "citizen") {
    vote = `Eligible age: ${age} years old. \nStatus: ${status}.\nYou can't vote.\n`;
  } else {
    vote = `Underage: ${age} years old.\nStatus: ${status}.\nYou can't vote.\n`;
  }
  console.log(vote);
}

Voting(18, "citizen");
Voting(17, "citizen");
Voting(20, "non-citizen");
Voting(12, "non-citizen");
