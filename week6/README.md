# Assignment 6

Created as part of the Data structure course, Parsons School of design, find more details at [Prompt on Github](https://github.com/visualizedata/data-structures/tree/master/weekly_assignment_06)

For this assignment, there are 2 script files : 

1. **week6_1** Part One is writing and executing a query for my AA data PostgreSQL, in this assignment I iterated the data I created on assignment 4.2. I made a request to return ONLY the addresses. 

2. **week6_2** Part Two is the continue of week 5.2 assignment, I wrote and executed a query for my Runway collection data sets from DynamoDB



##  Part One ( Week6_1) 
Note that user name and credential host should be changed based on your IDE on AWS 


## Installation

```bash
npm install i pg
```


```javascript

const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'Chayanitoey';
db_credentials.host = 'data-structures.cik9syzps2kv.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query 'addresses' from aalocations: 
var thisQuery = "SELECT address FROM aalocations";

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});
;

```



## Part Two (Week6_2) 


**Installation**
Use the AWS SDK for JavaScript to work with your DynamoDB table in Node.js. Install with:

```bash
npm install aws-sdk
```


```javascript

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-2";

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "RunwayCollections",
    KeyConditionExpression: " Id = :idNum", // the query expression
    FilterExpression: "Brand = :name",
    ExpressionAttributeValues: { // the query values
        ":idNum": {N: "0"},
        ":name": {S: "Amiri"},
    }
};

dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});


```


## Out come

Insert screenshot 




## Contributing
- Chay Chayanit Thawaranont (coder) 
- Aaron Hill (advisor)



