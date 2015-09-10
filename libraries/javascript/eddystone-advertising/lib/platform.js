(() => {
  'use strict';
  let EddystoneChromeOS = require('./eddystone-chrome-os.js');
  /**
     Detects what API is available in the platform.
     @private
     @returns {Object} An object that wraps the underlying BLE
     Advertising API
     @throws {Error} If the platform is unsupported
   */
  function platform() {
    if (typeof chrome !== 'undefined') {
      return EddystoneChromeOS;
    } else if (typeof _eddystone_test !== 'undefined') {
      return {};
    } else {
      throw new Error('Unsupported platform.');
    }
  }

  module.exports = platform;
})();
