function preload(){
}

function setup(){
canvas = createCanvas(600, 480);
canvas.position(400, 100);
Video = createCapture(VIDEO);
Video.hide();
}

function draw(){
image(Video, 230, 150, 300, 270);

fill(0, 138.975, 138.975);
stroke(0, 138.975, 138.975);
square(10, 10, 80);

fill(150, 138.975, 138.975);
stroke(150, 138.975, 138.975);
square(510, 390, 80);

fill(0, 138.975, 138.975);
stroke(0, 138.975, 138.975);
circle(550, 50, 80);

fill(150, 138.975, 138.975);
stroke(150, 138.975, 138.975);
circle(50, 430, 80);

fill(0, 0, 255);
stroke(0, 0, 255);
rect(90, 40, 420, 30);

fill(0, 0, 255);
stroke(0, 0, 255);
rect(35, 90, 30, 300);

fill(0, 0, 255);
stroke(0, 0, 255);
rect(90, 420, 420, 30);

fill(0, 0, 255);
stroke(0, 0, 255);
rect(535, 90, 30, 300);
}

function C_I(){
save("Framed_pic.jpg")
}