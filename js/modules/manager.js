Manager = function(){
	_super = Class.extend(this,employee);

	this.test = function(manager){

	};

	this.error.show = function(manager){
		
	};

	console.log(this);
	console.log(_super);

}

var manager = new Manager();