/* eslint-disable react/prop-types */

export default function Tabs({ active, onChange, children }) {
    return (
        <>
            <div className='pb-2 capitalize'>
                {children.map((menu, index) => (
                    <a
                        key={index}
                        onClick={() => onChange(index)}
                        className={
                            active === index
                                ? 'border-b border-white py-3 mr-3 lg:mr-6 mb-4 text-accent text-lg capitalize'
                                : 'mr-3 lg:mr-6  inline text-lg cursor-pointer text-secondary border-b-0 capitalize'
                        }
                        style={{
                            width: 100,
                        }}
                    >
                        {menu.props.title}
                    </a>
                ))}
            </div>
            <div className='h-80 '>{children[active]}</div>
        </>
    );
}
