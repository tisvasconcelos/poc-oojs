Employee = function(){
	_super = Class.extend(this,core);

	this.submitForm = function(form){

	};

	this.test = function(employee){
		_super.test(employee);
	};

	this.error.show = function(employee){
		
	};

	console.log(this);
	console.log(_super);
};

var employee = new Employee();