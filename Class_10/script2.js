var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
// attelot summas ar divam zimem pec komata (punkta)
// palabot algoritmu - ja procentu izamksa notiek vienu reizi termina beigas
// izpētīt array
// jaunaja faila izmantot array sīm uzdevumam

var peljnja_1 = (nauda * 0.0001) * 1;
var peljnja_2 = (nauda * 0.0002) * 2;
var peljnja_3 = (nauda * 0.0003) * 3;
var peljnja_4 = (nauda * 0.0004) * 4;
var peljnja_5 = (nauda * 0.0005) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = peljnja_1;
document.getElementById("procenti_2").innerHTML = peljnja_2;
document.getElementById("procenti_3").innerHTML = peljnja_3;
document.getElementById("procenti_4").innerHTML = peljnja_4;
document.getElementById("procenti_5").innerHTML = peljnja_5;

const cars = ["Saab", "Volvo", "BMW"];
cars.sort()