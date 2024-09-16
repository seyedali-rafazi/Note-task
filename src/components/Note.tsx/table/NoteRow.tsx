import React, { useState } from "react";
import Table from "../../../ui/Table";
import { truncateText } from "../../../utils/TruncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import Button from "../../../ui/Button";
import TableModal from "./TableModal";
import ReactDOM from "react-dom";
import limitDay from "../../../utils/limitDay";
import NoteOperation from "./NoteOperation";

interface Note {
  id: string;
  title: string;
  description: string;
  date?: string;
}

interface NoteRowProps {
  note: Note;
  index: number;
}

type NoteStatusKey = "DANGER" | "SAFE" | "EXPIRED";

const NoteStatus: Record<NoteStatusKey, { label: string; className: string }> =
  {
    DANGER: {
      label: "ددلاین نزدیک است",
      className: "badge--danger",
    },
    SAFE: {
      label: "ددلاین فرصت دارد",
      className: "badge--success",
    },
    EXPIRED: {
      label: "ددلاین منقضی شده است",
      className: "badge--secondary",
    },
  };

const NoteRow: React.FC<NoteRowProps> = ({ note, index }) => {
  const [noteOpen, setNoteOpen] = useState(false);

  const status = limitDay(note.date);
  const statusKey: NoteStatusKey =
    status.remainNote === "DANGER"
      ? "DANGER"
      : "SAFE"

  return (
    <>
      <Table.Row>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{truncateText(note.title, 30)}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => setNoteOpen(true)}>باز کردن متن</Button>
        </Table.Cell>
        <Table.Cell>{toLocalDateShort(note.date)}</Table.Cell>
        <Table.Cell>
          <span className={`badge ${NoteStatus[statusKey].className}`}>
            {NoteStatus[statusKey].label}
          </span>
        </Table.Cell>
        <NoteOperation id={note.id} />
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
