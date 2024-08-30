function setup() {
    createCanvas(1360, 800);
    background ("red")
  }
  
  function draw() {
    
  
    stroke("black");
    fill("black");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 40);
    }
  }