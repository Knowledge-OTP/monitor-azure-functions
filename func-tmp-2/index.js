var util = require( '../util.js');

module.exports = function (azureContext) {

    util.logFunctionExecution(azureContext, __dirname, true);

    azureContext.done();
    
};