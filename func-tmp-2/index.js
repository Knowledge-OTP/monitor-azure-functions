var util = require( '../util.js');

module.exports = function (azureContext) {

	var Util = new util();
    Util.logFunctionExecution(azureContext, __dirname, true);

    azureContext.done();
    
};