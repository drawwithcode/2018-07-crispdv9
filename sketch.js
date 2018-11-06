var input;
var analyzer;
var myText;
var myText2;
var capture;

function setup() {
  createCanvas(windowWidth,windowHeight);

  // Create an Audio input
  input = new p5.AudioIn();

  input.start();

  capture = createCapture(VIDEO);
  capture.size(width,height);
  capture.hide()

}

function draw() {
  background(255);

  var myImage = capture.loadPixels();
  image(myImage,0,0,myImage.width,myImage.height)
  var myColor = get (50,50)
  filter('INVERT');

  // fill(myColor)
  // noStroke()
  // ellipse(width/2,height/2,75)

  var volume = input.getLevel();

  var threshold = 0.08;
  if (volume > threshold) {
    noStroke();
    fill(random(250),random(250),random(250));
    ellipse(random (width), random(height), volume*500, volume*500);
  }

  var y = map(volume, 0, 1, height, 0);

  var ythreshold = map(threshold, 0, 3, height, 0);

  noStroke()
  fill(random(250),random(250),random(250));
  rect(0, y, width, y);
  push()
  stroke(255);
  line(0, ythreshold, width, ythreshold);
  pop()

  //cuadrado titulo
  //fill(255)
  // rect(0,20,width/3,height/6)

  //texto
  var myText = 'Sing loud to start the party'
  fill(random(250),random(250),random(250))
  textFont('Arial')
  textSize(20)
  textAlign(CENTER)
  text(myText,width/2,height/2)

  var myText2 = 'Imagine theres no countries\nIt isnt hard to do\nNothing to kill or die for\nAnd no religion, too\nImagine all the people\nLiving life in peace... You...'
  fill(255)
  textFont('Arial')
  textSize(15)
  textAlign(CENTER)
  text(myText2,width/2,height/1.5)

}
