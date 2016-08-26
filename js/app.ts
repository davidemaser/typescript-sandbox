/// <reference path="../typings/tsd.d.ts" />
declare var DataStore: any;
interface Common {
    dataRow:number;
    dataColumn:number;
    cell:string;
    selected:boolean;
}
var getDataSets = {
    initDataFlow:function(common:Common){
        this.rowOutput = null;
      }
};
class buildDataOutput{
    dataSource: string;
    dataFormat:string;
    dataBlock:any;
    constructor(public data, public callback, public utf) {
        this.dataBlock = $.merge(data,callback);
    }
}

new buildDataOutput('core.json','json','call this thing');