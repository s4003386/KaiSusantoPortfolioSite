

const BioButton = document.getElementById('BioButton');
const WorksButton = document.getElementById('WorksButton');
//const BackgroundImageDiv = document.querySelector(".skyImageDiv");
const image  = document.querySelector('.MainImage');

const BGColour = document.querySelector('Background');

const overlay = document.querySelector(".whiteSlideBio");
const overlay2 = document.querySelector(".whiteSlideBio2");
const mainPage = document.getElementById("mainPage");
const bioPage = document.getElementById("bioPage");

const noticeText =     document.getElementById("noticeText");


//text
const mainPageTitleText = document.getElementById("mainHeaderTitle");
const mainPageButtonText = document.getElementById("mainButtons");

const slideDuration = 1000;



BioButton.addEventListener("click", function() {
    
    overlay.classList.add("active");
    mainPageButtonText.classList.add("Hide");
    mainPageTitleText.classList.add("Hide");
    noticeText.classList.add("Hide");

    setTimeout(() => {
        console.log("Redirecting...");
        window.location.href = "Bio/index.html"; 
        
    }, slideDuration);

});


//transition from bio page
window.addEventListener("DOMContentLoaded", () => {
    if (document.referrer.includes("Bio")) {
        
        overlay2.style.opacity = 1;
        overlay2.style.pointerEvents = "none"; 

        
        setTimeout(() => {
            overlay2.classList.add("active"); 
        }, 50);
    }
});







const originalBioButtonText = "Bio"; 

BioButton.addEventListener('mouseover', function() {
BioButton.textContent = '> Bio'; 
});

BioButton.addEventListener('mouseout', function() {
BioButton.textContent = originalBioButtonText; 
});

        


//wirjs rtransition
document.getElementById('WorksButton').addEventListener("click", function() {
        
    
    enableMouse = false; 
    document.querySelector('.SkyImageDiv').classList.add('works');
    document.querySelector('.Background').classList.add('active');
    document.querySelector('.BlackGradient').classList.add('active');
    
    noticeText.classList.add("Hide");
        mainPageButtonText.classList.add("Hide");
    mainPageTitleText.classList.add("Hide");
    
    setTimeout(() => {
        console.log("Redirecting...");
        
        window.location.href = "Works/index.html"; 
        
    }, slideDuration);
});


const originalWorksButtonText = "Works"; //doing it this way is a little cursed but I digress

WorksButton.addEventListener('mouseover', function() {
WorksButton.textContent = '> Works'; 
});

WorksButton.addEventListener('mouseout', function() {
WorksButton.textContent = originalWorksButtonText; 
});










let mouseX = 0, mouseY = 0;
let driftX = 0, driftY = 0;
let startDriftX = 0, startDriftY = 0;
let targetDriftX = 0, targetDriftY = 0;
let driftStartTime = 0;
let driftDuration = 0;


document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 5; // up to ±5%
  mouseY = (e.clientY / window.innerHeight - 0.5) * 5;
});

function pickNewDriftTarget() {
  startDriftX = driftX;
  startDriftY = driftY;
  targetDriftX = (Math.random() - 0.5) * 30; // 
  targetDriftY = (Math.random() - 0.5) * 30;
  driftStartTime = performance.now();
  driftDuration = 4000 + Math.random() * 2000; // 4–6s
  setTimeout(pickNewDriftTarget, driftDuration);
}
pickNewDriftTarget();

function easeInOut(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animate() {
  const now = performance.now();
  const t = Math.min((now - driftStartTime) / driftDuration, 1);
  const easedT = easeInOut(t);

  driftX = startDriftX + (targetDriftX - startDriftX) * easedT;
  driftY = startDriftY + (targetDriftY - startDriftY) * easedT;

  const totalX = mouseX + driftX * 0.2;
  const totalY = mouseY + driftY * 0.2;

  image.style.transform = `translate(${totalX}%, ${totalY}%) scale(1.1)`;

  requestAnimationFrame(animate);
}
animate();







const lines = [
  { el: document.getElementById('line1'), text: "Kai Susanto" },
  { el: document.getElementById('line2'), text: "Bio" },
  { el: document.getElementById('line3'), text: "Works" }
];
const cursor = document.getElementById('cursor');
let lineIndex = 0;
let charIndex = 0;

function copyStyling(line) {
  const computed = window.getComputedStyle(line.el);
  cursor.style.fontFamily = computed.fontFamily;
  cursor.style.fontSize = computed.fontSize;
  cursor.style.fontWeight = computed.fontWeight;
  cursor.style.color = computed.color;
  cursor.style.lineHeight = computed.lineHeight;
  cursor.style.letterSpacing = computed.letterSpacing;
  cursor.style.textTransform = computed.textTransform;
}

function positionCursor(line) {
  const rect = line.el.getBoundingClientRect();
  cursor.style.left = (rect.right + 2) + 'px';
  cursor.style.top = rect.top + 'px';
  cursor.style.display = 'inline';
}

function typeLine(line, done) {
  copyStyling(line); // Copy styles from the current line
  positionCursor(line);
  
  if (charIndex < line.text.length) {
    line.el.textContent += line.text.charAt(charIndex);
    charIndex++;
    positionCursor(line);
    const delay = 40 + Math.random() * 120;
    setTimeout(() => typeLine(line, done), delay);
  } else {
    cursor.style.display = 'none';
    setTimeout(done, 800);
  }
}

function startTyping() {
  if (lineIndex < lines.length) {
    const line = lines[lineIndex];
    charIndex = 0;
    line.el.textContent = '';
    typeLine(line, () => {
      lineIndex++;
      startTyping();
    });
  }
}

setTimeout(startTyping, 800);





