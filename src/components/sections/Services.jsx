import { FaWordpress } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPreact, SiTailwindcss } from 'react-icons/si';
import arrowDown from '../../assets/Arrow-down.png';
import arrowTop from '../../assets/Arrow-top.png';
import borderBg from '../../assets/border-style.png';
import Service1 from '../../assets/service-1.png';
import Border from '../common/Border';

export default function Services() {
    const service = [
        {
            image: <IoLogoJavascript className='text-[#FFD600] text-5xl' />,
            isIcon: true,
            service: 'JavaScript Development',
            description:
                'Develop dynamic, interactive, and scalable web applications using modern JavaScript frameworks and best practices.',
        },
        {
            // image: <SiPreact className='text-cyan-500 text-5xl' />,
            image: <SiPreact className='text-cyan-500 text-5xl' />,
            isIcon: true,
            service: 'React.js Development',
            description:
                'Build fast, responsive, and user-friendly interfaces with React.js for web and mobile applications.',
        },
        {
            image: <SiTailwindcss className='text-cyan-400 text-5xl' />,
            isIcon: true,
            service: 'Tailwind CSS Styling',
            description:
                'Create clean, efficient, and fully responsive designs using Tailwind CSS for seamless user experiences.',
        },
        {
            image: Service1,
            isIcon: false,
            service: 'UI/UX Design',
            description:
                'Design intuitive and visually appealing user interfaces, focusing on enhancing user experience and accessibility.',
        },
        {
            image: <FaWordpress className='text-[#00749C] text-5xl' />,
            isIcon: true,
            service: 'Theme Development',
            description:
                'Develop custom WordPress themes tailored to client needs, ensuring scalability and performance optimization.',
        },
        {
            image: <FaWordpress className='text-[#00749C] text-5xl' />,
            isIcon: true,
            service: 'Theme Customization',
            description:
                'Customize existing WordPress themes to match branding requirements and add functionality as per client needs.',
        },
    ];
    const service2 = [
        'Empathize',
        'Define',
        'Ideate',
        'Prototype',
        'Qualitative test',
        'Quantitative',
        'Quantitative test',
    ];
    return (
        <div className='bg-primary'>
            <div className='container mx-auto px-8 lg:px-8 py-20 grid grid-cols-12'>
                <div className=' col-span-12 lg:col-span-6'>
                    <h1 className='mb-4 text-base text-secondary uppercase'>
                        // What I Offer
                    </h1>

                    <h2 className='mb-4 text-[27px] lg:text-[40px] text-blue-600 leading-none'>
                        <span className='text-accent'>My</span> specialities
                    </h2>
                    <Border />

                    <div className=' mt-10 lg:mt-16'>
                        <p className=' leading-8'>
                            Providing high-quality, tailored solutions to meet
                            your web design and development needs, ensuring
                            efficiency and excellence.
                        </p>
                    </div>
                </div>
                <div className='col-span-12 sm:grid grid-cols-2 lg:grid-cols-3  gap-6 my-6'>
                    {service.map((data, index) => (
                        <div
                            className=' col-span-1 bg-primary border border-secondary shadow-xl p-6 my-6 lg:my-0 '
                            key={index}
                        >
                            {data.isIcon ? (
                                <div className='text-4xl mb-4 flex justify-left'>
                                    {data.image}
                                </div>
                            ) : (
                                <img src={data.image} alt='' className='' />
                            )}
                            <h2 className='my-4 text-[20px] lg:text-[24px] text-blue-600'>
                                {data.service}{' '}
                            </h2>
                            <p className='text-lg text-secondary'>
                                {data.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto px-8 lg:px-8 py-20 p-12 text-center conatiner'>
                <div className=' px-8'>
                    <div className=' max-w-xl text-left'>
                        <h1 className='mb-4 text-base text-secondary uppercase'>
                            // about me
                        </h1>

                        <h2 className='mb-4 text-[27px] lg:text-[40px] text-blue-600 leading-none'>
                            <span className='text-accent'>My</span> work process
                        </h2>
                        <Border />

                        <div className=' mt-10 lg:mt-16'>
                            <p className=' leading-8'>
                                Providing high-quality, tailored solutions to
                                meet your web design and development needs,
                                ensuring efficiency and excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' mt-20 gap-0 container mx-auto'>
                    <div className='grid grid-cols-3 container mx-auto  px-8 relative'>
                        {service2.slice(0, 1).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 flex justify-start '
                            >
                                <div className='relative inline-block'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-auto'
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center '>
                                        <span className=' text-white text-center px-4'>
                                            {data}
                                        </span>
                                    </div>
                                    {/* Down Arrow Centered */}
                                    <img
                                        src={arrowDown}
                                        alt='arrow down'
                                        className='absolute right-0 bottom-10 transform -translate-x-1/2'
                                    />
                                </div>
                            </div>
                        ))}
                        {service2.slice(1, 2).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 relative flex justify-end'
                            >
                                <div className='absolute -left-5 inline-block'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-full '
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <span className='text-white text-centers'>
                                            {data}
                                        </span>
                                    </div>
                                    <img
                                        src={arrowDown}
                                        alt='arrow down'
                                        className='absolute right-0 bottom-10 transform -translate-x-1/2'
                                    />
                                </div>
                            </div>
                        ))}
                        {service2.slice(2, 3).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 relative flex justify-end'
                            >
                                <div className='absolute -left-12 inline-block'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-full '
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <span className='text-white text-centers'>
                                            {data}
                                        </span>
                                    </div>
                                    <img
                                        src={arrowDown}
                                        alt='arrow down'
                                        className='absolute right-0 bottom-10 transform -translate-x-1/2'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-3  container mx-auto px-8 '>
                        {service2.slice(3, 4).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 relative flex justify-end'
                            >
                                <div className='absolute -right-16 -top-20 inline-block'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-full '
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <span className='text-white text-centers'>
                                            {data}
                                        </span>
                                    </div>
                                    <img
                                        src={arrowTop}
                                        alt='arrow down'
                                        className='absolute right-0 top-5 transform -translate-x-1/2'
                                    />
                                </div>
                            </div>
                        ))}
                        {service2.slice(4, 5).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 relative flex justify-end'
                            >
                                <div className='absolute -right-10 -top-20 inline-block'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-full '
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <span className='text-white text-centers'>
                                            {data}
                                        </span>
                                    </div>
                                    <img
                                        src={arrowTop}
                                        alt='arrow down'
                                        className='absolute right-0 top-5 transform -translate-x-1/2'
                                    />
                                </div>
                            </div>
                        ))}
                        {service2.slice(5, 6).map((data, index) => (
                            <div
                                key={index}
                                className='col-span-1 relative flex justify-end'
                            >
                                <div className='relative inline-block -mt-20'>
                                    {/* Background Image */}
                                    <img
                                        src={borderBg}
                                        alt='background decorative'
                                        className='block w-full h-full '
                                    />

                                    {/* Centered Text */}
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <span className='text-white text-centers'>
                                            {data}
                                        </span>
                                    </div>
                                    {/* <img
                                        src={arrowTop}
                                        alt='arrow down'
                                        className='absolute right-0 top-10 transform -translate-x-1/2'
                                    /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
