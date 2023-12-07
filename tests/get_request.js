const axios = require("axios");
const { it } = require("mocha");
const { describe } = require("mocha");
const {expect} = require("chai");

//Test scenario
describe("GET API Request Tests",async() =>{
it("Should give a list of users",async() =>{
    const res = await axios.get('https://reqres.in/api/users?page=2');
    console.log(res.data);

    //assertions

    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
    //expect(res.data.first_name).equal("Michael");
    

   
        
    })


})



