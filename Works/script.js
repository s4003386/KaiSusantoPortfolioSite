const overlayWhite = document.querySelector(".whiteFade");




window.addEventListener('scroll', () => {
  const skyBox = document.querySelector('.skyBox');
  const scrollY = window.scrollY;
  
  // Set the min and max heights
  const maxHeight = 70; // in vh
  const minHeight = 30; // in vh
  
  // Clamp the scroll effect between 0 and 500px of scroll
  const scrollRange = 500;
  const scrollProgress = Math.min(scrollY / scrollRange, 1);
  
  // Lerp between maxHeight and minHeight
  const newHeight = maxHeight - (maxHeight - minHeight) * scrollProgress;
  
  skyBox.style.height = `${newHeight}vh`;
});



document.getElementById('Project1Box').addEventListener("click", function() {
        
    overlay.classList.add("active");
    
    setTimeout(() => {
        console.log("Redirecting...");
        window.location.href = "Works/index.html"; 
        
    }, slideDuration);
});