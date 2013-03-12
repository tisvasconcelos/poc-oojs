Contact = function(){
	this.extend(core);
	_super = this.super;

	this.submitForm = function(form){

	};

	this.test = function(con){
		_super.test(con);
	}('a');
};

var contact = new Contact();

contact.error.show();