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

const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length !== 0 ? obj : {};
};
export { parsedJSON, isObjectEmpty };
