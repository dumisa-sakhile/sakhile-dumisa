import Image from "/src/assets/portrait-young-african-american-man.jpg";
import Socials from "./Socials";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Profile = () => {
  return (
    <main
      data-aos="fade-up"
      className="relative min-w-[300px] md:w-[344px] min-h-[500px] md:h-[640px] bg-inherit md:bg-white rounded-lg flex flex-col items-center py-6 justify-start gap-10 overflow-hidden">
      <img
        src={Image}
        className="w-[70%]  md:w-[300px] rounded-lg"
        alt="image"
      />

      <aside className="flex flex-col items-center justify-center w-[450px] h-[450px] border-8 border-dashed border-orange-700 rounded-full absolute -bottom-[90px] -left-50 touch-none pointer-events-none"></aside>

      <h1 className="oswald uppercase text-4xl text-white md:text-black">
        Sakhile Dumisa
      </h1>

      <p className="text-lg inter-regular w-[90%] text-white md:text-gray-600 text-center">
        An intermediate MERN (MongoDB, Express, React, Node) Stack & Next.js
        Developer
      </p>

      <Socials />

      <p className="text-sm text-center inter-regular text-white md:text-black">
        Photograph by&nbsp;
        <a
          href="https://www.freepik.com/free-photo/portrait-young-african-american-man_13611638.htm#fromView=search&page=1&position=16&uuid=f923919f-79c8-4eb9-8dce-743319d24e6a"
          target="_blank"
          className="text-orange-600 cursor-pointer">
          Freepik
        </a>
      </p>
    </main>
  );
};

export default Profile;
