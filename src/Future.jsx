import React from 'react'
import BlackButtton from './components/BlackButtton';
import childImage from './assets/children.jpeg'

const Future = () => {
    return (
        <div className='w-full mb-5 '>
            <div className='max-w-[90%] mx-auto flex h-[40vh] flex-wrap justify-around px-5'>
                <div className='flex flex-col md:w-[50%] w-full'>
                    <div>
                        <h1 className='text-[40px] font-semibold'>Great futures are built with a small trust</h1>
                    </div>
                    <div className='pt-5'>
                        <p className='text-[18px] font-medium'>Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   </p>
                    </div>
                    <div className='pt-5 mb-5'>
                        <BlackButtton text={'Donate Now'} />
                    </div>
                </div>
                <div className='border shadow-2xl'>
                    <img className='w-[555px] h-[280px] object-cover' src={childImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Future