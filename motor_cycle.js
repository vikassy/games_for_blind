function MotorCycle(){
}

MotorCycle.prototype.init = function() {
    //Use Howler.js library to load a 'powerup' sound   
    this.motor_coming = new Howl({
        urls : ['bike_coming.wav'],
        onend: function() {
            window['after_end']();
        }
    });

    this.motor_going = new Howl({
        urls : ['bike_going.wav']
    });


};

MotorCycle.prototype.play_left = function() {
	this.motor_coming.pos3d(-2,0,0);
	(window["Obs"]).push(-1);
    (window["Objects"]).push("motor_cycle");
    this.play();
};

MotorCycle.prototype.play_right = function() {
	this.motor_coming.pos3d(2,0,0);
	(window["Obs"]).push(1);
    (window["Objects"]).push("motor_cycle");
    this.play();
};

MotorCycle.prototype.play = function() {
    this.motor_coming.play();
};


MotorCycle.prototype.going_left = function(first_argument) {
    this.motor_going.pos3d(-2,0,0);
    this.motor_going.play();
};

MotorCycle.prototype.going_right = function() {
    this.motor_going.pos3d(2,0,0);
    this.motor_going.play();
};

