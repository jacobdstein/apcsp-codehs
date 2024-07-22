function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
} //end function

function turnAround(){
    turnLeft();
    turnLeft();
} //end function

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
} //end function

buryBall();
move();
buryBall();
move();
buryBall();
move();