// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
  ) {
    // reference to html, i assume it takes in the elements as well
    var bodyHtml = document.body;

    //putting results here
    var result = [];

    //
    var hasClass = function(bodyHtml) {
      //if has classes and has this particular classname
      if (bodyHtml.classList && bodyHtml.classList.contains(className)) {
        //push that information into result
        result.push(bodyHtml);
      }
      if (bodyHtml.hasChildNodes()) {
        for (var i = 0; i< bodyHtml.childNodes.length; i++) {
          hasClass(bodyHtml.childNodes[i]);
        }
      }
    };
    hasClass(bodyHtml);
    return result;
  };


