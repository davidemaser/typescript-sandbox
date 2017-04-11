/// <reference path="../typings/tsd.d.ts" />
var getDataSets = {
    initDataFlow: function (common) {
        this.rowOutput = null;
    }
};
var buildDataOutput = (function () {
    function buildDataOutput(data, callback, utf) {
        this.data = data;
        this.callback = callback;
        this.utf = utf;
        this.dataBlock = $.merge(data, callback);
    }
    return buildDataOutput;
}());
new buildDataOutput('core.json', 'json', 'call this thing');
//# sourceMappingURL=app.js.map