var _monitorManager;

var Monitoring = function () {
    this.monitorData={};
};

Monitoring.prototype.log = function (functionName,invokedTime,isSuceess){

    var nowTime = new Date().getTime(); 

    var minutesFromLastInvoke = (nowTime - invokedTime);
    this.monitorData[functionName] = {
        function_name: functionName,
        last_invoke: invokedTime,
        suceess: isSuceess,
        minutesFromLastInvoke: minutesFromLastInvoke,
        nowTime: nowTime
    }
}

Monitoring.prototype.get = function (){
    return (this.monitorData);
}

var monitorManager = function(){
    if (!_monitorManager){
        _monitorManager = new Monitoring();
    }
    return _monitorManager; 
};

module.exports = monitorManager;