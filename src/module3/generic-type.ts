type User<T> = Array<T>;

const users2: User<string> = ["Sakil", "Anwar"];
const userCount: User<number> = [1, 2, 3, 4, 5];

type UserObj = {
  name: string;
  age: number;
};
const users3: User<UserObj> = [
  { name: "Sakil", age: 25 },
  { name: "Anwar", age: 30 },
];

// generic tuples

type customers<x, y> = [x, y];

const customers: customers<string, number> = ["Sakil", 30];

const customers2: customers<UserObj, number> = [{ name: "Sakil", age: 25 }, 30];


// key of


type TUser3 = {
  name: string;
  age: number;
  roll: number;
};

type KeyOfTuser3 = keyof TUser3;

const user4: KeyOfTuser3 = "roll";


function getProperty<X,Y extends keyof X>(obj:X,key:Y){
 return obj[key]
}

const property = getProperty({name:"Sakil"}, "name")