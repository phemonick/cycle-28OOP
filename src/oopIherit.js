import Mobile from './oopinherit.js'

class Android extends mobile {

	constructor(man, os, mode, cost){
		super(man, os, mode, cost)

	}
	getModel(){
		return "This is Android Mobile "+ model;
	}
}