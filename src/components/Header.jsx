import { useState } from "react";
import { navigation } from "../data/data";
import { logo, iconHamburger } from "../assets/shared";
import MobileNavigation from "./MobileNavigation";

function Header() {
    const [activePage, setActivePage] = useState(navigation[0].id);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className='flex justify-between items-center w-full bg-transparent p-6 md:p-0 xl:pt-10'>
                {/* logo image - all breakpoints */}
                <div className='flex items-center w-1/2 md:pl-10 md:gap-12 lg:gap-16 lg:pl-16'>
                    <img src={logo} alt="logo" className='h-[2.5rem]'/>
                    {/* line - desktop xl breakpoint */}
                    <span className='hidden xl:flex items-center w-full -mr-8 z-10 h-[1px] bg-white opacity-25'></span>
                </div>

                {/* menu button - mobile breakpoint */}
                <button
                    type="button"
                    aria-label="toggle menu"
                    className='flex md:hidden items-center w-6 h-6'
                    onClick={handleMenuClick}
                >
                    <img
                        className='w-full h-full'
                        src={iconHamburger}
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
                            className={`label-md text-white flex gap-2 items-center h-24 hover:border-b-3 hover:border-white/50 ${activePage === item.id ? 'border-b-3 border-white' : ''}`}
                            onClick={() => setActivePage(item.id)}
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