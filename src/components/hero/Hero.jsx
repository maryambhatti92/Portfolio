// eslint-disable-next-line react/prop-types
export default function Hero({ justify, title,subTitle, description, buttons }) {
  return (
    <section className="hero-section">
      <div
        className={
          justify +
          " md:px-40 px-10 relative isolate  bg-hero flex  items-center"
        }
      >
        <div className="max-w-2xl py-25 sm:py-25 lg:py-25">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight text-white sm:text-6xl">
              {title ?? ""}
            </h1>
            <h1 className="text-4xl tracking-tight text-white sm:text-6xl text-center">
              {subTitle ?? ""}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              {description ?? ""}
            </p>
            {buttons ?? ""}
          </div>
        </div>
      </div>
    </section>
  );
}
