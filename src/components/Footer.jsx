import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import Logo from '../assets/logo-new.png';
import Button from './common/Button';
import Social from './common/Social';

export default function Footer() {
    return (
        <section className=' bg-primary relative '>
            <div className=' border-b border-secondary'>
                <div className=' container mx-auto sm:grid px-8 py-8 lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12'>
                    <div className='lg:mt-0 col-span-12 lg:col-span-4  lg:pr-14 z-10'>
                        <a href='/' className='flex items-center'>
                            <img
                                src={Logo}
                                className='mr-3 sm:h-10 h-6 '
                                alt='tahira Logo'
                            />
                        </a>
                        <div className='my-4'>
                            <p className=' leading-8 text-lg'>
                                Crafting innovative solutions to solve
                                real-world problems
                            </p>
                        </div>
                        {/* <Social /> */}
                    </div>
                    <div className='mr-auto col-span-6 lg:col-span-4 z-10'>
                        <h2 className='mb-4 text-base uppercase text-accent leading-none '>
                            // Latest Works
                        </h2>
                        <h3 className='mb-4 text-lg text-accent'>About Me</h3>
                        <h3 className='mb-4 text-lg text-accent'>Blog</h3>
                        <h3 className='mb-4 text-lg text-accent'>
                            Privacy & Policy
                        </h3>
                        <h3 className='mb-4 text-lg text-accent'>Sign In</h3>
                    </div>
                    <div className='mr-auto col-span-6 lg:col-span-4 z-10 '>
                        <h2 className='mb-4 text-base uppercase text-accent leading-none '>
                            // Contact Me
                        </h2>
                        <p className=' leading-8 text-lg'>
                            Looking for help? Fill the form and start a new
                            adventure.
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
                                    <MdOutlineSubdirectoryArrowRight className='text-xl mt-1.5 mr-2 ' />
                                }
                            >
                                go
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' bg-primary'>
                <div className='flex justify-between container mx-auto px-8 items-center'>
                    <div>
                        <p>© 2025 Tahira Jannat | Coded with 🩵</p>
                    </div>
                    <div>
                        <Social />
                    </div>
                </div>
            </div>
        </section>
    );
}
