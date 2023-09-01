const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // #1
  test("Whole number input", (done) => {
    const input = "10gal";
    assert.equal(convertHandler.getNum(input), 10);
    done();
  });

  //2
  test("Decimal number input", (done) => {
    const input = "10.1mi";
    assert.equal(convertHandler.getNum(input), 10.1);
    done();
  });

  //3
  test("Fractional input", (done) => {
    const input = "4/6mi";
    assert.equal(convertHandler.getNum(input), 0.66667);
    done();
  });

  //4
  test("Fractional input with decimal", (done) => {
    const input = "3/2.1mi";
    assert.equal(convertHandler.getNum(input), 1.42857);
    done();
  });

  //5
  test("double-fraction", (done) => {
    const input = "3/2/3mi";
    assert.equal(convertHandler.getNum(input), "invalid number");
    done();
  });

  //6
  test("Default to numerical input 1", (done) => {
    const input = "L";
    assert.equal(convertHandler.getNum(input), 1);
    done();
  });

  //7
  test("Read each valid input unit", (done) => {
    const input = [
      "gal",
      "mi",
      "km",
      "l",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    input.forEach((element) => {
      assert.equal(convertHandler.getUnit(1 + element), element.toLowerCase());
    });
    done();
  });
});
