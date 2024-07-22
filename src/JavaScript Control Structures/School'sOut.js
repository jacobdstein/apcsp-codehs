function start(){
    var weekday = readBoolean("Is today a weekday? ");
    var holiday = readBoolean("Is today a holiday? ");
    var noSchoolToday = !weekday || holiday;
    println("There no school today" + noSchoolToday);
}