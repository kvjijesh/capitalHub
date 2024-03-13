import BlackButtton from "./BlackButtton"
import Button from "./Button"

const Header = () => {
    return (
        <>
            <div className="h-[93px] border-b">
                <div className='flex justify-between max-w-[90%] mx-auto'>
                    <div></div>
                    <div className="flex">
                        <ul className="flex gap-10 mt-8 font-medium">
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
            </div>
        </>
    )
}

export default Header