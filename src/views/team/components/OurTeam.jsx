import teams from "../../../data/teams";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurTeam() {
  return (
    <section className="py-12 md:py-28 md:px-40 px-10">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <p className="text-lg">
        We are group of young people from different fields who campaign for
        right to educate for displaced students in the UK and abroad. We
        campaign for education and learning new skills
      </p>
      <div className="grid gap-20 md:grid-cols-2 grid-cols-1 justify-center items-center my-10">
        {teams.map((team) => {
          return (
            <div className="p-4" key={team.id}>
              <div className="overflow-hidden">
                <img
                  src={team.image}
                  alt="team member"
                  className="hover:scale-125 transition-all ease-in-out duration-700 delay-100"
                />
              </div>

              <div className="grid  grid-cols-2  items-center justify-center md:pe-3">
                <div className="bg-black h-full w-max content-center px-20 ">
                  <a href={team.linkedin}>
                    <FontAwesomeIcon
                      className="text-white text-2xl"
                      icon={faLinkedin}
                    />
                  </a>
                </div>
                <div className="justify-self-end ">
                  <h3 className="text-xl font-bold mt-4">{team.name}</h3>
                  <p className="text-gray-500">{team.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
