function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  noStroke();
  angleMode(DEGREES);
  
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < 5; i++) {
    dx = 10 * i;
    dy = 2 * i;
    fill(255 - dx, 255, 255, 30);
    circle(200 + dx, 150 + dy, 60);
    circle(200 + dx, 150 + dy, 45);
    circle(400 + dx, 150 + dy, 60);
    circle(400 + dx, 150 + dy, 45);
    arc(300 + dx, 200 + dy, 300, 300, 0, 180);

    rect(200 + dx, 150 + dy, 2, 200);
    rect(400 + dx, 150 + dy, 2, 200);
  }
}
