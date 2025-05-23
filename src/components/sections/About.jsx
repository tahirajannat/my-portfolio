import { useState } from 'react';
import BannerImg from '../../assets/about.png';
import bgimage from '../../assets/bg-sm.e20d3662.svg';
import Education from '../Education';
import Experience from '../Experience';
import Skills from '../Skills';
import Border from '../common/Border';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';

export default function About() {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <section className='  relative '>
            <div className=' container mx-auto sm:grid px-8 lg:px-8 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='lg:mt-0 col-span-12 lg:col-span-6 lg:pr-14 z-10'>
                    <img
                        className='object-cover block my-20 lg:my-[120px] mr-0 ml-auto'
                        src={BannerImg}
                        alt='banner'
                    />
                    <div className='absolute inset-y-0 left-0 flex justify-center items-center z-0'>
                        <img className='' src={bgimage} alt='banner' />
                    </div>
                </div>
                <div className='mr-auto place-self-center col-span-12 lg:col-span-6 z-10'>
                    <h6 className='mb-4 text-base  text-secondary uppercase'>
                        // About Me
                    </h6>
                    <h2 className='mb-4 text-[27px] lg:text-[40px] text-blue-600 leading-none'>
                        <span className='text-accent'>Small</span> Talk
                    </h2>
                    <Border />

                    <div className='mt-16'>
                        <p className=' leading-8'>
                            From checkout to global sales tax compliance,
                            companies around the world use Flowbite to simplify
                            their payment stack.
                        </p>
                    </div>
                    <div className='my-8'>
                        <Tabs active={active} onChange={handleChange}>
                            <Tab title='skills'>
                                <Skills />
                            </Tab>
                            <Tab title='experience'>
                                <Experience />
                            </Tab>
                            <Tab title='education'>
                                <Education />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}
