import AboutLocationAndTime from "./AboutLoactionAndTime";
import NewOrFeatured from "./NewOrFeatured";
import Stack from "./Stack";

export default function JobsCard(props) {
    const {
        id,
        company,
        logo,
        featured,
        position,
        postedAt,
        contract,
        location,
        searchKeyWords,
        filteredJobs,
        addToFilteredJobs,
    } = props;
    return (
        <li
            data-aos="fade-down"
            className=" bg-white p-5  rounded-md mb-14 md:mb-5 shadow-lg relative  flex flex-col md:flex-row items-start md:items-center justify-between"
        >
            <ul
                role="list"
                aria-label="information list"
                className="flex gap-x-5  md:items-center"
            >
                <li
                    role="listitem"
                    aria-label={company + "logo"}
                    className=" absolute top-[-25px] left-3 md:static"
                >
                    <img
                        src={logo}
                        alt={company + "logo"}
                        className=" max-w-[50px] md:max-w-[80px]"
                    />
                </li>
                <li
                    aria-label="row information"
                    role="listitem"
                    className=" flex gap-y-3 flex-col pt-10 md:pt-0 "
                >
                    <ul
                        role="list"
                        className=" flex gap-x-2 items-center flex-wrap"
                    >
                        <li
                            role="listitem"
                            aria-label="company name"
                            className=" capitalize font-[700] text-p-DesaturatedDarkCyan"
                        >
                            {company}
                        </li>
                        {props.new && <NewOrFeatured $new={props.new} />}
                        {featured && <NewOrFeatured $freatured={featured} />}
                    </ul>
                    <h1 className="  capitalize text-n-VeryDarkGrayishCyan text-[calc(0.5vw+11px)] font-[700]">
                        {position}
                    </h1>
                    <AboutLocationAndTime
                        info={[postedAt, contract, location]}
                    />
                </li>
            </ul>
            <div
                aria-hidden="true"
                className=" bg-slate-300 h-[0.5px] w-full my-5 md:hidden"
            ></div>
            <Stack
                stack={searchKeyWords}
                filteredJobs={filteredJobs}
                addToFilteredJobs={addToFilteredJobs}
            />
        </li>
    );
}
