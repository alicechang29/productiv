import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm.jsx";
import EditableTodoList from "./EditableTodoList.jsx";
import TopTodo from "./TopTodo.jsx";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ] //FIXME: should default to empty []
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    console.log("create", newTodo);
    newTodo.id = uuid();
    setTodos(curr => [...curr, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map(
      todo =>
        todo.id === updatedTodo.id
          ? updatedTodo
          : todo
    ));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(
      todo => todo.id !== id
    ));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3">Todos</h3>
          {todos.length > 0
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todos.length > 0
            ? <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
            : null
          }
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;