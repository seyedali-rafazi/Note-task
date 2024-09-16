import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

// Define the shape of a note
interface Note {
  title: string;
  description: string;
  id: string;
  completed: boolean;
  createdAt: string;
}
interface EditNote {
  title: string;
  description: string;
  id: string;
  date: Date;
}

// Define the possible action types and payload structures
type Action =
  | { type: "addNotes"; payload: Note }
  | { type: "deleteNotes"; payload: string }
  | { type: "completeNotes"; payload: string }
  | { type: "changeNote"; payload: EditNote };

// Define the reducer state type as an array of Note
type State = Note[];

// Create the contexts with appropriate types
const NotesContext = createContext<State | undefined>(undefined);
const NotesDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

// Reducer function with proper typing
function notesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addNotes":
      return [...state, action.payload];
    case "deleteNotes":
      return state.filter((n) => n.id !== action.payload);
    case "completeNotes":
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    case "changeNote":
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
    default:
      throw new Error("Unknown action type");
  }
}

// Provider component type
interface NoteProviderProps {
  children: ReactNode;
}

export function NoteProvider({ children }: NoteProviderProps) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// Custom hooks with proper typing
export function useNote(): State {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNote must be used within a NoteProvider");
  }
  return context;
}

export function useNoteDispatch(): Dispatch<Action> {
  const context = useContext(NotesDispatchContext);
  if (context === undefined) {
    throw new Error("useNoteDispatch must be used within a NoteProvider");
  }
  return context;
}
