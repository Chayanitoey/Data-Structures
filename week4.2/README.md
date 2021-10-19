# Assignment 4.2

Created as part of the Data structure course, Parsons School of design, find more details at [Prompt on Github](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_042_52.md)

For this assignment, there are 3 files : 

1. **W_4a** is a script to create a data table for our previous data set ( AA meetings in New York City in Zone 8) we will store our data in the table to execute the following tasks. 
2. **W_4b** is a script to populate all items in our array to the table we created in the W_4a ; note that after running this script, you will not see the end result in this script.
3. **W_4c** is a script to check if all our items are correctly shown in the table. We will print out the items to the console to recheck the whole process.


This assignment includes two SQL sample statements using pg module in Node:


## Installation

Install pg, a node-postgres
 [npm pg](https://www.npmjs.com/package/pg), a Non-blocking PostgreSQL client for Node.js.

```bash
npm i pg
```

## Starting script 
Note that user name and credential host should be changed based on your IDE on AWS 
```javascript
const { Client } = require('pg');  
const dotenv = require('dotenv');
dotenv.config();  

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'Chayanitoey';
db_credentials.host = 'data-structures.cik9syzps2kv.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;
```



## Preview of W_4a
```javascript
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aalocations (address varchar(100), 
lat double precision, long double precision);";

// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aalocations;"; 

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

```

## Preview of W_4b
```javascript

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.StreetAddress + "', " + value.Latitude + ", " + value.Longitude + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 
```


## Preview of W_4c
```javascript

const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query the entire contents of a table: 
var thisQuery = "SELECT * FROM aalocations;";

client.query(thisQuery, (err, res) => {
    console.log(err, res.rows);
    client.end();
});
```



## Out come

```javascript
{
    address: '63 Fifth Ave, New York, NY',
    lat: 40.7353041,
    long: -73.99413539999999
  },
  {
    address: '16 E 16th St, New York, NY',
    lat: 40.736765,
    long: -73.9919024
  },
  {
    address: '2 W 13th St, New York, NY',
    lat: 40.7353297,
    long: -73.99447889999999
  },
  {
    address: '109 W 129TH ST New York NY',
    lat: 40.8105033439451,
    long: 73.9438349756133
  },
  {
    address: '240 W 145TH ST New York NY ',
    lat: 40.8220449603096,
    long: -73.9402738669626
  },
  {
    address: '469 W 142ND ST New York NY ',
    lat: 40.8232200234845,
    long: -73.9485449135295
  },
  {
    address: '204 W 134TH ST New York NY ',
    lat: 40.8146053686072,
    long: -73.9443570754889
  },
  {
    address: '2044 ADAM CLAYTON POWELL BLVD New York NY ',
    lat: 40.8072665297278,
    long: -73.9499061022154
  },
  {
    address: '469 W 142ND ST New York NY ',
    lat: 40.8232200234845,
    long: -73.9485449135295
  },
  {
    address: '521 W 126TH ST New York NY ',
    lat: 40.8144929933342,
    long: -73.9558896362264
  },
  {
    address: '109 W 129TH ST New York NY ',
    lat: 40.8105033439451,
    long: -73.9438349756133
  },
  {
    address: '469 W 142ND ST New York NY ',
    lat: 40.8232200234845,
    long: -73.9485449135295
  },
  {
    address: '2044 SEVENTH AVE New York NY ',
    lat: 40.8071759186691,
    long: -73.9497519327616
  },
  {
    address: '127 W 127TH ST New York NY ',
    lat: 40.8094766772235,
    long: -73.9452613355488
  },
  {
    address: '310 W 139TH ST New York NY ',
    lat: 40.8190256453939,
    long: -73.9448681362397
  }
```

## Contributing
- Chay Chayanit Thawaranont (coder) 
- Aaron Hill (advisor)



