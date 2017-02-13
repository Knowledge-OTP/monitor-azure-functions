var MonitorManager = require('../monitorManager.js');
const path = require('path');

module.exports = function (azureContext, data) {

    var timeStamp = new Date().toISOString();
    var monitorManager = MonitorManager();   
    var functionName = path.basename(__dirname);

    azureContext.log(functionName + ' was triggered !!!');
    
	
    azureContext.log('Getting monitor data');
    var msg = monitorManager.get();
    monitorManager.log(functionName,timeStamp, true);
    azureContext.res = {
        status: 200,
        body: msg
    }; 
    
    azureContext.done();
    
};
