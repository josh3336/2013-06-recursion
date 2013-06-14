// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(Array.isArray(obj)) {
  	var arrayString = new String('[');

  	obj.forEach(function(value) {
	  	arrayString += stringifyJSON(value) + ',';
  	});

  	if(arrayString.slice(-1)==',') {
  		arrayString = arrayString.slice(0,-1);
  	}

  	arrayString += ']';
  	return arrayString;
  }
  else if(obj===null) {
  	return "null";
  }
  else if(typeof obj == "string"){
  	return '\"' + obj + '\"';
  }
  else {
  	return obj.toString();
  }
};
