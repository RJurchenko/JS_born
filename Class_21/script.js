alert('Welcome to JavaScriptTutorial.net!');

let jsWindow = window.open(
  "file:///C:/Users/Chuck/Desktop/AB/JS_born/Class_21/Class_21.html",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=600,width=800"
);

setTimeout(() => {
  window.open("file:///C:/Users/Chuck/Desktop/AB/JS_born/Class_20/Class_20.html", "test");
  //window.open("https://www.w3schools.com/js/js_this.asp", "test");
}, 3000);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);// Will not work for third part resources because of CORS
}, 6000);

setTimeout(() => {
    jsWindow.close();
  }, 9000);

  setTimeout(() => {
    window.open("file:///C:/Users/Chuck/Desktop/AB/JS_born/Class_18/Class_18.html", "_blank");
  }, 12000);
  