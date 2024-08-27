function show(x) {console.log(x)}
function line(x) {console.log(`line ${x} --> `)}

// A. string conversion
// string (value)

// toSting is used for array and object

show(typeof String)

let val = true;
show (typeof val);

let convertedVal = String(val)
show (convertedVal)
show ( typeof convertedVal)

// B. automatically convert any value to number expect " + "

let egNum1 = "2"/"2";
show (egNum1);
show (typeof egNum1);
// calculation is done from LtR

let egNum2 = 1+2+"0"+3
show (egNum2)

// Explicitely By 
// Number ( value)

let num3 = "1234"
let num4 = Number(num3)

show (num4)
show (typeof num3)
show (typeof num4)
line (37)

// undefined
let undefinedVar;
show (Number(undefinedVar))

show (Number(null))

show (Number("123num"))
// empty string 
show (Number(""))
// whitw space
show (Number ("  123  "))
line (50);show (Number("")) ;show (Number("            ")) ;
show (+"  123  ")

// boolean to --> number
show (Number (true))
show (+true)

show (Number (false))

// C. boolean conversion

// 0, null, undefined, NaN, "" --> false 
// other than above --> true
line (63)
show (Boolean(0));
show (Boolean(null))
show (Boolean(undefinedVar));
show (Boolean(NaN));
show (Boolean(""));

line(70)
show (Boolean(9876)) // true


