type UserAddress = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

type UserTypes = {
   readonly name: "Sakil Anwar";
    age: number;
    isAdmin: boolean;
    address: UserAddress;
};

const user: UserTypes = {
    name: "Sakil Anwar",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};
