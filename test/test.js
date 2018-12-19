const expect = require("chai").expect
const one_returner = require("../app/onesies");

describe("Return One Function", () => {
  describe("Returner of 'One'", () => {
    it("returns 'one'", () => {
      let one = one_returner.getOne()
      expect(one).to.equal("one");
    });
  });

  describe("Returner of '1'", () => {
    it("returns '1'", () => {
      let number_one = one_returner.get1()
      expect(number_one).to.equal("1");
    });
  });
});
