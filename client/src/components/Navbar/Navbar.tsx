import Container from "../Container/Container";
import Controls from "./Controls";

const Navbar: React.FC = () => {
  return (
    <div className="float-right w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-end gap-3 md:gap-1">
            <Controls />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
