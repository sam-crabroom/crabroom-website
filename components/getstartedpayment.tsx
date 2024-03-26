import Link from 'next/link';
export default function CallToAction() {
    return (
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
                <Link className="btn text-white bg-sky-500 font-semibold hover:bg-sky-600 w-full  rounded-full mb-4 sm:w-auto sm:mb-0" href="/paymentpageform" passHref>
                    {/* <a className="btn text-white bg-red-400 hover:bg-red-600 w-full mb-4 sm:w-auto sm:mb-0"> */}
                       Get started
                    {/* </a> */}
                </Link>
                    {/* <a className="btn text-white bg-red-400 hover:bg-red-600 w-full mb-4 sm:w-auto sm:mb-0" href="/BookMeeting">Book meeting</a> */}
            </div>
            
        </div>
    )
}