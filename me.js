function Car(){
}

Car.prototype.init = function(first_argument) {
	this.objects = ['car1','car2','motorcycle'];
	this.pos = -1;
};

Car.prototype.left = function (){
		this.pos = -1;
}

Car.prototype.right = function (){
		this.pos = 1;
}