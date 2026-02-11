sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View7", {
      onInit: function () {
        var oComponent = this.getOwnerComponent();
        console.log('oComponent',oComponent);
        
        var oUserModel = oComponent.getModel("userModel");
        console.log("oUserModel",oUserModel.getData());
      },
      onShowUser: function () {
        var oComponent = this.getOwnerComponent();
        var oModel = oComponent.getModel("userModel");

        var sName = oModel.getProperty("/user/name");

        MessageToast.show("User: " + sName);
      },
    });
  },
);
