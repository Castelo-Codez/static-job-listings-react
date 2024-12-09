export default function Stack({stack, filteredJobs, addToFilteredJobs}) {
    return (
        <ul role="listitem" className=" flex  items-center gap-3 flex-wrap ">
            {stack.map((el, index) => {
                return (
                    <li key={index}>
                        <button
                            aria-label={`add ${el} to filtering keywords`}
                            title={`add ${el} to filtering keywords`}
                            className={
                                "block p-1 px-3 bg-n-LightGrayishCyanBackground text-[13px] font-[600] text-p-DesaturatedDarkCyan hover:bg-p-DesaturatedDarkCyan hover:text-white rounded-md" +
                                (filteredJobs.includes(el)
                                    ? " bg-p-DesaturatedDarkCyan text-white"
                                    : "")
                            }
                            onClick={(e) => addToFilteredJobs(el)}
                        >
                            {el}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
