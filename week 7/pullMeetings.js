var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

//load the saved page HTML


for (let i = 1; i < 11; i++) {
   parseTime(i);
  }   



async function parseTime(j){

const dataDir = await getPath(j) ;
var content = fs.readFileSync(dataDir);
var $ = cheerio.load(content);

var list=[];


// pull 2nd table
$('td[style="border-bottom:1px solid #e3e3e3;width:350px;"]')       
    .each(function(i, elem){
    
    var group = $(elem).prev().find('b').text().split(' - ')[0].trim().split('(')[0].trim().split('@')[0].trim();
    var entry = $(elem).text().trim().replace(/\t/g,"").trim().split("\n");  
    var details;
    if (entry.length == 1)
      { 
       details = makeDetail(entry[0], group,j);
       list.push(details);

      } else {
        
        for (let i = 0; i< entry.length; i += 4){
        console.log(i);
          details = makeDetail(entry[i], group,j);
          list.push(details);
        }
      }
    });
    
    // pull 1st table

// $('.detailsBox') .each(function(i, elem){
//   var db = $(elem);
//   var detailDB;
// if (db.length == 1)
//       { 
//       detailDB = makeDetail(db[0]);
//       list.push(detailDB);

//       } else {
        
//         for (let i = 0; i< db.length; i += 4){
//         console.log(i);
//           detailDB = makeDetail(db[i]);
//           list.push(detailDB);
//         }
//       }
// });


fs.appendFileSync('meetings.json', JSON.stringify(list, null, 2));

}

function makeDetail(a,b,j){
    
    var strings;
    // var db;
    var s = a.search("Special Interest") + 17;
    if (s > 17) {
      strings = a.slice(s);
    }
    
    
    var entry = a.trim().split(' ');
    var day = getDay(entry[0]);
    

    var day1;
    if (entry[0] == "s"){ day1= "Sunday";} else { day1 = entry[0].slice(0, -1);} // Mondays -> Monday
    
    var data = {
    
      groupName: b,
      day: day1,
      start: entry[3] +' '+ entry[4],
      end: entry[6] +' '+ entry[7],
      meetingType: entry[10],
      specialInterest:strings,
      // details: db,
      zone: j
      
    };
    
    return data;
}

function changeTime(a,b){
  var h;
  if (b == "PM") {
     
     if (a.split(":")[0] =="12"){
        h = '12'; 
     } else {
        h =parseInt(a.split(":")[0],10) + 12;
     };
 
  } else if (a.split(":")[0] =="10" || a.split(":")[0] =="11" ){
        h = a.split(":")[0];
       
  } else if (a.split(":")[0] =="12"){
        h = '00';
        
  } else {
        h = '0'+ a.split(":")[0];
    }
    
    return h.toString() + a.split(":")[1];
}

function getDay(b){
var day;
switch (b) {
  case "Sundays":
    day = 0;
    break;
  case "Mondays":
    day = 1;
    break;
  case "Tuesdays":
     day = 2;
    break;
  case "Wednesdays":
    day = 3;
    break;
  case "Thursdays":
    day = 4;
    break;
  case "Fridays":
    day = 5;
    break;
  case "Saturdays":
    day = 6;
    break;
  case "s": 
    day = 0;
    break;
}

return day;
}



function getPath(j){
  
    const name = __dirname + "/week 1/" + j + ".txt";
    return name;
}