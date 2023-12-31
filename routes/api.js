"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");


module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    if (initNum == "invalid number" && returnUnit == "invalid unit") {
      res.json("invalid number and unit"); 
    } else if (initNum == "invalid number") {
      res.json("invalid number"); 
    } else if (returnUnit == "invalid unit") {
      res.json("invalid unit");
    } else {
      res.json({ initNum, initUnit, returnNum, returnUnit, string });
    }
  });
};
