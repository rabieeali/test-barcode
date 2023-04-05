import { InputSearch } from "../../common/Input/InputSearch";
import HeaderImage from "./HeaderImage";
import Logo from "./Logo";

const Header = () => {
  return (
    <div>
      <HeaderImage />
      <div className='container flex items-center justify-between mx-auto my-4'>
        <Logo />
        <InputSearch className='w-3/5' />
        <div>cart</div>
      </div>
    </div>
  );
};

export default Header;
