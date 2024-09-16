import { useState } from "react";
import Button from "../../../ui/Button";
import NoteModal from "./NoteModal";

const Header: React.FC = () => {
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  return (
    <div className="max-w-[2000px] mx-auto">
      <div className="w-full flex items-center justify-between p-10">
        <h2 className="text-xl font-extrabold">یادداشت های شما</h2>
        <Button
          onClick={() => setAddNoteOpen(true)}
          className="text-lg font-extrabold"
        >
          اضافه کردن یادداشت <span className="text-2xl font-bold">+</span>
        </Button>
      </div>
      <NoteModal addNoteOpen={addNoteOpen} setAddNoteOpen={setAddNoteOpen} />
    </div>
  );
};

export default Header;
