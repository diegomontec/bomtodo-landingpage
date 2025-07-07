export default function Button({children}) {
    return (
        <div>
            <button className="cursor-pointer bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md text-lg transition-colors duration-200 hover:bg-black hover:text-white">
                {children}
            </button>
        </div>
    )
}
