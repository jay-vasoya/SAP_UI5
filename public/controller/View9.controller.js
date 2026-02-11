sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/BindingMode",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format",
  ],
  function (
    Controller,
    BindingMode,
    JSONModel,
    FlattenedDataset,
    ChartFormatter,
    Format,
  ) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View9", {
      onInit() {
        var oChat = this.byId("idVizFrame");
        var o = {
            title: {
              text: "jay",
            },
        };
        oChat.setVizProperties(o);
      },
    });
  },
);
