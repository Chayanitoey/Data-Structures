# Assignment 5.2

Created as part of the Data structure course, Parsons School of design, find more details at [Prompt on Github](https://github.com/visualizedata/data-structures/blob/master/weekly_assignment_042_52.md)

For this assignment, there are 2 parts : 

1. **Part A** Creating a database, and pushing all items. In this script, we need to carefully define Primary key and Sort keys. 

2. **Part B** Populating my database. 
To install the data on DynamoDB, we also have to set up permissions for your Cloud9 EC2 instance to be able to access DynamoDB. Find more detail on the assignment details page. 



## Installation
Use the AWS SDK for JavaScript to work with your DynamoDB table in Node.js. Install with:

```bash
npm install aws-sdk
```

## Part A
Note that user name and credential host should be changed based on your IDE on AWS 
```javascript
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-2";

var dynamodb = new AWS.DynamoDB();

var blogEntries = [];

class BlogEntry {
  constructor(Id, City, Season,Gender,Type, Year, Brand, Designer, Description) {
    this.Id = {};
    this.Id.N = Id.toString();
    
    this.City = {};
    this.City.S = City;
    
    this.Season = {};
    this.Season.S = Season;
    
    this.Gender = {};
    this.Gender.S = Gender;
    
    this.Type = {};
    this.Type.S = Type;
    
    this.Year = {}; 
    this.Year.S = Year;
    
    this.Brand = {}; 
    this.Brand.S = Brand;
    
    this.Designer = {}; 
    this.Designer.S = Designer.toString();
    
    this.Description = {}; 
    this.Description.S = Description.toString();
    
  }
}

/// insert data from CSV or excel word file

blogEntries.push(new BlogEntry(0,
'Paris',
'Spring-Summer',
'Women',
'Ready-to-Wear',
'2022',
'Amiri',
'Mike Amiri',
'Amiri often showed menswear and womenswear together on its runways in Paris, with women in longline seafoam suiting and boxy leather jackets slotting almost anonymously into Mike Amiri’s men’s lineup. The pandemic and its related lockdowns gave him a moment to reconsider exactly who the Amiri woman is and what she’d want to wear. The 22 looks shown here, for spring 2022, are no longer the addendum to a cool dude parade, but their own sure-footed proposition for how women should dress.'
));


blogEntries.push(new BlogEntry(1,
'New York City',
'Fall-Winter',
'Women',
'Ready-to-Wear',
'2020',
'Peter Do',
'Peter Do',
'Moda Operandi’s Lisa Aiken hosted a dinner for Peter Do a couple of weeks ago. The e-tailer had just launched its first Do trunk show and gathered other supporters to celebrate, but it was no ordinary fashion night out. First there was the location: a Taiwanese restaurant in Bushwick called Win Son—delicious. Then there was the karaoke party that accompanied dessert. Rare is the industry occasion when a designer belts out his favorite tune—in this case, The Backstreet Boys’s “As Long As You Love Me”—but Do is confident as hell, and determined to do things his own way, and he has good reason. Fall is his fourth collection, and he’s already landed 40 of the top stores globally.'
));



blogEntries.push(new BlogEntry(2,
'London',
'Spring-Summer',
'Women',
'Ready-to-Wear',
'2021',
'Christopher Kane',
'Christopher Kane',
'People’s true colors have been coming out this London Fashion Week. Now that the shows are out and what personal contact possible with designers reduced to carefully managed COVID-secure appointments, there is nevertheless a better opportunity for honest conversations and understanding where designers’ creativity stems from. In Christopher Kane’s case, it’s been reverting to painting with multicolored glitter as he did as a kid that’s got him back to who he is.'
));

```



## Part B
```javascript
 // Create a for loop function to get all data rows 
const params = blogEntries.map(myFunction);

function myFunction(value) {
  return value;
}
    console.log(params);


// push to dynamo db
 
params.TableName = "RunwayCollections";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

console.log(params);

```


## Outcome

Insert screenshot 
![](week5.2/DynamoDB.jpg)

>> 


## Contributing
- Chay Chayanit Thawaranont (coder) 
- Aaron Hill (advisor)

