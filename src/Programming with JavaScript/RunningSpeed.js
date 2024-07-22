/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
	var miles = readFloat("How many miles did you run? ");
	var minutes = readInt("How many minutes did it take you run " + miles + "? ");
	
	var hours = minutes / 60;
	var speed = miles / hours;
	
	println("Your speed was " + speed + " miles per hour for your run");
}//end start