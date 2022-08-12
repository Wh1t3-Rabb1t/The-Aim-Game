
// game begins
document.getElementById('startB').onclick = roundStart;

// variables containing important data
let btnTimer;
let rndCount = 1;
let btnFontSize = 20;
let btnPadding = 10;
let scoreCnt = 0;
let cntDwnTimer = {
  time: 2000,
  isGameOver: false,
};

// Sentient Hyper Optimized Div Arrangement Function
function SHODAF() 
{
  let btnH = $(startB).height() / 2;
  let btnW = $(startB).width() / 2;
  let pxH = $(window).height() / 2 - btnH;
  let pxW = $(window).width() / 2 - btnW;
  startB.style.top = pxH+'px';
  startB.style.left = pxW+'px';
  startB.style.position = 'absolute';
};
$(window).on('load resize', function(){ SHODAF() });

// the one function that rules them all
function roundStart() 
{
  // create button with id and inner HTML
  const rStartB = document.createElement('button');
  rStartB.setAttribute('id', 'r1');
  rStartB.style.borderRadius = '50%';
  rStartB.style.fontSize = btnFontSize+'px';
  rStartB.style.padding = btnPadding+'px';
  rStartB.innerHTML = `Round ${rndCount}`;
  rndCount += 1;
  document.body.appendChild(rStartB);
  btnTimer = setTimeout(rmvBtn, cntDwnTimer.time);
  
  // reduces the button size and countdown timer
  btnSizeReduction()
  btnTmrReduction()
  
  // generates random positional coordinates for the new button
  let pxlHeight = $(window).height();
  let pxlWidth = $(window).width();
  let y = Math.floor(Math.random() * (pxlHeight - 75));
  let x = Math.floor(Math.random() * (pxlWidth - 75));
  rStartB.style.top = y+'px';
  rStartB.style.left = x+'px';
  rStartB.style.position = 'absolute';
  
  // remove the button on click
  rStartB.addEventListener('click', twoBirds)
};

function dorTimeF(isGameOver) 
{
  if (isGameOver) {
    gameOver()
  } else if (!isGameOver) {
    return
  }
};

function gameOver() 
{
  const finale = document.createElement('div');
  document.body.appendChild(finale);
  finale.innerHTML = 'GAME OVER!';
  finale.style.textAlign = 'center';
  finale.style.fontWeight = 'bold';
  finale.style.fontSize = '40px';
  finale.style.color = 'red';
  theScore = localStorage.getItem('highestScore');
  document.getElementById('yourScore').innerHTML = `${0}`;
  document.getElementById('hScore').innerHTML = `${theScore}`;
  console.log(theScore);
  setTimeout(function(){
    finale.remove()
  }, 2000);
};

// calls both functions at the same time
function twoBirds() 
{
  cntDwnTimer.isGameOver = false
  rmvBtn(cntDwnTimer.isGameOver)
  upDateScore()
};

// removes button and clears timer on click
function rmvBtn(isGameOver = true) 
{
  console.log(isGameOver);
  dorTimeF(isGameOver);
  clearTimeout(btnTimer);
  r1.parentNode.removeChild(r1);
};

// updates the user score
function upDateScore() {
  scoreCnt += 1;
  document.getElementById('yourScore').innerHTML = `${scoreCnt}`;
};

// reduces size and countdown timer of the button
function btnSizeReduction() 
{
  if (btnFontSize > 5) {
    btnFontSize -= 1;
    btnPadding -= 0.5;
  }
};

// reduces length of the button timer
function btnTmrReduction() 
{
  if (cntDwnTimer.time > 1000) {
    cntDwnTimer.time -= 120;
  } else if (cntDwnTimer.time > 500) {
    cntDwnTimer.time -= 60;
  } else cntDwnTimer.time -= 30;
};

localStorage.setItem('highestScore', yourScore);
let theScore = localStorage.getItem('highestScore');

let ogScore = localStorage.getItem('highestScore');
let yourScore = document.getElementById('yourScore').innerHTML

if (yourScore >= ogScore) 
{
  localStorage.setItem('highestScore', yourScore);
};





