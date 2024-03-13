
import girl from '../assets/girl.jpeg'
import girls2 from '../assets/girs2.jpeg'
import BlackButtton from './BlackButtton'
import boyLeft1 from '../assets/boyleft1.jpeg'
import boyLeft2 from '../assets/boyleft2.jpeg'
const Community = () => {
    return (
        <div className="w-full pb-10">
            <div className="max-w-[90%] mx-auto">
                <div className="text-center">
                    <h1 className="text-[40px] font-semibold">Join our community for donating and be a part of a <br /> positive change in the world. With over</h1>
                </div>
                <div className="flex mt-10">
                    <div className='w-[25%]'>
                        <div className='flex justify-end pb-10'>
                            <img className="w-[185px] h-[193px] rounded-md grayscale" src={girl} alt="" />
                        </div>
                        <div className='flex'>
                            <img className="w-[185px] h-[193px] rounded-md grayscale" src={girls2} alt="" />
                        </div>
                    </div>
                    <div className='w-[50%] px-10 text-center'>
                        <div>
                            <h1 className='text-[136px] italic font-normal'>130,987 +</h1>
                        </div>
                        <div>
                            <p className='text-[36px] font-normal text-center'>People are joined</p>
                        </div>
                        <div className='text-center my-5'>
                            <BlackButtton text={'Yes I want to join Community'} />
                        </div>
                    </div>
                    <div className='w-[25%]'>
                        <div className='flex justify-end '>
                            <img className='w-[118px] h-[123px] rounded-md grayscale' src={boyLeft1} alt="boy" />
                        </div>
                        <div className='flex justify-start mt-10'>
                            <img className='w-[146px] h-[188px] rounded-md grayscale' src={boyLeft2} alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex">

                </div>

            </div>

        </div>
    )
}

export default Community