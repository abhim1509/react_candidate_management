import { addTask } from "@/utilities/network/routes";
import { parsedJSON } from "@/utilities/reusable";
import { getValue } from "@/utilities/storage";
import { useState } from "react";
import { useNavigate } from "react-router";
import NavigationBar from "./NavigationBar";

const AddTasks = () => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("0");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [deadlineDate, setDate] = useState(new Date());
  const navigate = useNavigate();

  const _handleInput = (e: any) => {
    const { value, name } = e.target;
    console.log({ value, name });
    switch (name) {
      case "description":
        setDescription(value);
        //console.log("description", description);
        break;

      case "priority":
        setPriority(value);
        //console.log("priority", priority);
        break;
      case "isTaskCompleted":
        const booleanVal = value === "1" ? true : false;
        setIsTaskCompleted(booleanVal);
        console.log("isTaskCompleted", booleanVal);
        break;
    }
  };

  const _addTasktoUser = () => {
    const date = JSON.stringify(deadlineDate);
    const taskObj = {
      isCompleted: isTaskCompleted,
      description: description,
      priority: priority,
      deadline: date,
    };
    console.log("_addTasktoUser -isTaskCompleted", isTaskCompleted);
    const userObj = parsedJSON(getValue("userObject"));
    const { userId, token } = userObj.data;
    console.log({ userId, token });
    addTask(userId, taskObj, token);
    navigate(`/users/${userId}/tasks/`);
  };

  //console.log("isTaskCompleted", isTaskCompleted);
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h1>Add Tasks</h1>
        <NavigationBar />
      </div>
      <div>
        <label htmlFor="description">Task Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e: any) => {
            _handleInput(e);
          }}
        />
        <label htmlFor="priority">Task priority</label>
        <input
          type="text"
          name="priority"
          id="priority"
          onChange={(e: any) => {
            _handleInput(e);
          }}
        />
        <div>
          {" "}
          Task completed:
          <select
            name="isTaskCompleted"
            onChange={(e: any) => {
              _handleInput(e);
            }}
          >
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>
        <div style={{ width: "150px", height: "150px" }}>
          Deadline date:
          <input
            type="date"
            name="date"
            id=""
            onChange={(date: any) => {
              setDate(date.target.value);
            }}
          />
        </div>
        <button onClick={_addTasktoUser}>Add Task</button>
      </div>
    </>
  );
};

export default AddTasks;
