import { FaEye, FaGithub } from 'react-icons/fa';
import Image1 from '../../assets/work-1.png';
import Image2 from '../../assets/work-2.png';
import Image3 from '../../assets/work-3.png';
import Border from '../common/Border';
import Button from '../common/Button';

export default function LatestWorks() {
    const gallery = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
    ];

    return (
        <div className='bg-primary'>
            <div className='container mx-auto px-8 lg:px-20 py-20 grid grid-cols-12 gap-4 lg:gap-8'>
                <div className='col-span-12 lg:col-span-6 lg:pr-20'>
                    <h1 className='mb-4 text-lg lg:text-[24px] text-secondary'>
                        //Latest Works
                    </h1>
                    <h2 className='mb-4 text-[27px] lg:text-[40px] text-accent leading-none'>
                        Made With Pride.
                    </h2>
                    <Border />
                    <div className=' mt-14 lg:mt-16'>
                        <p className='leading-8'>
                            Showcasing our latest creations, crafted with care
                            and precision to reflect innovation and excellence.
                        </p>
                    </div>
                </div>
                {gallery.map((data, index) => (
                    <>
                        <div
                            key={index}
                            className='col-span-6 sm:col-span-4 lg:col-span-3 relative group'
                        >
                            <div className='absolute bg-black w-full h-full opacity-0 group-hover:opacity-80 flex flex-row justify-center items-center gap-2 mx-0 px-2 transition-opacity duration-300'>
                                <Button
                                    styles='mx-auto lg:!px-0 bg-transparent border-none text-xs'
                                    icon={<FaEye className='text-cyan-500' />}
                                >
                                    _live-preview
                                </Button>
                                <Button
                                    styles='mx-auto lg:!px-0 bg-transparent border-none text-xs'
                                    icon={
                                        <FaGithub className='text-cyan-500' />
                                    }
                                >
                                    _github-link
                                </Button>
                            </div>
                            <img
                                src={data.image}
                                alt=''
                                className='object-cover w-full h-full'
                            />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
