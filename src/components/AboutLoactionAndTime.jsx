export default function AboutLocationAndTime({info}) {
    return (
        <ul role="list" className=" flex gap-x-3 text-n-DarkGrayishCyan">
            {info.map((el, index) => {
                return (
                    <li
                        key={index}
                        className="pr-3 relative text-[12px] md:text-[15px]  after:absolute after:content-[''] after:w-1 after:h-1 after:bg-n-DarkGrayishCyan after:rounded-full after:top-2/4 after:-translate-y-2/4  after:right-0 last:after:hidden"
                    >
                        {el}
                    </li>
                );
            })}
        </ul>
    );
}
