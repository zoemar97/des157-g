/*Crazy Pixel
Interval
Random
Score
Timer
Reset button
+ go full screen
*/
/*
added pixel doublePix worth double the points 
*/
'use strict';

// send a message to the console
console.log('reading js');

var pixel = document.querySelector('#pixel');
var doublePix = document.querySelector('#doublePix');
var pixelW = pixel.offsetWidth; // width of pixel
var pixelH = pixel.offsetHeight; // height of pixel
var dPixelW = doublePix.offsetWidth;
var dPixelH = doublePix.offsetHeight;
var section = document.querySelector('section');
var sectionW // for width of section, updated in movePixel
var sectionH // height of section, updated in movePixel
var score = document.querySelector('#score');
var scoreCount = 0; // beginning score
var timeLeft = document.querySelector('#timeLeft');
var count = 10; // for the time remaining, starts at 30
var reset = document.querySelector('#stop');
var gameOverImg = document.querySelector('#gameOverImg');
var gameOverAnim; // animation
var gameOverX = -200; // x position of graphic

/* setInterval invokes a callback function repeatedly with a designated delay in milliseconds */
var pixelInterval = setInterval(movePixel, 2000); // change the second parameter to move the pixel faster/slower
var countInterval = setInterval(countDown, 1000); // to display Time Remaining
/* setTimout invokes a callback function at a designated delay in milliseconds */
var timerId = setTimeout(gameOver, 1000 * count); // to end the game when the time limit is reached

/* call the addEventListener method on "pixel"
to bind a click event type that invokes a
named function, "updateScore"
*/
pixel.addEventListener('click', updateScore);
doublePix.addEventListener('click',doubleScore);

/* call the addEventListener method on "reset"
to bind a click event type that invokes a
named function, "resetGame"
*/
reset.addEventListener('click', resetGame);

// movePixel moves the pixel randomly with the area of the section
function movePixel() {
  // get section width and height
  sectionW = section.offsetWidth; // width of section
  sectionH = section.offsetHeight; // height of section

  // console.log('sectionW: ' + sectionW + '; sectionH: ' + sectionH);

 /* get random values for new position with 'px' for the css

     note: the Math.random() method generates a random number
        between 0 and almost 1
     note: the Math.floor() method rounds a number downwards
        to the nearest integer
  */
  var newLeft = Math.floor(Math.random() * (sectionW - pixelW)) + 'px';
  var newTop = Math.floor(Math.random() * (sectionH - pixelH)) + 'px';

  var doubleLeft = Math.floor(Math.random() * (sectionW - dPixelW)) + 'px';
  var doubleTop = Math.floor(Math.random() * (sectionH - dPixelH)) + 'px';

  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;

  doublePix.style.left = doubleLeft;
  doublePix.style.top = doubleTop;
}

// updateScore updates the scoreCount and adds the score to the UI
function updateScore() {
  scoreCount++;
  score.innerHTML = 'Score: ' + scoreCount;
}
function doubleScore(){
  scoreCount += 2;
  score.innerHTML = 'Score: ' + scoreCount;
}

// update the time remaining and display in UI
function countDown() {
  count = count - 1; // same as count--
  section.style.opacity = count * .075; // darken the screen
  timeLeft.innerHTML = 'Time Remaining: ' + count; // show remaining time on screen
}

// show an alert with the score and clear the timeout and reset the game
function gameOver() {
  timeLeft.innerHTML = 'Time Remaining: 0';
  // hide pixel
  pixel.style.display = 'none';
  playGameOverAnim();
}

// play animation around viewport
function playGameOverAnim(){
  // clear intervals and timeout in case user
  // resets before timeout is reached
  clearInterval (pixelInterval);
  clearInterval (countInterval);
  clearTimeout (timerId);

 // turn on game over graphic
  gameOverImg.style.display = 'block';

  // check right edge and move gameOverImg
  if (gameOverX < sectionW){
  gameOverX+=2;
  } else {
    gameOverX = -200;
  }
  gameOverImg.style.left = gameOverX + 'px';

  // recursive call back to the same function
  gameOverAnim = requestAnimationFrame(playGameOverAnim);
}

// reset all variables and UI features
function resetGame() {
  // console.log("reset");

  // clear intervals, timeout and animation
  clearInterval (pixelInterval);
  clearInterval (countInterval);
  clearTimeout (timerId);

  // cancel the animation
  cancelAnimationFrame (gameOverAnim);

  // reset scoreCount, count, gameOverX
  scoreCount = 0;
  count = 10;
  gameOverX = -200;

  // update interface
  timeLeft.innerHTML = 'Time Remaining: ' + count;
  score.innerHTML = 'Score: ' + scoreCount;
  section.style.opacity = 1;
  pixel.style.display = 'block';
  gameOverImg.style.display = 'none';

 // start intervals and timer again
  pixelInterval = setInterval(movePixel, 1000);
  countInterval = setInterval(countDown, 1000);
  timerId = setTimeout(gameOver, 1000 * count);
}

//adding fullscreen button
var fullS = document.querySelector('#fullScreen');
fullS.addEventListener('click', requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  section.style.height = '70%';
  fullS.style.display = 'none';

  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    // older IE
    var wscript = new ActiveXObject('WScript.Shell');

    if (wscript !== null) {
      wscript.SendKeys('{F11}');
    }
  }
}

//  bind a listener to the document for fullscreenchange
// to reset section height and to show fullScrren button
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
  if (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  ) {
    fullS.style.display = 'inline';
    section.style.height = '320px';
  }
}
