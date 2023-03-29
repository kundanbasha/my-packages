import { filterSelector, todoListAtom } from "@/recoil";
import { useRecoilValue, useRecoilState } from "recoil";
export default function TodoList() {
  const filteredTodos = useRecoilValue(filterSelector);

  if (!filteredTodos || filteredTodos.length === 0)
    return <div>Todo List is Empty</div>;

  return (
    <>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

const TodoItem = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((tdo) => tdo.id === todo.id);
  const onStatusChange = ({ target }) => {
    const { checked } = target;
    const modifiedTodos = replaceTodoWithIndex(todoList, index, {
      ...todo,
      isDone: checked,
    });
    setTodoList(modifiedTodos);
  };

  const onDelete = () => {
    const remainingTodos = removeTodoWithIndex(todoList, index);
    setTodoList(remainingTodos);
  };

  return (
    <div key={todo.id} style={{ display: "flex" }}>
      <input
        name={todo.id}
        type="checkbox"
        value={todo.isDone || ""}
        checked={todo.isDone}
        onChange={onStatusChange}
      />
      &nbsp;&nbsp;
      <h2>{todo.title}</h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

const replaceTodoWithIndex = (todoList, index, modifiedTodo) => {
  return [
    ...todoList.slice(0, index),
    modifiedTodo,
    ...todoList.slice(index + 1),
  ];
};

const removeTodoWithIndex = (todoList, index) => {
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)];
};
