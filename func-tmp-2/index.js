var AzureFuncMonitorManager = require('./AzureFuncMonitorManager.js');

module.exports = function (azureContext) {

    AzureFuncMonitorManager.MonitorManagerUtil.logFunctionExecution(azureContext, __dirname, true);

    azureContext.done();
    
};