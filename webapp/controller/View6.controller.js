sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View6", {


        onSuspendBinding: function () {
            var oBinding = this.byId("productsTable").getBinding("items");

            if (oBinding && !oBinding.isSuspended()) {
                oBinding.suspend();
                MessageToast.show("Binding Suspended.");
            }
        },

        onResumeAndRefresh: function () {
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            var oModel = this.getView().getModel("productModel");

            if (oBinding && oBinding.isSuspended()) {
                oBinding.resume();

                var aData = oModel.getProperty("/Products");
                if (aData && aData.length > 0) {
                    oModel.setProperty("/Products/0/ProductName", "RESUMED & UPDATED");
                    oModel.setProperty("/Products/0/Category", "Success");
                }

                MessageToast.show("Binding Resumed and Data Updated.");
            } else {
                MessageToast.show("Binding is not suspended.");
            }
        }
    });
});