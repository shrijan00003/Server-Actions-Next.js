"use client";
import React from "react";

function Todos({ todos }: { todos: string[] }) {
  return (
    <ul className="flex flex-col gap-3 p-3">
      {todos.map((todo) => (
        <li
          className="bg-gray-900 w-max rounded-lg text-white py-2 px-5"
          key={Math.random().toFixed(5)}
        >
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
