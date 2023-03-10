const {expect} = require("chai");

describe("simpleContract", function() {
    let contShow;

    beforeEach(async () => {
        const valShow = await ethers.getContractFactory("simpleContract");
        contShow = await valShow.deploy();
        await contShow.deployed();
    });

    it("value1", async function() {
        const testVal1 = 5;
        await contShow.setVal1(testVal1);
        const val1 = await contShow.val1();
        expect(val1).to.equal(testVal1);
    });

    it("value2", async function(){
        const testVal2 = 10;
        await contShow.setVal2(testVal2);
        const val2 = await contShow.val2();
        expect(val2).to.equal(testVal2);
    });

    it("message to user", async function(){
        const testVal3 = 'hello';
        await contShow.setVal3(testVal3);
        const val3 = await contShow.val3();
        expect(val3).to.equal(testVal3);
    })


})