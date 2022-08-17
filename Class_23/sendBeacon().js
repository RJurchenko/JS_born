// Metode navigator.sendBeacon() tiek izmantota, lai asinhroni nosūtītu nelielu informācijas apjomu, izmantojot HTTP, 
// uz tīmekļa serveri.
// Pārsūtot datus, tiek izmantota POST metode
// Izmantojot sendBeacon() metodi, dati uz serveri tiks nosūtīti asinhroni, tiklīdz pārlūkprogramma 
// atradīs tam piemērotāko laiku.

window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
