type TUser = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

const user2: TUser = {
  name: "sakil",
  age: 20,
};

type TAdmin = TUser &{
    role:string
}
interface IAdmin extends IUser {
  role: string;
}

const admin: TAdmin = {
  name: "Tamim",
  age: 12,
  role: "Admin",
};


type addNumber = (num1:number,num2:number)=>number;
const addNumber:addNumber = (num1,num2)=>num1+num2;