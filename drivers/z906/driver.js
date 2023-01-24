"use strict";

const RFDriverLogitech = require("../../lib/RFDriverLogitech");
const RFSignalLogitechZ906 = require("../../lib/RFSignalLogitechZ906");

module.exports = class extends RFDriverLogitech {
  static SIGNAL = RFSignalLogitechZ906;
};
