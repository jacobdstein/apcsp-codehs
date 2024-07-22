function start(){
	var points = readInt("How many points did you get? ");
	var rebounds = readInt("How many rebounds did you get? ");
	var assists = readInt("How many assists did you get? ");
	var allStar = points >= 25 || (points > 10 && rebounds > 10 && assists >10);
	println("You are an all star " + allStar);
}