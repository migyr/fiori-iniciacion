/*global QUnit*/

sap.ui.define([
	"logali/invoices/controller/viewMain.controller"
], function (Controller) {
	"use strict";

	QUnit.module("viewMain Controller");

	QUnit.test("I should test the viewMain controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
