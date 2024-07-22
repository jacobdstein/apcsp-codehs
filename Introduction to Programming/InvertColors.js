function start(){
    changeColor();
}//end start

function changeColor(){
    for(var i = 0; i < 9; i++){
        invertColor();
        move();
    }//end for
    invertColor();
}//end changeColor

function invertColor(){
    if(colorIs(Color.red)){
        paint(Color.blue);
    } else{
        paint(Color.red);
    }//end if else
}//end invertColor