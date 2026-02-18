import { FilterPropType } from "../../models/Interfaces";

const categories = ["Electronics", "Clothing", "Books", "Furniture"];
const statuses = ["Active", "Inactive", "Pending"];

const Filters = ({
  selectedCategories,
  selectedStatuses,
  onCategoryChange,
  onStatusChange,
}: FilterPropType) => {
  const toggleSelection = (
    value: string,
    selected: string[],
    callback: (val: string[]) => void,
  ) => {
    if (selected.includes(value)) {
      callback(selected.filter((item) => item !== value));
    } else {
      callback([...selected, value]);
    }
  };

  return (
    <div className="filters">
      <div>
        <strong>Category:</strong>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() =>
                toggleSelection(cat, selectedCategories, onCategoryChange)
              }
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <strong>Status:</strong>
        {statuses.map((stat) => (
          <label key={stat}>
            <input
              type="checkbox"
              checked={selectedStatuses.includes(stat)}
              onChange={() =>
                toggleSelection(stat, selectedStatuses, onStatusChange)
              }
            />
            {stat}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
