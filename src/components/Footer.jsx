import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import Logo from '../assets/logo_white_new.png';
import Button from './common/Button';
import Social from './common/Social';

export default function Footer() {
    return (
        <section className=' bg-secondary relative '>
            <div className=' container mx-auto sm:grid px-8 lg:px-20 py-8 lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12'>
                <div className='lg:mt-0 col-span-12 lg:col-span-4 place-self-center lg:pr-14 z-10'>
                    <a
                        href='https://flowbite.com'
                        className='flex items-center'
                    >
                        <img
                            src={Logo}
                            className='mr-3 sm:h-12 h-6 '
                            alt='Flowbite Logo'
                        />
                    </a>
                    <div className='my-4'>
                        <p className=' leading-8'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummynibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                    <Social />
                </div>
                <div className='mr-auto col-span-6 lg:col-span-4 z-10'>
                    <h2 className='mb-4 text-[20px] text-accent leading-none '>
                        //Latest Works
                    </h2>
                    <h3 className='mb-4 text-[18px] text-accent'>About Me</h3>
                    <h3 className='mb-4 text-[18px] text-accent'>Blog</h3>
                    <h3 className='mb-4 text-[18px] text-accent'>
                        Privacy & Policy
                    </h3>
                    <h3 className='mb-4 text-[18px] text-accent'>Sign In</h3>
                </div>
                <div className='mr-auto col-span-6 lg:col-span-4 z-10 '>
                    <h2 className='mb-4 text-[20px] text-accent leading-none '>
                        //Contact Me
                    </h2>
                    <p className=' leading-8'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummynibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                    </p>
                    <div className='flex items-center my-8'>
                        <input
                            className='appearance-none block w-full bg-primary opacity-40 text-gray-900 placeholder:text-gray-500 border border-gray-200 rounded py-3.5 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-email'
                            type='email'
                            placeholder='Subscribe'
                        />
                        {/* <Button children={'Go'} styles="!px-4 "/> */}
                        <Button
                            styles='!px-3 py-2.5 -ml-2 z-10 border !border-gray-400 rounded-r border-l-0'
                            icon={
                                <MdOutlineSubdirectoryArrowRight className='text-xl mt-1.5 ' />
                            }
                        >
                            _go
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
