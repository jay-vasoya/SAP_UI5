// // sap.ui.define(
// //   ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
// //   function (Controller, History) {
// //     "use strict";

// //     return Controller.extend("firstapp.project1.controller.View8Table", {
// //       onInit() {
// //         var oView8SummaryModelTable =
// //         this.getOwnerComponent().getModel("view8forTable")
// //         if (!oView8SummaryModelTable) {
// //           return;
// //         }
// //         var oo=oView8SummaryModelTable.getData()

// //         var oView8UniModel = this.getOwnerComponent().getModel("view8Uni").getProperty("/employess");
// //         oView8UniModel.push(oo);

// //       },

// //       onNavBack: function () {
// //         var oHistory = History.getInstance();
// //         var sPreviousHash = oHistory.getPreviousHash();

// //         if (sPreviousHash !== undefined) {
// //           window.history.go(-1);
// //         } else {
// //           this.getOwnerComponent().getRouter().navTo("RouteView8", {}, true);
// //         }
// //       },
// //     });
// //   },
// // );
// sap.ui.define(
//   [
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/core/routing/History",
//     "sap/m/MessageBox",
//     "sap/ui/model/json/JSONModel",
//   ],
//   function (Controller, History, MessageBox, JSONModel) {
//     "use strict";

//     return Controller.extend("firstapp.project1.controller.View8Table", {
//       onInit() {
//         // Attach to route matched event
//         var oRouter = this.getOwnerComponent().getRouter();
//         oRouter
//           .getRoute("RouteView8Table")
//           .attachPatternMatched(this._onRouteMatched, this);
//       },

//       _onRouteMatched: function () {
//         var oView8SummaryModelTable =
//           this.getOwnerComponent().getModel("view8forTable");

//         if (!oView8SummaryModelTable) {
//           MessageBox.error("No data to display");
//           return;
//         }

//         var oNewData = oView8SummaryModelTable.getData();

//         // Get the table model
//         var oView8UniModel = this.getOwnerComponent().getModel("view8Uni");
//         var aEmployees = oView8UniModel.getProperty("/employess") || [];

//         // Add the new entry to the array
//         aEmployees.push(oNewData);

//         // Update the model
//         oView8UniModel.setProperty("/employess", aEmployees);

//         // Refresh the binding
//         oView8UniModel.refresh(true);
//       },

//       onNavBack: function () {
//         var oHistory = History.getInstance();
//         var sPreviousHash = oHistory.getPreviousHash();

//         if (sPreviousHash !== undefined) {
//           window.history.go(-2);
//         } else {
//           this.getOwnerComponent().getRouter().navTo("RouteView8", {}, true);
//         }
//       },
//       onItemPress(){

//       }
//     });
//   },
// );

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/m/MessageBox"],
  function (Controller, History, MessageBox) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View8Table", {
      onInit() {
        // Attach to route matched event
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("RouteView8Table").attachPatternMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function() {
        var oView8SummaryModelTable = this.getOwnerComponent().getModel("view8forTable");
        
        if (!oView8SummaryModelTable) {
          MessageBox.error("No data to display");
          return;
        }

        var oNewData = oView8SummaryModelTable.getData();
        
        // Get the table model
        var oView8UniModel = this.getOwnerComponent().getModel("view8Uni");
        var aEmployees = oView8UniModel.getProperty("/employess") || [];
        
        // Add the new entry to the array
        aEmployees.push(oNewData);
        
        // Update the model
        oView8UniModel.setProperty("/employess", aEmployees);
        
        // Refresh the binding
        oView8UniModel.refresh(true);
      },

      onItemPress: function(oEvent) {
        // Get the selected item
        var oItem = oEvent.getSource();
        
        // Get the binding context
        var oContext = oItem.getBindingContext("view8Uni");
        
        // Get the index of the selected item
        var sPath = oContext.getPath();
        var iIndex = parseInt(sPath.split("/")[2]);
        
        // Navigate to detail view with index
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView8Detail", {
          index: iIndex
        });
      },

      onNavBack: function () {
        // Clear all form data
        var oView8SummaryModel = this.getOwnerComponent().getModel("view8Summary");
        if (oView8SummaryModel) {
          oView8SummaryModel.setData({});
        }
        
        var oView8ForTableModel = this.getOwnerComponent().getModel("view8forTable");
        if (oView8ForTableModel) {
          oView8ForTableModel.setData({});
        }
        
        // Navigate to View8 (form will be cleared)
        this.getOwnerComponent().getRouter().navTo("RouteView8", {}, true);
      },
    });
  },
);









// <Page title="Country vs Population Line Chart">
//         <content>
//             <viz:VizFrame
//                 id="idVizFrame"
//                 uiConfig="{applicationSet:'fiori'}"
//                 height="600px"
//                 width="100%"
//                 vizType='line'>
                
//                 <viz:dataset>
//                     <viz.data:FlattenedDataset data="{/Countries}">
//                         <viz.data:dimensions>
//                             <viz.data:DimensionDefinition 
//                                 name="Country" 
//                                 value="{Country}"/>
//                         </viz.data:dimensions>
//                         <viz.data:measures>
//                             <viz.data:MeasureDefinition 
//                                 name="Population" 
//                                 value="{Population}"/>
//                         </viz.data:measures>
//                     </viz.data:FlattenedDataset>
//                 </viz:dataset>
                
//                 <viz:feeds>
//                     <viz.feeds:FeedItem 
//                         uid="categoryAxis" 
//                         type="Dimension" 
//                         values="Country"/>
//                     <viz.feeds:FeedItem 
//                         uid="valueAxis" 
//                         type="Measure" 
//                         values="Population"/>
//                 </viz:feeds>
                
//             </viz:VizFrame>
//         </content>
//     </Page>