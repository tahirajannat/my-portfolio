/* eslint-disable react/prop-types */
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

export default function Button({ children, styles = '', icon }) {
    console.log('🚀 ~ file: Button.jsx:5 ~ Button ~ children:', children);
    return (
        <a
            href='#'
            className={`inline-flex items-center justify-center px-4 lg:px-4 py-2  text-lg font-medium text-center bg-gradient-to-r from-purple-600 to-blue-500 rounded hover:from-purple-700 hover:to-blue-600 transition-all duration-100 capitalize text-white  ${styles}`}
        >
            {icon ? (
                icon
            ) : (
                <MdOutlineSubdirectoryArrowRight className='text-2xl' />
            )}
            {children}
        </a>
    );
}
