
# React Learning Notes

## Strand 1 — Components, Props, and State

A prop is a value passed from a parent component to a child, such as the task title. State is data a component manages and can update using a React state setter. A component should not directly modify its props; instead, it requests changes through callbacks when needed.

## Strand 2 — Lists, Keys, and Controlled Inputs

React uses keys to identify list items consistently when items are added, removed, reordered, or filtered. Using an array index as a key can associate the wrong component state with an item after the list changes, so a stable ID is safer.

A controlled input gets its value from React state and updates through an onChange handler. Without onChange, an input with a fixed value cannot normally be edited by the user.

## Strand 3 — Lifting State Up

TaskBoard owns the shared tasks array. NewTaskInput asks for a change by calling the onAddTask callback with the entered title. TaskBoard receives the request and updates its state, which causes React to render the updated task list without reloading the page. TaskCard similarly requests a completion change through a callback, and TaskBoard updates the task's done value.
