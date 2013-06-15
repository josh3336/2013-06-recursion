// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = new Array();

	traverseDOM(document.body, className, results);

	return results;
};


var traverseDOM = function (node, className, matches) {
	var numClasses = 0;
	var numChildNodes = 0;

	if(node.classList) {
		numClasses = node.classList.length;
	}

	if(node.childNodes) {
		numChildNodes = node.childNodes.length;
	}
	
	// looks through the class list of the node to see if there is a match
	if(numClasses>0) {
		for(var i=0; i<numClasses; i++) {
			if(node.classList[i]===className) {
				matches.push(node);
			}
		}
	}

	// if there are child nodes, recurse through those
	if(numChildNodes>0) {
		for(var i=0; i<numChildNodes; i++) {
			traverseDOM(node.childNodes[i], className, matches);
		}
	}
}