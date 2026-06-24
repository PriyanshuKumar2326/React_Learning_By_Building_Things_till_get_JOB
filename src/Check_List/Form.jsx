import { useState } from "react";

export default function Form() {
  const [allTask, setAllTask] = useState([]);
  const [task, setTask] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (!task.trim()) {
      return alert("Enter a valid task!");
    }

    // Creating the object right inside the state update
    const newTodo = {
      text: task,
      isCompleted: false, // Starts as incomplete
    };

    setAllTask((prev) => [...prev, newTodo]);
    setTask("");
  }

  // Pass the unique index of the clicked task here
  function handleProgress(indexToUpdate) {
    setAllTask((prevTasks) =>
      prevTasks.map((item, index) => 
        index === indexToUpdate 
          ? { ...item, isCompleted: !item.isCompleted } // toggle boolean
          : item
      )
    );
  }

  function removeTask(indexTODelete){
    setAllTask((prevTasks)=>
      prevTasks.filter((index)=>
      index!==indexTODelete
      ))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      {/* FORM SECTION */}
      <form onSubmit={handleForm} className="mb-6">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Add your To-Do</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>

      {/* LIST SECTION */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          List of Your Tasks ({allTask.length})
        </h2>
        
        <div className="space-y-2">
          {allTask.map((item, index) => (
            // Using the array index as the key and passing it to the handler
            <div 
              key={index} 
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
            >
              {/* If completed, add line-through style */}
              <span className={`text-sm font-medium ${item.isCompleted ? "line-through text-gray-400" : "text-gray-700"}`}>
                {item.text}
              </span>
              
              {/* Clickable Status Badge */}
              <button
                onClick={() => handleProgress(index)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                  item.isCompleted 
                    ? "bg-green-100 text-green-700 hover:bg-green-200" 
                    : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                }`}
              >
                {item.isCompleted ? "Completed" : "Pending"}
              </button>
              <button onClick={()=>removeTask(index)} className="bg-amber-100 text-amber-700 hover:bg-amber-200">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}