export default function Button({children}) {
    return (
        <div>
            <button className="cursor-pointer bg-white text-black font-button font-semibold py-4 px-14 rounded-md shadow-md text-lg transition-colors duration-200 hover:bg-black hover:text-white">
                {children}
            </button>
        </div>
    )
}
