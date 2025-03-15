function LoanChecker(score, income) {

    let loan;
    if (score >= 700 && income >= 40000) {
        loan = "\nYou are eligible for the loan.";
    } else if (score >= 700) {
        loan = "\nEnough credit score but not enough income for the loan.";
    } else if (income >= 40000) {
        loan = "\nEnough income but not enough credit score for the loan.";
    } else {
        loan = "\nYou are not eligible for the loan.";
    }
    return `Credit score: ${score}<br>Income: ${income}${loan}`;
}

LoanChecker(700, 40000);
LoanChecker(300, 40000);
LoanChecker(700, 30000);
LoanChecker(300, 30000);

