import cardImage1 from '../assets/cardImage1.png';
import cardImage2 from '../assets/cardImage2.png';
import cardImage3 from '../assets/cardImage3.png';
import BlackButtton from './BlackButtton';
import Card1 from './Card1';

const Volunteer = () => {
    return (
        <div className='w-full '>
            <div className='max-w-[90%] mx-auto flex flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold text-[40px]'>We Believe that We can Save <br /> More Life’s with you</h1>
                </div>
                <div className='flex justify-evenly my-10 flex-wrap'>
                    <Card1 image={cardImage1} heading="Become Volunteer" description="Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   " />
                    <Card1 image={cardImage2} heading="Quick Fundraise" description="Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   " />
                    <Card1 image={cardImage3} heading="Start Donating" description="Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   " />
                </div>
                <div className='mt-10 text-center mb-5'>
                    <BlackButtton text={'Donate Now'} />
                </div>
            </div>

        </div>
    )
}

export default Volunteer;
