
let i = 0;
let txt = "Renz Mansueto";
let speed = 80;

function startType() {

  if(i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(startType, speed)
  }
  
};

function showSurprise() {
  document.getElementById("hiddenBox").style.opacity = "1";
  document.getElementById("hiddenBox").style.display = "block";
}