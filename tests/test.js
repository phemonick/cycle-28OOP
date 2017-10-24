import { assert } from 'chai';
import {Android,Ios,Mobile} from '../src/oop.js'


// const assert = chai.assert;



	describe("Mobile class ", () => {
		
		describe("type of object", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("expect typeof  ", () => {
				assert.equal(typeof(samsung), typeof{});

			});
		})


		describe("get object property", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("get phone model  ", () => {
				assert.equal(samsung.getModel(), "g1");

			});
		})
		describe("get object property", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("get phone price", () => {
				assert.equal(samsung.getPrice(), 2000);

			});
		})
		describe("type of object", ()=> {
			let samsung= new Android("samsung","android","g1",2000);
			it("get phone getManufacturer", () => {
				assert.equal(samsung.getManufacturer(), "samsung");

			});
		})

		describe("type of object", ()=> {
			let iphone= new Ios("apple","Ios","I6",20000);
			it("get ios model", () => {
				assert.equal(iphone.getModel(),"This is Android Mobile I6");

			});
		})
		describe("type of object", ()=> {
			let stat= new Mobile("null","null"," ",3241);
			it("get ios model", () => {
				assert.equal(stat.countDevice(),"device not counted");

			});
		})



	




	})