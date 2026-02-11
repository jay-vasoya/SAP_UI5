// sap.ui.define(
//   ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/model/json/JSONModel"],
//   function (Controller, History, JSONModel) {
//     "use strict";

//     return Controller.extend("firstapp.project1.controller.View8Summary", {
//       onInit() {

//         var oView8SummaryModel = this.getOwnerComponent().getModel("view8Summary");
//         this.getView().setModel(oView8SummaryModel, "view81");
//       },

//       onNavBack: function () {
//         var oHistory = History.getInstance();
//         var sPreviousHash = oHistory.getPreviousHash();

//         if (sPreviousHash !== undefined) {
//           window.history.go(-1);
//         } else {
//           this.getOwnerComponent().getRouter().navTo("RouteView8", {}, true);
//         }
//       },
//       onSave() {
//         var oView8Model2 = this.getView().getModel("view81");
//         if (!oView8Model2) {
//           return;
//         }

//         var oData = oView8Model2.getData() || {};
//         var oSummaryModel = new JSONModel(oData);

//         this.getOwnerComponent().setModel(oSummaryModel, "view8forTable");   
//         this.getOwnerComponent().getRouter().navTo("RouteView8Table");
//       },
//        onCancel(){
//         this.getOwnerComponent().getRouter().navTo("RouteView8");
//       }
//     });
//   },
// );

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/model/json/JSONModel"],
  function (Controller, History, JSONModel) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View8Summary", {
      onInit() {
        // Attach to route matched event to refresh data every time we navigate to this view
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("RouteView8Summary").attachPatternMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function() {
        // Refresh the model data every time we navigate to this view
        var oView8SummaryModel = this.getOwnerComponent().getModel("view8Summary");
        if (oView8SummaryModel) {
          // Create a new model instance with fresh data to ensure binding updates
          var oData = oView8SummaryModel.getData();
          var oNewModel = new JSONModel(oData);
          this.getView().setModel(oNewModel, "view81");
        }
      },

      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getOwnerComponent().getRouter().navTo("RouteView8", {}, true);
        }
      },

      onSave() {
        var oView8Model2 = this.getView().getModel("view81");
        if (!oView8Model2) {
          return;
        }

        var oData = oView8Model2.getData() || {};
        var oSummaryModel = new JSONModel(oData);

        this.getOwnerComponent().setModel(oSummaryModel, "view8forTable");   
        this.getOwnerComponent().getRouter().navTo("RouteView8Table");
      },

      onCancel() {
        this.getOwnerComponent().getRouter().navTo("RouteView8");
      }
    });
  },
);