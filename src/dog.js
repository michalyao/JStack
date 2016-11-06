class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `... I am ${this.name}`;
  }
}

module.exports = Dog;