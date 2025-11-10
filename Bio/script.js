const slideDuration = 1000;

const bioText = document.getElementById('bioMain');


window.onload = function() {
  textShow();
};

function textShow(){
    bioText.classList.add("Show");
};

document.getElementById('bioHomeButton').addEventListener("click", function() {
    enableMouse = false; 
    bioText.classList.add("Hide");

    setTimeout(() => {
        console.log("Redirecting...");
        window.location.href = "../index.html"; 
        
    }, slideDuration);
});