function ConcatenateFunction() {
    var one = "This will display";
    var two = " as a whole sentence with";
    var three = " no breaks";
    var WholeSentence = one.concat(two, three);
    document.getElementById("Concatenate").innerHTML = WholeSentence;
}

function SliceMethod() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;

}

function Uppercase() {
    var HW = "Hello, World";
    var UP = HW.toUpperCase();
    var x = HW.search("World");
    document.getElementById("Upper").innerHTML = UP;
    document.getElementById("Search").innerHTML = x;
}

function NumberStringy() {
    x = 95;
    document.getElementById("NumberString").innerHTML = x.toString();
}

function PrecisionFunction() {
    var x = 4389348.89375409874;
    document.getElementById("Precision").innerHTML = x.toPrecision(8);
}

function FixedFunction() {
    var num = 9.8637463;
    var TO = num.toFixed(3);
    document.getElementById("Fixed").innerHTML = TO;
  }

  function ValueFunction() {
    var string = "Hey, what's up.";
    var val = string.valueOf();
    document.getElementById("Value").innerHTML = val;
  }