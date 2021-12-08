import { deleteRequest, getRequest, postRequest, putRequest } from ".";
import { isObjectEmpty } from "../reusable";
import { setValue } from "../storage";
import {
  BASE_URL,
  loginURI,
  taskURI,
  userURI,
  registerUserURI,
  logoutURI,
} from "./config";

const getTaskList = async (userId: string, token: string) => {
  const taskListURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}`;
  //console.log("getTaskList -taskListURL",taskListURL)
  //console.log("getTaskList - token", token)
  const response = await getRequest(taskListURL, token);
  console.log("response", response);
  return isObjectEmpty(response);
};

const deleteTask = async (userId: string, taskId: string, token: string) => {
  const deleteTaskURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}/${taskId}`;
  //console.log("deleteTask - deleteTaskURL",deleteTaskURL)
  const deletedTask = await deleteRequest(deleteTaskURL, token);
  console.log("deleteTask - deletedTask", deletedTask);
};

const addTask = async (userId: string, taskObject: any, token: string) => {
  const addTaskURL = `${BASE_URL}/${userURI}/${userId}/${taskURI}`;
  //console.log("addTask - addTaskURL",addTaskURL)
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
  //console.log("addedTask", addedTask)
};

const registerUser = async (email: string, password: string) => {
  const registerUrl = `${BASE_URL}/${registerUserURI}`;
  //console.log("registerUrl",registerUrl)
  const data = { email, password };
  //console.log(data)
  const response = await postRequest(registerUrl, data, {});
  //console.log("response",response);
  return isObjectEmpty(response);
};

const login = async (email: string, password: string) => {
  const loginURL = `${BASE_URL}/${loginURI}`;
  //console.log(loginURL);
  const response = await putRequest(
    loginURL,
    { email: email, password: password },
    {}
  );
  //console.log("login", response);
  return isObjectEmpty(response);
};

const logout = () => {
  /*   const logoutURL = `${BASE_URL}/${logoutURI}`
  const response = await putRequest(logoutURL,{_id:userId},token);
  console.log("response",response)
 */
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
