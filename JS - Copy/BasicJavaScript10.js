function CallLoop() {
    var X = 0;
    var Y = " ";
    

    while (X < 11) {
        Y += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Y;
}

var str = "Hello World";
var x = str.length;
document.write(x)


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = " ";
var Y;
function ForLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListOfInstruments").innerHTML = Content;
}

function ArrayFunction() {
    var GreatHeroes = [];
    GreatHeroes[0] = "Luke Skywalker";
    GreatHeroes[1] = "Frodo Baggins";
    GreatHeroes[2] = "Geralt of Rivia";
    document.getElementById("Array").innerHTML = GreatHeroes[2];
}

function ConstantFunction() {
    const Vehicle = {Type:"Car", Brand:"Nissan", Model:"Rogue"};
    Vehicle.Brand = "Volkswagen";
    Vehicle.Cost = "23,000"
    document.getElementById("Constant").innerHTML = "The " + Vehicle.Type + 
    " made by " + Vehicle.Brand + " sold for around " + Vehicle.Cost + " dollars.";
}

{
    let LetVar = " " + 48;
    document.write(LetVar)
}




var RF = ReturnFunction(13, 6)

function ReturnFunction(A, B) {
    return A * B ;   
}

document.getElementById("Return").innerHTML = RF;


let Vehicle = {
    Year:"2014 ",
    Color:"White",
    Brand:"Nissan ",
    Model:"Rogue ",
        Description: function() {
            return "The car is a " + this.Year + this.Color + this.Brand + this.Model;
        }
};
document.getElementById("Method").innerHTML = Vehicle.Description();


//Variables for Break and continue statements//
var Breaking;
for (Breaking = 0; Breaking < 5; Breaking++) {
    if (Breaking === 3) {
        break;
    }
    document.write("The number is " + Breaking + "." + "<br>")
}
document.getElementById("Break").innerHTML = Breaking;


var Continue;
for (Continue = 0; Continue < 5; Continue++) {
    if (Continue === 3) {
        continue;
    }
    document.write( "<br>" + "The number is " + Continue + "." + "<br>")
}
document.getElementById("Cont").innerHTML = Continue;