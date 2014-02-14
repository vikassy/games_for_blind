//Global function variable :P
function after_end (obj_pos) {
    // if 
    // alert('iudsgiug');
    console.log((window['my_car']).pos)
    if (obj_pos == "car_left")
    {
        if ((window['my_car']).pos == -1)
        {
            clearInterval(window['play_again']);
            (window["blast"]).play();
            return 1;
        }
        car.going_left();
    }
    else if (obj_pos == "car_right")
    {
        if ((window['my_car']).pos == 1)
        {
            clearInterval(window['play_again']);
            (window["blast"]).play();
            return 1;
        }
        car.going_right();
    }
    // if ((window["my_car"]).pos == (window["Obs"])[0])
    // {
    // 	alert('ioudshui');
    // 	clearInterval(play_again);
    // }
    // if (window["Obs"][0] == -1)
    // {
    // 	console.log("Object is going left");
    // 	window[(window["Objects"])[0]].going_left();
    // }
    // else
    // {
    // 	console.log("Object is going right");
    // 	window[(window["Objects"])[0]].going_right();
    // }
    // (window["Objects"]).splice(0,1);
    // (window["Obs"]).splice(0,1);
}





function decide_direction(obj) {
var num=Math.floor((Math.random()*10)+1);
if (num < 5)
{
    car2 = new Car()
	console.log("Left");
	//Then it is left
	car2.play_left(); 
}
else
{
    car2 = new Car()
	console.log("Right");
	//Then it is right
	car2.play_right();
}

}

background= new Background();
var dir_array = []
var Obs = [];
var Objects = [];
car = new Car();
// motor_cycle = new MotorCycle();
my_car = new MyCar();
var play_again = true;
var blast = new Blast();