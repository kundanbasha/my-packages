import { filterStatsSelector } from "@/recoil";
import { useRecoilValue } from "recoil";

export default function TodoStats() {
  const { totalTodos, todoDoneListLength, todoUndoneListLength } =
    useRecoilValue(filterStatsSelector);

  return (
    <div>
      All: {totalTodos} &nbsp; Done:{todoDoneListLength} &nbsp; Undone:
      {todoUndoneListLength}
    </div>
  );
}
