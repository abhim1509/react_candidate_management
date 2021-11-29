const parsedJSON = (data: any) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

const isArrEmpty = (arr: any) => {
  return arr.length === 0;
};

export { parsedJSON, isArrEmpty };
