import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Todo task={task} />
      ))}
    </div>
  );
};

export default TasksList;
