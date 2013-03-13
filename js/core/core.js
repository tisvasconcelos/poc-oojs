Object.prototype.extend = function(){
	/*
	Para extender multiplas classes, mas na hora de sobreescrever ficará valendo a última class
	for(var i = 0, len = arguments.length; i < len; i++) {
		var arg = arguments[i];

		for(method in arg){
			this[method] = arg[method];
		}
	}
	*/

	var arg = arguments[0];

	for(method in arg){
		this[method] = arg[method];
	}
	return arg;
};

Core = function(){

	this.test = function(co){
		console.log(co);
	}

	this.error = [];
	this.error.show = function(){
		
	};

};

var core = new Core();