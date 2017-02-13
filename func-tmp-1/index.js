var MonitorManager = require( '../monitorManager.js');

module.exports = function (azureContext) {

    var timeStamp = new Date().toISOString();
    var monitorManager = new MonitorManager();
   
    azureContext.log('func-tmp-1 was triggered !!!');
    monitorManager.log('func-tmp-1',timeStamp, true);

    azureContext.done();
    
};