function Phone(brand, price, color, screenSize, cameraResolution) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screenSize = screenSize;
	this.cameraResolution = cameraResolution;
}

Phone.prototype.printInfo = function () {
	console.log("This phone brand is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + ".");
}

Phone.prototype.printInfo2 = function () {
	console.log("This phone has a screen size : " + this.screenSize + ", and a camera resolution : " + this.cameraResolution + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 999, "gold", "5.1 inches", "16.0 Mpix");
samsungGalaxyS6.printInfo();
samsungGalaxyS6.printInfo2();

var iPhoneS6 = new Phone("Apple", 1359, "silver", "4.7 inches", "12.0 Mpix");
iPhoneS6.printInfo();
iPhoneS6.printInfo2();

var onePlusOne = new Phone("One Plus", 1299, "white", "6.01 inches", "16.0 Mpix");
onePlusOne.printInfo();
onePlusOne.printInfo2();