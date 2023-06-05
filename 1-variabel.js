  
// penampung
var colour = "Purple";
console.log(colour);
 
/*
Ada 3 cara membuat variabel :   var, let dan const
1. var
-var ini  disimpan di global scope, sehingga mengakibatkan memory heap
- hoisting/ di define undifened oleh js 
 */
 /*
 2. let
- no hoisting
- disimpan didalam blok scope,  (tidak dapat dipanggil dari luar bloknya)
 */
let address = "Lampung";
console.log(address);

/*
3. const
- tidak akan terkena hosting,
- const tidak bisa re-aasign nilai
 */
const food = "Chicken";
console.log(food);
