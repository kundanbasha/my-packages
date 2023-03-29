import { atom, selector } from "recoil";

export const filterSelectionAtom = atom({
  key: "filterSelection",
  default: "all",
});

export const todoListAtom = atom({
  key: "list",
  default: [],
});

export const filterSelector = selector({
  key: "filterTodos",
  get: ({ get }) => {
    const fitlerType = get(filterSelectionAtom);
    const listTodos = get(todoListAtom);

    switch (fitlerType) {
      case "done":
        return listTodos?.filter((todo) => todo.isDone) || [];
      case "undone":
        return listTodos?.filter((todo) => !todo.isDone) || [];
      default:
        return listTodos;
    }
  },
});

export const filterStatsSelector = selector({
  key: "filterStats",
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const totalTodos = todoList.length;
    const todoDoneListLength = todoList.filter((todo) => todo.isDone).length;
    const todoUndoneListLength = totalTodos - todoDoneListLength;

    return {
      totalTodos,
      todoDoneListLength,
      todoUndoneListLength,
    };
  },
});
