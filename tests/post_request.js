const axios = require("axios");
const { it } = require("mocha");
const { describe } = require("mocha");
const {expect} = require("chai");
const {faker} = require("@faker-js/faker");


describe("POST API Request Tests",async() =>{
    it("Should Post user details",async() =>{
        const randomName = faker.person.firstName('female');
        const randomJobTitle= faker.person.jobArea();

        const res = await axios.post('https://reqres.in/api/users',{
            "name": randomName,
            "job": randomJobTitle
        });
        console.log(res.data);
    
        //assertions
        expect(res.data.name).equal(randomName);
        expect(res.data.job).equal(randomJobTitle);

        

            
        })
    
    
    })