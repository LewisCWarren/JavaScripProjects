
function DF() {
    var KeyValue = {
        Class:"Warrrior",
        Weapon:"Sword and Shield",
        Armor:"Plated",
    };
    delete KeyValue.Weapon;
    document.getElementById("D").innerHTML = KeyValue.Weapon;
}