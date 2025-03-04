var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}

}
var sayMyName = function(name) {
	alert('My name is: ' + name);
}
var car = {
	make: 'RAM',
	type: '1500',
	color: 'White',
	isStarted: false,
	premiumRims: true,
	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4', 'seat 5'],

	turnOn: function() {
		this.isStarted = true;
	},
	fly: function() {
		alert('fly');
	},
	switchCar: function(isStarted) {
		if (isStarted == true) {
			this.isStarted = true;
		} else {
			this.isStarted = false;
		}
	}
};


console.log('Hello World!');

