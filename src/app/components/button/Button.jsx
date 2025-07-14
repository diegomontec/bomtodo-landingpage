export default function Button({children}) {
    return (
        <div>
            <button className="flex cursor-pointer bg-bg-creme text-bg-azul font-button py-4 px-14 rounded-md shadow-md transition-colors duration-200 hover:bg-[#ffffff] hover:text-bg-azul">
                {children}
            </button>
        </div>
    )
}
