sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View5", {
      onCustomerChange: function (oEvent) {
        var oBindingContext = oEvent
          .getParameter("listItem")
          .getBindingContext();
        this.byId("bookingTable").setBindingContext(oBindingContext);
      },
    });
  },
);
