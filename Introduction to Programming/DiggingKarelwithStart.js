function buryBall(){
    move();
    move();
    turnRight();
    move();
    move();
    move();
    putBall();
    turnAround();
    move();
    move();
    move();
    turnRight();
    move();
} //end buryBall

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
} //end turnRight

function turnAround(){
    turnLeft();
    turnLeft();
} //end turnAround

function start(){
    buryBall();
    buryBall();
    buryBall();
} //end start