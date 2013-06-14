// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if(Array.isArray(obj)) {
  	var arrayString = '[';

  	 obj.forEach(function(value) {
  	 	console.log(value);
  		arrayString += stringifyJSON(value);
  	});

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
