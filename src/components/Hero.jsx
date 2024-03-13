import heroImage from '../assets/hero-bhudha.png'
import BlackButtton from './BlackButtton'
const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#EFF8D8] to-[#FFFFFE] h-[80vh]">
            <div className=" md:flex max-w-[95%] mx-auto h-[80%]">
                <div className="flex md:w-[65%] w-full  md:pl-10">
                    <div className="w-full h-full ">
                        <div className="w-full  mt-10">
                            <h2 className="md:font-semibold md:text-[64px] text-[32px]">Make someone’s Life <br /> by giving of yours</h2>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nulla! Mollitia accusamus possimus <br /> voluptas enim cumque, cupiditate voluptate id, ducimus.</p>
                        </div>
                        <div className='mt-5'>
                            <BlackButtton text={'Donate Now'} />
                        </div>
                    </div>
                </div>
                <div className=" md:flex justify-center items-center md:w-[35%] w-full pl-2 hidden">
                    <div className='flex w-[70%] h-[80%] justify-center items-center rounded-[100%] bg-[#CFE2AA]'>
                        <img className='h-[430px] pb-7' src={heroImage} alt="bhudha-image" />
                    </div>
                </div>
            </div>
            <div className="md:max-w-[100%] md:h-[20%] md: bg-black py-5  mx-auto">
                <div className='flex justify-around items-center max-w-[95%] mx-auto'>
                    <div className='flex items-center'>
                        <h1 className='text-[#CFD19B] text-[48px] font-semibold'>10K +</h1>
                        <p className='text-white text-[15px] font-medium ml-3'>children are back <br /> to school</p>
                    </div>
                    <div className=' flex items-center'>
                        <h1 className='text-[#CFD19B] text-[48px] font-semibold'>2M+</h1>
                        <p className='text-white text-[15px] font-medium ml-3'>Total money <br />Donated</p>
                    </div>
                    <div className=' flex items-center'>
                        <h1 className='text-[#CFD19B] text-[48px] font-semibold'>100 +</h1>
                        <p className='text-white text-[15px] font-medium ml-3'>Hospitals has <br />been built</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero