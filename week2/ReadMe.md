# Assignment week#2

This assignment was created for the Data Structure Course (PGDV 5110) at Parsons School of Design. 

[Details about this assignment](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_02.md)


## Goals

For this assignment, we explore new ways to parse diffrent html tags from the text file we've created last week to a new text file. 

The main purpose is to get just the string of street addresses, since we have many lines in the same Dom elements and the website creator use same html tag for diffrent values. We need to extract substrings from the fuller ones. 

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
var fs = require('fs');
var cheerio = require('cheerio');

// load the meeeting text file into a variable, `content`
// this is the file that we created in the starter code from last week (week 1)
var content = fs.readFileSync('08.txt');
// load `content` into a cheerio object
var $ = cheerio.load(content);
//remove Group
$('b').remove();
//remove Building name
$('h4').remove(); 
//remove 'get directions'
$('a').remove();
//remove 'meeting list ageenda'
$('h1').remove();
//remove all members of the dropdown list
$('option').remove();
//remove heading 
$('thread').remove();
//remove 'Address/Location'
$('th').remove();
//remove the notes
$('p').remove();
//remove Building name
$('label').remove();
//remove details on the date
$('br').remove();
//remove the meeting details
$('.detailsBox').remove();
//remove 'wheelchair access'
$('span').remove();
//assigning class to the first node of td tag
$('tr td:first-child').addClass ('address');


// write the street addresses to a text file
var streetAddress  = ''; // this variable will hold the lines of text
 $('.address').each(function(i, elem) {
     //split string into an array and grab the first item
     //replace the white space 
    streetAddress += ($(elem).text()).split(',', 1)[0].replace(/\n\s/g, " ").trim("")+'\n';
});
    
fs.writeFileSync('week2.txt',streetAddress);
```

## Contributors
- Chay Thawaranont (Main contributor)
- Aaron Hil (Advisor)

## Resources
- [Node got Module](https://www.npmjs.com/package/got#pagination)
- [JS Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
