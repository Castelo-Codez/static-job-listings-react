import {useState} from "react";
import data from "../../data.json";
import Filterbar from "./Filterbar";
import JobsList from "./JobsList";
export default function FilterableTable() {
    const [$filteredJobs, $newFilteredJobs] = useState([]);
    const $jobs = [
        ...data.map((el) => {
            return {
                ...el,
                searchKeyWords: [...el.tools, ...el.languages, el.role],
            };
        }),
    ].filter((el) => {
        if ($filteredJobs.length <= 0) {
            return el;
        } else {
            const status = $filteredJobs.every(($el) => {
                return el.searchKeyWords.includes($el);
            });
            if (status) {
                return el;
            }
        }
    });

    function removeKeyword(keyword) {
        $newFilteredJobs(
            $filteredJobs.filter(
                (el) => el.toLowerCase() !== keyword.toLowerCase()
            )
        );
    }
    function addToFilteredJobs(keyword) {
        if ($filteredJobs.includes(keyword)) {
            return;
        }
        return $newFilteredJobs([...$filteredJobs, keyword]);
    }

    return (
        <>
            <section
                aria-label="filterable table"
                id="filterable-table"
                className="fil-tab absolute w-full left-0 top-[calc(50px+5vw)]"
            >
                <div className="container">
                    {$filteredJobs.length > 0 && (
                        <Filterbar
                            clearAll={(e) => $newFilteredJobs([])}
                            filteredJobs={$filteredJobs}
                            removeKeyword={removeKeyword}
                        />
                    )}
                    <JobsList
                        jobsList={$jobs}
                        addToFilteredJobs={addToFilteredJobs}
                        filteredJobs={$filteredJobs}
                    />
                </div>
            </section>
        </>
    );
}
