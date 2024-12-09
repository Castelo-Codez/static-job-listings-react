import Filterremval from "./Filterremoval";

export default function Filterbar({filteredJobs, clearAll, removeKeyword}) {
    return (
        <section aria-label="filter bar section" className="animate-fade mb-8">
            <div className=" bg-white rounded-md shadow-lg py-5 px-8 flex justify-between items-center">
                <ul
                    role="list"
                    aria-label="stack list"
                    className="flex gap-5 flex-wrap"
                >
                    {filteredJobs.map((el, index) => {
                        return (
                            <li key={index}>
                                <Filterremval
                                    keyword={el}
                                    removeKeyowrd={(e) => removeKeyword(el)}
                                />
                            </li>
                        );
                    })}
                </ul>
                <button
                    type="button"
                    aria-label="clear all keywords"
                    title="clear all keywords"
                    className=" capitalize text-p-DesaturatedDarkCyan font-[600] hover:underline"
                    onClick={clearAll}
                >
                    clear
                </button>
            </div>
        </section>
    );
}
