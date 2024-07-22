/* Karel turns left 32 times
*/
function start(){
    /* coding notes
       for loop breakdown:
       var i = 0; sets up iteration variable
       i < 32; controls how many iterations
       i++; same as i = i + 1; advances to next iteration
    */
    for(var i = 0; i < 32; i++){
        turnLeft();
    } //end for
} //end start