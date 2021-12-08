const UserTask = ({ task, editTask, deleteTask }: any) => {
  return (
    <li>
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
          {task.isCompleted ? "Completed" : "Not Completed"}
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
                editTask(task);
              }}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteTask(task);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserTask;
