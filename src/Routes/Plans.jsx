import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";

const Plans = () => {
  const [task, setTask] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleTaskInput = (event) => {
    setTask(event.target.value);
  };
  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const addTodo = () => {
    if (task === "" || selectedOption === "") {
      alert("Please fill in all the fields");
      return;
    }
    if (todoList.some((todo) => todo.text === task)) {
      alert("Task already exists");
      return;
    }
    setTodoList([
      ...todoList,
      {
        text: task,
        field: selectedOption,
        completed: false,
        id: Math.random() * Math.random(),
      },
    ]);
    setTask("");
    setSelectedOption("");
  };
  const deleteCompleted = () => {
    setTodoList(todoList.filter((todo) => !todo.completed));
  };
  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="h-full w-full lg:h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.7 }}
        className="flex justify-center mt-12 h-40"
      >
        <div className="inputs flex flex-col items-center justify-between bg-indigo-200 w-3/6 rounded-lg p-3 shadow-sm shadow-gray-400 hover:shadow-none">
          <input
            value={task}
            onChange={handleTaskInput}
            type="text"
            placeholder="New task"
            className="bg-indigo-300 p-2 rounded-xl focus:outline-none text-gray-900 placeholder-gray-700 text-center shadow-md hover:shadow-none capitalize"
          />
          <div className="">
            <select
              className="bg-indigo-300 text-gray-700 py-2 px-3 rounded-lg leading-tight focus:outline-none hover:bg-indigo-400 focus:border-gray-500 shadow-md hover:shadow-none cursor-pointer"
              value={selectedOption}
              onChange={handleOptionSelect}
            >
              <option className="text-white" value="">
                Select a field
              </option>
              <option className="text-white" value="option1">
                Work Related
              </option>
              <option className="text-white" value="option2">
                Home Related
              </option>
              <option className="text-white" value="option3">
                Personal Task
              </option>
            </select>
          </div>
          <button
            onClick={addTodo}
            className="bg-indigo-300 p-1 rounded-lg text-gray-700 shadow-md hover:shadow-none hover:bg-indigo-400"
            type="submit"
          >
            Add to list
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="flex flex-col items-center justify-center mt-12 space-y-12 mb-12  lg:flex-row lg:justify-around lg:items-center"
      >
        <div className="flex flex-col p-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-none w-80 h-72 bg-indigo-200 overflow-auto scroll-y mt-12">
          <h3 className="text-xl text-center bg-indigo-300 rounded-lg text-gray-700">
            Work
          </h3>
          {todoList.map((todo) => {
            if (todo.field === "option1") {
              return (
                <div className="cursor-pointer pt-2" key={todo.id}>
                  <label className="flex items-center  justify-between">
                    <li className="flex-wrap ml-2 text-gray-700 w-11/12 truncate">
                      {todo.text}
                    </li>
                    <input
                      onChange={() => toggleCompleted(todo.id)}
                      type="checkbox"
                      className="rounded-lg w-6 h-6 focus:outline-none focus:border-transparent"
                      name="task-done"
                    />
                  </label>
                </div>
              );
            }
          })}
          {todoList.filter((todo) => todo.field === "option1").length > 0 && (
            <div className="flex w-full mt-auto justify-center">
              <button
                onClick={deleteCompleted}
                className="bg-indigo-300 rounded-xl w-36 py-1"
              >
                Delete Completed
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col p-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-none w-80 h-72 bg-indigo-200 overflow-auto scroll-y mt-12">
          <h3 className="text-xl text-center bg-indigo-300 rounded-lg text-gray-700">
            Home
          </h3>
          {todoList.map((todo) => {
            if (todo.field === "option2") {
              return (
                <div className="cursor-pointer pt-2" key={todo.id}>
                  <label className="flex items-center  justify-between">
                    <li className="flex-wrap ml-2 text-gray-700 w-11/12 truncate">
                      {todo.text}
                    </li>
                    <input
                      onChange={() => toggleCompleted(todo.id)}
                      type="checkbox"
                      className="rounded-lg w-6 h-6 focus:outline-none focus:border-transparent"
                      name="task-done"
                    />
                  </label>
                </div>
              );
            }
          })}
          {todoList.filter((todo) => todo.field === "option2").length > 0 && (
            <div className="flex w-full mt-auto justify-center">
              <button
                onClick={deleteCompleted}
                className="bg-indigo-300 rounded-xl w-36 py-1"
              >
                Delete Completed
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col p-4 rounded-lg shadow-md shadow-gray-500 hover:shadow-none w-80 h-72 bg-indigo-200 overflow-auto scroll-y mt-12">
          <h3 className="text-xl text-center bg-indigo-300 rounded-lg text-gray-700">
            Personal
          </h3>
          {todoList.map((todo) => {
            if (todo.field === "option3") {
              return (
                <div className="cursor-pointer pt-2" key={todo.id}>
                  <label className="flex items-center  justify-between">
                    <li className="flex-wrap ml-2 text-gray-700 w-11/12 truncate">
                      {todo.text}
                    </li>
                    <input
                      onChange={() => toggleCompleted(todo.id)}
                      type="checkbox"
                      className="rounded-lg w-6 h-6 focus:outline-none focus:border-transparent"
                      name="task-done"
                    />
                  </label>
                </div>
              );
            }
          })}
          {todoList.filter((todo) => todo.field === "option3").length > 0 && (
            <div className="flex w-full mt-auto justify-center">
              <button
                onClick={deleteCompleted}
                className="bg-indigo-300 rounded-xl w-36 py-1"
              >
                Delete Completed
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default Plans;
