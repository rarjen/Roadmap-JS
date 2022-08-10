export class Person {
  constructor() {
    this.name = "kevin";
  }
  sayHello(name) {
    console.info(`hello ${name}, my name is ${this.name}`);
  }
}
