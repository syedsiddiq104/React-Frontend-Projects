import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { toast } from "react-toastify";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput === "") {
      toast.error("Please enter something");
      return;
    }

    setTodoList([...todoList, userInput]);
    toast.success("Todo Added");
    setUserInput("");
  };

  const handleDelete = (itemindex) => {
    let confirmDelete = window.confirm("Do you want to delete this task?");
    if (confirmDelete) {
      let newTodoList = todoList.filter((_, index) => index !== itemindex);
      setTodoList(newTodoList);
      toast.success("Task Deleted");
    }
  };

const handleEdit = (itemIndex) => {
  let newList = prompt("Edit the todo");

   if (!newList?.trim()){
     toast.error("Todo cant be empty")
     return
   }

  const updatedList = todoList.map((item, index) => {
    if (itemIndex === index) {
      return newList;   
    }
    return item;       
  });

  setTodoList(updatedList);
};

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-r from-black-400 to-red-500 ">

      <h1 className="text-4xl font-bold text-white mt-10 mb-10 tracking-wide">
        Todo Manager
      </h1>

  
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 bg-white p-4 rounded-xl shadow-lg "
      >
        <input
          type="text"
          placeholder="Enter your task..."
          value={userInput}
          onChange={handleInputChange}
          className="w-[30vw] px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 text-lg text-black"
        />

        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition duration-300 font-semibold">
          Add
        </button>
      </form>

  
      <div className="mt-10 min-w-[300px] overflow-y-auto space-y-4 border-2 rounded-3xl p-9">

        {todoList.length === 0 ? (
          <p className="text-white font-extrabold text-2xl text-center">
            No tasks yet 
          </p>
        ) : (
          todoList.map((list, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-md hover:scale-[1.02] transition w-[80vw] max-w-[500px]"
            >
              <p className="text-lg font-medium text-black break-all">{list}</p>

              <div className="flex gap-5">
                <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
              >
                <DeleteOutlineOutlinedIcon />
              </button>
              
              <button
                onClick={() => handleEdit(index)}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
              >
                <EditOutlinedIcon />
              </button>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Todo;