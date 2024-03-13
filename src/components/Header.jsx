import BlackButtton from "./BlackButtton"
import Button from "./Button"
import { IoMenu } from "react-icons/io5"

const Header = () => {
    return (
        <>
            <div className="md:h-[93px] h-[45px] border-b">
                <div className='hidden md:flex justify-between max-w-[90%] mx-auto'>
                    <div className="md:w-[10%] invisible"></div>
                    <div className="flex justify-center">
                        <ul className="flex gap-10 mt-8 font-semibold text-[18]">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="md:flex mt-8 gap-1 hidden">
                        <Button text={'Donate'} />
                        <BlackButtton text={'Sign In'} />

                    </div>
                </div>
                <div className="md:hidden flex justify-start align-middle content-center p-4">
                    <IoMenu />
                </div>
            </div>
        </>
    )
}

export default Header
