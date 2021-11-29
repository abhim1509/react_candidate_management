import axios from "axios";

const getRequest = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    //Check response object, check response status and then check data retrieved.
    //Blank object and array return truthy values, need to check explicitly.
    //Optical chaining
    //false, null, undefined.
    const result =
      response && response.status === 200 && response?.data
        ? response.data
        : {};
    return result;
  } catch (error: any) {
    console.log(error);
    return {};
  }
};

const deleteRequest = async (url: string, params: any) => {
  try {
    const response = await axios.delete(url, params);
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

const postRequest = async (url: string, data: any, params: any) => {
  try {
    const response = await axios.post(url, data, params);
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

const putRequest = async (url: string, data: any, params: any) => {
  try {
    const response = await axios.put(url, data, params);
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

const patchRequest = async (url: string, data: any, params: any) => {
  try {
    const response = await axios.patch(url, data, params);
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getRequest, deleteRequest, postRequest, putRequest, patchRequest };
