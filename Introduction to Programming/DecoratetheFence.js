function start(){
    goToFence();
    paintFence();
    putBall();
} //end start



function goToFence(){
    while (frontIsClear()){   
         move();
    } //end while
} //end go to fence

function paintFence(){
    turnLeft();
    
    for (var i=0; i<9; i++) {
        if (rightIsBlocked()){
            putBall();
        }//end if
        
        move();
        
    }//end for
    
} //end paintFence