var MonitorManager = require( '../monitorManager.js');

module.exports = function (azureContext) {

    var timeStamp = new Date().toISOString();
    var monitorManager = new MonitorManager();
   
    azureContext.log('func-tmp-2 was triggered !!!');
    monitorManager.log('func-tmp-2',timeStamp, true);

    azureContext.done();
    
};