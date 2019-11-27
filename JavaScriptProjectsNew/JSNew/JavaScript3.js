function displayColor(lightsaber) {
    var lightsaberColor = lightsaber.getAttribute("data-lightsaber-color");
    alert(lightsaberColor + ": The " + lightsaber.innerHTML + " lightsaber is one of many "
    + "colors used in Star Wars");
}