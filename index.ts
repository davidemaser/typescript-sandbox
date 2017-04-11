/**
 * Created by DAVIM on 11/04/2017.
 */
class Country {
    countryString : string;
    constructor(public countryCode,public countryName,public countryWeight){
        this.countryString = countryCode+':'+countryName+':'+countryWeight;
    }
}

interface Province {
    name : string;
    shortCode : string;
    weight : number;
}

let Locator = (province:Province) => {
    return 'You are in '+province.name+' also known as '+province.shortCode;
};

let myLoc = new Country('Ontario','ON',1);