

const BioButton = document.getElementById('BioButton');
const WorksButton = document.getElementById('WorksButton');
const BackgroundImageDiv = document.querySelector(".skyImageDiv");
const overlay = document.querySelector(".whiteSlideBio");
const mainPage = document.getElementById("mainPage");
const bioPage = document.getElementById("bioPage");

const slideDuration = 1000;



BioButton.addEventListener("click", function() {
    
    overlay.classList.add("active");
    BackgroundImageDiv.classList.add("active");

    //setTimeout(() => {
    //mainPage.style.display = "none";
    //bioPage.style.display = "block";

    //overlay.classList.remove("active");
    //  }, slideDuration);


    setTimeout(() => {
        console.log("Redirecting...");
        window.location.href = "Bio/index.html"; 
        
    }, slideDuration);

});

const originalBioButtonText = BioButton.textContent; 

BioButton.addEventListener('mouseover', function() {
BioButton.textContent = '> Bio'; 
});

BioButton.addEventListener('mouseout', function() {
BioButton.textContent = originalBioButtonText; 
});

        

document.getElementById('WorksButton').addEventListener("click", function() {
  alert("You clicked me (WorksButton)");
});


const originalWorksButtonText = WorksButton.textContent; 

WorksButton.addEventListener('mouseover', function() {
WorksButton.textContent = '> Works'; 
});

WorksButton.addEventListener('mouseout', function() {
WorksButton.textContent = originalWorksButtonText; 
});

    
const image = document.querySelector('.MainImage');
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 5; // -10% to +10%
  const y = (e.clientY / window.innerHeight - 0.5) * 5;
  image.style.transform = `translate(${x}%, ${y}%) scale(1.1)`;
});