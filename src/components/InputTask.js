import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actionsTasks";

const InputTask = () => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    if (inputTask !== "") {
      dispatch(
        addTask({ id: Math.random(), text: inputTask, isCompleted: false })
      );
      setInputTask("");
    } else {
      alert("Please add your task !");
    }
  };

  return (
    <div>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Please add your task here ^_^!'
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={add} className='btn btn-success'>
          Add
        </button>
      </div>
    </div>
  );
};

export default InputTask;
