var myRe = new RegExp('(a.c)d', 'g');
var myArray = myRe.exec('eaxcdaycdacdaazcdc');
console.log(myArray); // [ "axcd", "axc" ]
console.log(myRe.lastIndex); // 5
 
myArray = myRe.exec('eaxcdaycdacdaazcdc');
console.log(myArray); // [ "aycd", "ayc" ]
console.log(myRe.lastIndex); // 9
 
myArray = myRe.exec('eaxcdaycdacdaazcdc');
console.log(myArray); // [ "azcd", "azc" ]
console.log(myRe.lastIndex); // 17
 
myArray = myRe.exec('eaxcdaycdacdaazcdc');
console.log(myArray); // null
console.log(myRe.lastIndex); // 0

var myRe = /a.cd/;
var result = myRe.test('eaxcda');
console.log(result); // true

var text = 'Have passions for JavaScript and pass the exam';
var position = text.search(/pass/);
console.log(position); // 5

var position = text.search('pass');
console.log(position); // 5

var text = 'eaxcdaycdacdaazcdc';
var myArray = text.match(/(a.c)d/);
console.log(myArray); // [ "axcd", "axc" ]

var text = 'eaxcdaycdacdaazcdc';
var myArray = text.match(/(a.c)d/g);
console.log(myArray); // [ "axcd", "aycd", "azcd" ]

var text = 'The car is mine and the bike is yours.';
var result = text.replace(/is/, 'was');
console.log(result); // The car was mine and the bike is yours.

var text = 'The car is mine and the bike is yours.';
var result = text.replace(/is/g, 'was');
console.log(result); // The car was mine and the bike was yours.

var text = 'This is "ordinary phrase". And that is #special sentence#.';
var result = text.replace(/"(.*)"(.*)#(.*)#/, '"$3"$2#$1#');
console.log(result); // This is "special sentence". And that is #ordinary phrase#.

var carList = 'Opel, Ford, Toyota, Renault, Audi';
var carArray = carList.split(/,&#92;s*/);
console.log(carArray); // [ "Opel", "Ford", "Toyota", "Renault", "Audi" ]