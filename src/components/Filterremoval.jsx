export default function Filterremval({removeKeyowrd, keyword}) {
    return (
        <div aria-label={`${keyword} keyword`} className="flex">
            <span
                aria-label="keyowrd"
                className="block py-1 px-2  rounded-md capitalize text-mainSize bg-n-LightGrayishCyanBackground text-p-DesaturatedDarkCyan"
            >
                {keyword}
            </span>
            <button
                aria-label="remove keyowrd"
                title="remove keyword"
                type="button"
                onClick={removeKeyowrd}
                className="  bg-p-DesaturatedDarkCyan hover:bg-black p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                </svg>
            </button>
        </div>
    );
}
