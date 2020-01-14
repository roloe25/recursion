



  var stringifyJSON = function(values) {
    // your code goes here
    var result = []
    for (var i = 0; i < arguments.length; i++) {
      if ( arguments[i] === null) {
        result.push( "null" );
        if (i < arguments.length - 1) {
          result.push(stringifyJSON(arguments[i + 1]))
        }
        i++
      }
      else if (arguments[i] === true) {
        result.push("true")
        if (i < arguments.length - 1) {
         result.push(stringifyJSON(arguments[i + 1]))
        }
        i++
      }
      else if (arguments[i] === false) {
        result.push("false")
        if (i < arguments.length - 1) {
         result.push(stringifyJSON(arguments[i + 1]))
        }
        i++
      }
      else if ( typeof arguments[i] === "number") {
        result.push(arguments[i].toString())
        if (i < arguments.length - 1) {
         result.push(stringifyJSON(arguments[i + 1]))
        }
        i++
      }

      else if (typeof arguments[i] === "string") {
        result.push("\""+ arguments[i] + "\"")
        if (i < arguments.length - 1) {
         result.push(stringifyJSON(arguments[i + 1]))
        }
        i++
      }
      else if (Array.isArray(arguments[i])) {
        result.push("[" +  stringifyJSON(...arguments[i]) + "]")
      }
      else if (typeof arguments[i] === "object") {
        var temp = []
        var temp2 = []
        for (var key in arguments[i]){
          if (key !== 'functions' && key !== 'undefined') {
            //console.log(typeof temp, "temp now: " + temp2)
            temp.push("\"" + key + "\"" + ":" + stringifyJSON(arguments[i][key]))
            temp = temp.join(',')
            temp2.push(temp)
            temp = []
            //console.log(typeof temp, "temp now: " + temp2)
            }
          }
          temp2 = '{' + temp2 + '}'

        result = result.concat(temp2)
      }
    }
     return result.join(',')
    };