export default function NewOrFeatured({$new = false, $freatured = false}) {
    if ($new) {
        return (
            <li
                role="listitem"
                className=" bg-p-DesaturatedDarkCyan text-white uppercase  rounded-full w-fit pt-[3px] pb-[2px] px-2  flex justify-center items-center text-[13.5px]"
            >
                New!
            </li>
        );
    }
    if ($freatured) {
        return (
            <li
                role="listitem"
                className="  bg-n-VeryDarkGrayishCyan text-white uppercase rounded-full w-fit pt-[3px] pb-[2px] px-2  flex justify-center items-center text-[13.5px]"
            >
                Featured
            </li>
        );
    }
}
