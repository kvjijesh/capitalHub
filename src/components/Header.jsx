import BlackButtton from "./BlackButtton"
import Button from "./Button"
import { IoMenu } from "react-icons/io5"

const Header = () => {
    return (
        <>
            <div className="md:h-[93px] h-[65px] border-b">
                <div className='hidden md:flex justify-between max-w-[90%] mx-auto'>
                    <div className="md:w-[10%] invisible"></div>
                    <div className="flex justify-center">
                        <ul className="flex gap-10 mt-8 font-semibold text-[18]">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="flex mt-8 gap-1">
                        <Button text={'Donate'} />
                        <BlackButtton text={'Sign In'} />

                    </div>
                </div>
                <div className="md:hidden flex justify-evenly">
                    <div className="pt-6">
                        <IoMenu />
                    </div>
                    <div className="flex gap-1 pt-3">
                        <Button text={'Donate'} />
                        <BlackButtton text={'Sign In'} />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Header
