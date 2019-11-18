function RideFunction() {
    var Height, CanRide;
    Height = document.getElementById("Height").value;
    CanRide = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = CanRide + " to ride.";
}

function AgeFunction() {
    var Age, CanVote;
    Age = document.getElementById("Age").value;
    CanVote = (Age > 18) ? "You are old enough": "You are not old enough";
    document.getElementById("Response").innerHTML = CanVote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.VehicleMake = Make;
    this.VehicleModel = Model;
    this.VehicleYear = Year;
    this.VehicleColor = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function MyFunction() {
    document.getElementById("KeywordsAndConstructors").innerHTML = 
    "Erik drives a " + Erik.VehicleColor + "-colored " + Erik.VehicleModel +
    " manufactured in " + Erik.VehicleYear;
}

function Computer(OS, Model) {
    this.ComputerOS = OS;
    this.ComputerModel = Model;
}
var Lewis = new Computer("Windows", "Desktop");
function ComputerFunction() {
    document.getElementById("NewAndThis").innerHTML =
    "Lewis has a " + Lewis.ComputerOS + " " + Lewis.ComputerModel + " computer.";
}

function Restricted(){
    var Restricted = Abstract 
    document.getElementById("Restriction").innerHTML = Restricted
}


function CountFunction() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var StartingPoint = 9;
        function PlusOne() {StartingPoint += 1;}
        PlusOne();
        return StartingPoint;
    }
}

function Add10() {
    document.getElementById("NestedFunction").innerHTML = Add();
    function Add() {
        var Initial = 10;
        function Addit() {Initial += 33;}
        Addit();
        return Initial;
    }
}