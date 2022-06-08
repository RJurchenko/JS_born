//Uzrakstīt kodu ar diviem (trīm) mainīgajiem - 
//decimāla skaitļa pārveidošana par bināro secību.
//Papildu uzdevums - katru bināras secības simbolu attēlot tabulas atsevišķā šūnā.

var x = 60;
document.getElementById("dec").innerHTML = x;

/*
....................
*/
 y = '0b00101101';

// 'scope' - skripta bloks, nodalāms ar šādām iekavam - {}
// var atslēgas vārds ļauj nodefinēt globālo mainīgo  pieejams visā koda garumā

var a = 999;
console.log ("a vērtība (no 'galvenā zara'): "+a);

{
console.log ("a vērtība (no 'scope' - koda bloks, nodalāms ar šādām iekāvām - {}): "+a);
}

//let atslēgas vārds ļauj nodefinēt lokālo mainīgo - pieejams visā blokā norobežota
// ar {} - scope, vertība var tikt mainīta

let b = 555;
console.log ("b vērtība (no 'galvenā zara'): "+b);
{
    //console.log("b vērtība pirms pārdefinēšanās (no 'scope'):" +b);
    let b = 61;
    console.log("b vērtība pēc pārdefinēšanās (no 'scope'):" +b);
}

console.log("b vērtība (no 'galvenā zara' pēč scope):" +b);


//const atslēgas vārds ļauj nodefinēt lokālo konstanti - pieejams visā blokā norobežota
// ar {} - scope, vertība nevar tikt mainīta

const c = 100;
console.log ("c vērtība (no 'galvenā zara'): "+c);
{
 //console.log("c vērtība pirms pārdefinēšanās (no 'scope'):" +b);
 const c = 101;
 console.log("c vērtība pēc pārdefinēšanās (no 'scope'):" +c);
}

console.log("c vērtība (no 'galvenā zara' pēč scope):" +c);

let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
