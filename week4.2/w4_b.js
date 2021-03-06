const { Client } = require('pg');
var async = require('async');  
const dotenv = require('dotenv');
dotenv.config();  

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'Chayanitoey';
db_credentials.host = 'data-structures.cik9syzps2kv.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// const fs = require('fs');
// var myObject =fs.readFileSync('week 3/final.json');

// var addressesForDb = JSON.parse(myObject);
// console.log(addressesForDb)
// // for (var i = 0; i < addressesForDb.length; i++) {
// //     var addressees = addressesForDb[i].StreetAddress;
// //     var lat = addressesForDb[i].Latitude;
// //     var long = addressesForDb[i].Longitude;
// //     console.log(addressees,lat,long);
// // }

 var addressesForDb = [
  {
   StreetAddress: '109 W 129TH ST New York NY',
   Latitude:'40.8105033439451',
   Longitude: '73.9438349756133'
 },
  {
    StreetAddress: '240 W 145TH ST New York NY ',
    Latitude: '40.8220449603096',
    Longitude: '-73.9402738669626'
 },
 {
    StreetAddress: '469 W 142ND ST New York NY ',
    Latitude: '40.8232200234845',
    Longitude: '-73.9485449135295'
 },
 {
  StreetAddress: '204 W 134TH ST New York NY ',
    Latitude: '40.8146053686072',
    Longitude: '-73.9443570754889'
 },
 {
    StreetAddress: '2044 ADAM CLAYTON POWELL BLVD New York NY ',
    Latitude: '40.8072665297278',
    Longitude: '-73.9499061022154'
 },
 {
    StreetAddress: '469 W 142ND ST New York NY ',
    Latitude: '40.8232200234845',
    Longitude:'-73.9485449135295'
  },
 {
    StreetAddress: '521 W 126TH ST New York NY ',
    Latitude:'40.8144929933342',
    Longitude: '-73.9558896362264'
},
 {
  StreetAddress: '109 W 129TH ST New York NY ',
  Latitude: '40.8105033439451',
  Longitude: '-73.9438349756133'
 },
 {
  StreetAddress: '469 W 142ND ST New York NY ',
  Latitude: '40.8232200234845',
 Longitude: '-73.9485449135295'
 },
 {
   StreetAddress: '2044 SEVENTH AVE New York NY ',
   Latitude: '40.8071759186691',
   Longitude: '-73.9497519327616'
 },
 {
   StreetAddress: '127 W 127TH ST New York NY ',
   Latitude: '40.8094766772235',
    Longitude: '-73.9452613355488'
},
{
  StreetAddress: '310 W 139TH ST New York NY ',
    Latitude: '40.8190256453939',
    Longitude: '-73.9448681362397'
    },
  {
 StreetAddress: '409 W 141ST ST New York NY ',
    Latitude:'40.8215326572652',
    Longitude: '-73.9464830279892'
},
 {
  StreetAddress: '91 CLAREMONT AVE New York NY ',
    Latitude: '40.8119642222478',
    Longitude: '-73.9625130600971'
 },
 {
 StreetAddress: '1727 AMSTERDAM AVE New York NY ',
    Latitude: '40.8255',
    Longitude: '-73.9472'
 },
 {
   StreetAddress: '469 W 142ND ST New York NY ',
    Latitude: '40.8232200234845',
    Longitude: '-73.9485449135295'
 },
 {
   StreetAddress: '91 CLAREMONT AVE New York NY ',
    Latitude: '40.812',
    Longitude: '-73.9625'
},
 {
 StreetAddress: '219 W 132ND ST New York NY ',
    Latitude: '40.8136938017217',
    Longitude: '-73.9455988432903'
 },
 {
StreetAddress: '211 W 129TH ST New York NY ',
    Latitude: '40.811646918986',
    Longitude: '-73.9465692736586'
 },
 {
   StreetAddress: '425 W 144TH ST New York NY ',
    Latitude: '40.8238859925299',
    Longitude: '-73.9462723904462'
 },
  {
   
    StreetAddress: '204 W 134TH ST New York NY ',
    Latitude: '40.8146053686072',
    Longitude: '-73.9443570754889'
},
 {
   StreetAddress: '506 LENOX AVE New York NY ',
    Latitude: '40.8143',
    Longitude: '-73.9403'
 },
 {
  StreetAddress: '1727 AMSTERDAM AVE New York NY ',
    Latitude: '40.8255371320577',
    Longitude: '-73.9471630832303'
 },
 {
   StreetAddress: '1854 AMSTERDAM AVE New York NY ',
    Latitude: '40.8295984557205',
    Longitude: '-73.9446555334471'
 },
 {    StreetAddress: '469 W 142ND ST New York NY ',
    Latitude: '40.8232200234845',
    Longitude: '-73.9485449135295'
},
 {
    StreetAddress: '5866 W 135TH ST New York NY ',
    Latitude: '40.6639307188879',
    Longitude: '-73.9382749875207'
  }
]

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
