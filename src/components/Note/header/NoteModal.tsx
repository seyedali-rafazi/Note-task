import { useState } from "react";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import TextField from "../../../ui/TextField";
import { useNoteDispatch } from "../../../context/NoteContex";
import DatePickerField from "../../../ui/DatePickerField";
import toast from "react-hot-toast";
import { Note, NoteModalType } from "../../../types/NoteType";


const NoteModal: React.FC<NoteModalType> = ({
  addNoteOpen,
  setAddNoteOpen,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useNoteDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description && date) {
      const newNote: Note = {
        title,
        description,
        date,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTitle("");
      setDescription("");
      setDate(new Date(""));
      dispatch({ type: "addNotes", payload: newNote });
      setAddNoteOpen(false);
      toast.success("یادداشت با موفقیت اضاقه شد");
    } else toast.error("لطفا تمام بخش هارو تکمیل کنید");
  };

  return (
    <Modal
      logo="اضافه کردن یادداشت"
      onClose={() => setAddNoteOpen(false)}
      open={addNoteOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full p-6">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full h-full">
          <form
            className="flex flex-col gap-10 items-center justify-center w-full "
            onSubmit={handleSubmit}
          >
            <TextField
              name="title"
              className="textField__input w-full"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="موضوع یادداشت شما ..."
              type="text"
              value={title}
              label="موضوع"
            />
            <TextField
              name="title"
              className="textField__input w-full"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات یادداشت شما ..."
              type="text"
              value={description}
              label="متن"
            />
            <DatePickerField data={date} setDate={setDate} label="ددلاین" />
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
