import { FaPeace, FaUsers, FaShieldAlt } from "react-icons/fa";

export default function ScholarshipCategorized() {
  return (
    <section className="flex flex-col py-12 md:py-28 md:px-40 px-10 justify-center items-center space-y-8">
      <div className="w-full max-w-4xl">
        <p className="text-center md:text-left text-xl md:text-3xl">
          This Sanctuary Scholarship recognizes that forced displacement creates
          significant barriers to accessing higher education. You may have
          always dreamed to study at university but faced barriers in achieving
          your goal.
        </p>
        <p className="text-center md:text-left text-xl md:text-3xl text-main font-bold mt-8">
          Who are categorized as displaced students?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <FaPeace className="text-4xl md:text-5xl lg:text-6xl text-main" />
          <p className="text-center justify-center mt-2 text-xl md:text-xl">
            An asylum seeker: a person who has made a claim for refugee status.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-4xl md:text-5xl lg:text-6xl text-main" />
          <p className="text-center justify-center mt-2 text-xl md:text-xl">
            A person who has been granted Humanitarian Protection (HP) or
            Limited Leave to Remain (formerly Discretionary Leave to Remain) in
            the UK.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-4xl md:text-5xl lg:text-6xl text-main" />
          <p className="text-center justify-center mt-2 text-xl md:text-xl">
            A refugee – a person who has been granted refugee status in the UK,
            or other nation.
          </p>
        </div>
      </div>
    </section>
  );
}
