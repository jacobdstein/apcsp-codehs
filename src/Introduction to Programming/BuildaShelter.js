turnLeft();
makeSide();
turnRight();
makeSide();
turnRight();
makeSide();
goHome();


function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
} //end function


function makeSide(){
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
} //end function

function goHome(){
    turnRight();
    move();
    move();
    move();
    turnLeft();
    turnLeft();
} //end function