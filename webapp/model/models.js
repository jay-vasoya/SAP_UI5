sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            // var Device=sap.ui.require.toUrl("firstapp.project1/model/customer.json");

            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        }
    };

});