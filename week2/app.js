// npm install cheerio
// mkdir data

var fs = require("fs");
var cheerio = require("cheerio");

// load the meeeting text file into a variable, `content`
// this is the file that we created in the starter code from last week (week 1)
var content = fs.readFileSync("08.txt");
// load `content` into a cheerio object
var $ = cheerio.load(content);
//remove Group
$("b").remove();
//remove Building name
$("h4").remove();
//remove 'get directions'
$("a").remove();
//remove 'meeting list ageenda'
$("h1").remove();
//remove all members of the dropdown list
$("option").remove();
//remove heading
$("thread").remove();
//remove 'Address/Location'
$("th").remove();
//remove the notes
$("p").remove();
//remove Building name
$("label").remove();
//remove details on the date
$("br").remove();
//remove the meeting details
$(".detailsBox").remove();
//remove 'wheelchair access'
$("span").remove();
//assigning class to the first node of td tag
$("tr td:first-child").addClass("address");

// write the street addresses to a text file
var streetAddress = ""; // this variable will hold the lines of text
$(".address").each(function (i, elem) {
  //split string into an array and grab the first item
  //replace the white space
  streetAddress +=
    $(elem).text().split(",", 1)[0].replace(/\n\s/g, " ").trim("") + "\n";
});

fs.writeFileSync("week2.txt", streetAddress);

//Check for arrays
//RegExp.prototype[@@split]() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split
//The [@@split]() method splits a String object into an array of strings by separating the string into substrings.

class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `Street Addresses: ${x} `.trim());
  }
}
var addresses = streetAddress.split(new RegExp1("\n"));
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
addresses.forEach(logArrayElements);
