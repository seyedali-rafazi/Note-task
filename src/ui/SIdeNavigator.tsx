import { useEffect, useRef } from "react";
import { CloseButton, DashboardButton, NoteButton } from "../icons/Icon";
import Button from "./Button";
import CustomeNavlink from "./CustomeNavlink";

interface SideNavigatorType {
  open: boolean;
  onClose: () => void;
}

const SideNavigator: React.FC<SideNavigatorType> = ({ open, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      sidebarRef.current?.classList.remove("translate-x-full");
    } else {
      document.body.classList.remove("overflow-hidden");
      sidebarRef.current?.classList.add("translate-x-full");
    }
  }, [open]);

  return (
    <div
      className={`${
        open ? "fixed top-0 left-0 right-0 bottom-0 w-full h-screen " : ""
      }`}
    >
      <div
        className={`fixed  top-0 right-0 w-full  h-screen bg-white bg-opacity-30 modal lg:hidden transition-transform duration-700  ${
          open ? "" : "translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div className="top-0 right-0 bg-white w-full h-screen">
          <div>
            <div className="w-full h-32 relative">
              <Button onClick={onClose}>
                <CloseButton />
              </Button>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <CustomeNavlink onClose={onClose} path="/">
                <DashboardButton />
                <span>داشبورد</span>
              </CustomeNavlink>
              <CustomeNavlink onClose={onClose} path="/note">
                <NoteButton />
                <span>یادداشت ها</span>
              </CustomeNavlink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigator;
