const fs = require('fs')
var content =fs.readFileSync('week3.json')
var mydata =  JSON.parse(content);

for (let i = 0; i <= mydata.length; i++) {
    function makeData(){
        return mydata[i]
    }


const { InputAddress: {StreetAddress}} = makeData()
const { OutputGeocodes:[{OutputGeocode:{Latitude}}]} = makeData() 
const { OutputGeocodes:[{OutputGeocode:{Longitude}}]} = makeData() 
let writeAddress = `StreetAddress: ` + StreetAddress;
let writeLatitude = `Latitude: ` + Latitude;
let writeLongitude = `Longitude: ` + Longitude;

//** Checking if each one works 
// console.log(writeAddress); 
// console.log(writeLatitude);
// console.log(writeLongitude);

var obj = {
   Location: []
};


obj.Location.push(writeAddress,writeLatitude,writeLongitude);
console.log(obj.Location)

,function () {
    // fs.writeFileSync('final.json', JSON.stringify(obj.Location,null, 2))
}();


}





