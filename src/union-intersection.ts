type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experence: number;
};

type SeniorDeveloper = JuniorDeveloper & {
  expertise: string;
  experience: number;
}
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Sakil Anwar",
  expertise: "React",
  experence: 1,
};

const seniorDeveloper : SeniorDeveloper = {
  name: "Sakil Anwar",
  expertise: "React",
  experence: 1,
  experience: 2
}

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Sakil Anwar",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}