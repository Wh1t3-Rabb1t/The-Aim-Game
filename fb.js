
// game begins
document.getElementById('startB').onclick = roundStart;

// variables containing important data
let btnTimer;
let rndCount = 1;
let cntDwnTimer = 2000;
let btnFontSize = 20;
let btnPadding = 10;
let scoreCnt = 0;


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
  btnTimer = setTimeout(rmvBtn, cntDwnTimer);
  
  // reduces the button size and countdown timer
  btnSizeReduction()
  btnTmrReduction()
  
  // generates random positional coordinates for the new button
  let pxlHeight = $(window).height();
  let pxlWidth = $(window).width();
  let y = Math.floor(Math.random() * (pxlHeight -75));
  let x = Math.floor(Math.random() * (pxlWidth - 75));
  rStartB.style.top = y+'px';
  rStartB.style.left = x+'px';
  rStartB.style.position = 'absolute';
  
  
  // remove the button on click
  rStartB.addEventListener('click', twoBirds)
};

// calls both functions at the same time
function twoBirds() {
  rmvBtn()
  upDateScore()
}

// removes button and clears timer on click
function rmvBtn() 
{
  clearTimeout(btnTimer);
  r1.parentNode.removeChild(r1);
};

// updates the user score
function upDateScore() {
  scoreCnt += 1;
  document.getElementById('yourScore').innerHTML = `${scoreCnt}`;
}

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
  if (cntDwnTimer > 1000) {
    cntDwnTimer -= 120;
  } else if (cntDwnTimer > 500) {
    cntDwnTimer -= 60;
  } else (cntDwnTimer -= 30)
};


// const tally = document.createElement('div');
// let para = document.createTextNode(`Your Score: ${scoreCnt}`);
// tally.appendChild(para);
// document.getElementsByTagName('body')[0].appendChild(tally);




// $('#r1').css('cursor', 'url(Crosshair.png))'






// create a scote counter with win loss logic
// function createDiv()
// {
//   const tally = document.createElement('div');
//   let para = document.createTextNode(`Your Score: ${scoreCnt}`);
//   tally.appendChild(para);
//   document.getElementsByTagName('body')[0].appendChild(tally);
// };
// window.onload=createDiv();

// rStartB.addEventListener('click', createDiv())


// cursor url
// style.cursor = url('');






// OG gigaCHAD jQuery button center solution
// setInterval(function() 
// {
//   let btnH = $(startB).height() / 2;
//   let btnW = $(startB).width() / 2;
//   let pxH = $(window).height() / 2 - btnH;
//   let pxW = $(window).width() / 2 - btnW;
//   startB.style.top = pxH+'px';
//   startB.style.left = pxW+'px';
//   startB.style.position = 'absolute';
// }, 1000);





// function btnGeneration() {
//   let pxlHeight = $(window).height();
//   let pxlWidth = $(window).width();
//   let y = Math.floor(Math.random()*pxlHeight)-100;
//   let x = Math.floor(Math.random()*pxlWidth)-100;
//   rStartB.style.top = y+'px';
//   rStartB.style.left = x+'px';
//   rStartB.style.position = 'absolute';
// }


// let btnTimer = setTimeout(rmvBtn, 3000);

// function myStopFunction() {
//   clearTimeout(btnTimer);
// }

// document.getElementById('r1') function timer() {
//   r1.parentNode.removeChild(r1);
// }




// var b = document.querySelector("rStartB");
// b.addEventListener("click",change);
// function change()
// {
//     var i = Math.floor(Math.random()*500)+1;
//     var j = Math.floor(Math.random()*500)+1;
//     b.style.left = i+"px";
//     b.style.top = j+"px";
// }



// let bPos = startB.getBoundingClientRect()

// console.log(bPos)

// let pxlHeight;
// let pxlWidth;

// $( document ).ready(function() {
//   let pxlHeight = $(window).height();
//   let pxlWidth = $(window).width();
//   console.log(pxlHeight)
//   console.log(pxlWidth)
// });



// document.getElementById('startB').style.left = bPos.x;
// document.getElementById('startB').style.top = bPos.y;


// // document.getElementById('startB').style.left = pxlWidth+'px';
// // document.getElementById('startB').style.top = pxlHeight+'px';