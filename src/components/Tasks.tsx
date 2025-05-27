import { ChevronRightIcon, Trash2, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface TaskProps {
  tasks: any;
  onTaskClick: (id: number) => void;
  onTaskDelete: (id: number) => void;
}

function Tasks({ tasks, onTaskClick, onTaskDelete }: TaskProps) {
  const router = useRouter();
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-b-md shadow ">
        {tasks.map((task: any) => (
          <li key={task.id} className="flex gap-2 ">
            <button
              onClick={() => onTaskClick(task.id)}
              className={` p-2 rounded-md w-full cursor-pointer 
                ${
                  task.isCompleted
                    ? "bg-emerald-200 text-black "
                    : "bg-slate-400 text-white"
                }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => router.push(`/description/${task.id}`)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onTaskDelete(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
