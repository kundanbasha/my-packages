import { todoListAtom } from "@/recoil";
import { useSetRecoilState } from "recoil";

export default function AddNewTodo() {
  const setTodoList = useSetRecoilState(todoListAtom);
  const handleAddNewTodo = () => {
    const id = getId();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id, title: `Title ${oldTodoList?.length + 1}`, isDone: false },
    ]);
  };
  return <button onClick={handleAddNewTodo}>Add New Todo</button>;
}

const getId = () => new Date().getTime();
