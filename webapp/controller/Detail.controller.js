sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
  function (Controller, History) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.Detail", {
      onInit: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("detail").attachPatternMatched(this._onRouteMatched, this);
      },

      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getOwnerComponent().getRouter().navTo("RouteView2", {}, true);
        }
      },

      _onRouteMatched: function (oEvent) {
        var sCustomerId = oEvent.getParameter("arguments").customerId;
        var oModel = this.getOwnerComponent().getModel(); // default model from manifest

        var fnBind = function () {
          var aCustomers = oModel.getProperty("/Customers") || [];
          var iIndex = aCustomers.findIndex(function (c) {
            return String(c.CustomerId) === String(sCustomerId);
          });

          if (iIndex >= 0) {
            this.getView().bindElement("/Customers/" + iIndex);
          }
        }.bind(this);

        // If model is not loaded yet, wait for it
        if (!oModel.getProperty("/Customers")) {
          oModel.attachRequestCompleted(fnBind);
        } else {
          fnBind();
        }
      },
    });
  },
);
