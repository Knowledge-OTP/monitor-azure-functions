var MonitorManager = require( '../monitorManager.js');

module.exports = function (azureContext, data) {

    var timeStamp = new Date().toISOString();
    var monitorManager = new MonitorManager();
   
    azureContext.log(JSON.stringify(azureContext));
    azureContext.log('func-monitor was triggered !!!');
    monitorManager.log('func-monitor',timeStamp, true);

	if('name' in data ) {
		azureContext.log('name is in data');
		var msg = monitorManager.get();
        azureContext.res = {
            body: { status: 'msg:' + msg }
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
