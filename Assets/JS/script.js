// Get all the buttons that open the modal
var btns = document.getElementsByClassName("myBtn");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
}

// Get all the close buttons
var spans = document.getElementsByClassName("close");

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        var modal = this.parentElement.parentElement.parentElement;
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}