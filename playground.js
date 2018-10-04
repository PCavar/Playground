function changeBackground() {

    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "white";
    }    
}


function windowAlert() {
    var text;
    if (confirm("Press a button!")) {
        text = "You pressed OK!";
    } else {
        text = "You pressed cancel!";
    }
    document.getElementById.alert1("alert");
}