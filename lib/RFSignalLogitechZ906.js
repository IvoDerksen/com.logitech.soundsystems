"use strict";

const { RFSignal } = require("homey-rfdriver");

module.exports = class RFSignalLogitechZ906 extends RFSignal {
  static FREQUENCY = "ir";
  static ID = "z906_prontohex";
};
