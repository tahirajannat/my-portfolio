import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import heroBg from '../../assets/hero-bg.png';
import Button from '../common/Button';
import Social from '../common/Social';

const Hero = () => {
    return (
        <section
            className=' bg-contain bg-no-repeat bg-center relative'
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* <div className='absolute inset-0 bg-black opacity-50 z-0'></div> */}
            <div className=' container px-6 lg::px-20 flex flex-wrap justify-between items-center mx-auto py-8 lg:py-16  relative z-10 w-full'>
                {/* <div className='absolute inset-y-0 left-0  z-0'>
                    <img
                        src={heroBg}
                        alt='background decorative'
                        className='w-full '
                    />
                </div> */}
                {/* Left content */}
                <div className='place-self-centers z-10 w-1/2 ml-24'>
                    <span className='mb-4 text-4xl lg:text-[45px] text-white font-light leading-snug'>
                        This is your <br /> web developer
                    </span>
                    <h1 className='mb-4 text-4xl lg:text-[45px] text-white font-semibold leading-snug'>
                        <span className='text-blue-800'>Tahira Jannat</span>
                    </h1>

                    <p className='leading-8 text-white'>
                        Crafting innovative solutions to solve real-world
                        problems
                    </p>

                    <Button
                        styles='mt-6 lg:mt-10'
                        icon={
                            <MdOutlineSubdirectoryArrowRight className='text-2xl mr-2' />
                        }
                    >
                        say hi
                    </Button>

                    <div className='mt-14'>
                        <Social />
                    </div>
                </div>

                {/* Right content */}
                {/* <div className='col-span-12 lg:col-span-6 relative z-20'>
                    <img
                        className='object-cover block mt-20 mb-10 md:my-[120px] ml-auto mr-0'
                        src={BannerImg}
                        alt='banner'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    </div>
                </div> */}

                {/* Background image decorative */}
                {/* <div className='absolute inset-y-0 right-0 flex justify-center items-center z-0'>
                    <img src={bgimage} alt='background decorative' />
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
