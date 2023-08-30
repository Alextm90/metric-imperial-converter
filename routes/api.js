"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    
    res.json({ initNum, initUnit, returnUnit, returnNum });
 
  });
 
};
