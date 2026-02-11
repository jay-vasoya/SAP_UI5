sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View8Detail", {
      onInit() {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("RouteView8Detail").attachPatternMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function(oEvent) {
        // Get the index from route parameters
        var sIndex = oEvent.getParameter("arguments").index;
        
        // Get the employee data from the table model
        var oView8UniModel = this.getOwnerComponent().getModel("view8Uni");
        var aEmployees = oView8UniModel.getProperty("/employess");
        
        if (aEmployees && aEmployees[sIndex]) {
          // Create a detail model with the selected employee data
          var oDetailModel = new JSONModel(aEmployees[sIndex]);
          this.getView().setModel(oDetailModel, "detail");
        }
      },

      onNavBack: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView8Table", {}, true);
      }
    });
  }
);