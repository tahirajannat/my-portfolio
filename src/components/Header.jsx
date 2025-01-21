import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_white.png';

export default function Header() {
    let activeClassName =
        'inline-flex justify-center items-center text-[18px] text-white border-r-white px-10 my-auto ju border-r last:border-r-0 h-12';
    let nonActiveClassName =
        'inline-flex text-[#607b96] text-[18px]  border-r last:border-r-0 px-10  hover:border-r-white hover:text-white border-gray-700 transition-all duration-75 h-12 my-4 justify-center items-center ';
    return (
        <header>
            <nav className='bg-[#011627]  border-b border-gray-700 px-4 lg:px-6 shadow-sm flex justify-center items-center'>
                <div className='container px-6 lg::px-20 flex flex-wrap justify-between items-center mx-auto'>
                    <a href='/' className='flex items-center'>
                        <img
                            src={Logo}
                            className='mr-3 h-6 sm:h-9'
                            alt='Flowbite Logo'
                        />
                    </a>
                    {/* <div className='flex items-center lg:order-2'>
                        <a href='#'>
                            <FaUserCircle className='text-2xl text-white' />
                        </a>
                        <button
                            data-collapse-toggle='mobile-menu-2'
                            type='button'
                            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='mobile-menu-2'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className='w-6 h-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            <svg
                                className='hidden w-6 h-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </button>
                    </div> */}
                    <div
                        className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
                        id='mobile-menu-2'
                    >
                        <ul className='flex items-center flex-col mt-4 font-medium lg:flex-row  lg:mt-0 text-white'>
                            <NavLink
                                to=''
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : nonActiveClassName
                                }
                            >
                                _home
                            </NavLink>
                            <NavLink
                                to='/about-me'
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : nonActiveClassName
                                }
                            >
                                _about-me
                            </NavLink>
                            <NavLink
                                to='/work'
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : nonActiveClassName
                                }
                            >
                                _projects
                            </NavLink>
                            <NavLink
                                to='/services'
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : nonActiveClassName
                                }
                            >
                                _services
                            </NavLink>
                            <NavLink
                                to='contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClassName
                                        : nonActiveClassName
                                }
                            >
                                _contact-me
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
