/*
 
Truthy -> Nilai yang dianggap benar
Falsy -> Nilai yang dianggap salah

Nilai falsy 
1. false
2. 0
3. -0
4. ""
5. null
6. undefined
7. NaN

Selain nilai2 diatas merupakan nilai truthy
    
 */

let score = 100;

// 1. If else
if (score > 80) {
    console.log("Lulus    ");
}   else {
    console.log("Tidak lulus")
}

let grade = "A";

// 2. Switch case
switch (grade) {
    case "A":
        console.log("Lulus   baik");
        break;
    case "B":
        console.log("Lulus");
        break;
    default:
        console.log("Tidak Lulus");
}
