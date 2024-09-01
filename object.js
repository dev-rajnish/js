let c = (...p) => console.log(p);

let user = {
    name: "rajnish",
    age: 30,
}
c(user.age)

// --- adding object 

user.isMen = true;
c("12 --> ",user)
c(user.isMen)

// ---- removing object

delete user.age;
c(user)

// -----  dealing with space in property / keys name

let rajnish = {
    //  love birds : true  // gives error
    "love birds": true,
}

//  accessing space name key we use [] not (.)

c("29 --> ",rajnish["love birds"])

// objject shorthand 

function makeuser(name, age) {
    return {
        name: name,
        age: age,
    }
}

// shorthand
function makeuser_shorthand(name, age) {
    return {
        name,
        age,
    }
}

c(makeuser_shorthand("rajnish", 24));

// --- Existence cheeck 
// 1. comparing with undefined
// 2. (in ) operator

// 1
c(user.doStudy === undefined); // true means does key does not exist

// but this can give error 
// adding a undefined value in obj

user.doDance = undefined;
// now checking
c(user)
c(user.doDance === undefined); // shows true but doDance exist

// 2. in operator
c("doStudy" in user); // false , means does not exist
c("doDance" in user); // trure , means exist

// For...in  loop

// syntax for (let key in obj)
c("-----( for...in  loop )--------")
for (let prop in user) {
    c(prop);//listing keys
}


c("-------------")

for (let prop in user) {
    c(user[prop]);//listing value
}
c("-------------")

// integer named property list sorted else in creation order keys
let phCode = {
    "49": "Germany",
    "91": "India",
    "1": "USA",
    // Adding + in integer Make this sort in creation order
}

console.log("93 --> ", phCode);

// Object Copy is by reference 
// object created in some where and address of that is assign to a var
// eg 
let objAddr = {};
let objAddr2 = {};
console.log("100 --> ", objAddr == objAddr2); // false

// Const obj can be edited


let orgObj = {
    name: "jhon",
}
let cloneObj = {};

// cloning by copying Every property

for (let key in orgObj) {
    cloneObj[key] = orgObj[key];
}
console.log("115 --> ", cloneObj, orgObj)

cloneObj.name = "Pete";
console.log("118 --> ", cloneObj);

// object.Assign
// Syntax
// object.assign (dest, src,src2,.. , ,,)
let controlUser = {
    name: "jhon",
    age: 24,
}

let permission1 = {
    canView: true,
}
let permission2 = {
    canEdit: true,
}

user = Object.assign(controlUser, permission1, permission2);

console.log("137 --> ", controlUser);

// Simple Cloning
let objData = {
    name: "oggy",
    age: 22,
    is: "cartoon",
}

let simpleClone = Object.assign ({},objData)

console.log ("148 --> ",objData);