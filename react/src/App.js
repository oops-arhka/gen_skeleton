import React from "react";
import DataTable from "./components/DataTable/DataTable";
import Login from "./components/Login";

export default function TodoApp() {
  const headings = [
    "Product name",
    "200",
    "400",
    "600",
    "800",
    "1000"
  ];

  const rows = [
    ["Product name", "200", "400", "600", "800", "1000"],
    ["Product name", "200", "400", "600", "800", "1000"],
    ["Product name", "200", "400", "600", "800", "1000"],
    ["Product name", "200", "400", "600", "800", "1000"]
  ];
  return (
    <div className="todo-app">
      <h1>Hello World</h1>
      <DataTable headings={headings} rows={rows} />
    </div>
  );
}
