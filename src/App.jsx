

import Content from "./Components/Content";
import Profile from "./Components/Profile";
import Actions from "./Components/Actions";
import { inject } from "@vercel/analytics";

inject();

const App = () => {
  return (
    <>
    <section className="w-screen h-screen fixed top-0 left-0 bg-[#151312] z-50 flex md:hidden items-center justify-center roboto-condensed-regular p-4">Please use a larger screen, this site is not optimized for smaller screens.</section>
      <div className="bg-[#151312] text-white w-full min-h-lvh p-2 flex flex-col md:flex-row overflow-y-auto items-center justify-center md:items-start md:justify-center roboto-condensed-regular">
        <div className="bg-inherit w-full h-full lg:w-[800px] flex items-start justify-end p-10 pt-24">
          <Profile />
        </div>

        <div className="w-full h-full">
          <Content />
        </div>

        <Actions />
      </div>
    </>
  );
};

export default App;
