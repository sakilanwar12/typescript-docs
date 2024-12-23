const searchName = (value: string | null | undefined) => {
  if (value) {
    console.log(value);
  } else {
    console.log("Not found");
  }
};


const getCardSpeed = (speed:unknown) => {
  if (typeof speed === "number") {
     const convertEdSpeed = speed * 3.6;
     console.log(convertEdSpeed);
  } 
  if(typeof speed === "string") {
    const convertEdSpeed = parseFloat(speed) * 3.6;
    console.log(convertEdSpeed);
  }
}


const throwError = (message: string): never => {
  throw new Error(message);
}

throwError("Something went wrong");