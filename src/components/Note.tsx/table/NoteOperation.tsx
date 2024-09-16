import { useNoteDispatch } from "../../../context/NoteContex";
import { EditdButton, TrashButton } from "../../../icons/Icon";
import ButtonIcon from "../../../ui/ButtonIcon";
import Table from "../../../ui/Table";

interface NoteOperationProps {
  id: string;
}

const NoteOperation: React.FC<NoteOperationProps> = ({ id }) => {
  const dispatch = useNoteDispatch();

  return (
    <Table.Cell className="flex gap-1">
      <ButtonIcon
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
  );
};

export default NoteOperation;
