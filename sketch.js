
let t = new Date();

function setup(){
    frameRate(60);
    createCanvas(500,500);
    noStroke();
    
}

function draw(){
    background(30);
    translate(width/2, height/2);
    let t = new Date();

    ellipse(0,0,);

    

    let hr = t.getHours();
    let mn = t.getMinutes();
    let sc = t.getSeconds();

    push();
    fill(100,150,250,100);
    polarEllipses(sc, 10.4, 50, 200);
    pop();
    push();
    fill(100,200,150,100);
    polarTriangles(hr%12, 30,100);
    pop();

    push();
    fill(200,100,150,100);
    polarSquares(mn, 7, 140);
    pop();

    
}