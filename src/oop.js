class Mobile {
    constructor(man, os, mode, cos){
        this.manufacturer = man;
        this.operating_system = os;
        this.model = mode;
        this.cost = cos;

    }
    getModel(){
        return this.model;
    }
    getOs(){
        return this.os;
    }
    getManufacturer(){
        return this.manufacturer;
    }


}
class Android extends Mobile {

    constructor(man, os, mode, cost){
        super(man, os, mode, cost)

    }
    // getModel(){
    //     return "This is Android Mobile "+ this.model;
    // }
}
class Ios extends Mobile {

    constructor(man, os, mode, cost){
        super(man, os, mode, cost)

    }
    getModel(){
        return "This is Android Mobile "+ this.model;
    }
}

let sams= new Android("nokia","os","dd",200);

 export default Android;
