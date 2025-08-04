export default function Button({ children }) {
  return (
    <div className="inline-block p-[2px] bg-gradient-to-r from-[#b67b2c] via-[#fff6d6] to-[#b67b2c] rounded-md shadow-md">
      <button className="flex items-center justify-center cursor-pointer bg-white text-bg-azul font-button py-4 px-14 rounded-md transition-colors duration-200 hover:bg-[#d3d3d3] hover:text-bg-azul w-full">
        {children}
      </button>
    </div>
  );
}
