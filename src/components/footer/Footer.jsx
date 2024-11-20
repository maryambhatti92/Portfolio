import { NavLink } from "react-router-dom";
import lightLogo from "/assets/images/light-logo.png";
import zakalogo from "/assets/images/zaka.png";
import sanc from "/assets/images/sanctuary.png";
import { FiShield } from "react-icons/fi";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="basis-1/2 py-4 px-6">
          <NavLink to="/" className="">
            <img src={lightLogo} alt="Logo" className="w-2/5" />
          </NavLink>
          <fieldset className="rounded-xl border-2 border-main px-7 py-5">
            <legend className="text-main font-bold text-2xl	ms-10 px-5">
              What We Do
            </legend>
            <p>
              We support displaced students in the UK finding scholarships and
              continue their higher education for free.
            </p>
          </fieldset>
          <div className="my-5">
            <h3 className="text-lg font-semibold">Location:</h3>
            <p className="">WeWork 123 Buckingham Palace Rd, London SW1W 9SH</p>
          </div>
          <div className="my-5">
            <h3 className="text-lg font-semibold"> Note :</h3>
            <p className="flex flex-row flex-wrap items-center justify-start">
             We do not offer any grants, we are just a scholarship assistant programme for young people in the UK. 

            </p>
          </div>
        </div>
        <div className="basis-1/2 w-full py-4 px-6">
          <Form />
        </div>
        
        
      
      <div className="md:basis-12/12 basis-full py-3">
        <p className="text-main font-bold text-2xl	ms-10 px-5 flex items-center justify-center">
          Supporting Groups
        </p>
      </div>

      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap justify-between mx-auto p-4 ">
      <div className="basis-1/2 py-4 px-6 flex flex-col items-center justify-center">
      <a
    href="https://zaka.ai/" target="_blank" rel="noopener noreferrer" className="flex flex-col" style={{ alignItems: "flex-end" }} >
          <img src={zakalogo} alt="ZAKA" className="w-2/5" />
        </a>
      </div>
         <div className="basis-1/2 py-4 px-6 flex flex-col items-center justify-center ">
         <a href="https://cityofsanctuary.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col"  style={{ alignItems: "flex-start" }}>
            <img src={sanc} alt="ZAKA" className="w-2/5 text-align: left" />
           </a>.
           </div>
          </div>
      



        <div className="w-full py-2 px-6 text-center text-sm mt-4 text-main flex items-center justify-center">
          <FiShield className="h-5 w-5 text-main mr-2" /> {/* Icon */}
          At Amal Initiatives We Take Your Privacy Seriously And Will Be
          Transparent About How We Collect, Store And Use Your Personal
          Information
        </div>
      </div>
    </footer>
  );
}
