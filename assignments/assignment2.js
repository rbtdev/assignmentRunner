App.lessons.push({
	title: "Lesson 2",
	description: "Write a function which take an array as an argument and returns it sorted.",
	runs: [
			{
				args: [[5,3,10,1,2,4]],
				answer: [1,2,3,4,5,10]
			}
		],
	checkResponse: function (resp, expected) {
		return (resp.equals(expected));
	}

});

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   