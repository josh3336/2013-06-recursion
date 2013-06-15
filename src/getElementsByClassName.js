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

/*
	Felt I had to write a separate function that would pass
	along the current node. Don't know if there was another way
	to do this.

	Decided to pass the array of matching elements because it
	would add matching elements as the function found them.
	Had I returned a matching element, then popped them up,
	I think my array would be backwards. i.e. smallest children
	would be first and the first match it came across would be last.
*/

var traverseDOM = function (node, className, matches) {
	if(node.classList) {
		var numClasses = node.classList.length;

		// looks through the class list of the node to see if there is a match
		// if there is a match, add it to the array of matching elements
		if(numClasses>0) {
			for(var i=0; i<numClasses; i++) {
				if(node.classList[i]===className) {
					matches.push(node);
				}
			}
		}
	}

	if(node.childNodes) {
		var numChildNodes = node.childNodes.length;

		// if there are child nodes, recurse through those
		if(numChildNodes>0) {
			for(var i=0; i<numChildNodes; i++) {
				traverseDOM(node.childNodes[i], className, matches);
			}
		}
	}
}