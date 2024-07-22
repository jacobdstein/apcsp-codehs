function start(){
    for(var i = 0; i < 13; i++){
        if (frontIsClear()){
            move();
        } //end if
        else{
            jumpHurdle();
        } //end else
        
    } //end for
    
} //end start



function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
} //end jumpHurdle