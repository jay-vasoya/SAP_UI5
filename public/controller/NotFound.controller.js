sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("firstapp.project1.controller.NotFound", {
    onNavToOverview: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteView1", {}, true);
    },
  });
});
