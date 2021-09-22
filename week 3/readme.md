# Assignment week#3

This assignment was created for the Data Structure Course (PGDV 5110) at Parsons School of Design. 

[Details about this assignment](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_03.md)


## Goals

For this assignment, we are parsing data from API to find matching geocodes (longitude and latitude)  
The main purpose is to 'ONLY get the data we need'. The challenge is on the data manipulation and how we should deconstructed the nested json arrays. 

Framework  : 

1. Preparing / formatting data from previous text file (week2.txt) I neeeded to modify the previous file by using this below script and run to rewrite 'week2.txt' file
2. Running the 'app.js' using the starter code provided by Aaron, the course instructor. We already have a beautifully formatted data from #1, we'll use the same data for storing the streeet addresses in the array. I also stored the data on week3.json in order to limit the amount of running time for the program. This will help me when I need to recheck/rerun the code. 
3. I created another .js file inorder to test & run the .json files (for both read and write). In this step, I have spent a lot of time on picking the right data( Thanks to https://www.youtube.com/watch?v=_ApRMRGI-6g, this explains step-by-step on how we can use the '{' to pick data. types and how to write them on another .json file. You can see below how I resolve the issue on the script section. 
4. Return Arrays in Final_week3.json **Note : for this process, I had to solve issue by pasting arrays in the console log to http://jsoneditoronline.org/#left=local.tafido&right=local.suquye ** 


## Script

```javascript
const fs = require('fs')
var content =fs.readFileSync('week3.json')
var mydata =  JSON.parse(content);

for (let i = 0; i < mydata.length; i++) {
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
