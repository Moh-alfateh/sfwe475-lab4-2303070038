
import type { Task } from "./schemas";
import TaskCard from "./TaskCard";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
};

function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          done={task.done}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
