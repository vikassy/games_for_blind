car.init()
// motor_cycle.init()
// while(true)
// {
function play()
{
	var num=Math.floor((Math.random()*10)+1);
	// if (num < 5)
	// {
	// 	console.log("motorcycle");
		//Then it is motorcycle
		// decide_direction(motor_cycle)
	// }
	// else
	// {
		// console.log("car");
		//Then it is car
		decide_direction(car) //in variable .js
	// }
}

// window.onload = function(){ 
// 	console.log('kjduhd');
// 	// play_again = setInterval(play, 5000); //16 
// }



window.onload = function()
{
window
	speak.play('You are on left side initially. Avoid collision with other cars which are coming towards your side.');
	
	play_again = setInterval(play, 8000); //16 
	
	
	score.start();
}
// car.play_right()