sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/ui/core/routing/History",
  ],
  function (Controller, JSONModel, Filter, FilterOperator, Sorter, History) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View2", {
      onInit: function () {
        let oModel = new JSONModel();
        oModel.loadData("./model/customer.json").then((x) => {
          this.getView().setModel(oModel, "customer");
        });
        oModel.setDefaultBindingMode("TwoWay");
      },
      //   onNavBack: function () {
      //   history.go(-1); // 🔙 browser back
      // },
      // OR
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1", {}, true);
        }
      },

      onNavToDetails: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        var oListItem = oEvent.getParameter("listItem"); // from sap.m.Table itemPress

        if (!oListItem) {
          return;
        }


        var oCtx = oListItem.getBindingContext(); // default model (from manifest)
        if (!oCtx) {
          return;
        }

        var oCustomer = oCtx.getObject();
        var sCustomerId = oCustomer && oCustomer.CustomerId;

        oRouter.navTo("detail", {
          customerId: sCustomerId,
        });
      },

      onSave: function () {
        // this.getView().getModel("customer").setProperty("/CustomerName", "ok");
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "firstapp.project1.view.Dialog",
          }).then(
            function (oDialog) {
              return oDialog;
            }.bind(this),
          );
        }

        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onCloseDialog: function () {
        this.pDialog.then(function (oDialog) {
          oDialog.close();
        });
      },
      onCustomerChange: function (oEvent) {
        const oSelectedItem = oEvent
          .getParameter("listItem")
          .getBindingContext();
        console.log(oSelectedItem);

        this.byId("bookingTable").setBindingContext(oSelectedItem);
      },
      onFilterCustomers: function (oEvent) {
        var aFilter = [];
        var sQuery = oEvent.getParameter("newValue");
        if (sQuery && sQuery.length > 0) {
          // aFilter.push(
          //   new Filter("CustomerName", FilterOperator.Contains, sQuery),
          // );

          aFilter.push(
            new Filter({
              filters: [
                new Filter("CustomerId", FilterOperator.Contains, sQuery),
                new Filter("CustomerName", FilterOperator.Contains, sQuery),
                new Filter("City", FilterOperator.Contains, sQuery),
              ],
              and: false,
            }),
          );
        }

        var oTable = this.byId("customerTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilter);
      },
      onFilterBookings: function (oEvent) {
        var aFilter = [];
        var sQuery = oEvent.getParameter("newValue");

        var oBookingTable = this.byId("bookingTable");
        var oBinding = oBookingTable.getBinding("items");

        // No customer selected yet → no binding
        if (!oBinding) {
          return;
        }

        if (sQuery && sQuery.length > 0) {
          aFilter.push(
            new Filter({
              filters: [
                new Filter("AirlineID", FilterOperator.Contains, sQuery),
                new Filter("BookingNumber", FilterOperator.Contains, sQuery),
                // new Filter("FlightDate", FilterOperator.Contains, sQuery),
                // new Filter("Class", FilterOperator.Contains, sQuery),
                // new Filter("ForeignCurrency", FilterOperator.Contains, sQuery),
                // new Filter("IsCancelled", FilterOperator.Contains, sQuery)
              ],
              and: false,
            }),
          );
        }

        oBinding.filter(aFilter);
      },
      onSortByCustomerName: function () {
        var oTable = this.byId("customerTable");
        var oBinding = oTable.getBinding("items");

        var oSorter = new Sorter("CustomerName", false); // false = Ascending
        oBinding.sort(oSorter);
      },
      onSortByCity: function () {
        var oTable = this.byId("customerTable");
        var oBinding = oTable.getBinding("items");

        var oSorter = new Sorter("City", false); // Ascending
        oBinding.sort(oSorter);
      },
    });
  },
);
// Expression Binding
//  <!-- {= ${customer>Amount} < 500 ? 'Information' : (${customer>Amount} >= 500 && ${customer>Amount} < 1000) ? 'Success' : (${customer>Amount} === 1000) ? 'Warning' : 'Error' } -->

// Date Formatting Styles
//  <!-- | Style  | Output                    |
//       | ------ | ------------------------- |
//       | short  | 28/01/26                  |
//       | medium | Jan 28, 2026              |
//       | long   | January 28, 2026          |
//       | full   | Tuesday, January 28, 2026 | -->
