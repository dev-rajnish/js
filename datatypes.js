function show(x) {console.log(x)}
function line(x) {console.log(`line ${x} --> `)}

//8 Data Types 
//-------------------------------------------
//1 - number
// some special number NaN , Infinity , -Infinity
show (typeof (Infinity));
show (`line 9 --> ${typeof (NaN)}`);

// 2. NaN represent a computational error 
show("string"/3);

// NaN is sticky 
show ("string"/2+5-8);
//or
show(2 + 3/"String")

//------------------------------
// bigint --- number is limited to 2^53
// made by adding 'n' at last of a number
show (`line 22 --> ${typeof (134567890n)}`)

// 3. String 
let str1 = "can be written in double Quote"
let str2 = 'also can be written in single quote'
//backticks can use expression and variable too
let something = "backticks"
let str = `in ${something} also` 

show (str)

// 4. boolean - true / false value only 

let isBun = true;
line (36)
show ( typeof (isBun))

let isNPM = false;
show (typeof isNPM)

// also come as result of  comparison 
line(43)
show (5<3);

// 5. Null
// A value purposely or implicitely set empty , Nothing
// or unknown
let value = null ;
line (50)
show( typeof value) // wrong in js it is actually null

// 6. undefined
// meaning value is not set/assigned
let aVar;
line(56)
show (aVar)

// undefined can be value also 
let var2 = undefined;
line (61);
show (var2)

// But null is preferred not undefined

let var23 = null;
line(67)
show (var23)

///// ---- typeof operator
// typeof operator returns va;lue as string 

//used in 2 form  
// typeof value
// typeof (value)
// only works with a operand
line(77)
show (typeof undefined);
show(typeof (2345678) );
show (typeof 3456789n);
show ( typeof true);
show ( typeof "foo");
show ( typeof Symbol("id"));
show ( typeof Math);
show ( typeof null);//wrong in js
show ( typeof alert);