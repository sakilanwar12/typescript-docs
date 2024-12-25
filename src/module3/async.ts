const makePromise = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const data: string = "Sakil";
    if (data) {
      resolve(data);
    } else {
      reject("Data not found");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
