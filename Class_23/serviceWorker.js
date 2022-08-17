// serviceWorker faktiski darbojas kā starpniekserveris starp tīmekļa lietojumprogrammu un pārlūkprogrammu, 
// kā arī tīklu (ja pieejams). Tas ļauj (cita starpā) aprakstīt pareizu tīmekļa lietojumprogrammas bezsaistes darbību, 
// pārtvert tīkla pieprasījumus un veikt atbilstošas ​​darbības, pamatojoties uz tīkla pieejamību, un atjaunināt serverī
// esošos datus, kad tam tiek piekļūts. Viņiem ir arī piekļuve push paziņojumiem un fona sinhronizācijas API.

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw-test/sw.js', {scope: './sw-test/'})
  .then((reg) => {
    // регистрация сработала
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // регистрация прошла неудачно
    console.log('Registration failed with ' + error);
  });
}