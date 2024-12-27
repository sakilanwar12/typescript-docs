type Alphanumeric = string | number;

function add(a: Alphanumeric, b: Alphanumeric): Alphanumeric {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Parameters must be numbers or strings");
  }
}

type Cat = {
  type: "cat";
  meow: () => void;
};

type Dog = {
  type: "dog";
  bark: () => void;
};

type Pet = Cat | Dog;

function isCat(pet: Pet): pet is Cat {
  return pet.type === "cat";
}

// Usage
function handlePet(pet: Pet) {
  if (isCat(pet)) {
    pet.meow();
  } else {
    pet.bark();
  }
}

// Test
const myPet: Pet = { type: "cat", meow: () => console.log("Meow!") };
handlePet(myPet);
