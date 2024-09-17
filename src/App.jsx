import Content from "./Components/Content";
import Profile from "./Components/Profile";
import Actions from "./Components/Actions";

const App = () => {
  return (
    <div className="bg-[#151312] text-white w-full min-h-lvh p-2 flex items-start justify-center ">


      <div className="bg-inherit w-full h-full lg:w-[800px] flex items-start justify-end p-10 pt-24"><Profile/></div>

      <div className="w-full h-full"><Content/></div>

      <Actions/>

    </div>
  );
};

export default App;
