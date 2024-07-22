function start(){
    move();
    buildTower();
    climbDown();
    moveTwice();
    buildTower();
    move();
    turnRight();
} //end start

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
} //end turnRight

function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
} //end buildTower

function turnAround(){
    turnLeft();
    turnLeft();
} //end turnAround

function climbDown(){
    turnAround();
    move();
    move();
    turnLeft();
} //end climbDown

function moveTwice(){
    move();
    move();
} //end moveTwice