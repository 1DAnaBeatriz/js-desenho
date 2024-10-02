function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
  
    stroke("black");
    fill("rgb(64,92,206)");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  