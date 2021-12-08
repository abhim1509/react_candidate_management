import { useEffect, useContext, useState } from "react";
import NavigationBar from "./NavigationBar";
import { getValue, setValue } from "@/utilities/storage";
import { getTaskList, deleteTask } from "@/utilities/network/routes";
import { parsedJSON } from "@/utilities/reusable";
import { useNavigate } from "react-router";
import UserTask from "./UserTask";

const UserTasks = () => {
  const [userTasks, setUserTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserTasks = async () => {
      const userObj = parsedJSON(getValue("userObject"));
      const taskObj: any = await getTaskList(
        userObj.data?.userId,
        userObj.data?.token
      );

      setUserTask(taskObj?.resultSet || []);
    };

    getUserTasks();
  }, []);

  const _addTask = () => {
    const userObj = parsedJSON(getValue("userObject"));
    navigate(`/users/${userObj.data?.userId}/tasks/add`);
  };

  let _deleteTask = async (taskObj: any) => {
    console.log("taskobj", taskObj);
    const token: any = getValue("authToken");
    await deleteTask(taskObj.createdBy, taskObj._id, token);
    window.location.reload();
  };

  const _editTask = async (taskObj: any) => {
    setValue("taskToEdit", taskObj);
    navigate(`/users/${taskObj.createdBy}/tasks/${taskObj._id}/edit`);
  };

  const _renderTaskList = () => {
    if (userTasks.length === 0) return <p>No tasks found</p>;
    return (
      <ol>
        {userTasks.map((task: any) => {
          return (
            <UserTask
              key={task._id}
              task={task}
              editTask={_editTask}
              deleteTask={_deleteTask}
            />
          );
        })}
      </ol>
    );
  };

  return (
    <div>
      <h1>User Tasks</h1>
      <NavigationBar />
      <div>
        <button onClick={_addTask}>Add Task</button>
      </div>
      <div>{_renderTaskList()}</div>
    </div>
  );
};

export default UserTasks;
