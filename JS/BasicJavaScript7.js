var x = 25;

function Global() {
    var Multiply = (x * y);
    document.getElementById("GlobalVar").innerHTML = Multiply;
}

function Local() {
    var y = 10;
    var Add = (y + 20)
    document.getElementById("LocalVar").innerHTML = Add;

}

function GetDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}



function GetAge() {
    var AgeInput = document.getElementById("AgeInput").value
    
    if (AgeInput > 18) {
    document.getElementById("Response").innerHTML = "You are legally an adult.";
    }

    else {
        document.getElementById("Response").innerHTML = "You are not yet a legal adult."
    }
}


function TimeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening.";
    }
    document.getElementById("TimeOfDay").innerHTML = Reply;
}