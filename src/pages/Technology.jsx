import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { backgrounds } from "../assets/assets";
import { useResponsiveMedia } from "../hooks/useResponsiveMedia";
import { technology } from "../data/data";

export default function Technology() {
    const [activeSection, setActiveSection] = useState(technology[0].name);
    const backgroundImage = useResponsiveMedia(backgrounds.technology);

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    }

    return (
        <PageLayout backgroundImage={backgroundImage}>
            <div className='flex flex-col w-full h-full grow gap-6 xl:py-12 xl:pl-40'>
                {/* page title */}
                <div className='p-6 pb-0 md:p-10 md:pb-0 lg:pt-12 xl:p-0'>
                    <h2 className='
                        flex justify-center w-full uppercase gap-6
                        font-barlow-condensed text-white text-[1rem] tracking-15 
                        md:justify-start md:text-[1.25rem] lg:text-[1.75rem]'
                    >
                        <span className='font-bold opacity-25'>03</span>
                        Space launch 101
                    </h2>
                </div>
                {/* section */}
                {technology.filter((item) => item.name === activeSection).map((item) => {
                    const image = useResponsiveMedia({
                        mobile: item.images.portrait,
                        tablet: item.images.landscape,
                        desktop: item.images.portrait,
                    });

                    return (
                        <section
                            key={item.name}
                            id={activeSection}
                            className='flex flex-col items-center w-full h-full gap-8 lg:flex-row-reverse'
                        >
                            {/* image */}
                            <div className='w-full h-80.5 flex pt-16 md:h-105.25 lg:h-full lg:py-8'>
                                <img
                                    src={image}
                                    alt={`${item.name} image`}
                                    className='h-full w-full object-cover object-center'
                                />
                            </div>
                            {/* content block */}
                            <div className='flex flex-col items-center w-full p-6 pb-12 gap-10 md:px-10 md:pb-10 lg:gap-16 lg:flex-row xl:p-0'>
                                {/* pagination */}
                                <ul className='flex gap-4 lg:gap-8 lg:flex-col'>
                                    {technology.map((tab, index) => (
                                        <li
                                            key={tab.name}
                                            className={`
                                                flex items-center justify-center font-bellefair cursor-pointer transition-500
                                                rounded-full bg-transparent border border-white/25 text-[1.125rem] w-10 h-10
                                                md:text-[1.5rem] md:w-14 md:h-14 xl:text-[2rem] xl:w-20 xl:h-20
                                                ${activeSection === tab.name ? 'bg-white text-blue-dark' : 'hover:border-white text-white'}`
                                            }
                                            onClick={() => handleSectionClick(tab.name)}
                                        >
                                            {index + 1}
                                        </li>
                                    ))}
                                </ul>
                                {/* texts */}
                                <div className="flex flex-col gap-4 items-center md:px-22 lg:items-start lg:gap-6 lg:px-0">
                                    {/* title */}
                                    <div className="flex flex-col items-center gap-4 font-bellefair text-white uppercase lg:items-start">
                                        <h3 className="text-[1.125rem] opacity-50 md:text-[1.5rem] xl:text-[2rem]">The terminology...</h3>
                                        <h1 className='text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem]'>{item.name}</h1>
                                    </div>
                                    <p className="font-barlow text-blue-light text-center text-[15px] leading-[1.8] md:text-[1rem] lg:text-left xl:text-[1.125rem]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </PageLayout>
    )
}