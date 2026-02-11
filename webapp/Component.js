sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "firstapp/project1/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("firstapp.project1.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        console.log("Component.js");

        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        var oUserModel = new JSONModel({
        user: {
          id: 1,
          name: "Jay",
          city: "Ahmedabad"
        }
      });
        this.setModel(oUserModel, "userModel");
        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  },
);
