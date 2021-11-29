export const setValue = (key: any, value: any) => {
  const storeVal = typeof value === "object" ? JSON.stringify(value) : value;
  localStorage.setItem(key, storeVal);
};

export const getValue = (key: any) => {
  return localStorage.getItem(key);
};
