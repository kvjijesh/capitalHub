import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
function Footer() {
    return (
        <div className='w-full bg-[#033C2B] md:h-[345px] h-auto'>
            <div className="max-w-[90%] mx-auto flex flex-wrap justify-evenly pt-20">
                <div className="md:w-[20%] w-full">
                    <p className="text-[18px] font-normal text-white">Lorem ipsum dolor sit amet <br />consectetur. Magna integer enim <br /> vitae vulputate eu vitae tristique.</p>
                </div>
                <div className="md:w-[20%] w-full md:ml-10">
                    <div>
                        <h3 className="text-[25px] font-medium text-white ">General</h3>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-normal text-white mt-5">About Us</h3>
                    </div>
                </div>
                <div className="md:w-[25%] w-full">
                    <div>
                        <h3 className="text-[25px] font-medium text-white">Policies</h3>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-[18px] font-normal text-white mt-3">Security safeguards</h3>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-normal text-white mt-3">Terms of service</h3>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-normal text-white mt-3">Privacy</h3>
                    </div>
                    <div>
                        <h3 className="text-[18px] font-normal text-white mt-3">Accessibility</h3>
                    </div>
                </div>
                <div className="md:w-[25%] w-full">
                    <div>
                        <h3 className="text-[25px] font-medium text-white">Get in touch</h3>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-[18px] font-normal text-white">Follow us on social media and stay updated with the latest information about our services</h3>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <div className="w-[30px] h-[30px] rounded-[100%] bg-white flex justify-center items-center">
                            <FaFacebookF className=" " />
                        </div>
                        <div className="w-[30px] h-[30px] rounded-[100%] bg-white flex justify-center items-center">
                            <FaTwitter className=" " />
                        </div>
                        <div className="w-[30px] h-[30px] rounded-[100%] bg-white flex justify-center items-center mb-5">
                            <TiSocialInstagram className=" " />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer