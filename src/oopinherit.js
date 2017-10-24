class Mobile {
	constructor(man, os, mode, cos){
		this.manufacturer = man;
		this.operating_system = os;
		this.model = mode;
		this.cost = cost;

	}
	getModel(){
		return this.model;
	}


}
class Android extends mobile {

	constructor(man, os, mode, cost){
		super(man, os, mode, cost)

	}
	getModel(){
		return "This is Android Mobile "+ model;
	}
}
class OveridingMobile{
	let device = new Mobile("Nokia", "win8", "Lumia", 20000);
}


export default Mobile;