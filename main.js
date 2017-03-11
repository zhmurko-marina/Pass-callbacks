function perform(arg, callback) {    
    var arrayCall = [];
    
	var next = function(param) {
		var callback = arrayCall.pop();
		if (callback) {
			var t = callback(param);
			next(t);
		}
	}

	var then = function(callback2) {
		arrayCall.push(callback2);
		return { then: then }
	}

	var param = callback();
	setTimeout(function() {
        next(param); 
    }, 0);
	return { then: then };
}


perform(null, function() {
	var param = 1;
	alert(param);
	return param;
})
.then((param) => {
    alert(++param);
    return param;
})
.then((param) => {
    alert(++param);
    return param;
});