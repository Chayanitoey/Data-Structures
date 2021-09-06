// npm install got 
// mkdir data >> make new directory

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
           
const text = ['1.txt','2.txt','3.txt','4.txt','5.txt','6.txt','7.txt','8.txt','9.txt','10.txt'];


(async () => {	

  for (let i = 0; i < urls.length; i++) {
    // for loop will wait for promise to resolve
    const url = urls[i];
    const response = await got (url);
    console.log (response.body);
    fs.writeFileSync(text[i],response.body); 
  }})();
