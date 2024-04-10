function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 200, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    rect(90, 40, 460, 20);
    circle(570, 50, 80);
    rect(90, 430, 460, 20);
    circle(70, 430, 80);
    circle(570, 430, 80);
    rect(40, 50, 25, 400);
    rect(560, 50, 25, 400);

}

function tomarfoto(){
    save("Foto_Marco.png");
}
//dibujar rectangulo= rect(90, 40, 460, 20);