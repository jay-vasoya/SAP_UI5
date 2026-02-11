sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("firstapp.project1.controller.View1", {
      onInit: function () {
        console.log("View1.controller.js");

        var oModel = new JSONModel();
        // OR  Load data from external JSON file
        oModel.loadData("../model/1.json");
        this.getView().setModel(oModel);
      },
      onView1Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView1"); 
      },
      onView2Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView2"); 
      },
      onView3Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView3"); 
      },
      onView4Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView4"); 
      },
      onView5Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView5"); 
      },
      onView6Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView6"); 
      },
      onView7Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView7"); 
      },
      onView8Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView8"); 
      },
      onView9Press: function () {
        this.getOwnerComponent()
          .getRouter()
          .navTo("RouteView9"); 
      },
      

      onSubmit: function () {
        var sFirstName = this.byId("firstName").getValue();
        var sLastName = this.byId("lastName").getValue();
        var iAge = Number(this.byId("age").getValue());
        var sMobile = this.byId("mobile").getValue();
        var sDept = this.byId("department").getSelectedKey();
        var sRole = this.byId("jobRole").getSelectedKey();
        var sAddress = this.byId("address").getValue();
        var bPermanent = this.byId("isPermanent").getSelected();
        var oGenderGrp = this.byId("gender");
        var iGenderIdx = oGenderGrp.getSelectedIndex();

        // Validation
        if (!sFirstName || !sLastName) {
          MessageBox.error("First Name and Last Name are required");
          return;
        }

        if (iGenderIdx === -1) {
          MessageBox.error("Please select Gender");
          return;
        } else {
          iGenderIdx = oGenderGrp.getButtons()[iGenderIdx].getText();
        }

        if (!iAge || iAge < 18) {
          MessageBox.error("Age must be 18 or above");
          return;
        }

        if (!/^[6-9]\d{9}$/.test(sMobile)) {
          MessageBox.error("Enter valid 10 digit mobile number");
          return;
        }

        if (!sDept) {
          MessageBox.error("Please select Department");
          return;
        }

        if (!sRole) {
          MessageBox.error("Please select Job Role");
          return;
        }

        var oModel = this.getView().getModel();
        var aEmployees = oModel.getProperty("/employees");

        aEmployees.push({
          name: sFirstName + " " + sLastName,
          gender: iGenderIdx,
          age: iAge,
          mobile: sMobile,
          department: sDept,
          jobRole: sRole,
          permanent: bPermanent ? "Yes" : "No",
          address: sAddress || "N/A",
        });

        oModel.setProperty("/employees", aEmployees);
        MessageBox.success("Form submitted successfully");

        this.byId("firstName").setValue("");
        this.byId("lastName").setValue("");
        this.byId("age").setValue("");
        this.byId("mobile").setValue("");
        this.byId("department").setSelectedKey("");
        this.byId("jobRole").setSelectedKey("");
        this.byId("gender").setSelectedIndex(-1);
        this.byId("address").setValue("");
        this.byId("isPermanent").setSelected(false);
        this.byId("resultText").setText("");
      },

      onClear: function () {
        this.byId("firstName").setValue("");
        this.byId("lastName").setValue("");
        this.byId("age").setValue("");
        this.byId("mobile").setValue("");
        this.byId("department").setSelectedKey("");
        this.byId("jobRole").setSelectedKey("");
        this.byId("gender").setSelectedIndex(-1);
        this.byId("address").setValue("");
        this.byId("isPermanent").setSelected(false);
        this.byId("resultText").setText("");

        this.getView().getModel().setProperty("/employees", []);
      },

      onCollapseExpandPress() {
        const oSideNavigation = this.byId("sideNavigation"),
          bExpanded = oSideNavigation.getExpanded();

        oSideNavigation.setExpanded(!bExpanded);
      },
      onItemPress: function (oEvent) {
        const oItem = oEvent.getSource().getBindingContext().getObject();
        MessageBox.information(`Employee Details:
                                Name: ${oItem.name}
                                Gender: ${oItem.gender}
                                Age: ${oItem.age}
                                Mobile: ${oItem.mobile}
                                Department: ${oItem.department}
                                Job Role: ${oItem.jobRole}
                                Permanent: ${oItem.permanent}
                                Address: ${oItem.address}`);
      },
    });
  },
);
