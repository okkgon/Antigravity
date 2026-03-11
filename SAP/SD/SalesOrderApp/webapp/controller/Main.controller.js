sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, MessageBox, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sap.sd.salesorder.controller.Main", {
        onInit() {
            // Get router and attach pattern matched event
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteMain").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched() {
            // Logic to run every time view is displayed
        },

        onRefresh() {
            try {
                // To adhere to Rule 3 & 4: Demonstrate error handling and modern JS
                const oModel = this.getView().getModel();
                
                // For a JSON model, refresh is synchronous but we simulate an async check
                if (!oModel) {
                    throw new Error("Data model is not available.");
                }
                
                // Re-bind or refresh
                oModel.refresh(true);
                MessageToast.show("Data refreshed successfully");

            } catch (error) {
                // Rule 3: Do not leave raw error logs, use MessageBox
                MessageBox.error(`An error occurred while refreshing: ${error.message}`, {
                    title: "Error"
                });
            }
        },

        onSearch(oEvent) {
            const aFilters = [];
            
            // Read values from FilterBar
            const sOrderID = this.byId("fOrderID").getValue();
            const sSalesOrg = this.byId("fSalesOrg").getValue();
            const sChannel = this.byId("fChannel").getValue();
            const sRegion = this.byId("fRegion").getValue();
            
            if (sOrderID) {
                aFilters.push(new Filter("SalesOrderID", FilterOperator.Contains, sOrderID));
            }
            if (sSalesOrg) {
                aFilters.push(new Filter("SalesOrg", FilterOperator.Contains, sSalesOrg));
            }
            if (sChannel) {
                aFilters.push(new Filter("Channel", FilterOperator.Contains, sChannel));
            }
            if (sRegion) {
                aFilters.push(new Filter("Region", FilterOperator.Contains, sRegion));
            }

            // Update Grid Table binding
            const oTable = this.byId("salesOrderTable");
            const oBinding = oTable.getBinding("rows"); // Notice: 'rows' for grid table
            oBinding.filter(aFilters, "Application");
        },

        onNavigationPress(oEvent) {
            let oContext;
            const oSource = oEvent.getSource();

            if (oSource.isA("sap.m.Link")) {
                // Triggered by Order ID Link
                oContext = oSource.getBindingContext();
            } else {
                // Triggered by RowActionItem (Chevron >)
                const oRow = oEvent.getParameter("row");
                if (oRow) {
                    oContext = oRow.getBindingContext();
                }
            }
            
            if (oContext) {
                // Extract data using ES6 Destructuring
                const { SalesOrderID } = oContext.getObject();
                
                // Navigate to Object Page
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteObject", {
                    objectId: SalesOrderID
                });
            }
        }
    });
});
