
/*

Dalam JavaScript, presedensi (precedence) mengacu pada aturan yang menentukan urutan evaluasi operator dalam ekspresi. Ketika ada lebih dari satu operator dalam satu ekspresi, presedensi digunakan untuk menentukan operator mana yang dievaluasi terlebih dahulu.

Berikut adalah beberapa aturan presedensi yang umum digunakan dalam JavaScript:

    Presedensi Operator Aritmatika: Operator aritmatika seperti perkalian (*), pembagian (/), dan penjumlahan (+) memiliki presedensi yang berbeda. Perkalian dan pembagian memiliki presedensi yang lebih tinggi dibandingkan dengan penjumlahan. Contoh: 2 + 3 * 4 akan dievaluasi sebagai 2 + (3 * 4).

    Presedensi Operator Perbandingan: Operator perbandingan seperti >, <, >=, <= memiliki presedensi yang lebih rendah dibandingkan dengan operator aritmatika. Contoh: 2 + 3 > 4 akan dievaluasi sebagai (2 + 3) > 4.

    Presedensi Operator Logika: Operator logika seperti && (AND) dan || (OR) memiliki presedensi yang lebih rendah dibandingkan dengan operator perbandingan. Contoh: 2 + 3 > 4 && 5 < 6 akan dievaluasi sebagai (2 + 3 > 4) && (5 < 6).

    Presedensi Operator Ternary: Operator ternary (?:) memiliki presedensi yang paling rendah. Contoh: x > 0 ? "Positive" : "Negative" akan dievaluasi sebagai (x > 0) ? "Positive" : "Negative".

Dalam kasus yang sama, operator dengan presedensi yang lebih tinggi akan dievaluasi terlebih dahulu sebelum operator dengan presedensi yang lebih rendah. Jika ada operator dengan presedensi yang sama, urutan evaluasi ditentukan oleh asosiativitas operator (misalnya, operator aritmatika seperti + dan - memiliki asosiativitas kiri ke kanan).

Jika ada ketidakjelasan dalam urutan evaluasi, disarankan untuk menggunakan tanda kurung () untuk mengelompokkan ekspresi secara eksplisit dan menghindari ambigu. Dengan menggunakan tanda kurung, kita dapat mengatur urutan evaluasi sesuai dengan kebutuhan yang diinginkan





   - grouping is simply using brackets. They take precedence over the other operators, so we can use them to force the execution of operations to take priority;
    field access (member access) is the operator used in dot notation, which is when accessing a selected object field. It takes precedence over other operators (except for brackets), so for example the instruction:

  -  let x = myObject.test + 10; means that the value of the test field of the myObject object will be fetched first, then we will add a value of 10 to it, and the result will go to the x variable;
    function call precedence tells us that if we call a function, this action will take priority over other operations, except for grouping in brackets and the field access operator (dots). So in the example:

   -  let y = 10 + myFunction() ** 2; myFunction will be called first, the result returned by it will be raised to power 2, and only then we will add 10 to the total and save the result to variable y.


*/

let a, b;
b = (a = (20 + 20) * 2)    > (3 ** 2);
console.log(a); // -> 80
console.log(b); // -> true
let str ="102"
str = -str
console.log(str)
console.log("abcd">"Abcd")


let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined



docker container create --mount "type=volume,source=postgrevolume,destination=/var/lib/postgresql/data" -e POSTGRES_PASSWORD=123 postgres
