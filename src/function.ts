function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

const numArr = [1, 2, 3, 4, 5];

const multiply = numArr.map((num: number) => num + num);

const customer: {
  name: string;
  age: number;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Sakil Anwar",
  age: 25,
  balance: 0,
  addBalance(money: number): void {
    this.balance += money;
  },
};
