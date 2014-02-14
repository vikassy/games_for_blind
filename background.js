function Background(){
	this.pos = -1
	this.sound = new Howl({
	      urls: ['background.wav'],
	      autoplay: true,
		  loop: true,
		  volume: 0.1,
	    });
	// this.sound.play();
}

Background.prototype.init = function() {
    //Use Howler.js library to load a 'powerup' sound   
};
