export default function Button({ children, onClick, href }) {
  const ButtonContent = (
    <div className="p-[2px] bg-gradient-to-r from-[#b67b2c] via-[#fff6d6] to-[#b67b2c] rounded-md shadow-md">
      <button
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer bg-white text-bg-azul font-button py-4 px-24 rounded-md transition-colors duration-200 hover:bg-[#f1f1f1] hover:text-bg-azul w-full"
      >
        {children}
      </button>
    </div>
  );

  if (href) {
    return <a href={href}>{ButtonContent}</a>;
  }

  return ButtonContent;
}
