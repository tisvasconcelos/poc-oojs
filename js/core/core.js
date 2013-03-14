Class = function(){
        this.extend = function(){
                var child = arguments[0],
                        extend = arguments[1];

                for(method in extend){
                        child[method] = extend[method];
                }

                return extend;
        };
};
var Class = new Class();

Core = function(){

	this.something = function(){

	}

	this.test = function(core){
		console.log(core);
	}

	this.error = [];
	this.error.show = function(){
		
	};

};

var core = new Core();