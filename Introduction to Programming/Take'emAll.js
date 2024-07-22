/* moves karel to ball stack and takes it then moves again one space
*/
function start(){
    move();
    
    for(var i = 0; i < 100; i++){
        takeBall();
    } //end for
    
    move();
} //end start