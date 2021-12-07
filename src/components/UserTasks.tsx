import { useEffect, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import { getValue, setValue } from "@/utilities/storage";
import { getTaskList, deleteTask } from "@/utilities/network/routes";
import { parsedJSON } from "@/utilities/reusable";
import { useNavigate } from "react-router";

const UserTasks = () => {
  const [userTasks, setUserTask] = useState([]);
  const navigate = useNavigate();
  let getUserTasks: any;
  let userObj: any;
  useEffect(() => {
    getUserTasks = async () => {
      userObj = parsedJSON(getValue("userObject"));
      //console.log("userObj.data", userObj.data);
      const taskObj = await getTaskList(
        userObj.data?.userId,
        userObj.data?.token
      );
      //console.log("taskObj", taskObj);
      //console.log("taskObj?.resultSet", taskObj?.resultSet);
      setUserTask(taskObj?.resultSet);
      //console.log("userTasks", userTasks);
    };

    getUserTasks();
  }, []);

  const _addTask = () => {
    const userObj = parsedJSON(getValue("userObject"));
    navigate(`/users/${userObj.data?.userId}/tasks/add`);
  };

  let _deleteTask = async (index: any) => {
    //console.log("index", index);
    const taskToDelete = userTasks[index];
    //console.log("taskToDelete", taskToDelete);
    //console.log("parsedJSONauthToken)", parsedJSON("authToken"));
    const token: any = getValue("authToken");
    await deleteTask(taskToDelete.createdBy, taskToDelete._id, token);
    //await getTaskList(taskToDelete.createdBy, token);
    window.location.reload();
  };

  const _editTask = async (index: any) => {
    //console.log("userObj", userObj);
    const taskToEdit = userTasks[index];
    console.log("taskToEdit", taskToEdit);
    setValue("taskToEdit", taskToEdit);
    navigate(`/users/${taskToEdit.createdBy}/tasks/${taskToEdit._id}/edit`);
  };
  return (
    <div>
      <h1>User Tasks</h1>
      <NavigationBar />
      <div>
        <button
          onClick={() => {
            _addTask();
          }}
        >
          Add Task
        </button>
      </div>
      <div>
        {userTasks ? (
          <div>
            <ol>
              {userTasks.map((task: any, index: any) => {
                return (
                  <li key={index}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid black",
                      }}
                    >
                      <div>
                        <span>Description </span>
                        {task.description}
                      </div>
                      <div>
                        <span>Task status </span>
                        {task.isCompleted}
                      </div>
                      <div>
                        <span>Priority </span>
                        {task.priority}
                      </div>
                      <div>
                        <span>Deadline </span>
                        {task.deadline}
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <button
                            onClick={() => {
                              _editTask(index);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              _deleteTask(index);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : (
          "No tasks found."
        )}
      </div>
    </div>
  );
};

export default UserTasks;
