/** Simple presentation component for a todo.
 *
 * Props:
 * { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({id, title, description, priority}) {
  return (
      <div className="Todo" id={id}>
        <div><b>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
