export default function AboutSection() {
  return (
    <section
      id="aboutSection"
      className="flex flex-col-reverse md:flex-row py-12 md:py-28 md:px-40 px-10 justify-center items-center"
    >
      <div className="md:basis-7/12 basis-full">
        <p className="md:text-xl text-lg py-3">
          We want young refugees in the UK from
          <span className="text-main"> ( Palestine, Sudan, Gana )</span> and
          other students who left their countries because of war, occupation or
          fear of prosecution to continue their higher education and learn new
          skills. We believe refugees and asylum seeker deserve to have easy
          access for higher education to develop new skills and be prepared for
          the job market in the UK. Education is an essential element in every
          community and in every house for better future.
        </p>
      </div>
      <div className="md:basis-5/12 basis-full py-3">
        <p className="md:text-6xl text-4xl  text-center text-main">
          What AMAL Initiative Do
        </p>
      </div>
    </section>
  );
}
