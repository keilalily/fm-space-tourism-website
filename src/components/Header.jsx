import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../data/data";
import { shared } from "../assets/assets";
import MobileNavigation from "./MobileNavigation";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentPage = navigation.find(item => item.link === currentPath);
    const [activePage, setActivePage] = useState(navigation[0].id);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (currentPage) {
            setActivePage(currentPage.id);
        } else {
            setActivePage(navigation[0].id);
        }
    })

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className='flex justify-between items-center w-full bg-transparent p-6 md:p-0 xl:pt-10'>
                {/* logo image - all breakpoints */}
                <div className='flex items-center w-1/2 md:pl-10 md:gap-12 lg:gap-16 lg:pl-16'>
                    <img src={shared.logo} alt="logo" className='h-[2.5rem]'/>
                    {/* line - desktop xl breakpoint */}
                    <span className='hidden xl:flex items-center w-full -mr-8 z-10 h-[1px] bg-white opacity-25'></span>
                </div>

                {/* menu button - mobile breakpoint */}
                <button
                    type="button"
                    aria-label="toggle menu"
                    className='flex md:hidden items-center w-6 h-6 hover:cursor-pointer'
                    onClick={handleMenuClick}
                >
                    <img
                        className='w-full h-full'
                        src={shared.iconHamburger}
                        alt="menu"
                    />
                </button>
                {/* navigation links - tablet to desktop breakpoint */}
                <div
                    className='hidden w-3/4 md:flex items-center justify-end px-10 gap-12 -ml-16 bg-white/5 backdrop-blur-3xl lg:px-16 xl:w-1/2 xl:-ml-8'
                >
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className={`font-barlow-condensed text-[1rem] text-white flex gap-2 items-center h-24 border-b-3 border-transparent transition-500 ${activePage === item.id ? 'border-white' : 'hover:border-white/50'}`}
                        >
                            <span className='font-bold'>{item.id}</span>
                            {item.name.toLocaleUpperCase()}
                        </a>
                    ))}
                </div>
            </header>

            
            <MobileNavigation
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </>
    )
}

export default Header;