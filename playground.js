function changeBackground() {

    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "white";
    }    
}


function randomizeBackground() {
    var randomValue = Math.random();
    if (randomValue < 0.2) {
        document.body.style.backgroundColor = "blue";
    } else if ( randomValue < 0.4) {
        document.body.style.backgroundColor = "pink";
    } else if (randomValue < 0.6) {
        document.body.style.backgroundColor = "red";
    } else if (randomValue <0.8) {
        document.body.style.backgroundColor = "orange";
    }   else {
        document.body.style.backgroundColor = "yellow";
    }
}

function randomizeBackgroundPro() {

    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    var rgbValue = "rgb(" + red + "," + green + "," + blue +")";
    document.body.style.backgroundColor = rgbValue;

    setInterval(randomizeBackground, 1000);

    console.log(red, green, blue);
}

function randomizeBackgroundHex() {
    var red1 = convertToHex(Math.round(Math.random() *15));
    var red2 = convertToHex(Math.round(Math.random() *15));
    var green1 = convertToHex(Math.round(Math.random() *15));
    var green2 = convertToHex(Math.round(Math.random() *15));
    var blue1 = convertToHex(Math.round(Math.random() *15));
    var blue2 = convertToHex(Math.round(Math.random() *15));

    var rgbValue = "#" + red1 + red2 + green1 + green2 + blue1 + blue2
    console.log(rgbValue);
    document.body.style.backgroundColor = rgbValue;
        
}

function convertToHex(value) { 
    if (value == 10) {
        return "A";
    } else if (value == 11) {
        return "B";
    } else if (value == 12) {
        return "C";
    } else if (value == 13) {
        return "D";
    } else if (value == 14) {
       return "E";
    } else if (value == 15) {
       return "F";
    } else {
        return value;
    }

}