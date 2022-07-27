let jsWindow = window.open(
  "file:///C:/Users/Chuck/Desktop/AB/JS_born/Class_17/Class_17.html",
  "about",
  "height=600,width=800"
);

setTimeout(() => {
  window.open("file:///C:/Users/Chuck/Desktop/AB/JS_born/Class_20/Class_20.html", "about");
}, 3000);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);
}, 6000);

setTimeout(() => {
    jsWindow.close();
  }, 9000);