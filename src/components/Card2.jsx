import React from 'react';

export const Card2 = (props) => {
    return (
        <div className='flex flex-col w-[290px] h-auto border rounded-md overflow-hidden mb-5 pb-2 shadow-md'>
            <div className='relative'>
                <div className='w-full h-[60%]'>
                    <img className='h-[240px] w-full object-cover rounded-md' src={props.headerImage} alt="" />
                    <button style={{ backgroundColor: props.buttonColor }} className="text-[15px] font-medium text-white px-8 py-2 w-auto rounded-xl absolute bottom-1 left-2  translate-y-5 ">
                        {props.buttonText}
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-15px font-semibold ml-2'>{props.header}</h3>
            </div>
            <div className='flex' >
                <div>
                    <hr className='w-56 ml-2 h-1 border-none mt-3' style={{ background: `linear-gradient(to right, ${props.buttonColor} 80%, grey 20%)` }} />
                </div>

                <p style={{ color: props.buttonColor }} >100%</p>
            </div>
            <div>
                <p className='ml-2 text-[10px] font-medium'>Donators</p>
            </div>
            <div>
                <p style={{ color: props.buttonColor }} className='text-[15px] font-medium ml-2'>{props.number}</p>
            </div>
        </div>
    );
};


