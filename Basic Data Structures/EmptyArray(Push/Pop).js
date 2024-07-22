function start(){
	var arr = [];
	arr.push(3);
	arr.push("hello");
	arr.push(false);
	println(arr[0]);
	println(arr[1]);
	println(arr[2]);
	arr.pop();
	arr.pop();
	println(arr[0]);
	println(arr[1]);
	println(arr[2]);
}//end start