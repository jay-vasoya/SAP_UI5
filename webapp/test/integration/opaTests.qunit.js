/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["firstapp/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
