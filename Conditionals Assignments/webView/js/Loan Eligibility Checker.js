function LoanChecker(score, income) {

    let loan;
    if (score >= 700 && income >= 40000) {
        loan = "<br>You are eligible for the loan.";
    } else if (score >= 700) {
        loan = "<br>Enough credit score but not enough income for the loan.";
    } else if (income >= 40000) {
        loan = "<br>Enough income but not enough credit score for the loan.";
    } else {
        loan = "<br>You are not eligible for the loan.";
    }
    return `Credit score: ${score}<br>Income: ${income}${loan}`;
}

// LoanChecker(700, 40000);
// LoanChecker(300, 40000);
// LoanChecker(700, 30000);
// LoanChecker(300, 30000);

function getLoan() {
    let score=document.getElementById("score").value;
    let income=document.getElementById("income").value;
    let resultDiv=document.getElementById("result2");

    let message=LoanChecker(parseInt(score),parseInt(income));
    resultDiv.innerHTML=message;

}