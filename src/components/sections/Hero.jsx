import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import BannerImg from '../../assets/banner.png';
import bgimage from '../../assets/bg-sm.e20d3662.svg';
import Button from '../common/Button';
import Social from '../common/Social';

const Hero = () => {
    return (
        <section className=' bg-[#011627] relative '>
            <div className=' container mx-auto sm:grid px-8 lg:px-8 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='absolute inset-y-0 right-0 flex justify-center items-center z-0'>
                    <img className='' src={bgimage} alt='banner' />
                </div>

                <div className='mr-auto place-self-center col-span-12 lg:col-span-6 z-10 pt-8'>
                    <h1 className='mb-4 text-4xl lg:text-[45px] text-white font-semibold '>
                        Hi- I'm Tahira Jannat
                    </h1>
                    {/* <h2 className='mb-4 text-[40px] lg:text-[72px] text-accent leading-none'>
                        Tahira <span className=' text-primary'>Jannat</span>
                    </h2> */}
                    <h3 className='mb-8 text-2xl  text-cyan-500'>
                        Professional freelancer & Web Developer
                    </h3>
                    <p className=' leading-8 text-white'>
                        Crafting innovative solutions to solve real-world
                        problems
                    </p>
                    <Button
                        styles='mt-10 lg:mt-16'
                        icon={
                            <MdOutlineSubdirectoryArrowRight className='mt-2' />
                        }
                    >
                        _say-hi
                    </Button>
                    <div className='mt-14 '>
                        <Social />
                        {/* <a className=' inline-block p-2.5 bg-slate-200'>
                            <FaLinkedinIn className='text-primary text-lg' />
                        </a>
                        <a className=' inline-block p-2.5 bg-slate-200 ml-6'>
                            <FaInstagram className='text-primary text-lg' />
                        </a>
                        <a className=' inline-block p-2.5 bg-slate-200 ml-6'>
                            <FaFacebookF className='text-primary text-lg' />
                        </a>
                        <a className=' inline-block p-3 bg-slate-200 ml-6'>
                            <svg
                                width='15'
                                height='16'
                                viewBox='0 0 15 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M4.46875 6.40741H8.07812L7.48438 8.3037H4.5V14.1481C4.5 14.4444 4.39062 14.4889 4.67188 14.5185L7 14.7259V16H0V14.6963L1.14062 14.5926C1.42188 14.563 1.5 14.4741 1.5 14.1926V8.42222C1.5 8.3037 1.34375 8.3037 1.1875 8.3037H0V6.40741H1.5V5.34074C1.5 2.82222 2.92187 1.78519 5.64062 1.78519C7.46875 1.78519 9.10938 2.2 9.10938 4.46667L6.39062 4.77778C6.40625 3.82963 6.15625 3.60741 5.51562 3.60741C4.53125 3.60741 4.5 4.11111 4.5 5V6.18519C4.5 6.3037 4.3125 6.40741 4.46875 6.40741ZM15 16H9.5V14.7259L10.5938 14.5926C10.875 14.563 11 14.5037 11 14.2222V8.74074C11 8.53333 10.8438 8.4 10.6406 8.34074L9.34375 8.01481L9.70312 6.51852H14V14.2222C14 14.5185 13.8594 14.5481 14.1562 14.5926L15 14.7259V16ZM13.8281 3.14074L14.3125 4.82963L13.9219 5.2L12.25 4.35556L10.5781 5.2L10.1875 4.82963L10.6719 3.14074L9.5 1.79259L9.6875 1.42222H11.1719L12 0H12.5L13.3281 1.42222H14.8125L15 1.91111L13.8281 3.14074Z'
                                    fill='#136C47'
                                />
                            </svg>
                        </a> */}
                    </div>
                </div>
                <div className='lg:mt-0 col-span-12 lg:col-span-6 md:pr-14 z-50'>
                    <img
                        className='object-cover block mt-20 mb-10 md:my-[120px] mr-0 ml-auto'
                        src={BannerImg}
                        alt='banner'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
