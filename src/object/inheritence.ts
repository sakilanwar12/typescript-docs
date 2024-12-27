class Person {
  constructor(public name: string, public age: number) {}
  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

class Student extends Person {
  constructor(
    public name: string,
    public age: number,
    public studentId: number
  ) {
    super(name, age);
  }
  getStudentId() {
    return this.studentId;
  }
}

const sakil = new Student("Sakil Anwar", 25, 123);
sakil.introduce();