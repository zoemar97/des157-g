console.log('reading js');

/* Studio 0b Torrealba Marin, Zoe
 01/13/19
 */
//function to draw circle of the smiley face
function faceSmile() {
  noFill();
  stroke(250);
  strokeWeight(3);

  for (var x = 75; x < width; x += 130) {
    for (var y = 65; y < height; y += 120) {
      ellipse(x, y, 110, 110);
    }
  }
}
//function to draw the eyes of the smiley face
function faceEye() {
  for (var i = 50; i < width; i += 130) {
    for (var j = 50; j < height; j += 120) {
      fill(250);
      ellipse(i, j, 5, 5);
      ellipse(i + 50, j, 5, 5);
    }
  }
}
//function to change the smiley face to a sad face
function faceChange() {
  noFill();
  if (mouseIsPressed) {
    for (var x = 75; x < width; x += 130) {
      for (var y = 65; y < height; y += 120) {
        arc(x, y + 25, 50, 50, radians(200), radians(340));
      }
    }
  } else {
    for (var x = 75; x < width; x += 130) {
      for (var y = 65; y < height; y += 120) {
        arc(x, y, 50, 50, radians(20), radians(160));
      }
    }
  }
}

function setup() {
  //size is createCanvas in p5
  //create a variable to reference the canvas
  var myCanvas = createCanvas(800, 250);
  background('#0000ff');
 //connect myCanvas to mySketch
 myCanvas.parent('mySketch');
}
function draw(){

  //calls function for smiley face
 faceSmile(110);
 faceEye();
 //clears background to draw sad face to happy face interaction
 background('#0000ff');
 faceChange();
 faceSmile();
 faceEye();

}
