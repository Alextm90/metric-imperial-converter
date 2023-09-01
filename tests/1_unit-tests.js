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
      "lbs",
      "l",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ];
    const outputArr = [
      "gal",
      "mi",
      "km",
      "lbs",
      "L",
      "kg",
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg",
    ];
    input.forEach((element, index) => {
      assert.equal(convertHandler.getUnit(1 + element), outputArr[index]);
    });
    done();
  });

  //8
  test("Read invalid input unit", (done) => {
    const input = "35fk";
    assert.equal(convertHandler.getReturnUnit(input), "invalid unit");
    done();
  });

  //9
  test("Read each valid return unit", (done) => {
    const unitObj = {
      gal: "L",
      L: "gal",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi",
    };

    for (const prop in unitObj) {
      assert.equal(convertHandler.getReturnUnit(prop), unitObj[prop]);
    }
    done();
  });

  //10
  test("Return spelled out string for valid input unit", (done) => {
    const input = ["L", "gal", "kg", "lbs", "km", "mi"];
    const outputArr = [
      "litres",
      "gallons",
      "kilograms",
      "pounds",
      "kilometers",
      "miles",
    ];
    input.forEach((element, index) => {
      assert.equal(convertHandler.spellOutUnit(element), outputArr[index]);
    });
    done();
  });

  //11
  test("Correctly convert gal to L", (done) => {
    const initNum = 1;
    const initUnit = "gal";
    const result = 3.78541;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });

  //12
  test("Correctly convert L to gal", (done) => {
    const initNum = 1;
    const initUnit = "L";
    const result = 0.26417;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });

  //13
  test("Correctly convert mi to km", (done) => {
    const initNum = 1;
    const initUnit = "mi";
    const result = 1.60934;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });

  //14
  test("Correctly convert km to mi", (done) => {
    const initNum = 1;
    const initUnit = "km";
    const result = 0.62137;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });

  //15
  test("Correctly convert lbs to kg", (done) => {
    const initNum = 1;
    const initUnit = "lbs";
    const result = 0.45359;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });

  //16
  test("Correctly convert kg to lbs", (done) => {
    const initNum = 1;
    const initUnit = "kg";
    const result = 2.20462;
    assert.equal(convertHandler.convert(initNum, initUnit), result);
    done();
  });
});
