import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { backgrounds } from "../assets/assets";
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";
import { destination } from "../data/data";

export default function Destination() {
    const [activeSection, setActiveSection] = useState(destination[0].name);
    const backgroundImage = useResponsiveBackground(backgrounds.destination);

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    }

    return (
        <PageLayout backgroundImage={backgroundImage}>
            <div className='flex flex-col w-full h-full grow p-6 gap-6 md:p-10 lg:p-12 xl:px-48'>
                <h2 className='
                    flex justify-center w-full uppercase gap-6
                    font-barlow-condensed text-white text-[1rem] tracking-15 
                    md:justify-start md:text[1.25rem] lg:text-[1.75rem]'
                >
                    <span className='font-bold opacity-25'>01</span>
                    Pick your destination
                </h2>
                <section id={activeSection} className='flex flex-col flex-1 items-center w-full h-full gap-8 lg:flex-row'>
                    {destination.filter((item) => item.name === activeSection).map((item) => (
                        <>
                            <div key={item.name} className='w-full h-full flex justify-center'>
                                <img
                                    src={item.image}
                                    alt={`${item.name} image`}
                                    className='w-38 h-38 m-6 object-cover md:w-75 md:h-75 lg:w-96 lg:h-96 xl:w-105 xl:h-105'
                                />
                            </div>
                            <div className='flex flex-col items-center w-full gap-6 md:px-22 lg:px-0 lg:items-start lg:gap-10'>
                                <ul className='flex gap-8'>
                                    {destination.map((tab) => (
                                        <li
                                            key={tab.name}
                                            className={`
                                                text-white flex items-start pb-2
                                                font-barlow-condensed text-[0.875rem] uppercase tracking-15 transition-500
                                                border-b-3 border-transparent cursor-pointer md:text-[1rem]
                                                ${activeSection === tab.name ? 'border-white' : 'hover:border-white/50'}`
                                            }
                                            onClick={() => handleSectionClick(tab.name)}
                                        >
                                            {tab.name}
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex flex-col gap-4 text-center lg:text-left'>
                                    <h1 className='font-bellefair text-white text-[3.5rem] uppercase md:text-[5rem] xl:text-[6rem]'>{item.name}</h1>
                                    <p className='font-barlow leading-[1.8] text-[15px] text-blue-light md:text-[1rem] xl:text=[1.125rem]'>
                                        {item.description}
                                    </p>
                                </div>
                                <hr className='w-full bg-white h-[2px] opacity-25' />
                                <div className='flex flex-col items-center justify-center gap-6 uppercase w-full md:flex-row'>
                                    <div className='flex flex-col items-center w-full gap-3 lg:items-start'>
                                        <span className='font-barlow-condensed text-[0.875rem] text-blue-light tracking-[2px]'>Avg. Distance</span>
                                        <p className='font-bellefair text-white text-[1.75rem]'>{item.distance}</p>
                                    </div>
                                    <div className='flex flex-col items-center w-full gap-3 lg:items-start'>
                                        <span className='font-barlow-condensed text-[0.875rem] text-blue-light tracking-[2px]'>Est. travel time</span>
                                        <p className='font-bellefair text-white text-[1.75rem]'>{item.travel}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </div>
        </PageLayout>
    )
}