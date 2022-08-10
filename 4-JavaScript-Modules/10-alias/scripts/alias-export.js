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

export { company as perusahaan, sum as total, Company as Perusahaan }; //alias di export
