// sap.ui.define(
//   ["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/ui/model/json/JSONModel"],
//   function (Controller, MessageBox, JSONModel) {
//     "use strict";

//     return Controller.extend("firstapp.project1.controller.View8", {
//       onInit: function () {
//         console.log("view8");

//         var oModel = new JSONModel();
//         oModel.loadData("../model/view8.json");
//         this.getView().setModel(oModel, "view8");

//       },

//       onSave: function () {
//         var oView8Model = this.getView().getModel("view8");
//         if (!oView8Model) {
//           return;
//         }

//         var oData = oView8Model.getData() || {};
//         var oSummaryModel = new JSONModel(oData);

//         this.getOwnerComponent().setModel(oSummaryModel, "view8Summary");
//         this.getOwnerComponent().getRouter().navTo("RouteView8Summary");
//       },

//       onCancel: function () {
//         MessageBox.information("Changes were cancelled.");
//       },

//       onClear: function () {
//         var oView8Model = this.getView().getModel("view8");

//         oView8Model.setData({});
//       },
//     });
//   },
// );

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View8", {
      onInit: function () {
        console.log("view8");
      },

      onSave: function () {
        var oView8Model = this.getView().getModel("view8");
        if (!oView8Model) {
          return;
        }

        var oData = oView8Model.getData() || {};

        // Create a deep copy to avoid reference issues
        var oDataCopy = JSON.parse(JSON.stringify(oData));
        var oSummaryModel = new JSONModel(oDataCopy);

        this.getOwnerComponent().setModel(oSummaryModel, "view8Summary");
        this.getOwnerComponent().getRouter().navTo("RouteView8Summary");
      },

      onCancel: function () {
        MessageBox.information("Changes were cancelled.");
      },

      onClear: function () {
        var oView8Model = this.getView().getModel("view8");
        oView8Model.setData({});
      },
    });
  },
);
