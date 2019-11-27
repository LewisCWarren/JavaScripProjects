function ValidateForm() {
    var x = document.forms["Form"]["Name"].value;
    if (x == "") {
        alert("Name and Email must be filled out");
        return false;
    }
}