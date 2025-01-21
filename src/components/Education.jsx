import Button from './common/Button';
const Education = () => {
    const education = [
        {
            certificate: 'B.S.C in Computer Science & Engineering',
            year: '2017-2022 (4 year)',
            university: 'University Of Liberal Arts Bangladesh',
        },
    ];
    return (
        <>
            {education.map((data, index) => (
                <div className='my-6 text-accent' key={index}>
                    <h3 className='text-sm mb-2'>{data.year} </h3>

                    <h2 className='mb-4 text-xl'> {data.certificate}</h2>
                    <p className='mb-4 text-lg text-secondary'>
                        {data.university}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Education;
