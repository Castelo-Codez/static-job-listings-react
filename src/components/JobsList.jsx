import JobsCard from "./JobCard";

export default function JobsList({jobsList, addToFilteredJobs, filteredJobs}) {
    return (
        <ul role="list" className=" w-full job-list">
            {jobsList.map((el) => {
                return (
                    <JobsCard
                        {...el}
                        key={el.id}
                        filteredJobs={filteredJobs}
                        addToFilteredJobs={addToFilteredJobs}
                    />
                );
            })}
        </ul>
    );
}
