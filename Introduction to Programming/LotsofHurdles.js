/* Karel goes to hurdles, jumps them, and finishes at (16,1)
*/
function start(){
    for(var i = 0; i < 5; i++){
        goToHurdle();
        jumpHurdle();
    } //end for
} //end start

/* Karel goes to hurdle
Precondition: Karel is at least two spaces away from the wall she is 
facing
Postcondition: Karel is infront of a hurdle
*/
function goToHurdle() {
    moveTwice();
} //end goToHurdle

/* Karel jumps a hurdle
Precondition: Karel is infront of a hurdle facing east
Postcondition: Karel is on the other side of a hurdle facing east
*/
function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
} // end jumpHurdle

/* Karel moves twice
Precondition: Karel is at least two spaces away from the wall she is
facing
Postcondition: Karel has moved twice
*/
function moveTwice(){
    move();
    move();
} //end moveTwice