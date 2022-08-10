export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`hello ${name}, my name is ${this.name}`);
  }
}
