var can1;
var can2;

var ctx1;
var ctx2;

var bgImg;

var bgWidth;
var bgHeight;

var ane;
var food;
var mom;

var lastTime;
var deltaTime;

var mouseX;
var mouseY;

document.body.onload = game;

function game() {
    init();
    gameloop();

}


function init() {
    lastTime = Date.now();
    deltaTime = 0;

    can1 = document.getElementById('can1');
    can2 = document.getElementById('can2');

    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');

    bgImg = new Image();
    bgImg.src = './imgs/background.jpg';

    bgWidth = can1.width;
    bgHeight = can1.height;

    ane = new aneObj();
    ane.init();

    food = new foodObj();
    food.init();

    mom = new momObj();
    mom.init();

    mouseX = 0;
    mouseY = 0;

    can2.addEventListener('mousemove', onMouseMove, false);
}

function gameloop() {
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    if (deltaTime > 40) {
        deltaTime = 40;
    }

    drawbg();
    ane.drawAne();

    food.monitor();
    food.drawFoods();

    ctx2.clearRect(0, 0, bgWidth, bgHeight);
    mom.drawMom();
}

function onMouseMove(e) {
    if (e.offSetX || e.layerX) {
        mouseX = e.offSetX == undefined ? e.layerX : e.offSetX;
        mouseY = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}