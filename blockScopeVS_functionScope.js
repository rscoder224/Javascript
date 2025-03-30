// Block Scope Vs Function Scope

// let and const are block scope
// var is function Scope

const First$name = "Divyanshu";

{
    let First$name = "Shaurya";
    console.log(First$name);
}
console.log(First$name);

