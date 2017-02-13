// var _customLogger;

// var CustomLogger = function (info, error) {
//     this.error = error || console.error;
//     this.info = info || console.log;
// };

// CustomLogger.prototype.error = function (msg) {
//     this.error(msg);
// };

// CustomLogger.prototype.info = function (msg) {
//     this.info(msg)
// };


// function logger(error, info, newInstance){
//     if(!_customLogger && !newInstance) {
//         _customLogger = new CustomLogger(error,info);
//         return _customLogger;
//     } else {
//         return _customLogger;
//     }
// }

var MonitorManager = function(){
    this.monitorData={};
};

MonitorManager.prototype.log = function (functionName,invokedTime,isSuceess){
    this.monitorData[functionName] = {
        function_name: functionName,
        last_invoke: invokedTime,
        suceess: isSuceess
    }
}

MonitorManager.prototype.get = function (){
    retrun (JSON.stringify(this.monitorData[functionName]));
}

module.exports = MonitorManager;