function setup(){
    canvasvar = createCanvas(600,400);
    canvasvar.center();
    videovar = createCapture(VIDEO);
    videovar.size(500,300);
    videovar.hide();
}

function draw(){
    fill("purple");
    stroke("black");
    circle(400,200,50);
    rect(200,100,20,200);
}