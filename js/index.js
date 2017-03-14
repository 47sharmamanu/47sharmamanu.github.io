/*// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function () {
        modal.style.display = "none";
    }*/
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function onDownloadResumeClicked() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function onClosedClicked() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

/* Set the width of the side navigation to 250px */
function openNav() {
    console.log("openNav")
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    console.log("closeNav()")
     document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
