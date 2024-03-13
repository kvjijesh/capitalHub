import boy from '../assets/1.jpeg'
import boy2 from '../assets/2.jpeg'
import boy3 from '../assets/3.jpeg'
import boy4 from '../assets/4.jpeg'
import BlackButtton from './BlackButtton'

export const Hunger = () => {
  return (
    <div className="p-5">
      <div className="mx-auto max-w-[90%] md:flex gap-10 ">
        <div className="md:flex w-[50%] items-center gap-6 ml-5 flex-wrap ">
          <div className="w-[290px] max-h-fit border shadow-lg rounded-[10px] flex flex-col" >
            <div className="flex justify-center items-end  gap-6 h-[40%] w-full pb-10 pt-3  ">
              <div className="w-[90px] h-[90px] rounded-[100%] bg-white overflow-hidden">
                <img className="w-full h-full object-cover" src={boy} alt="" />
              </div>

              <div className="w-[65px] h-[65px] rounded-[100%] overflow-hidden bg-black">
                <img className='w-full h-full object-cover' src={boy2} alt="" />
              </div>
            </div>
            <div className="flex  h-[30%] w-full">
              <div className="flex justify-center pt-10 items-center gap-6 h-[50%] w-full">
                <div className="w-[65px] h-[65px] rounded-[100%] overflow-hidden bg-black">
                  <img className='w-full h-full object-cover' src={boy3} alt="" />
                </div>
                <div className="w-[90px] h-[90px] rounded-[100%] bg-white overflow-hidden">
                  <img className="w-full h-full object-cover" src={boy4} alt="" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-center p-5">828 Million people in the world are still hungry</p>
            </div>
          </div>
          <div className="w-[250px] max-h-[350px] border shadow-lg rounded-[10px] flex flex-col ml-5" >
            <div className="flex justify-center items-end  gap-6 h-[40%] w-full  pt-3  ">
              <div className="w-[90px] h-[90px] rounded-[100%] bg-white overflow-hidden">
                <img className="w-full h-full object-cover" src={boy} alt="" />
              </div>

              <div className="w-[65px] h-[65px] rounded-[100%] overflow-hidden bg-black">
                <img className='w-full h-full object-cover' src={boy2} alt="" />
              </div>
            </div>
            <div className="flex  h-[30%] w-full">
              <div className="flex justify-center pt-10 items-center gap-6 h-[50%] w-full">
                <div className="w-[65px] h-[65px] rounded-[100%] overflow-hidden bg-black">
                  <img className='w-full h-full object-cover' src={boy3} alt="" />
                </div>
                <div className="w-[90px] h-[90px] rounded-[100%] bg-white overflow-hidden">
                  <img className="w-full h-full object-cover" src={boy4} alt="" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-center p-5">828 Million people in the world are still hungry</p>
            </div>
          </div>

        </div>

        <div className='flex  flex-col pt-3'>
          <div>
            <h1 className='text-[36px] font-semibold'>No More Homeless</h1>
            <h1 className='text-[36px] font-semibold'>No More Hunger</h1>
          </div>
          <div className='my-5'>
            <p className='text-[18px] font-medium'>Lorem ipsum dolor sit amet consectetur. At consequat purus <br /> hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem</p>
          </div>
          <div className='mt-5'>
            <BlackButtton text={'Donate Now'} />
          </div>


        </div>
      </div>
    </div>
  )
}
