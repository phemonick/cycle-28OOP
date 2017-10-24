class Mobile {
    //super class constructor
    constructor(man, os, mode, cos){
        this.manufacturer = man;
        this.operating_system = os;
        this.model = mode;
        this.cost = cos;

    }

    //creating class methods to have acces to encapsulated variables
    getModel(){
        return this.model;
    }
    getOs(){
        return this.os;
    }
    getManufacturer(){
        return this.manufacturer;
    }
    getPrice(){
        return this.cost;
    }

    //creating static method that cant be accessed outside the class
    static countDevice(){
        return "device not counted"
    }


}
//inheriting from super class mobile
class Android extends Mobile {

    constructor(man, os, mode, cost){
        super(man, os, mode, cost)

    }
}
// inheriting from super class Mobile
class Ios extends Mobile {

    constructor(man, os, mode, cost){
        super(man, os, mode, cost)

    }
    //depicting polymorphism
    getModel(){
        return "This is Android Mobile "+ this.model;
    }
}



 export {
    Android,
    Ios,
    Mobile
 } 
