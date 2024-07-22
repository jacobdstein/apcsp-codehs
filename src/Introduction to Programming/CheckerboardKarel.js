/*
 * This program has Karel paint a checkerboard
 */

function start(){
    for(var i = 0; i<7; i++){
        checkerRow();
        nextRow();
    }//end for
    checkerRow();
    goHome();
}//end start

function checkerRow(){
    for(var i = 0; i < 3; i++){
        paint(Color.black)
        move();
        paint(Color.red);
        move();
    }//end for
    paint(Color.black):
        move();
    paint(Color.red);
    
}//end checkerRow
function nextRow(){
    if(facingEast()){
        turnLeft();
        move();
        turnLeft();
    } else{
        turnRight();
        move();
        turnRight();
    }//end if else
}//end checkerRow

function goHome(){
    turnLeft();
    for(var i = 0; i < 7; i++){
        move();
    }//end for
    turnLeft();
}//end goHome