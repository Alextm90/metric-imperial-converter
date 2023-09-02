// my code that works up until now

function ConvertHandler() {
  this.getNum = function (input) {
    const regex = /[a-zA-Z]+|[^a-zA-Z]+/g;
    let result = input.match(regex)[0];
    let result2 = input.match(regex);

    if (result2.length == "1") {
      return 1;
    }

    if (result.toString().includes("/")) {
      const splitArr = result.toString().split("/");
      result = parseFloat(
        (Number(splitArr[0]) / Number(splitArr[1])).toFixed(5)
      );
      if (splitArr.length != 2) {
        return "invalid number";
      }
    }

    return result;
  };

  this.getUnit = function (input) {
    // get unit from input and send to convert function
    const regex = /[a-z]+|[^a-z]+/gi;
    let result = input.match(regex)[1];
        if (!result) {
          result = input.match(regex)[0];
        }
   
    if (result == null) {
      return "";
    } 

    if (result == "l" || result == "L") {
      return result.toUpperCase();
    } else {
      return result.toLowerCase();
    }

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

    let count = 0;
    for (const key in unitObj) {
      if (key == initUnit) {
        return unitObj[key];
      } else {
        count++;
      }
    }

    if (count == 6) {
      return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
     
        let result;
        switch (unit) {
          case "gal":
            result = "gallons";
            break;
          case "L":
            result = "litres";
            break;
          case "lbs":
            result = "pounds";
            break;
          case "kg":
            result = "kilograms";
            break;
          case "mi":
            result = "miles";
            break;
          case "km":
            result = "kilometers";
            break;
        }

        return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const convertObj = {
      L: (initNum / galToL).toFixed(5),
      gal: (initNum * galToL).toFixed(5),
      lbs: (initNum * lbsToKg).toFixed(5),
      kg: (initNum / lbsToKg).toFixed(5),
      mi: (initNum * miToKm).toFixed(5),
      km: (initNum / miToKm).toFixed(5),
    };

    for (const key in convertObj) {
      if (key == initUnit) {
        return Number(convertObj[key]);
      }
    }
  };

  this.getString = function (initNum, initUnitString, returnNum, returnUnitString) {
    return `${Number(initNum)} ${this.spellOutUnit(
      initUnitString
    )} converts to ${Number(returnNum)} ${
      this.spellOutUnit(returnUnitString)
    }`;
  };
}

module.exports = ConvertHandler;
