const axios = require("axios");
const { it } = require("mocha");
const { describe } = require("mocha");
const {expect} = require("chai");

//Test scenario
describe("DELETE API Request Tests",async() =>{
    it.skip("Should delete a resource",async() =>{
        const res = await axios.delete('https://reqres.in/api/users?page=2');
        console.log(res.data);
    
        //assertions
    
        expect(res.status).equal(204);
      
        
    
       
            
        })
    
    
    })
    
    
    
    