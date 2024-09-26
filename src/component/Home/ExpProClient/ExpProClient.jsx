import React from 'react';

const ExpProClient = ({data}) => {
    return (
        <div className='expPro w-[100%] flex justify-center mt-[5rem] mb-[3rem]'>
            <div className='text-[#161513] basis-[30%] border-[1px] border-[#161513] text-center font-bold text-[56px] pb-[20px]'>{data.exp}+ <p className='text-[16px]'>YEARS OF EXPERIENCE</p> </div>
            <div className='text-[#ffffff] bg-[#161513] border-[1px] border-[#161513] basis-[30%] text-center font-bold text-[56px]'>{data.project}+ <p className='text-[16px]'>PROJECT COMPLETED</p> </div>
            <div className='text-[#161513] basis-[30%] border-[1px] border-[#161513] text-center font-bold text-[56px]'>{data.client}+ <p className='text-[16px]'>HAPPY CLIENTS</p> </div>
        </div>
    );
}

export default ExpProClient;
