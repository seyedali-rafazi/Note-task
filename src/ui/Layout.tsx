import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className="max-w-[2000px] mx-auto bg-red-500 h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex w-full h-full">
        <div className="w-[320px] h-full bg-black">
          <Sidebar />
        </div>
        <div className="w-full h-screen bg-white ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
