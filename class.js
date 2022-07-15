//Assignment 2
class KioskCalc {                                        
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPriceList = {"PineApple": 10, "Orange": 20, "Apple": 30 };
        this.getTotalCost = function () {
            return ` ${quantity} ${fruit} for KES ${quantity * this.price}`
        }
    }
}
KioskCalc.prototype.price = 30;

var kiosk = new KioskCalc('Apple', 2);
console.log(kiosk.getTotalCost());