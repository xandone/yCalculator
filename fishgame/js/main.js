var can1;
var can2;

var ctx1;
var ctx2;

var bgImg;

var bgWidth;
var bgHeight;

var ane;
var food;

document.body.onload = game;

function game() {
    init();
    gameloop();

}


function init() {
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

    food=new foodObj();
    food.init();
    food.born();

}

function gameloop() {
    window.requestAnimationFrame(gameloop)
    drawbg();
    ane.drawAne();

   food.drawFoods();
}