sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View3", {
      // onInit: function () {
      //     var oComponent = this.getOwnerComponent();
      //     console.log('oComponent',oComponent);

      //     var oUserModel = oComponent.getModel("userModel");
      //     console.log("oUserModel",oUserModel.getData());
      //   },
      //   onShowUser: function () {
      //     var oComponent = this.getOwnerComponent();
      //     var oModel = oComponent.getModel("userModel");

      //     var sName = oModel.getProperty("/user/name");

      //     MessageToast.show("User: " + sName);
      //   },

      onAnalyze: function () {
        var oInput = this.byId("inpName");

        // ===============================
        // 1️⃣ getBindingInfo()
        // ===============================
        var oBindingInfo = oInput.getBindingInfo("value");
        console.log("getBindingInfo():", oBindingInfo);
        console.log(oBindingInfo.model);
        
        /*
        RETURNS (config):
        {
          path: "name",
          model: "userModel",
          mode: "TwoWay"
        }
      */

        // ===============================
        // 2️⃣ getBinding()
        // ===============================
        var oBinding = oInput.getBinding("value");
        console.log("getBinding():", oBinding);
        
        /*
        RETURNS (live binding object):
        - refresh()
        - suspend()
        - resume()
      */

        // ===============================
        // 3️⃣ getBindingPath()
        // ===============================
        var sPath = oInput.getBindingPath("value");
        console.log("getBindingPath():", sPath);

        /*
        RETURNS:
        "name"
      */

        // ===============================
        // 4️⃣ getBindingContext()
        // ===============================
        var oContext = oInput.getBindingContext("userModel");
        console.log("getBindingContext():", oContext);
        console.log("Context Model", oContext.getModel());
        console.log("Context Path:", oContext.getPath());
        console.log("Context Object:", oContext.getObject());

        /*
        Path: "/user"
        Object:
        {
          id: 1,
          name: "Jay",
          city: "Ahmedabad"
        }
      */
      },
    });
  },
);