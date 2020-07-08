var color = 'red'

function loadSettings() {
    $("#settings").show(500);
    $("#cardContainer").toggleClass("parentDisable");

}
$("#cardContainer").click(function() {
    if ($('#cardContainer').hasClass('parentDisable')) {
        $("#settings").hide(500);
        $("#cardContainer").toggleClass("parentDisable");

    }

});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16);
}


function themeChange(color) {
    var rgbColor = hexToRgb(color.value);
    document.querySelector(":root").style.setProperty(color.name, rgbColor);
    localStorage.setItem(color.name, rgbColor);


}


function swapStyleSheet() {

    var bg = localStorage.getItem('--bg-color');
    var logo = localStorage.getItem('--logo-color');
    var accent = localStorage.getItem('--accent-color');

    if (bg) {
        document.querySelector(":root").style.setProperty("--bg-color", bg);
    }
    if (logo) {
        document.querySelector(":root").style.setProperty("--logo-color", logo);
    }
    if (accent) {
        document.querySelector(":root").style.setProperty("--accent-color", accent);
    }
}




document.addEventListener("DOMContentLoaded", function() {
    swapStyleSheet();
});