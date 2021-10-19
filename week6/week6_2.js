
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
