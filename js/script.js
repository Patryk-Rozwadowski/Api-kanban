function Phone(brand, price, color, date) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.date = date
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " Made in " + this.date);
};

const iPhone6S = new Phone("Apple", 2250, "silver", 2015);
iPhone6S.printInfo();
