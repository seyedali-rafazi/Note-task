import { DashboardButton, NoteButton } from "../icons/Icon";
import CustomeNavlink from "./CustomeNavlink";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-secondery-0 row-start-1 row-span-2 h-screen p-4 space-y-3">
      <CustomeNavlink path="/">
        <DashboardButton />
        <span>داشبورد</span>
      </CustomeNavlink>
      <CustomeNavlink path="/note">
        <NoteButton />
        <span>یادداشت ها</span>
      </CustomeNavlink>
    </div>
  );
};

export default Sidebar;
