/*frame, feet, wings
Jacob code starts here
*/
function start(){
    frame();
    penguinFeet();
    penguinWing1();
    penguinWing2();
    aidanCode();
}//end start

/*frame feet wings
Jacob's code starts here
*/

/* Karel builds a cyan colored frame around the border of the world
Precondition: Karel is facing east on S1 and A1
Postcondition: Karel builds the frame and is back on S1 and A1
*/
function frame(){
    for(var i = 0; i < 4; i++){
        while(frontIsClear()){
            paint(Color.cyan);
            move();
        }//end while
        paint(Color.cyan);
        turnLeft();
    }//end for
}//end frame

/* Karel goes to the left corner of the penguin's foot
Precondition: Karel is on S1 A1
Postcondition: Karel is on S3 A5
*/
function goToFoot1(){
    moveTwice();
    moveTwice();
    turnLeft();
    moveTwice();
    turnRight();
}//end goToFoot1

/*Karel builds penguin's feet
Precondition: Karel is on S1 A1
Postcondition: Karel built the penguin's feet and is on S4 A16
*/
function penguinFeet(){
    goToFoot1();
    feetOutline();
    fillInFeet();
    goHome();
}//end penguinFeet

/*Karel makes outline of Karel's feet
Precondition: Karel is on S3 A5, facing east
Postcondition: Karel is on S3 A5, facing east, and built the outline
*/
function feetOutline(){
    paint(Color.black);
    for(var x = 0; x < 2; x++){
        for(var i = 0; i < 11; i++){
            move();
            paint(Color.black);
        }//end for
        turnLeft();
        move();
        paint(Color.black);
        move();
        paint(Color.black);
        turnLeft();
    }//end for
}//end makeOutline

/*Karel moves Twice
Precondition: Karel is atleast two spaces away from the wall she is facing
Postcondition: Karel is two spaces closer to the wall she is facing
*/
function moveTwice(){
    move();
    move();
}//end moveTwice

/* Karel fills in the feet she outlined
Precondition: Karel is on S3 A5 and is facing east
Postcondition: Karel is on S4 A16, facing east, and filled in the penguin's
feet
*/
function fillInFeet(){
    move();
    turnLeft();
    move();
    turnRight();
    for(var i = 0; i < 4; i++){
        paint(Color.orange);
        move();
    }//end for
    paint(Color.black);
    move();
    paint(Color.black);
    move();
    for(var i = 0; i < 4; i++){
        paint(Color.orange);
        move();
    }//end for
}//end fillInFeet

/*Karel builds a wing for the penguin
Precondition: Karel is on S1 A1 facing east
Postcondition: Karel is on S1 A1 facing east and built the penguin's
left wing
*/
function penguinWing1(){
    goToWing1();
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
    }//end for
    move();
    turnRight();
    move();
    turnRight();
    for(var i = 0; i < 5; i++){
        paint(Color.black);
        move();
    }//end for
    turnLeft();
    move();
    turnLeft();
    moveTwice();
    move();
    for(var i = 0; i < 4; i++){
        paint(Color.black);
        move();
    }//end for
    goHome();
}//end penguinWing1

/* Karel goes to the position where she will build the penguin's 
left wing
Precondition: Karel is on S1 A1 facing east
Postcondition: Karel is on S8 A3 facing north
*/
function goToWing1(){
    moveTwice();
    turnLeft();
    moveTwice();
    moveTwice();
    moveTwice();
    move();
}//end goToWing1

/* Karel returns to S1 A1
Precondition: Karel is on any space facing any direction
Postcondition: Karel is on S1 A1 facing east
*/
function goHome(){
    while(notFacingWest()){
        turnLeft();
    }//end while
    for(var i= 0; i < 2; i++){
        while(frontIsClear()){
            move();
        }//end while
        turnLeft();
    }//end for
}//end goHome

/*Karel builds the penguin's right wing
Precondition: Karel is on S1 A1 facing east
Postcondition: Karel is on S1 A1 facing east with the right wing built
*/
function penguinWing2(){
    goToWing2();
    for(var i = 0; i < 4; i++){
        paint(Color.black);
        move();
    }//end for
    move();
    turnLeft();
    move();
    turnLeft();
    for(var i = 0; i < 5; i++){
        paint(Color.black);
        move();
    }//end for
    turnRight();
    move();
    turnRight();
    move();
    moveTwice();
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
    }//end for
    goHome();
}//end penguinWing2

