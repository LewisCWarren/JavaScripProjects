document.write(typeof 3);

function NaNFunction() {
    document.getElementById("NaNTest").innerHTML = isNaN('this is a string');
}

function Infinite() {
    var NumberI = 2E320
    document.getElementById("InfinityAndBeyond").innerHTML = NumberI
}

function InfiniteNegative() {
    var NumberII = -2E320
    document.getElementById("InfinityAndBeyondII").innerHTML = NumberII
}

document.write(43 >= 12);
document.write(43 > 65);

console.log(5 * 5)

document.write(" " + "10" -3)

console.log(10>11)

document.write((25 *4) ==100)

document.write(11 == 8)


A = 10 
B = 10
document.write(A === B);

C = 24
D = 30
document.write(C === D);

E = 12
F = "12"
document.write(E === F);

G = 91
H = "33"
document.write(G === H);

document.write(4 == 4 && 30 > 10);
document.write(3>5 && 5 == 5)
document.write(12 > 34 || 12 > 7)
document.write(12 > 34 || 6 > 7)

function NotTest() {
    var Not = 10 > 5
    document.getElementById("Not").innerHTML = !Not;
}

function  NotTestTrue() {
    document.getElementById("NotFalse").innerHTML = !(11 > 92);
}

function RideFunction() {
    var Height, CanRide;
    Height = document.getElementById("Height").value;
    CanRide = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = CanRide + " to ride.";
}