import Header from "./header/Header";
import NoteTable from "./table/NoteTable";

const AddNote: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Header />
      <NoteTable />
    </div>
  );
};

export default AddNote;
