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
  window.location.href = "Project1/index.html"; 
});

document.getElementById('Project2Box').addEventListener("click", function() {
  window.location.href = "Project2/index.html"; 
});

document.getElementById('Project3Box').addEventListener("click", function() {
  window.location.href = "Project3/index.html"; 
});

document.getElementById('Project4Box').addEventListener("click", function() {
  window.location.href = "Project4/index.html"; 
});

document.getElementById('Project5Box').addEventListener("click", function() {
  window.location.href = "Project5/index.html"; 
});