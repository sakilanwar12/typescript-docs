type AreaNumber = {
  height: number;
  width: number;
};

type a = AreaNumber["height"];
type b = AreaNumber["width"];
type area = AreaNumber[keyof AreaNumber];

const rectangleArea = (rect: AreaNumber) => rect.height * rect.width;

type Volumn = {
  height: number;
  width: number;
  depth: number;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number; depth: number }> = {
  height: 10,
  width: 20,
  depth: 30,
};
