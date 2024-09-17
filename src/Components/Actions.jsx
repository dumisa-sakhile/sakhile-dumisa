
const Actions = () => {
  return (
    <div className="fixed bottom-10 right-10  w-[200px] min-h-[200px] flex flex-col items-center justify-end space-y-4">
      <button className="bg-[#C5FF41] hover:bg-[#6f9c05] text-black font-bold py-2 px-8 rounded">
        Dev Skills
      </button>

      <button className="bg-white hover:bg-slate-200 text-black font-bold py-2 px-8 rounded">
        Projects
      </button>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded">
        Email me
      </button>
    </div>
  );
}

export default Actions