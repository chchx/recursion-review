// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  // var childNodes = Array.from(document.body.childNodes);

  var findElementByClassName = function(node) {

    if (node.classList.contains(className)) {
      result.push(node);
    }
    // var nodes = node.childNodes;
    for (var i = 0; i < node.children.length; i++) {
      findElementByClassName(node.children[i]);
    }
  };
  findElementByClassName(document.body);
  console.log(result);
  return result;
};

  // initialize empty result array
  // define helper function that takes in node/root
    // if classList contains className
      // push node/root into result
    // else
      // recursively check next child
  // call function
  // return result