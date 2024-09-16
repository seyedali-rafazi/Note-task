import React from "react";
import { useNote } from "../../../context/NoteContex";
import Table from "../../../ui/Table";
import NoteRow from "./NoteRow";

const NoteTable: React.FC = () => {
  const notes = useNote();

  return (
    <div className="max-w-[2000px] mx-auto">
      {notes.length == 0 ? (
        "هیچ یادداشتی وجود ندارد"
      ) : (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>عنوان یادداشت</Table.HeaderCell>
              <Table.HeaderCell>متن یادداشت</Table.HeaderCell>
              <Table.HeaderCell>ددلاین</Table.HeaderCell>
              <Table.HeaderCell>وضعیت یادداشت</Table.HeaderCell>
              <Table.HeaderCell>عملیات</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {notes.map((note, index) => (
              <NoteRow key={note.id} note={note} index={index} />
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default NoteTable;
