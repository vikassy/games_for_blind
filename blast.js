function Blast(){
	this.sound = new Howl({
	      urls: ['blast_laser_winner.mp3'],
	      sprite: {
	        blast: [0, 2000],
	        laser: [2000, 3000],
	        winner: [4000, 7500]
	      }
	    });
}

Blast.prototype.play = function() {
	this.sound.play('blast');
}
