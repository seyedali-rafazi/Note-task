import { ChangeEventHandler } from "react";

interface SonrtNotesType {
  sortBy: string;
  onSort: ChangeEventHandler<HTMLSelectElement>;
}

const SortNotes: React.FC<SonrtNotesType> = ({ sortBy, onSort }) => {
  return (
    <div className="noteHeader">
      <select name="" id="" value={sortBy} onChange={onSort}>
        <option value="latest">جدیدترین یادداشت</option>
        <option value="earliest">قدیمی‌ترین یادداشت</option>
      </select>
    </div>
  );
};

export default SortNotes;
