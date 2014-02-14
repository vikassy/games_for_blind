function MyCar(){
	this.pos = -1
	// this.sound = new Howl({
	//       urls: ['car_start.wav']
	//     });
	// this.sound.play();
}

MyCar.prototype.init = function() {
    //Use Howler.js library to load a 'powerup' sound   
};

MyCar.prototype.move_left = function() {
    this.pos = -1;	
};

MyCar.prototype.move_right = function() {
	this.pos = 1;
};

MyCar.prototype.position = function() {
	return this.pos
};