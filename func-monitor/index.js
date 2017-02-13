var MonitorManager = require('./monitorManager.js');
var util = require( '../util.js');

module.exports = function (azureContext, data) {
	
    azureContext.log('Getting monitor data');
    var monitorManager = MonitorManager();
    var monitorData = monitorManager.get();
    util.logFunctionExecution(azureContext, __dirname, true);
    azureContext.res = {
        status: 200,
        body: monitorData
    }; 
    
    azureContext.done();
    
};
