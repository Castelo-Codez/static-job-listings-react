export default function HeaderBackground() {
    return (
        <section
            aria-label="header background"
            className=" bg-p-DesaturatedDarkCyan h-auto"
        >
            <img
                className=" max-w-none w-full hidden sm:block"
                src="/bg-header-desktop.svg"
                alt="header desktop image"
            />
            <img
                className=" max-w-none w-full sm:hidden"
                src="/bg-header-mobile.svg"
                alt="header mobile image"
            />
        </section>
    );
}
