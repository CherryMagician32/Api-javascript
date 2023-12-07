const axios = require("axios");
const { it } = require("mocha");
const { describe } = require("mocha");
const {expect} = require("chai");
const {faker} = require("@faker-js/faker");

describe("PATCH API Request Tests",async() =>{
    it("Should Patch user details",async() =>{
        const randomName = faker.person.firstName('female');
    

        const res = await axios.patch('https://reqres.in/api/users/2',{
            "name": randomName,
          
        });
        console.log(res.data);
    
        //assertions
        

        

            
        })
    
    
    })