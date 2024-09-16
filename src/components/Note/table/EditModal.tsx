import { useState } from "react";
import Button from "../../../ui/Button";
import DatePickerField from "../../../ui/DatePickerField";
import Modal from "../../../ui/Modal";
import TextField from "../../../ui/TextField";
import toast from "react-hot-toast";
import { useNoteDispatch } from "../../../context/NoteContex";

interface EditModalType {
  setEditNoteOpen: (open: boolean) => void;
  editNoteOpen: boolean;
  id: string;
  prevTitle: string;
  prevDescription: string;
  prevDate: Date;
}

const EditModal: React.FC<EditModalType> = ({
  setEditNoteOpen,
  editNoteOpen,
  id,
  prevTitle,
  prevDescription,
  prevDate,
}) => {
  const [title, setTitle] = useState(prevTitle);
  const [description, setDescription] = useState(prevDescription);
  const [date, setDate] = useState(new Date(prevDate));
  const dispatch = useNoteDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description) {
      const editNote = {
        title,
        description,
        id: id,
        date,
      };
      setTitle("");
      setDescription("");
      console.log(editNote);

      dispatch({ type: "changeNote", payload: editNote });
      setEditNoteOpen(false);
      toast.success("یادداشت با موفقیت تغییر یافت");
    } else toast.error("لطفا تمام بخش هارو تکمیل کنید");
  };

  return (
    <Modal
      logo=" تغییر دادن یادداشت"
      onClose={() => setEditNoteOpen(false)}
      open={editNoteOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full p-6">
        <div className="flex flex-col gap-5 justify-center items-center font-normal text-sm w-full ">
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
              label="تغییر موضوع"
            />
            <TextField
              name="title"
              className="textField__input w-full"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات یادداشت شما ..."
              type="text"
              value={description}
              label="تغییر متن"
            />
            <DatePickerField data={date} setDate={setDate} label="ددلاین" />
            <Button
              type="submit"
              className="btn btn--primary font-bold text-base"
            >
              تغییر یادداشت
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