/*Karel goes to the position where she will build the penguin's 
right wing
Precondition: Karel is on S1 A1 facing east
Postcondition: Karel is on S13 A16 facing south
*/
function goToWing2(){
    for(var i = 0; i < 12; i++){
        move();
        turnLeft();
        move();
        turnRight();
    }//end for
    moveTwice();
    move();
    turnRight();
}//end goToWing2

/*body eyes nose
Aidan’s code starts here
*/



/*
This is my start function so Jacob can put it into his code
Preconditions:Starts at 1,1 facing east
Postconditions: Ends at 1,1 facing east
*/
function aidanCode(){
    body();
    goHome();
    goToMouth();
    makeMouth();
    fromMouthToEyes();
    makeEye();
    leftToRightEye();
    makeEye();
    goHome();    
}//end function aidanCode



/*
This function travels to the penguin
Preconditions:Karel starts at (1,1) facing east
Postconditions:Karel ends at (1,1) facing east

*/
function body(){
    for(var i=0;i<4;i++){
        move();
    }//end for
    turnLeft();
    for(var i=0;i<5;i++){
        move();
    }//end for
    turnRight();
    for(var i=0;i<5;i++){
        move();
    }//end for
    rightHalfBody();
    leftHalfBody();
    
}//end function body
/*
This function makes the right half of the body
Preconditions:Karel starts at (10,6) facing east
Postconditions:Karel ends at (11,18) facing west

*/
function rightHalfBody(){
    for(var i=0;i<4;i++){
        paint(Color.black)
        move();
    }//end for
    paint(Color.black)
    wiggle();
    for(var i=0;i<8;i++){
        paint(Color.black)
        move();
    }//end for
    paint(Color.black)
    extraWigglyCorner();
    for(var i=0;i<2;i++){
        paint(Color.black)
        move();
    }//end for
}//end rightHalfBody

/*
This function makes the left half of the body
Preconditions:Karel starts at (11,18) facing west
Postconditions:Karel ends at (10,6) facing east

*/

function leftHalfBody(){
    for(var i=0;i<2;i++){
        paint(Color.black)
        move();
    }//end for
    paint(Color.black)
    extraWigglyCorner();
    for(var i=0;i<8;i++){
        paint(Color.black)
        move();
    }//end for
    paint(Color.black)
    wiggle();
    for(var i=0;i<2;i++){
        paint(Color.black)
        move();
    }//end for
}//end function leftHalfBody


/*
This function makes the corners on the top left and right
This function can start and end anywhere

*/

function extraWigglyCorner(){
    wiggle();
    paint(Color.black)
    turnRight();
    move();
    paint(Color.black)
    turnLeft();
    move();
}//end function extraWigglyCorner
/*
This function makes the corner on the bottom left and right
This function can start and end anywhere

*/
function wiggle(){
    turnLeft();
    move();
    paint(Color.black)
    turnRight();
    move();
    paint(Color.black)
    turnLeft();
    move();
}//end function wiggle

/*
This function makes Karel go from the origin to the start of the mouth
Preconditions:Facing east 0,0
Postconditions: Facing east at 9,11

*/
function goToMouth(){
    for(var i=0;i<8;i++){
        move();
        
    }//end for
    turnLeft();
    for(var i=0;i<10;i++){
        move();
    }//end for
    turnRight();
}//end function goToMouth
/*
This function makes the mouth of the penguin
Preconditions: Facing east at 9,11
Postconditions: Facing east at 12,12

*/

function makeMouth(){
    for(var i=0;i<3;i++){
        paint(Color.yellow)
        move();
        paint(Color.yellow)
    }//end for
    turnAround();
    for(var i=0;i<4;i++){
        move();
    }//end for
    turnRight();
    move();
    turnRight();
    move();
    for(var i=0;i<3;i++){
        paint(Color.yellow)
        move();
    }//end for
    paint(Color.yellow)
}//end function makeMouth

/*
This funciton goes from the mouth to the eyes
Precondition: Karel is at 12,12 facing east
Postconditions: Karel is at 15,12 facing south
*/
function fromMouthToEyes(){
    turnLeft();
    move();
    move();
    move();
    turnAround();
}//end function fromMouthToEyes

/*
This function makes an eye at any position
This can be made anywhere

*/
function makeEye(){
    paint(Color.black)
    move();
    paint(Color.black)
    turnLeft();
    move();
    paint(Color.black)
}//end function makeEye

/*
This function moves from the end position of the left eye to right eye start position
Preconditions:Karel starts at 13,14 facing east 
Postconditions: Karel ends at 8,15 facing south
*/
function leftToRightEye(){
    turnAround();
    for(var i=0;i<5;i++){
        move();
    }//end for
    turnRight();
    move();
    turnAround();
}//end function leftToRightEye