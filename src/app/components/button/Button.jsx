export default function Button({children}) {
    return (
        <div>
            <button className="flex cursor-pointer border-amber-400 border-1 bg-[#ffffff] text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#d3d3d3]  hover:text-bg-azul">
                {children}
            </button>
        </div>
    )
}
