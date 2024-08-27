let c = (p) => console.table(p);

let user = {
    name: "rajnish",
    age: 30,
}
c(user.age)

// --- adding object 

user.isMen = true;
c(user)
c(user.isMen)

// ---- removing object

delete user.age;
c(user)

// -----  dealing with space in property / keys name

let rajnish = {
  //  love birds : true  // gives error
  "love birds" : true,
}

//  accessing space name key we use [] not (.)

c(rajnish["love birds"])

// objject shorthand 

function makeuser (name , age) {
    return {
name : name,
age  : age,
    }
}

// shorthand 
function makeuser_shorthand (name,age) {
    return {
        name,
        age,
    }
}

c (makeuser_shorthand("rajnish",24));

// --- Existence cheeck 
// 1. comparing with undefined
// 2. (in ) operator

// 1
c (user.doStudy === undefined); // true means does key does not exist

// but this can give error 
// adding a undefined value in obj

user.doDance = undefined;
// now checking
c (user)
c (user.doDance === undefined); // shows true but doDance exist

// 2. in operator
c("doStudy" in user); // false , means does not exist
c("doDance" in user); // trure , means exist

// For...in  loop

// syntax for (let key in obj)
c("-----( for...in  loop )--------")
for (let prop in user ) {
    c(prop);//listing keys
}


c("-------------")

for (let prop in user ) {
    c(user[prop]);//listing value
}
c("-------------")

// integer named property list sorted else in creation order keys