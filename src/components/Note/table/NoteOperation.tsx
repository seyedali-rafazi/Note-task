import { useState } from "react";
import { useNoteDispatch } from "../../../context/NoteContex";
import { EditdButton, TrashButton } from "../../../icons/Icon";
import ButtonIcon from "../../../ui/ButtonIcon";
import Table from "../../../ui/Table";
import ReactDOM from "react-dom";
import EditModal from "./EditModal";

interface NoteOperationProps {
  id: string;
  title: string;
  description: string;
  date: Date;
}

const NoteOperation: React.FC<NoteOperationProps> = ({
  id,
  title,
  description,
  date,
}) => {
  const dispatch = useNoteDispatch();
  const [editNoteOpen, setEditNoteOpen] = useState(false);

  return (
    <>
      <Table.Cell className="flex gap-1">
        <ButtonIcon
          onClick={() => setEditNoteOpen(true)}
          variant="outline"
          className="text-blue-500 hover:underline mr-2 inline"
        >
          <EditdButton />
        </ButtonIcon>
        <ButtonIcon
          onClick={() => dispatch({ type: "deleteNotes", payload: id })}
          variant="outline"
          className="text-red-500 hover:underline inline"
        >
          <TrashButton />
        </ButtonIcon>
      </Table.Cell>

      {editNoteOpen &&
        ReactDOM.createPortal(
          <EditModal
            editNoteOpen={editNoteOpen}
            setEditNoteOpen={setEditNoteOpen}
            prevTitle={title}
            id={id}
            prevDescription={description}
            prevDate={date}
          />,
          document.body
        )}
    </>
  );
};

export default NoteOperation;
