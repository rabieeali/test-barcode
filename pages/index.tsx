import { TopNav } from "../common/Navbar/TopNav";
import { Breadcrumb } from "../common/breadcrumb";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <header className='bg-white'>
        <Header />
        <TopNav />
      </header>
      {/* <div className='bg-white'>
        <Breadcrumb />
      </div> */}

    </>
  );
};
export default HomePage;
