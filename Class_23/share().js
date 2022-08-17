// Web Share API metode navigator.share() izsauc ierīces vietējo koplietošanas mehānismu,
// lai kopīgotu datus, piemēram, tekstu, URL vai failus. Pieejamie kopīgošanas mērķi ir 
// atkarīgi no ierīces, taču tie var ietvert klipbordu, kontaktus un e-pasta
// lietojumprogrammas, vietnes, Bluetooth utt.

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org'
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Share must be triggered by "user activation"  "Share" ir jāaktivizē lietotājam 
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = 'MDN shared successfully';
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
