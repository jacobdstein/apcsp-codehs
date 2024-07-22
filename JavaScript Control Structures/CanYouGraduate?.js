function start(){
	var credits = readBoolean("Do you have enough credits? ");
	var requirements = readBoolean("Do you meet the requirements? ");
	var canGraduate = credits && requirements;
	print("I can graduate " + canGraduate);
}