function Car(){
    this.car_coming_left = new Howl({
        urls : ['car_coming_left.wav'],
        onend: function() {
            window['after_end']('car_left');
        }
    });

    this.car_coming_right = new Howl({
        urls : ['car_coming_right.wav'],
        onend: function() {
            window['after_end']('car_right');
        }
    });

    this.car_going_left = new Howl({
        urls : ['car_going_left.wav'],
        onend: function() {
            // window['after_end']();
        }
    });

    this.car_going_right = new Howl({
        urls : ['car_going_right.wav'],
        onend: function() {
            // window['after_end']();
        }
    });

}

Car.prototype.init = function() {
    //Use Howler.js library to load a 'powerup' sound   

    // this.car_going = new Howl({
    // 	urls: ['car_going.wav']	
    // })

};

Car.prototype.play_left = function() {
	// this.car_coming.pos3d(-2,0,0);
	(window["Obs"]).push(-1);
	(window["Objects"]).push("car");
	this.car_coming_left.play();
};

Car.prototype.play_right = function() {
	// this.car_coming.pos3d(2,0,0);
	(window["Obs"]).push(1);
	(window["Objects"]).push("car");
	// this.car_coming.play();
	this.car_coming_right.play();
};

Car.prototype.play = function() {
	this.car_coming.play();
};

Car.prototype.going_left = function(first_argument) {
	// this.car_going.pos3d(-2,0,0);
	this.car_going_left.play();
};

Car.prototype.going_right = function() {
	// this.car_going.pos3d(2,0,0);
	this.car_going_right.play();
};