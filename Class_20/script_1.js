const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  get_language: function(){
      return `${this.firstName} knows ${this.language}`;  
  },
  set_language: function(lang){
      this.language = lang;  
  },
  get lang() {
    return `${this.firstName} knows ${this.language}`;
  },
  set lang(lang) {
      this.language = lang;
    }
};

// Set data from the object using data property:
person.language = "ee";
document.getElementById("demo1").innerHTML = person.lang;

// Set data to the object using method:
person.set_language("lt");
document.getElementById("demo2").innerHTML = person.lang;

// Set data to the object using a setter:
person.lang = "lv";
document.getElementById("demo3").innerHTML = person.lang;

