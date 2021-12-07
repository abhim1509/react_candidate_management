import axios from "axios";

const getRequest = async (url: string, token: string) => {
  try {
    //console.log("getRequest")
    const response = await axios.get(url, {
      headers: { authorization: token },
    });
    //console.log("getRequest -response.data",response.data);
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

const deleteRequest = async (url: string, token: any) => {
  try {
    const response = await axios.delete(url, {
      headers: { authorization: token },
    });
    //console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    return {};
  }
};

const postRequest = async (url: string, data: any, token: any) => {
  try {
    const response = await axios.post(url, data, {
      headers: { authorization: token },
    });
    //console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    return {};
  }
};

const putRequest = async (url: string, data: any, token: any) => {
  try {
    const response = await axios.put(url, data, {
      headers: { authorization: token },
    });
    console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    return {};
  }
};

const patchRequest = async (url: string, data: any, params: any) => {
  try {
    const response = await axios.patch(url, data, params);
    //console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    return {};
  }
};

export { getRequest, deleteRequest, postRequest, putRequest, patchRequest };
