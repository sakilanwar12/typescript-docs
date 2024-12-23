let userName: any;

userName = "Sakil Anwar";

(userName as string).toUpperCase();

function kgToGram(weight: number | string): number | string | undefined {
  let value;
  if (typeof weight === "number") {
    value = weight * 1000;
    return `Weight: ${value} gram`;
  }
  if (typeof weight === "string") {
    value = parseFloat(weight) * 1000;
  }
}

const result1 = kgToGram(1200) as number;
const result2 = kgToGram("1200") as string;

type CustomErrorType = {
    message:string
}

try{

} catch(err ){
    console.log((err as CustomErrorType).message)
}