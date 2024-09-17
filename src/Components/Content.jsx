import Experience from "./Experience";
import History from "./History";
import Intro from "./Intro";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Content = () => {
  return (
    <div className="fixed w-full h-full overflow-y-auto p-10 pt-24">
      <Intro />
      <br />
      <br />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <Experience />
      <br />
<History />
<br />
<Skills />
    </div>
  );
}

export default Content