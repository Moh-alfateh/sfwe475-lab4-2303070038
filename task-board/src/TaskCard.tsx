
import type { Task } from "./schemas";

type TaskCardProps = Pick<Task, "title" | "done"> & {
  onToggle?: () => void;
  dueDate?: string;
};

function TaskCard({
  title,
  done,
  onToggle,
  dueDate,
}: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{title}</h3>

      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={onToggle}
          disabled={!onToggle}
        />
        {done ? "Done" : "Not done yet"}
      </label>

      {dueDate && <p>Due: {dueDate}</p>}
    </div>
  );
}

export default TaskCard;
