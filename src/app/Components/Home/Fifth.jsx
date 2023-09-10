import React from 'react';
import bottom1 from '../../assets/Home/bottom_1.png';
import bottom2 from '../../assets/Home/bottom_2.png';
import bottom3 from '../../assets/Home/bottom_3.png';
import bottom4 from '../../assets/Home/bottom_4.png';
import bottom5 from '../../assets/Home/bottom_5.png';
import bottom6 from '../../assets/Home/bottom_6.png';
import bottom7 from '../../assets/Home/bottom_7.png';
import 'remixicon/fonts/remixicon.css';
import Image from 'next/image';

const Fifth = () => {
    return (
        <div className='flex justify-center items-center relative'>
            <div className='grid grid-flow-col h-screen w-[85vw] mt-20 rounded-3xl overflow-hidden gap-x-10 '>
                <div className=' col-span-6 row-start-1 row-span-3'>
                    <Image src={bottom1}></Image>
                </div>
                <div className='row-start-1 col-span-7'>
                    <Image src={bottom2}></Image>
                </div>
                <div className='row-start-1 w-11/12 col-span-7'>
                    <Image src={bottom3}></Image>
                </div>
                <div className=' col-start-7 row-start-2 mt-7 col-span-7'>
                    <Image src={bottom4}></Image>
                </div>
                <div className=' row-start-2 row-span-3 w-11/12 mt-7 col-span-7 rounded-3xl overflow-hidden'>
                    <Image src={bottom5}></Image>
                </div>
                <div className='row-start-4 col-start-1 col-span-8'>
                    <Image src={bottom6}></Image>
                </div>
                <div className='col-start-9 row-start-4 col-span-5 mt-2'>
                    <Image src={bottom7} ></Image>
                </div>
            </div>
            <div className=' bg-gradient-to-r from-[#302C30] to-[#3E373C] top-44 z-10 w-7/12 h-fit absolute rounded-full opacity-60 flex items-center justify-center flex-col gap-5 py-10'>
                <h1 className='font-[Cabinet] w-1/2 text-3xl text-center font-bold'>
                    Get New Updates from Saak
                </h1>
                <div className='bg-white w-5/12 rounded-full overflow-hidden flex items-center'>
                    <input type='text' className=' placeholder:text-black font-semibold placeholder:text-xs pl-5 py-1' placeholder='Enter your email'></input>
                    <div><i class="ri-arrow-right-line text-black"></i></div>
                </div>
            </div>
        </div>
    );
}

export default Fifth;
