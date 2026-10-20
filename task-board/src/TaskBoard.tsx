
import { useState } from "react";
import type { Task } from "./schemas";
import TaskList from "./TaskList";
import NewTaskInput from "./NewTaskInput";

function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Read Chapter 3", done: false },
    { id: 2, title: "Build TaskCard", done: true },
    { id: 3, title: "Start TaskList", done: false },
  ]);

  function handleAddTask(title: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id:
          currentTasks.reduce(
            (maxId, task) => Math.max(maxId, task.id),
            0
          ) + 1,
        title,
        done: false,
      },
    ]);
  }

  function handleToggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  return (
    <main className="task-board">
      <h1>My Task Board</h1>

      <NewTaskInput onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
      />
    </main>
  );
}

export default TaskBoard;
