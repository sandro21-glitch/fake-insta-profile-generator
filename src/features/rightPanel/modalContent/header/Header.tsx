import HeaderBottom from "./headerBottom/HeaderBottom";
import HeaderTop from "./headerTop/HeaderTop";

const Header = () => {
  return (
    <header className="text-modalHeaderSize">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
