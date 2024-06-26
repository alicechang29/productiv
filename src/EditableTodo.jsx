import { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State: isEditing (T/F)
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  console.log("EditableTodo", todo);
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(currBool => !currBool);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update({ ...formData, priority: Number(formData.priority) });
  }

  return (
    <div className="EditableTodo">
      {
        isEditing
          ? <TodoForm initialFormData={todo} handleSave={handleSave} />
          : <div className="mb-3">
            <div className="float-end text-sm-end">
              <button
                className="EditableTodo-toggle btn-link btn btn-sm"
                onClick={toggleEdit}>
                Edit
              </button>
              <button
                className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                onClick={handleDelete}>
                Del
              </button>
            </div>
            <Todo
              id={todo.id}
              title={todo.title}
              description={todo.description}
              priority={todo.priority} />
          </div>
      }

    </div>
  );
}

export default EditableTodo;
