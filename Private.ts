class User {
  email: String;
  private name: String;
  age: number;
  readonly dob: String;
  constructor(email: String, name: String, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

class User2 {
  readonly dob: String;

  constructor(public email: String, public name: String, private age: number) {}
}

const userData = new User("abc@gmail.com", "suyog", 12);
// userData.name;
