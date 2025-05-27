import { useState } from "react";

type AddTasksProps = {
  onAddTaskSubmit: (title: string, description: string) => void;
};

function AddTasks({ onAddTaskSubmit }: AddTasksProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-b-md shadow flex flex-col ">
      <input
        type="text"
        placeholder="Digite a nova tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
