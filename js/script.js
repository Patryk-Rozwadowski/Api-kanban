/*function Phone(brand, price, color, date) {
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
*/

/////////// SELF /////////

function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype = {

  create: function() {
    const self = this;

    this.element = document. createElement('button');
    this.element.innerText = this.text;
    this.element.addEventListener('click', function() {
      alert(self.text);
    });
    document.body.appendChild(this.element);
  }
}

const btn1 = new Button('Hello');
const btn2 = new Button('Hello1');
const btn3 = new Button('Hello2');
const btn4 = new Button('Random text');

btn1.create();
btn2.create();
btn3.create();
btn4.create();
