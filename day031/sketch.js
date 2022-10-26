let r1 = 300;
let r2 = 300;

function setup() {
    createCanvas(600, 600, WEBGL);
    describe(
        'scene with sphere and point light. The position of the light is controlled with the mouse position.'
    );
}
function draw() {
    background(50);
    // move your mouse to change light position
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    orbitControl();

    push();
    pointLight(120, 250, 00, locX, locY, 1000);
    noStroke();
    sphere(100);
    //moon
    translate(600 * sin(11 * PI / 6) * cos(PI / 3), 600 * sin(11 * PI / 6) * sin(PI / 3), 600 * cos(5 * PI / 6));
    ambientLight(255);
    sphere(12);
    pop();
    translate(-200, 200, 0)
    translate(0, -1500, -4000);
    // Aries
    push();
    translate(-2 * r1, -3 * r1, 500)
    ambientLight(255);
    sphere(30);
    translate(3 * r1, -r1 / 2, -600)
    sphere(30);
    translate(3 * r1 / 2, 5 * r1 / 2, 550)
    sphere(30);
    translate(0, 3 * r1, -560)
    sphere(30);
    translate(-r1, r1 / 2, 600)
    sphere(30);
    pop();
    translate(r1, 5 * r1 / 2, 3510)
    translate(500, 2500, -3000)
    //   scorpio
    push();
    ambientLight(200);
    sphere(30);
    translate(r2, -3 * r2, 0);
    sphere(30);
    translate(r2, -r2 / 2, 0);
    sphere(30);
    translate(r2 / 2, -5 * r2 / 2, 0);
    sphere(30);
    translate(r2 / 2, 3 * r2 / 2, 0);
    sphere(30);
    translate(r2 / 2, r2, 0);
    sphere(30);
    translate(-2 * r2, 6 * r2, 0);
    sphere(30);
    translate(0, r2 / 2, 0);
    sphere(30);
    translate(-r2, r2 / 2, 0);
    sphere(30);
    translate(-r2, r2 / 2, 0);
    sphere(30);
    translate(-3 * r2 / 2, -r2, 0);
    sphere(30);
    translate(0, -r2 / 2, 0);
    sphere(30);
    translate(r2 / 2, -r2 / 2, 0);
    sphere(30);
    translate(r2 / 2, r2 / 4, 0);
    sphere(30);
    pop();
}