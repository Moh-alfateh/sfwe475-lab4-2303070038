
import { useState } from "react";

type NewTaskInputProps = {
  onAddTask: (title: string) => void;
};

function NewTaskInput({ onAddTask }: NewTaskInputProps) {
  const [text, setText] = useState("");

  function handleAdd() {
    const title = text.trim();

    if (title === "") return;

    onAddTask(title);
    setText("");
  }

  return (
    <div className="new-task-input">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleAdd();
        }}
        placeholder="Add a task..."
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NewTaskInput;
