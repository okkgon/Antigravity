sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("sap.sd.salesorder.controller.Object", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteObject").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched(oEvent) {
            // Extract parameters using ES6 Destructuring
            const { objectId } = oEvent.getParameter("arguments");
            this._sObjectId = objectId;

            // Assuming our mock data is simple, find index of matched SalesOrderID
            const oModel = this.getOwnerComponent().getModel();
            
            if (!oModel) {
                return;
            }

            // JSONModels load async. If data is there, bind immediately. Otherwise, wait.
            if (oModel.getProperty("/SalesOrders")) {
                this._bindView(this._sObjectId);
            } else {
                oModel.attachEventOnce("requestCompleted", () => {
                    this._bindView(this._sObjectId);
                });
            }
        },

        _bindView(sObjectId) {
            const oModel = this.getOwnerComponent().getModel();
            if (!oModel) return;
            
            const aData = oModel.getProperty("/SalesOrders");
            
            if (aData) {
                const iIndex = aData.findIndex(order => order.SalesOrderID === sObjectId);
                
                if (iIndex !== -1) {
                    const sObjectPath = "/SalesOrders/" + iIndex;
                    this.getView().bindElement({
                        path: sObjectPath
                    });
                } else {
                    sap.m.MessageToast.show("Order not found");
                }
            }
        },

        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMain", {}, true);
            }
        }
    });
});
