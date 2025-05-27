"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export default function DescriptionPage() {
  const router = useRouter();
  const params = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const tasks: Task[] = JSON.parse(savedTasks);
      const taskFound = tasks.find((t) => t.id === Number(params.id));
      if (taskFound) {
        setTask(taskFound);
      }
    }
  }, [params.id]);

  if (!task) {
    return (
      <p className="text-white text-center mt-10">Tarefa não encontrada</p>
    );
  }

  return (
    <div className="w-screen h-screen bg-slate-500  flex flex-col items-center pt-8">
      <h1 className="text-3xl text-slate-100 font-bold mb-6">
        Gerenciador de Tarefas
      </h1>

      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-lg flex flex-col w-[500px] h-[500px] ">
        <h2 className="p-6 bg-white rounded-b-md shadow">
          Título: {task.title}
        </h2>
        <p className="p-6 bg-white rounded-b-md shadow break-words">
          Descrição: {task.description}
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-auto bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-400 cursor-pointer"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
