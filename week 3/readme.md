# Assignment week#3

This assignment was created for the Data Structure Course (PGDV 5110) at Parsons School of Design. 

[Details about this assignment](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_03.md)


## Goals

For this assignment, we are parsing data from API to find matching geocodes (longitude and latitude)  
The main purpose is to 'ONLY get the data we need'. The challenge is on the data manipulation and how we should deconstructed the nested json arrays. 

Framework  : 

1. Install cheerio to select html tags 
2. Remove unnecessary elements from the text file (this will also help if we need to get any of them later on)
3. Select the first child of the html tag that holds value of street addresses, split string by ',' and remove white spaces. 
4. Read & Write the files 

First set up the environment, Install these by open in terminal : 

```bash
npm install -g npm
```

Or check if it's already installed : 
```bash
node -v
npm -v
```
Install cheerio and read data
```bash
npm install cheerio
```
```bash
mkdir data
```

## Script

```javascript
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
    fs.writeFileSync('final.json', JSON.stringify(obj.Location,null, 2))
}();


}
```

## Contributors
- Chay Thawaranont (Main contributor)
- Aaron Hil (Advisor)

## Resources
- [API](https://www.npmjs.com/package/got#pagination)
- [JSON Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JSON read & write](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
