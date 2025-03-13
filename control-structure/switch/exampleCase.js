// 1. Simulate a traffic light system
//  where the light color determines the action to take.
// if lightColor = red => action = "stop"
// if lightColor = yellow => action = "slow down"
// if lightColor = green => action = "go"

let lightColor = "red";
let action;

switch (true) {
  case lightColor === "red":
    action = "stop";
    break;
  case lightColor === "yellow":
    action = "slow down";
    break;
  case lightColor === "green":
    action = "go";
    break;
  default:
    action = "unknown";
    break;
}

console.log(
  `If the traffic light "${lightColor}' is the vehicle will '${action}'.`
);

// 2. Simulate a system where
// different user roles have different permissions.
// userRole = "admin" => permissions = "Full access"
// userRole = "editor" => permissions = "Edit content"
// userRole = "viewer" => permissions = "View content"
// otherwise => permissions = "no access"

let userRole = "admin";
let permissions;

switch (true) {
  case userRole === "admin":
    permissions = "Full access";
    break;
  case userRole === "editor":
    permissions = "Edit content";
    break;
  case userRole === "viewer":
    permissions = "View content";
    break;
  default:
    permissions = "unknown";
    break;
}

console.log(`User Role: ${userRole} => Permission : ${permissions}`);

//3. Calculate the discount percentage based on the membership level.
// membershipLevel = "gold" => discount = 20%
// membershipLevel = "silver" => discount = 15%
// membershipLevel = "bronze" => discount = 10%
// otherwise => discount = 0%

let membershipLevel = "silver";
let discount = 0;

switch (membershipLevel) {
  case "gold":
    discount = 0.2;
    break;

  case "silver":
    discount = 0.15;
    break;

  case "bronze":
    discount = 0.1;
    break;

  default:
    discount = 0;
    break;
}

console.log(`MembershipLevel '${membershipLevel}' : ${discount}`);
