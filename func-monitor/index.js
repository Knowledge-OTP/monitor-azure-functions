var MonitorManager = require( '../monitorManager.js');

module.exports = function (azureContext, data) {

    var timeStamp = new Date().toISOString();
    var monitorManager = MonitorManager();
   
    azureContext.log('dir name=' + __dirname);
    azureContext.log('func-monitor was triggered !!!');
    monitorManager.log('func-monitor',timeStamp, true);

	if('name' in data ) {
		azureContext.log('name is in data');
        azureContext.log('Getting monitor data');
		var msg = monitorManager.get();
        azureContext.res = {
            status: 200,
            body: msg
        };
    }
    else {
        azureContext.res = {
            status: 400,
            body: { error: 'Please pass name property in the input object'}
        };
    }

    azureContext.done();
    
};
