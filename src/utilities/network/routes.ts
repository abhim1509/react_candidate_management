import { deleteRequest, getRequest, postRequest, putRequest } from ".";
import { isObjectEmpty } from "../reusable";
import { setValue } from "../storage";
import {
  BASE_URL,
  loginURI,
  taskURI,
  userURI,
  registerUserURI,
} from "./config";

const getTaskList = async (userId: string, token: string) => {
  const taskListURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}`;
  const response = await getRequest(taskListURL, token);
  console.log("response", response);
  return isObjectEmpty(response);
};

const deleteTask = async (userId: string, taskId: string, token: string) => {
  const deleteTaskURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}/${taskId}`;
  const deletedTask = await deleteRequest(deleteTaskURL, token);
  console.log("deleteTask - deletedTask", deletedTask);
};

const addTask = async (userId: string, taskObject: any, token: string) => {
  const addTaskURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}`;
  const addedTask = await postRequest(addTaskURL, taskObject, token);
  console.log("routes - addedTask", addedTask);
};

const editTask = async (
  userId: string,
  taskId: string,
  taskObject: any,
  token: string
) => {
  const editTaskURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}/${taskId}`;
  console.log("addTask - editTaskURL", editTaskURL);
  const addedTask = await putRequest(editTaskURL, taskObject, token);
};

const registerUser = async (email: string, password: string) => {
  const registerUrl = `${BASE_URL}/${registerUserURI}`;
  const data = { email, password };
  const response: any = await postRequest(registerUrl, data, {});
  console.log("registerUser - response", response, typeof response.status);
  return isObjectEmpty(response);
};

const login = async (email: string, password: string) => {
  const loginURL = `${BASE_URL}/${loginURI}`;
  const response = await putRequest(
    loginURL,
    { email: email, password: password },
    {}
  );
  return isObjectEmpty(response);
};

const logout = () => {
  setValue("userObject", "");
  setValue("authToken", "");
};

export {
  getTaskList,
  login,
  deleteTask,
  registerUser,
  addTask,
  editTask,
  logout,
};
