import { addTask, editTask } from "@/utilities/network/routes";
import { parsedJSON } from "@/utilities/reusable";
import { getValue } from "@/utilities/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavigationBar from "./NavigationBar";

const EditTasks = () => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("0");
  const [isTaskCompleted, setIsTaskCompleted] = useState(0);
  const [deadlineDate, setDate] = useState("");
  const [taskToEdit, setTaskToEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const task = parsedJSON(getValue("taskToEdit"));
    setTaskToEdit(task);
    setDescription(task?.description);
    setPriority(task?.priority);
    setIsTaskCompleted(task?.isCompleted);
    console.log("task", task);
  }, []);

  const _handleInput = (e: any) => {
    const { value, name } = e.target;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "priority":
        setPriority(value);
        break;
      case "isTaskCompleted":
        setIsTaskCompleted(value);
        break;
      case "date":
        setDate(value);
        break;
    }
  };

  const _editTasktoUser = () => {
    const date = JSON.stringify(deadlineDate);
    const taskObj = {
      isCompleted: isTaskCompleted,
      description: description,
      priority: priority,
      deadline: date,
    };
    const userObj = parsedJSON(getValue("userObject"));
    const { userId, token } = userObj.data;
    console.log({ userId, token });
    const taskToEdit = parsedJSON(getValue("taskToEdit"));
    console.log("taskId", taskToEdit._id);
    editTask(userId, taskToEdit._id, taskObj, token);
    navigate(`/users/${userId}/tasks/`);
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h1>Edit Tasks</h1>
        <NavigationBar />
      </div>
      <div>
        <label htmlFor="description">Task Description</label>
        <input
          type="text"
          value={description}
          name="description"
          id="description"
          onChange={(e: any) => {
            _handleInput(e);
          }}
        />
        <label htmlFor="priority">Task priority</label>
        <input
          type="text"
          value={priority}
          name="priority"
          id="priority"
          onChange={_handleInput}
        />
        <div>
          {" "}
          Task completed:
          <select name="isTaskCompleted" onChange={_handleInput}>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>
        <div style={{ width: "150px", height: "150px" }}>
          Deadline date:
          <input
            type="date"
            name="date"
            value={deadlineDate}
            onChange={_handleInput}
          />
        </div>
        <button onClick={_editTasktoUser}>Save</button>
      </div>
    </>
  );
};

export default EditTasks;
