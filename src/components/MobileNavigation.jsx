import { Link } from "react-router-dom";
import { navigation } from "../data/data";
import { shared } from "../assets/assets";

function MobileNavigation({ isOpen, setIsOpen, activePage, setActivePage }) {
    return (
        <nav
            role="navigation"
            className={`${isOpen ? 'w-2/3 pl-8' : 'w-0 pl-0 overflow-hidden pointer-events-none'} flex md:hidden flex-col justify-start h-screen bg-(color-blue-dark)/5 backdrop-blur-xl top-0 right-0 fixed z-20 gap-12 transition-500`}
        >
            <div className='flex w-full py-8 pr-6 items-center justify-end'>
                <button
                    type="button"
                    aria-label="close menu"
                    className='w-6 h-6 cursor-pointer'
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={shared.iconClose}
                        alt="close menu"
                        className='w-full h-full'
                    />
                </button>
            </div>
            <div className='flex flex-col gap-8'>
                {navigation.map((item) => (
                    <Link
                        key={item.id}
                        to={item.link}
                        className={`flex font-barlow-condensed text-[1rem] text-white gap-2 hover:border-r-3 hover:border-white/50 items-center ${activePage === item.id ? 'border-r-3 border-white' : ''}`}
                        onClick={() => setActivePage(item.id)}
                    >
                        
                        <span className='font-bold'>{item.id}</span>
                        {item.name.toLocaleUpperCase()}
                    </Link>
                ))}
            </div>
        </nav>
    )

}

export default MobileNavigation;