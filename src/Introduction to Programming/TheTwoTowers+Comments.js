/*  Program Header
* This program has Karel build two towers and then
* stand ontop of the second tower.
* Precondtion: Karel is standing on the first avenue
* and first street while facing east
*Postcondition: Karel has built two towers and is
* standing on top of the second tower facing east
*/
function start(){
    move();
    buildTower();
    climbDown();
    moveTwice();
    buildTower();
    move();
    turnRight();
} //end start

/* 
* This makes Karel turn Right
* Precondition: none
* Postconditon: none
*/
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
} //end turnRight


/*
* This function builds a tower 3 streets high
* Precondition: Karel is on street 1, facing east
* Postcondition: Karel has built north 3 balls
*/
function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
} //end buildTower

/*
* This function makes Karel turn around
* Precondition: none
* Postcondition: none
*/
function turnAround(){
    turnLeft();
    turnLeft();
} //end turnAround

/*
* This function allows Karel to climb down after building her tower
* Precondition: Karel is on street 3, facing north
* Postcondtion: Karel is on street 1, facing east
*/
function climbDown(){
    turnAround();
    move();
    move();
    turnLeft();
} //end climbDown

/*
* This function allows Karel to move twice in the direction she is facing
* Precondtion: Karel is atleast two spaces away from an obstacle in the
* direction she is facing
* Postcondition: Karel has moved twice in the direction she was originally facing
*/
function moveTwice(){
    move();
    move();
} //end moveTwice