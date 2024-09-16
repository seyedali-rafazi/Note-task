import React, { useState } from "react";
import { useNote } from "../../../context/NoteContex";
import Table from "../../../ui/Table";
import NoteRow from "./NoteRow";
import SortNotes from "./SortNotes";

interface Note {
  id: string;
  createdAt: string;
  completed: boolean;
  // Add other properties as needed
}


const NoteTable: React.FC = () => {
  const notes = useNote();
  const [sortBy, setSortBy] = useState("latest");

  let sortedNotes = [...notes];

  if (sortBy === "earliest")
    sortedNotes.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  if (sortBy === "latest")
    sortedNotes.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );


  return (
    <div className="max-w-[2000px] mx-auto">
      {notes.length === 0 ? (
        "هیچ یادداشتی وجود ندارد"
      ) : (
        <div>
          <div className="flex justify-end p-5">
            <SortNotes
              sortBy={sortBy}
              onSort={(e) => setSortBy(e.target.value)}
            />
          </div>
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
              {sortedNotes.map((note: any, index: number) => (
                <NoteRow key={note.id} note={note} index={index} />
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};

export default NoteTable;
