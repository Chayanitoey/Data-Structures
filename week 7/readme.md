# Week 7 
This week assignment is to parse all the data entries we may need in the further projects and make the data 'clean' and ready to be used. 

Thus, my final results are all in json files and consist of 3 diffrent json files that could potentially be installed as each individual tables.   Find more details about this assignment at [Data Structure](https://github.com/Chayanitoey/Data-Structures/tree/main/WEEK4)
## Process

- ***1st step : Planning on what I need to parse to the tables.***

Since I have 2 main tables that I planned to develop from [Week 4 assignment](https://github.com/Chayanitoey/Data-Structures/tree/main/WEEK4),  I would like to continue on developing on that thoughts. The tables are ***'Meetings'*** and ***'Addresses'*** and since we also need the geocodes to help us mapping out the location of each meetings, I have to create a third file called ***'All Addresses'*** where it has longitudes and latitudes of every location. 

- ***2nd step*** : Coding part\
1. start with the meetings, run ***'pullMeetings.js'*** which basically get all the text file (but selected only the information we need) and parse to json file ***'meetings.json'***

Example of the results : 

```bash
{
    "groupName": "EXCHANGE VIEWS",
    "day": "Monday",
    "start": "6:30 AM",
    "end": "7:30 AM",
    "meetingType": "C",
    "specialInterest": "Topic",
    "zone": 1
  },
  {
    "groupName": "EXCHANGE VIEWS",
    "day": "Tuesday",
    "start": "6:30 AM",
    "end": "7:30 AM",
    "meetingType": "C",
    "zone": 1
  },

```
2. continue working with the similar script but tweak the selections so we would only get information about the addresses. For this, I ran ***'pullAddresses.js'*** and parsed the data to ***'addresses.json'*** 

Example of the results : 

```bash
{
    "buildingName": "St. Margaret's House",
    "details": "11th Step Meditation (Mon), Topic (Thu)",
    "group": "SEAPORT",
    "address": "49 Fulton Street",
    "floor": "",
    "postalCode": 10038,
    "wheelChair": true,
    "zone": 1
  },
  {
    "buildingName": "Church of Saint Andrew",
    "details": "Step 1st Wednesday",
    "group": "TOWER",
    "address": "20 Cardinal Hayes Place",
    "floor": "",
    "postalCode": 10007,
    "wheelChair": false,
    "zone": 1
  }
```


- 3rd step : Adding Geocodes. 

Since I aim to have the meetings available to be viewed on a 'map', it is necessary to have longitudes and latitudes that could have us navigate the location on any open-source map. 

During this process, I ran the following script in a separated .js file to write just 'addresses' in json 

```javascript
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');


for (let i = 1; i < 11; i++) {
    parseContent(i); 
}    


async function parseContent(j){
    
const dataDir = await getPath(j) ;
var content = fs.readFileSync(dataDir);
var $ = cheerio.load(content);
var list=[];
console.log(j);


$('td[style="border-bottom:1px solid #e3e3e3; width:260px"]')       
    .each(function(i, elem){
        
       var entry = $(elem).text().split("\n").map(item => item.trim()).slice(2).filter(Boolean); 
       var details = getDetail(entry);
       list.push(details);

    });
  

 fs.appendFileSync('Alladdresses.json', JSON.stringify(list, null, 2)); 
}
    

function getDetail(a){
   
    var addresses = {
        address: a[1].slice(a[1].search(/\b\d/),a[1].length).split(',')[0],
    };
    
    return addresses;
}

function getPath(j){
  
    const name = __dirname + "/week 1/" + j + ".txt";
    return name;
}

```

Then, I ran the ***'addGeocodes.js'*** script file to fetch ***'longtitudes'*** and ***'latitudes'*** from the TAMU API.  The final results are installed in the ***'addAddresses.json'***



## Revise a diagram from week 4
![This is an image](/MeetingTable.jpg)

![This is an image](/AddressesTable.jpg)



## Contributing
- Chay Thawaranont 
- Aaron Hill (Advisor / Instructor)

## Related links
[Cheerio](https://cheerio.js.org/)
[TAMU API](https://geoservices.tamu.edu/)
