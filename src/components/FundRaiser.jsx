import smile from '../assets/smile.png';
import heart from '../assets/heart.png'
const FundRaiser = () => {
    return (
        <div>
            <div className='max-w-[90%] mx-auto md:h-[528px] h-auto rounded-[20px] py-5  bg-[#C0E864]'>
                <div >
                    <h2 className='text-center text-[36px] font-semibold pt-10 py-8'>Fundraising on Buddha Trust takes just <br /> a few minutes</h2>
                </div>
                <div className="flex justify-evenly mt-5 flex-wrap">
                    <div className="md:w-[20%] w-full flex flex-col items-center mb-5 ">
                        <div className='flex w-[130px] h-[130px] justify-center items-center rounded-[100%] bg-white'>
                            <img className='w-[100px] h-[100px] object-cover' src={smile} alt="smile" />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-semibold'>Give Happiness</h3>
                        </div>
                        <div>
                            <p className='text-center text-[12px] font-medium'>Giving happiness to others is one of the most fulfilling things you can do in life.</p>
                        </div>
                    </div>
                    <div className="md:w-[20%] w-full flex flex-col items-center mb-5 ">
                        <div className='flex w-[130px] h-[130px] justify-center items-center rounded-[100%] bg-white'>
                            <img className='w-[100px] h-[100px] object-cover' src={heart} alt="smile" />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-semibold text-center'>Share Love</h3>
                        </div>
                        <div>
                            <p className='text-center text-[12px] font-medium'>When you share love with those around you, you create a ripple effect of kindness</p>
                        </div>
                    </div>
                    <div className='md:w-[20%] w-full flex flex-col items-center mb-5'>
                        <div className='flex w-[130px] h-[130px] justify-center items-center rounded-[100%] bg-white'>
                            <img className='w-[100px] h-[100px] object-cover' src={smile} alt="smile" />
                        </div>
                        <div>
                            <h3 className='text-[24px] font-semibold'>Build Socially</h3>
                        </div>
                        <div>
                            <p className='text-center text-[12px] font-medium'>Building socially requires not just connecting with others, but also actively contributing.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FundRaiser