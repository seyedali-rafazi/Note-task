import React, { useState } from "react";
import Table from "../../../ui/Table";
import { truncateText } from "../../../utils/TruncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import Button from "../../../ui/Button";
import TableModal from "./TableModal";
import ReactDOM from "react-dom";

interface NoteRowProps {
  note: any;
  index: number;
}

const NoteRow: React.FC<NoteRowProps> = ({ note, index }) => {
  const [noteOpen, setNoteOpen] = useState(false);

  const date = new Date(note.date);
  const dayLimit = date.getDate(); // Extracts the day
  console.log(dayLimit); // Logs the day of the month

  return (
    <>
      <Table.Row>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{truncateText(note.title, 30)}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => setNoteOpen(true)}>باز کردن متن</Button>
        </Table.Cell>
        <Table.Cell>{toLocalDateShort(note.date)}</Table.Cell>
        <Table.Cell>{note.status}</Table.Cell>
        <Table.Cell>
          <button className="text-blue-500 hover:underline mr-2">Edit</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </Table.Cell>
      </Table.Row>
      {noteOpen &&
        ReactDOM.createPortal(
          <TableModal
            noteOpen={noteOpen}
            setNoteOpen={setNoteOpen}
            title={note.title}
            description={note.description}
          />,
          document.body
        )}
    </>
  );
};

export default NoteRow;
