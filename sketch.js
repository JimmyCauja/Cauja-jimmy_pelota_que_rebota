let posX, posY, diam, rad;
let esp;
let margen;
let piso;
let acel;


function setup() {
createCanvas(windowWidth, windowHeight);
posX = windowWidth / 2;
posY = windowHeight * 0.2;
rectMode(CENTER);
diam = random(10, 50);
rad = diam / 2;
esp = 58;
margen = 46;
piso = windowHeight - margen - esp / 2;
vel = 0;
acel = 0.98;
    // frameRate(3);
}


function draw() {

    background(230, 130, 50);
    actualizar();
    noStroke();
    fill(200, 50, 20);
    circle(posX, posY, 50);
    fill(100, 50, 0);
    rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function actualizar() {
    vel += acel;
    posY += vel;
    
    if (posY >= piso - rad) {
        print('ya');
        vel *= -1;
        posY += vel;
    }
}






