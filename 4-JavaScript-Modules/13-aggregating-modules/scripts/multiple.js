const company = "Otniel Corp";

function sum(x, y) {
  return x + y;
}

class Company {
  constructor(name) {
    this.name = name;
    console.info(`Company Name : ${this.name}`);
  }
}

export { company, sum, Company }; //multiline export
