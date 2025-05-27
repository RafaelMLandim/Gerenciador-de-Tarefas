"use client";

import AddTasks from "@/components/AddTasks";
import Tasks from "@/components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<
    { id: number; title: string; description: string; isCompleted: boolean }[]
  >([]);

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Salva no localStorage como string JSON
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId: number) {
    const newArray = tasks.filter((task) => task.id !== taskId);
    setTasks(newArray);

    localStorage.setItem("tasks", JSON.stringify(newArray));
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
