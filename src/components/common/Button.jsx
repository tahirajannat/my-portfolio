/* eslint-disable react/prop-types */
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

export default function Button({ children, styles = '', icon }) {
    console.log('🚀 ~ file: Button.jsx:5 ~ Button ~ children:', children);
    return (
        <a
            href='#'
            className={`inline-flex items-center justify-center px-4 lg:px-6 py-3  text-lg font-medium text-center text-white bg-secondary  border border-primary hover:border-r-white hover:border-b-white hover:border-l-green-800 hover:border-t-green-800 transition-all duration-100 ${styles}`}
        >
            {icon ? (
                icon
            ) : (
                <MdOutlineSubdirectoryArrowRight className='text-2xl mt-1.5' />
            )}
            {children}
        </a>
    );
}
