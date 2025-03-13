function checkDiscount(age, isMember){
    let discount = age >=60 ? "20% [senior discount]" : isMember ? "10% [member discount]" : "no discount";
    console.log(`You are eligible for ${discount}`);
}

checkDiscount(60,true)
checkDiscount(30,true)
checkDiscount(20,false)