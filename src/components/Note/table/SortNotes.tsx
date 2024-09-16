import { SonrtNotesType } from "../../../types/NoteType";

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
