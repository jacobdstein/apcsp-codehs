function start(){
    mouseClickMethod(drawRectangle);

}//end start

function drawRectangle(e){
    var rect = new Rectangle(100, 50);
    rect.setColor(Randomizer.nextColor());
    rect.setPosition(e.getX(), e.getY());
    add(rect);
}//end drawRectangle