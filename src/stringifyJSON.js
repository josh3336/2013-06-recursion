// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if(obj===null) {
		return "null";
	}

	// if obj is an array or object...
  	if(typeof obj == "object") {
		var returnString = new String();

	  	if(Array.isArray(obj)) {
	  		obj.forEach(function(value) {
				returnString += stringifyJSON(value) + ',';
	  		});

	  		returnString = killComma(returnString);

	  		returnString = '[' + returnString + ']';
	  	}
	  	else {
	  		for(var key in obj) {
	  			if(typeof obj[key] == "undefined") {
	  				returnString = '';
	  			}
	  			else {
		  			returnString += stringifyJSON(key);
		  			returnString += ':';
					returnString += stringifyJSON(obj[key]);
					returnString += ',';
				}
	  		}

	  		returnString = killComma(returnString);

	  		returnString = '{' + returnString + '}';
	  	}

	  	//console.log(returnString);
	  	return returnString;
	}
	else if(typeof obj == "string") {
		return '\"' + obj + '\"';
	}
	else {
		return obj.toString();
	}
};

// function to remove the comma at the end of a string
var killComma = function (inputString) {
	if(inputString.slice(-1) == ',') {
		return inputString.slice(0,-1);
  	}
  	else {
  		return inputString;
  	}
}