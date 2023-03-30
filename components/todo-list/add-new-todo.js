import { todoListAtom } from "@/recoil";
import { useSetRecoilState } from "recoil";
import { Button } from "@chakra-ui/react";

export default function AddNewTodo() {
  const setTodoList = useSetRecoilState(todoListAtom);
  const handleAddNewTodo = () => {
    const id = getId();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id, title: `Title ${oldTodoList?.length + 1}`, isDone: false },
    ]);
  };
  return <Button onClick={handleAddNewTodo}>Add New Todo</Button>;
}

const getId = () => new Date().getTime();
