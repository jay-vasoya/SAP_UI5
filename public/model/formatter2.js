sap.ui.define(function () {
  "use strict";

  return {
    amountStateFormatter: function (iAmount) {
      if (iAmount === null || iAmount === undefined) {
        return "None"; // Default color
      }

      if (iAmount < 500) {
        return "Information"; // 🔵 Blue
      } else if (iAmount >= 500 && iAmount < 1000) {
        return "Success"; // 🟢 Green
      } else if (iAmount === 1000) {
        return "Warning"; // 🟠 Orange
      } else {
        return "Error"; // 🔴 Red
      }
    },
  };
});
