sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("firstapp.project1.controller.App", {
      onInit() {
        console.log('App.controller.js');
        console.log("APP MODEL",this.getView().getModel('view8Summary'));
        
      } 
  });
});