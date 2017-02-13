var MonitorManager = require( '../monitorManager.js');
const path = require('path');
const TOKEN = 'abcdfdsfs334asfdgvsdkdjf@#4sdadf^523423432sdfl';

module.exports = function (azureContext, data) {

    var timeStamp = new Date().toISOString();
    var monitorManager = MonitorManager();
   
    azureContext.log('dir name=' + __dirname);
    var functionName = path.basename(__dirname);
    azureContext.log('functionName=' + functionName);
    azureContext.log(functionName + ' was triggered !!!');
    monitorManager.log('func-monitor',timeStamp, true);

	if('token' in data ) {
		azureContext.log('got token');
        if (token===TOKEN){
           azureContext.log('Getting monitor data');
            var msg = monitorManager.get();
            azureContext.res = {
                status: 200,
                body: msg
            }; 
        }
        else {
            azureContext.res = {
                status: 401,
                body: { error: 'invalid token'}
            };
        }
    }
    else {
        azureContext.res = {
            status: 401,
            body: { error: 'invalid token'}
        };
    }

    azureContext.done();
    
};
