sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View4", {

        onSubmit: function () {
            console.log("jj");           
            console.log(this.byId('FormDisplay354wideDual')); 
        }       
    });
});
