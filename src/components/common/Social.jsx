import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Social() {
    return (
        <div className='my-4'>
            <a className='rounded-full inline-block p-2.5 bg-secondary'>
                <FaLinkedinIn className='text-white text-lg ' />
            </a>
            <a className='rounded-full inline-block p-2.5 bg-secondary ml-6'>
                <FaInstagram className='text-white text-lg' />
            </a>
            <a className='rounded-full inline-block p-2.5 bg-secondary ml-6'>
                <FaFacebookF className='text-white text-lg' />
            </a>
            <a className='rounded-full inline-block p-3 bg-secondary ml-6'>
                <svg
                    width='15'
                    height='16'
                    viewBox='0 0 15 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M4.46875 6.40741H8.07812L7.48438 8.3037H4.5V14.1481C4.5 14.4444 4.39062 14.4889 4.67188 14.5185L7 14.7259V16H0V14.6963L1.14062 14.5926C1.42188 14.563 1.5 14.4741 1.5 14.1926V8.42222C1.5 8.3037 1.34375 8.3037 1.1875 8.3037H0V6.40741H1.5V5.34074C1.5 2.82222 2.92187 1.78519 5.64062 1.78519C7.46875 1.78519 9.10938 2.2 9.10938 4.46667L6.39062 4.77778C6.40625 3.82963 6.15625 3.60741 5.51562 3.60741C4.53125 3.60741 4.5 4.11111 4.5 5V6.18519C4.5 6.3037 4.3125 6.40741 4.46875 6.40741ZM15 16H9.5V14.7259L10.5938 14.5926C10.875 14.563 11 14.5037 11 14.2222V8.74074C11 8.53333 10.8438 8.4 10.6406 8.34074L9.34375 8.01481L9.70312 6.51852H14V14.2222C14 14.5185 13.8594 14.5481 14.1562 14.5926L15 14.7259V16ZM13.8281 3.14074L14.3125 4.82963L13.9219 5.2L12.25 4.35556L10.5781 5.2L10.1875 4.82963L10.6719 3.14074L9.5 1.79259L9.6875 1.42222H11.1719L12 0H12.5L13.3281 1.42222H14.8125L15 1.91111L13.8281 3.14074Z'
                        fill='#fff'
                    />
                </svg>
            </a>
        </div>
    );
}
