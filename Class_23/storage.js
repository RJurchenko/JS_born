// Web Storage API "Storage" interfeiss nodrošina piekļuvi konkrēta domēna sesijai vai vietējai krātuvei. 
// Tas ļauj, piemēram, pievienot, modificēt vai dzēst saglabātos datu elementus.
// Lai manipulētu, piemēram, ar domēna sesijas krātuvi, tiek veikts izsaukums uz Window.sessionStorage; 
// turpretim vietējai krātuvei tiek zvanīts uz Window.localStorage.

if (!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem('bgcolor');
  const currentFont = localStorage.getItem('font');
  const currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}