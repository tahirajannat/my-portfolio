import React from 'react';
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';
import Border from '../common/Border';
import Button from '../common/Button';

export default function Contact() {
    return (
        <section className=' bg-primary relative '>
            <div className=' container mx-auto sm:grid px-8 lg:px-20 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='mr-auto place-self-center col-span-12 lg:col-span-6 z-10'>
                    <h1 className='mb-4 text-lg lg:text-[24px] text-secondary'>
                        //Contact Me
                    </h1>
                    <h2 className='mb-4 text-[27px] lg:text-[40px] text-accent leading-none '>
                        Let's Connect <br />
                    </h2>
                    <Border />

                    <div className='mt-8'>
                        <p className=' leading-8'>
                            Looking for help? Fill the form and start a new
                            adventure.
                        </p>
                    </div>
                    <div className='my-8'>
                        <div>
                            <h2 className='mb-4 text-[16px] text-accent'>
                                Address
                            </h2>
                            <p className='mb-4 text-[18px] text-accent flex items-center gap-4'>
                                <span className='text-2xl text-secondary'>
                                    <FaHome />
                                </span>
                                744 New York Ave, Brooklyn, Kings,New York 10224
                            </p>
                        </div>
                        <div>
                            <h2 className='mb-4 text-[16px] text-accent'>
                                Phone
                            </h2>
                            <p className='mb-4 text-[18px] text-accent flex items-center gap-4'>
                                <span className='text-2xl text-secondary'>
                                    <FaPhone />
                                </span>
                                (+642) 245 356 432 <br />
                                (+642) 245 356 432
                            </p>
                        </div>
                        <div>
                            <h2 className='mb-4 text-[16px] text-accent'>
                                suppot
                            </h2>
                            <p className='mb-4 text-[18px] text-accent flex items-center gap-4'>
                                <span className='text-2xl text-secondary'>
                                    <FaEnvelope />
                                </span>
                                suppot@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-0 col-span-12 lg:col-span-6 pr-0 lg:pr-14 z-10'>
                    <div className='max-w-screen-md mx-auto py-8 lg:p-5'>
                        <h1 className='mb-4 text-lg lg:text-[24px] text-secondary'>
                            //Let’s Talk
                        </h1>
                        <h2 className='mb-4 text-[26px] lg:text-[40px] text-accent leading-none '>
                            Discuss Your Project
                        </h2>
                        <Border />
                        <div className='my-8'>
                            <p className=' leading-8'>
                                Enter your project details with a valid contact
                                details.
                            </p>
                        </div>

                        <form className='w-full'>
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    {/* <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label> */}
                                    <input
                                        className='appearance-none block w-full bg-[#92e3a98a] opacity-40 text-gray-900 placeholder:text-gray-500 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                        id='grid-first-name'
                                        type='text'
                                        placeholder='Jane Doe'
                                    />
                                    <p className='text-red-500 text-xs italic'>
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div className='w-full md:w-1/2 px-3'>
                                    {/* <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label> */}
                                    <input
                                        className='appearance-none block w-full bg-[#92e3a98a] opacity-40 text-gray-900 placeholder:text-gray-500border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-email'
                                        type='email'
                                        placeholder='********@*****.**'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full px-3'>
                                    {/* <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Subject
                  </label> */}
                                    <input
                                        className='appearance-none block w-full bg-[#92e3a98a] opacity-40 text-gray-900 placeholder:text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-last-name'
                                        type='text'
                                        placeholder='E-commerce website Development'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full px-3'>
                                    <textarea
                                        rows='10'
                                        className='appearance-none block w-full bg-[#92e3a98a] opacity-40 text-gray-900 placeholder:text-gray-500 border border-[#92e3a98a] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        placeholder='Project Idea'
                                    ></textarea>
                                </div>
                                <div className='pt-6 px-3'>
                                    <Button styles='bg-secondary'>
                                        Go Ahead
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
