export default function SolidaritySection() {
  return (
    <section className="bg-solidarity grid grid-cols-1 content-start items-start md:grid-cols-2 py-12 md:py-44 md:px-40 px-10 ">
      <div className=" md:p-4 px-4">
        <div className="text-white title-solidarity">
          <h2 className="md:text-5xl text-3xl">
            Solidarity With Right To Educate
          </h2>
          <p className="md:text-lg text-base mt-3">
          Universal Declaration of Human Rights, 1948 (Article 26)
          </p>
        </div>
        <div className="card hover:shadow-lg hover:shadow-slate-400 transition-all duration-500 ease-in-out delay-100 md:w-9/12 md:ms-auto md:my-16 mt-8 bg-white rounded-2xl shadow-md p-7 py-10 ps-20">
          <p>
            We thrive day and night to promote local and international
            initiatives from universities and other partners to support
            displaced students and gives them hope for education, learning new
            skills and engagement.
          </p>
        </div>
      </div>
      <div className="md:p-4 px-4">
        <div className="card hover:shadow-lg hover:shadow-slate-400 transition-all duration-500 ease-in-out delay-100 md:w-11/12 md:my-24 mt-8 bg-white rounded-2xl shadow-md p-7 py-10 ps-20">
          <p>
            We value displaced students in the UK and abroad as we deeply
            believe in their talent and classify them as assets and we refuse to
            call them vulnerable. Lets campaign for education !
          </p>
        </div>
        <div className="card hover:shadow-lg hover:shadow-slate-400 transition-all duration-500 ease-in-out delay-100 md:w-9/12 md:mt-24 mt-8 bg-white rounded-2xl shadow-md p-7 py-10 ps-20">
          <h2 className="text-lg font-semibold mb-5">Our Mission</h2>
          <p>
            Our Mission is to help many refugees and asylum to continue their
            higher education for free and learn new skills to succeed in the UK.
          </p>
        </div>
      </div>
    </section>
  );
}
