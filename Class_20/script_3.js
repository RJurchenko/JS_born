const person = {
  firstName: "",
  lastName: "Doe",
  language: "",
  counter: 0,
  get_language: function () {
    return `${this.firstName} knows ${this.language}`;
  },
  set_language: function (firstName, lang) {
    this.firstName = firstName;
    this.language = lang;
  },
  get lang() {
    return `${this.firstName} knows ${this.language}`;
  },
  set lang([firstName, lang]) {
    this.firstName = firstName;
    this.language = lang;
  },
  set multiply(value) {
    //this.counter *= value;
    this.counter = this.counter * value;
  },
};

console.log(person);

// Define setters and getters
Object.defineProperty(person, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(person, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(person, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(person, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(person, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

console.log(person);

person.reset;
console.log(person.counter);
person.add = 5;
console.log(person.counter);
person.subtract = 1;
console.log(person.counter);
person.increment;
console.log(person.counter);
person.decrement;
console.log(person.counter);
person.multiply = 4;
console.log(person.counter);