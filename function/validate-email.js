//when a user summbits a form, check if they entered vaild data.

function validateEmail(email){
    //check if the email has vaild format
    //if vaild -> true
    //ele false

    return  (email.includes("@") && email.includes("."))
    

}

console.log(validateEmail("admin@example.com"))
console.log(validateEmail("adminexample.com"))
console.log(validateEmail("admin@example-com"))

