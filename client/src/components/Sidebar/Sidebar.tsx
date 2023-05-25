import MenuControl from "./MenuControl";
import Logo from "./Logo";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed h-full w-72 bg-white z-10 shadow-sm border-r-[1px]">
      <div className="py-4">
        <div className="flex flex-row items-center justify-between px-5">
          <Logo />
          <MenuControl />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
