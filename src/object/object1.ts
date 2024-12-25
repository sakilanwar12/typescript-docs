class UUser {

  constructor(public name: string,public age: number) {

  }
  getUserName(): string {
    return this.name;
  }
  getUserAge(): number {
    return this.age;
  }
  getFullName(): string {
    return `${this.name} ${this.age}`;
  }
}

const userObj = new UUser("Sakil Anwar", 25);
console.log(userObj.getUserName());
console.log(userObj.getUserAge());
console.log(userObj.getFullName());