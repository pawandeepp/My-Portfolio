import React from 'react';

const TitleAndDesc = ({title,desc}) => {
    return (
        <div>
            <h2 className='exp-title text-[#EA4334] text-[12px] font-[600]'>{title}</h2>
            <p className=' exp-data text-[24px] font-bold'>{desc}</p>
        </div>
    );
}

export default TitleAndDesc;
