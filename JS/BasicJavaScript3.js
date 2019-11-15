function Add() {
    var Addition = 4 + 7;
    document.getElementById("Math").innerHTML = Addition;
}


function Subtract() {
    var Subtraction = 36 - 9;
    document.getElementById("Minus").innerHTML = Subtraction;
}

function Multiply() {
    var Multiplication = 4 * 8;
    document.getElementById("Multiplication").innerHTML = Multiplication
}

function Divide() {
    var Division = 48 / 12;
    document.getElementById("Division").innerHTML = Division
}

function BasicMath() {
    var Mathematics = (10 + 12) / 4 * 3 - 6;
    document.getElementById("Problem").innerHTML = Mathematics
}

function Remainder() {
    var Modulus = 100 % 7;
    document.getElementById("Modulus").innerHTML = Modulus
}

function Unary() {
    var Negative = 13;
    document.getElementById("NegativeNumber").innerHTML = -Negative
}

var Increment = 12;
    Increment++;
    document.write(Increment)

var Decrement = 9.5;
    Decrement--;
    document.write(" " + Decrement)    

document.write(" " + Math.random() * 65)

document.write(" " + Math.pow(8,4))