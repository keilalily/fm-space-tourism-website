import { navigation } from "../data/data";
import { iconClose } from "../assets/shared";

function MobileNavigation({ isOpen, setIsOpen, activePage, setActivePage }) {
    return (
        <nav
            role="navigation"
            className={`${isOpen ? 'w-2/3 pl-8' : 'w-0 pl-0 overflow-hidden pointer-events-none'} flex md:hidden flex-col justify-start h-screen bg-white/5 backdrop-blur-3xl top-0 right-0 fixed z-20 gap-12 transition-500`}
        >
            <div className='flex w-full py-8 pr-6 items-center justify-end'>
                <button
                    type="button"
                    aria-label="close menu"
                    className='w-6 h-6 cursor-pointer'
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={iconClose}
                        alt="close menu"
                        className='w-full h-full'
                    />
                </button>
            </div>
            <div className='flex flex-col gap-8'>
                {navigation.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className={`flex label-md text-white gap-2 hover:border-r-3 hover:border-white/50 items-center ${activePage === item.id ? 'border-r-3 border-white' : ''}`}
                        onClick={() => setActivePage(item.id)}
                    >
                        
                        <span className='font-bold'>{item.id}</span>
                        {item.name.toLocaleUpperCase()}
                    </a>
                ))}
            </div>
        </nav>
    )

}

export default MobileNavigation;