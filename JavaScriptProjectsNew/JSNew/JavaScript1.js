function SwitchFunction() {
    var Animal = document.getElementById("Selection").value;
    var Ending = " are a good pick!";
    var Response;
    switch(Animal) {
        case "Dogs":
            Response = "Dogs" + Ending;
        break;
        case "Owls":
            Response = "Owls" + Ending;
        break;
        case "Lions":
            Response = "Lions" + Ending;
        break;
        default:
            Response = "Please enter the option exactly as it is displayed in the choices.";
    }
    document.getElementById("Output").innerHTML = Response;
}

function ChangeClassFunction() {
   var A = document.getElementsByClassName("ChangingText");
        A[0].innerHTML = "This text has changed";

}






var c = document.getElementById("CanvasStuff");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);