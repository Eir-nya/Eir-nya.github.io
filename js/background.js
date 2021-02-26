/////////////////////////////////////////////////
// gives the page one of 4 appearances on load //
/////////////////////////////////////////////////

var rng = (new Date().getSeconds() % 4) + 1;
// rng = 2;

// function to trigger on page load
window.addEventListener("load", function() {
    document.body.className = "background" + rng.toString();
    
    // space
    if (rng == 1) {
        document.getElementById("space1").style = null;
        document.getElementById("space2").style = null;
    // jevil
    } else if (rng == 2) {
        document.getElementById("carousel").style = null;
        document.getElementById("spinner").style = null;
        document.getElementById("tl").style = null;
        document.getElementById("tr").style = null;
        document.getElementById("bl").style = null;
        document.getElementById("br").style = null;
    // 3d
    } else if (rng == 3) {
        document.getElementById("ground").style = null;
        document.getElementById("spinner").style = null;
        document.getElementById("spinner").setAttribute("src", "img/bg.png");
    // hall
    } else {
        document.getElementById("hall").style = null;
    }
});
