function ConvertHandler() {
  this.getNum = function (input) {
    // get number from input and send to convert function
    const regexp = /[a-z]/g;
    const num = input.replace(regexp, "");
    console.log(num);
    return Number(num); // might not need to be a number?
  };

  this.getUnit = function (input) {
    // get unit from input and send to convert function
    const regexp = /[0-9.]/g;
    let unit = input.replace(regexp, "");
    console.log(unit);
    return unit;
  };

  this.getReturnUnit = function (initUnit) {
    const unitObj = {
      gal: "L",
      L: "gal",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi",
    };
    for (const key in unitObj) {
      if (key == initUnit) {
        console.log(unitObj[key]);
        return unitObj[key];
      }
    }
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    console.log(initNum)
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if (initUnit == "L") {
      return initNum / galToL;
    }
    if (initUnit == "gal") {
      return initNum * galToL;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
