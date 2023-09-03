import React from "react";
import BannerImg from "../../assets/banner.png";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { FaLinkedinIn,FaFacebookF ,FaInstagram} from "react-icons/fa";


const Hero = () => {
  return (
    <section className=" bg-gray-100 relative ">
     
      <div className=" container mx-auto grid px-20 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className=" absolute top-0 right-0 h-full w-[70%] bg-[#9FC5C8] opacity-50 z-0">

</div>
        <div className="mr-auto place-self-center lg:col-span-6 z-10">
          <h1 className="mb-4 text-[32px] text-secondary">Hello I am</h1>
          <h2 className="mb-4 text-[72px] text-accent leading-none">
            Tahira <span className=" text-primary">Jannat</span>
          </h2>
          <h3 className="mb-8 text-base text-accent">
            Professional freelancer & Web Developer
          </h3>
          <p className=" leading-8">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-[59px] py-3 mt-20 text-lg font-medium text-center text-white bg-primary"
          >
            <MdOutlineSubdirectoryArrowRight className="text-2xl -mt-1.5 me-2"/>
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.29 15.71L13.71 20.29C13.32 20.68 12.68 20.68 12.29 20.29C11.9 19.9 11.9 19.26 12.29 18.87L15.17 16H5C4.45 16 4 15.55 4 15V5C4 4.45 4.45 4 5 4C5.55 4 6 4.45 6 5V14H15.17L12.29 11.13C11.9 10.74 11.9 10.1 12.29 9.71C12.68 9.32 13.32 9.32 13.71 9.71L18.29 14.29C18.68 14.68 18.68 15.32 18.29 15.71Z"
                fill="white"
              />
            </svg> */}
            Hire me
          </a>
          <div  className="mt-14 ">
            <a className=" inline-block p-2.5 bg-slate-200"><FaLinkedinIn  className="text-primary text-lg"/></a>
            <a className=" inline-block p-2.5 bg-slate-200 ml-6"><FaInstagram  className="text-primary text-lg"/></a>
            <a className=" inline-block p-2.5 bg-slate-200 ml-6"><FaFacebookF  className="text-primary text-lg"/></a>
            <a className=" inline-block p-3 bg-slate-200 ml-6"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.46875 6.40741H8.07812L7.48438 8.3037H4.5V14.1481C4.5 14.4444 4.39062 14.4889 4.67188 14.5185L7 14.7259V16H0V14.6963L1.14062 14.5926C1.42188 14.563 1.5 14.4741 1.5 14.1926V8.42222C1.5 8.3037 1.34375 8.3037 1.1875 8.3037H0V6.40741H1.5V5.34074C1.5 2.82222 2.92187 1.78519 5.64062 1.78519C7.46875 1.78519 9.10938 2.2 9.10938 4.46667L6.39062 4.77778C6.40625 3.82963 6.15625 3.60741 5.51562 3.60741C4.53125 3.60741 4.5 4.11111 4.5 5V6.18519C4.5 6.3037 4.3125 6.40741 4.46875 6.40741ZM15 16H9.5V14.7259L10.5938 14.5926C10.875 14.563 11 14.5037 11 14.2222V8.74074C11 8.53333 10.8438 8.4 10.6406 8.34074L9.34375 8.01481L9.70312 6.51852H14V14.2222C14 14.5185 13.8594 14.5481 14.1562 14.5926L15 14.7259V16ZM13.8281 3.14074L14.3125 4.82963L13.9219 5.2L12.25 4.35556L10.5781 5.2L10.1875 4.82963L10.6719 3.14074L9.5 1.79259L9.6875 1.42222H11.1719L12 0H12.5L13.3281 1.42222H14.8125L15 1.91111L13.8281 3.14074Z" fill="#136C47"/>
</svg></a>
          </div>
        </div>
        <div className="lg:mt-0 col-span-6 pr-14 z-10">
          <img
            className="object-cover block my-[120px] mr-0 ml-auto"
            src={BannerImg}
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
