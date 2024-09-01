// Q 1.
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// -- Solution 
console.log ('1. -------------');
let user = {
    name: "jhon",
    surname: "smith",
};

user.name = "pete";
console.log(user)
delete user.name;

// Q 2.console.log ('-------------');
//Write the function isEmpty(obj) 
//which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

console.log(isEmpty(schedule)); // --> true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // --> false

// - --  Solution -- 
console.log ('2. -------------');
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Q 3.
// Is it possible to change an object declared with const? What do you think?

const Cuser = {
    name: "Carl"
};

// // does it work?
Cuser.name = "Pete"; 

// -- Solution
console.log (Cuser) // --> Yes

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum.
// Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

// -- solution
console.log ('3. -------------');
let sum = 0;
for (const key in salaries) {

  sum += salaries[key];
  
}
console.log(sum)

//Q 4
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything.
// It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// -- solution 
console.log ('4. -------------');
console.log (menu);

for (let key in menu ) {
  if (typeof(menu[key]) =='number' )
    menu[key] *= 2;
}

console.log (menu);