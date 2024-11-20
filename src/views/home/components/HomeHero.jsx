import { NavLink } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HomeHero() {
  const button = (
    <div className="mt-10 flex items-center justify-start gap-x-6">
     <a
        className="text-sm hover:bg-white duration-500 hover:text-main transition-all ease-in-out delay-100 rounded-md bg-transparent border-solid border px-3.5 py-2.5 font-semibold leading-6  text-white"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfOzh8PLRQbdbTRPg4F-YKg7XZCMwjGu9HSPyNzRVSKKbBx4A/viewform?usp=sf_link"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join Us
      </a>
      <AnchorLink
        className="text-sm rounded-md bg-main duration-500 hover:bg-sky-600 transition-all ease-in-out delay-100 px-3.5 py-2.5 font-semibold leading-6  text-white"
        href="#aboutSection"
      >
        Read More <span aria-hidden="true">→</span>
      </AnchorLink>
    </div>
  );
  return (
    <Hero
      justify="justify-start"
      title="AMAL Initiative"
      description="We support displaced students in the UK finding scholarships and
            continue their higher education for free."
      buttons={button}
    />
  );
}
