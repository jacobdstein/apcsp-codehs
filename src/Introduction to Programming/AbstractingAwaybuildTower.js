//Scroll down to see the commands that have been abstracted away! 

function start(){
    move();
    buildTower();
    turnRight();
    move();
    move();
    turnLeft();
    buildTower();
}
function turnRight(){
	turnLeft();
	turnLeft();
	turnLeft();
}

function buildTower(){
    turnLeft();
    move();
    putBall();
    turnLeft();
    turnLeft();
    move();
    putBall();
    turnLeft();
    turnLeft();
    move();
    move();
    putBall();
    move();
}


// This way will work as well! Uncomment this code segment and comment the 
// code segment above. 
// When things are abstracted, the details of the abstraction are no longer
// important!


// function buildTower(){
//     putBall();
//     turnLeft();
//     move();
//     putBall();
//     move();
//     putBall();
//     move();
// }