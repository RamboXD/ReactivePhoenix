import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
