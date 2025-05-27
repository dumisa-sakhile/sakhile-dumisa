
const ProfileCard = () => {
  return (
    <div className="mx-auto w-full max-w-xs bg-[#ECECEC] text-black rounded-[32px] shadow-lg p-6 flex flex-col items-center gap-4 md:max-w-sm">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 mt-2 mb-1">
        <span className="text-4xl bricolage-grotesque-black">
          Sakhile Dumisa
        </span>
      </div>

      {/* Profile Image */}
      <div className="w-full">
        <img
          src="https://img.freepik.com/free-vector/man-posing-side-view-with-lines_79603-866.jpg"
          alt="Profile"
          className="w-full aspect-square object-cover rounded-2xl"
        />
      </div>

      {/* Specialization */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div>
          <span className="text-gray-500 roboto-condensed-regular text-sm">
            Specialization:
          </span>
          <div className="font-bold text-base text-black mt-1">
            MERN (MongoDB, Express, React, Node.js) & Full Stack Development.
          </div>
        </div>
        <div className="mt-2">
          <span className="text-gray-500 roboto-condensed-regular text-sm">
            Based in:
          </span>
          <div className="font-bold text-base text-black mt-1">
            Pretoria, South Africa
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <a
        href="https://www.linkedin.com/in/sakhile-dumisa"
        target="_blank"
        className="text-center w-full bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 rounded-full mt-5 transition-all duration-200   text-base ">
        LinkedIn Profile
      </a>
    </div>
  );
};

export default ProfileCard;
