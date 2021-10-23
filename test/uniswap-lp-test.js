const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Swap", function () {
  it("Test out a swap", async function () {
    const Swap = await ethers.getContractFactory("SwapExamples");
    const swap = await Swap.deploy("Hello, world!");
    await swap.deployed();

    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
