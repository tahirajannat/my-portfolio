import { FaWordpress } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPreact, SiTailwindcss } from 'react-icons/si';
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

    return (
        <div className='bg-primary'>
            <div className='container mx-auto px-8 lg:px-8 py-20 grid grid-cols-12'>
                <div className=' col-span-12 lg:col-span-6'>
                    <h1 className='mb-4 text-lg lg:text-[24px] text-secondary'>
                        //What I Offer
                    </h1>
                    <h2 className='mb-4 text-[26px] lg:text-[40px] text-accent leading-none '>
                        Affordable Services
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
                            <h2 className='my-4 text-[20px] lg:text-[24px] text-[#18f2e5]'>
                                {' '}
                                {data.service}{' '}
                            </h2>
                            <p className='text-lg text-secondary'>
                                {data.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
