import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { backgrounds } from "../assets/assets";
import { useResponsiveMedia } from "../hooks/useResponsiveMedia";
import { crew } from "../data/data";

export default function Crew() {
    const [activeSection, setActiveSection] = useState(crew[0].name);
    const backgroundImage = useResponsiveMedia(backgrounds.crew);

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    }

    return (
        <PageLayout backgroundImage={backgroundImage}>
            <div className='flex flex-col w-full h-full grow p-6 gap-6 md:p-10 lg:py-12 xl:px-40'>
                {/* page title */}
                <h2 className='
                    flex justify-center w-full uppercase gap-6
                    font-barlow-condensed text-white text-[1rem] tracking-15 
                    md:justify-start md:text[1.25rem] lg:text-[1.75rem]'
                >
                    <span className='font-bold opacity-25'>02</span>
                    Meet your crew
                </h2>
                {/* section */}
                {crew.filter((item) => item.name === activeSection).map((item) => (
                    <section
                        key={item.name}
                        id={activeSection}
                        className='flex flex-col items-center w-full h-full gap-8 lg:flex-row'
                    >
                        {/* content block */}
                        <div className='flex flex-col w-full h-full gap-6 md:px-22 lg:px-0 lg:gap-10 lg:items-start'>
                            {/* texts */}
                            <div className='flex flex-col py-8 gap-6 lg:py-18 xl:py-28'>
                                {/* name and position */}
                                <div className='font-bellefair text-white uppercase flex flex-col items-center w-full gap-2 md:gap-4 lg:items-start'>
                                    <h3 className='opacity-50 text-[1.125rem] md:text-[1.5rem] xl:text-[2rem]'>
                                        {item.role}
                                    </h3>
                                    <h1 className='text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem]'>
                                        {item.name}
                                    </h1>
                                </div>
                                {/* description */}
                                <p className='text-center text-blue-light font-barlow leading-[1.8] text-[15px] md:text-[1rem] lg:text-[1.125rem] lg:text-left'>
                                    {item.bio}
                                </p>
                            </div>
                            {/* pagination */}
                            <ul className='flex gap-4 justify-center lg:gap-10 lg:justify-start'>
                                {crew.map((tab) => (
                                    <li
                                        key={tab.name}
                                        className={`
                                            bg-white rounded-full opacity-15 cursor-pointer
                                            transition-500 w-2.5 h-2.5 xl:w-4 xl:h-4 
                                            ${activeSection === tab.name ? 'opacity-100' : 'hover:opacity-50'}`
                                        }
                                        onClick={() => handleSectionClick(tab.name)}
                                    ></li>
                                ))}
                            </ul>
                        </div>
                        {/* image block */}
                        <div className='w-full h-full flex justify-center mask-b-from-80% mask-b-to-100%'>
                            <img
                                src={item.image}
                                alt={`${item.name} image`}
                                className='h-85 md:h-140 xl:h-169 object-cover'
                            />
                        </div>
                    </section>
                ))}
            </div>
        </PageLayout>
    )
}