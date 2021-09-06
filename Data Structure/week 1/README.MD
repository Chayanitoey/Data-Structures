# First Assignment 

This assignment was created for the Data Structure Course (PGDV 5110) at Parsons School of Design. 


[Details about this assignment](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_01.md)

## Goals

In this assignment, the purpose is to scrape data from various URLs ( in this case, they are diffrent zones of AAA meetings in Manhattan)  to diffrent text files (each file represents the zone of those meetings). There are 10 urls and 10 text files where each has unique data set. 
 

Framework  : 
1. Create all variables or constants which will be required in the code. 
2. Install node.js (Javascript Library) in order to perform the function 'got' and 'fs'
3. Create a loop that allows us to pull data from each urls to each text files. This will simplify the codes and we don't have to duplicate the same function for every url. 


Install these by open in terminal : 

```bash
npm install -g npm
```

Or check if it's already installed : 
```bash
node -v
npm -v
```
Install got and read data
```bash
npm install got
```
```bash
mkdir data
```

## Final Product

```javascript
const fs = require('fs'); 
// file system is preinstalled
const got = require('got');
const request = require('request-promise');

const urls = ['https://parsons.nyc/aa/m01.html',
              'https://parsons.nyc/aa/m02.html', 
              'https://parsons.nyc/aa/m03.html', 
              'https://parsons.nyc/aa/m04.html', 
              'https://parsons.nyc/aa/m05.html', 
              'https://parsons.nyc/aa/m06.html',
              'https://parsons.nyc/aa/m06.html',
              'https://parsons.nyc/aa/m07.html',
              'https://parsons.nyc/aa/m08.html',
              'https://parsons.nyc/aa/m09.html',
              'https://parsons.nyc/aa/m010.html'];
           
const text =['1.txt','2.txt','3.txt',
             '4.txt','5.txt','6.txt','7.txt','8.txt','9.txt','10.txt'];

(async () => {	

  for (let i = 0; i < urls.length; i++) {
    // for loop will wait for promise to resolve
    const url = urls[i];
    const response = await got (url);
    console.log (response.body);
    fs.writeFileSync(text[i],response.body); 
  }})();

```

## Contributors
- Chay Thawaranont (Main contributor)
- Aaron Hil (Advisor)

## Learn more
- [Node got Module](https://www.npmjs.com/package/got#pagination)
- [Node fs Module](https://nodejs.org/api/fs.html)


