
const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'Chayanitoey';
db_credentials.host = 'data-structures.cik9syzps2kv.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = 'process.env.AWSRDS_PW';
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query addresse from aa locations: 
var thisQuery = "SELECT address FROM aalocations";

client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});
;
