function start(){
	var firstDieNumber = readInt("What number did you roll for your first die? ");
	var secondDieNumber = readInt("What number did you roll for your second die? ");
	var rolledDoubles = firstDieNumber == secondDieNumber;
	println("You rolled doubles " + rolledDoubles);
}