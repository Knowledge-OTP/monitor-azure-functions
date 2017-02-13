var MonitorManager = require('../monitorManager.js');
var monitorManagerUtil = require( '../monitorManagerUtil.js');

module.exports = function (azureContext, data) {
	
    azureContext.log('Getting monitor data');
    var monitorManager = MonitorManager();
    var monitorData = monitorManager.get();
    monitorManagerUtil.logFunctionExecution(azureContext, __dirname, true);
    azureContext.res = {
        status: 200,
        body: monitorData
    }; 
    
    azureContext.done();
    
};
