import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import TextField from "../../ui/TextField";
import { useNote, useNoteDispatch } from "../../context/NoteContex";
import Note from "../../pages/Note";

interface NoteModalType {
  setAddNoteOpen: (open: boolean) => void;
  addNoteOpen: boolean;
}

const NoteModal: React.FC<NoteModalType> = ({
  addNoteOpen,
  setAddNoteOpen,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useNoteDispatch();
  const Notes = useNote();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!title || !description) return null;
    e.preventDefault();

    const newNote = {
      title,
      description,
      id: Date.now().toString(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");
    dispatch({ type: "addNotes", payload: newNote });
  };

  console.log(Notes);

  return (
    <Modal
      logo="اضافه کردن یادداشت"
      onClose={() => setAddNoteOpen(false)}
      open={addNoteOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full md:max-h-[calc(100vw-40rem)] h-full p-6">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full h-full">
          <form
            className="flex flex-col gap-10 items-center justify-center w-full h-full"
            onSubmit={handleSubmit}
          >
            <TextField
              name="title"
              className="text_field w-full"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="موضوع یادداشت شما ..."
              type="text"
              value={title}
            />
            <TextField
              name="title"
              className="text_field w-full"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات یادداشت شما ..."
              type="text"
              value={description}
            />
            <Button
              type="submit"
              className="btn btn--primary font-bold text-base"
            >
              اضافه کردن یادداشت
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
