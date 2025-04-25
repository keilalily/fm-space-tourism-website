import PageLayout from "../components/layout/PageLayout";
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";
import { backgrounds } from "../assets/assets";

export default function Home() {
    const backgroundImage = useResponsiveBackground(backgrounds.home);

    return (
        <PageLayout backgroundImage={backgroundImage}>
            <div
                className='
                    flex flex-col items-center 
                    w-full h-full grow p-6 md:p-32 md:gap-6 lg:p-24 lg:flex-row lg:items-end xl:p-32'
            >
                <div className='flex flex-col items-center gap-6 h-full md:gap-8 lg:items-start lg:flex-1'>
                    <p className='
                        font-barlow-condensed tracking-15 text-[1rem] uppercase text-blue-light
                        md:text-[1.75rem]'
                    >
                        So, you want to travel to
                    </p>
                    <h1 className='font-bellefair text-[5rem] md:text-[9rem] leading-none uppercase text-white'>
                        Space
                    </h1>
                    <p className='
                        font-barlow leading-[1.8] text-[15px] text-center text-blue-light
                        md:text-[1rem] lg:text-left xl:text-[1.125rem]'
                    >
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className='flex flex-1 items-center justify-center w-full h-full lg:justify-end'>
                    <a
                        href='/destination'
                        className='flex items-center justify-center h-full'
                    >
                        <button
                            type='button'
                            className='
                                flex items-center justify-center
                                w-36 h-36 rounded-full bg-white
                                text-blue-dark uppercase
                                shadow-[0_0_0_88px_rgba(255,255,255,0)]
                                hover:shadow-[0_0_0_88px_rgba(255,255,255,0.10)]
                                hover:cursor-pointer
                                transition-500
                                font-bellefair text-[1.125rem]
                                md:w-68 md:h-68 md:text-[32px]'
                        >
                            Explore
                        </button>
                    </a>
                </div>
            </div>
        </PageLayout>
    )
}