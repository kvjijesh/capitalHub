import React from 'react';
import food from '../assets/food.jpeg';
import cloths from '../assets/cloths.jpeg';
import education from '../assets/education.jpeg';
import medical from '../assets/medical.jpeg';
import { Card2 } from './Card2';
import BlackButtton from './BlackButtton';


const Campain = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[90%] mx-auto'>
                <div>
                    <h3 className='text-[40px] font-semibold text-center'>Our Campaign</h3>
                </div>
                <div className='flex flex-wrap justify-around mt-8'>
                    <Card2 buttonColor="#FF9900" headerImage={food} header='Help us to send food' buttonText='Food' number={50} />
                    <Card2 buttonColor="#088F8F" headerImage={cloths} header='Help us to send food' number={50} buttonText='Cloths' />
                    <Card2 buttonColor="#FF9900" headerImage={education} header='Help us to send food' number={50} buttonText='Education' />
                    <Card2 buttonColor="#096BA1" headerImage={medical} header='Help us to send food' number={50} buttonText='Medical' />
                </div>
                <div className='text-center my-10'>
                    <BlackButtton text={'Show More'} />
                </div>
            </div>
        </div>
    );
};

export default Campain;
