import { ChangeEventHandler } from "react";

export interface Note {
  title: string;
  description: string;
  id: string;
  completed: boolean;
  createdAt: string;
  date: Date;
}

export interface EditNote {
  title: string;
  description: string;
  id: string;
  date: Date;
}

export interface NoteModalType {
  setAddNoteOpen: (open: boolean) => void;
  addNoteOpen: boolean;
}

export interface EditModalType {
  setEditNoteOpen: (open: boolean) => void;
  editNoteOpen: boolean;
  id: string;
  prevTitle: string;
  prevDescription: string;
  prevDate: Date;
}

export interface NoteOperationProps {
  id: string;
  title: string;
  description: string;
  date: Date;
}

interface NoteV {
  id: string;
  title: string;
  description: string;
  date: Date;
  createdAt: Date;
}

export interface NoteRowProps {
  note: NoteV;
  index: number;
}

export interface SonrtNotesType {
  sortBy: string;
  onSort: ChangeEventHandler<HTMLSelectElement>;
}

export interface TableModalType {
  setNoteOpen: (open: boolean) => void;
  noteOpen: boolean;
  title: string;
  description: string;
  createdAt: Date;
}