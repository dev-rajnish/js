// function fnName (parameters) {// body }

function greet() {
    console.log("Hello Rajnish")
}

greet();
greet();

// parameters

function hello(user) {
    console.log("Hello " + user);
}

hello("simple");
hello("rajnish");

function showMsg(from, text = "no text given") {
    console.log(from + " : " + text);
}

showMsg("Ann", "Hello!");

showMsg("Rajnish",)

function showMsg(from, text = "this is default") {
    console.log(from + " : " + text);
}

let fn = showMsg;

fn("hello", "me");

let line = (ln) => console.log("line " + ln);


line(38)