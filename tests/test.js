import { assert } from 'chai';
import Android from '../src/oop.js'
import Mobile from	'../src/oop.js'

// const assert = chai.assert;



	describe("Mobile class ", () => {
		
		describe("type of object", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("expect typeof  ", () => {
				assert.equal(typeof(samsung), typeof{});

			});
		})


		describe("type of object", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("get phone model  ", () => {
				assert.equal(samsung.getModel(), "g1");

			});
		})
		describe("type of object", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("get phone price", () => {
				assert.equal(samsung.getModel(), "g1");

			});
		})


	




	})