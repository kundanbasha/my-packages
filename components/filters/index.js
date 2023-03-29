import { filterSelectionAtom } from "@/recoil";
import { useRecoilState } from "recoil";

export default function Filters() {
  const [filterType, setFilterType] = useRecoilState(filterSelectionAtom);

  const onFilterChange = ({ target }) => {
    const { value } = target;
    setFilterType(value);
  };

  return (
    <div>
      <h3>Filters</h3>
      <label htmlFor="all">All</label>
      <input
        name="filter"
        value="all"
        id="all"
        type="radio"
        checked={filterType === "all"}
        onChange={onFilterChange}
      />
      &nbsp;
      <label htmlFor="done">Done</label>
      <input
        name="filter"
        value="done"
        id="done"
        type="radio"
        checked={filterType === "done"}
        onChange={onFilterChange}
      />
      &nbsp;
      <label htmlFor="undone">Undone</label>
      <input
        name="filter"
        value="undone"
        id="undone"
        type="radio"
        checked={filterType === "undone"}
        onChange={onFilterChange}
      />
    </div>
  );
}
