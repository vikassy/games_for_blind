Score = function(){
	this.score = 0;
}

Score.prototype.start = function() {
	 setInterval("count()", 1000);
};

Score.prototype.increment = function() {
	this.score+=1;
};

Score.prototype.tell_score = function() {
	(window["speak"]).play("Your score is "+this.score);
};