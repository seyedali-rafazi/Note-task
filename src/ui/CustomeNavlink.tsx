import { NavLink } from "react-router-dom";

interface CustomeNavlinkType {
  children: React.ReactNode;
  path: string;
}

const CustomeNavlink: React.FC<CustomeNavlinkType> = ({ children, path }) => {
  const sidebarStyles =
    "flex items-center gap-x-2 text-secondery-600 hover:bg-primary-100/50 hover:text-primary-600 py-1 px-2 transition-all duration-300 rounded-xl";
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `${sidebarStyles} bg-primary-100/80 text-primary-600`
            : `${sidebarStyles}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomeNavlink;
