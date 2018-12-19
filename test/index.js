const expect = require("chai").expect;
const request = require("request");

describe("Onesies API", () => {
  describe("Returner of 'one'", () => {
    let url = "http://localhost:3000/one";

    it("returns status 200", done => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("returns 'one'", done => {
      request(url, (err, res, body) => {
        expect(body).to.equal("one");
        done();
      });
    });
  });

  describe("Returner of '1'", () => {
    let url = "http://localhost:3000/1";

    it("returns status 200", done => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("returns '1'", done => {
      request(url, (err, res, body) => {
        expect(body).to.equal("1");
        done();
      });
    });
  });

});


