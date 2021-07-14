import React, { useState } from "react";
import "./App.css";

function App() {
  const [listTask, setListTask] = useState([]);
  const [valueTask, setValueTask] = useState("");

  const crateTask = () => {
    const task = {
      id: listTask.length + 1,
      value: valueTask,
      isEditing: false,
    };
    setListTask([...listTask, task]);
  };

  const removeTask = (position) => {
    const newListTask = [
      ...listTask.slice(0, position),
      ...listTask.slice(position + 1, listTask.length),
    ];
    setListTask(newListTask);
  };

  const editTask = (position, value) => {
    const task = listTask[position];
    const taskEdited = { ...task, ...value };
    listTask[position] = taskEdited;
    setListTask(listTask);
  };

  return (
    <div className="container">
      <div className="input-group justify-content-center mt-5">
        <input
          placeholder={"Ingresa tu tarea"}
          onChange={(e) => setValueTask(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={crateTask}>
          Guardar
        </button>
      </div>

      {listTask.map((task, position) => {
        return (
          <div key={position}>
            {task.isEditing && (
              <div className="input-group justify-content-center mt-5">
                <input
                  type="text"
                  placeholder={"Ingresa tarea a editar"}
                  onChange={(e) => setValueTask(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={crateTask}
                >
                  Guardar
                </button>
              </div>
            )}
            <div className="container mt-5">
              <div className="d-flex justify-content-center">
                <div
                  className="card justify-content-center"
                  style={{ width: "18rem" }}
                >
                  {task.value}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="button"
                  className="btn btn-warning m-2"
                  onClick={() => editTask(position, { isEditing: true })}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger m-2"
                  onClick={() => removeTask(position)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
