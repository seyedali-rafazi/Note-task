import { useState } from "react";
import { MenuButton } from "../icons/Icon";
import SideNavigator from "./SIdeNavigator";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center p-3 max-w-[2000px] mx-auto bg-secondary-100 drop-shadow-md h-16">
      <div className="md:hidden">
        <Button onClick={() => setOpen(true)}>
          <MenuButton />
        </Button>
      </div>
      <SideNavigator open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
