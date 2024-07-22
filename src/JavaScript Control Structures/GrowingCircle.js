/*This program will resize a circle
    start:
        draw circle
        keyDownMethod(resize circle)
    resizeCircle:
        if arrowUp
            circle.radius = circle.radius + 10
        else if arrowDown
            circle.radius = circle.radius - 10
*/
var circle;

function start(){
    circle = new Circle(20); //radius = 20
    circle.setPosition(getWidth() / 2, getHeight() / 2);
    add(circle);
    keyDownMethod(resizeCircle);
}//end start

/*This is the callback function for the key down event
*/
function resizeCircle(e){
    if(e.key == "ArrowUp"){
        circle.setRadius(circle.getRadius() + 10);
        circle.setColor(Color.green);
    } else if(e.key == "ArrowDown"){
        circle.setRadius(circle.getRadius() - 10);
        circle.setColor(Color.red);
    }//end if
}//end resizeCircle