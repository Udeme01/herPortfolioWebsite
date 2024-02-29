import heroImg from "../assets/img/whyte.png";

const Home = () => {
  return (
    <section className="font-body max-h-full">
      <div className="flex flex-row-reverse items-center justify-start relative">
        <img
          src={heroImg}
          className="size-fit bg-right bg-cover w-fit h-full opacity-25"
        />
        <div className="absolute text-orange-700 leading-normal px-6 py-6 w-full mx-auto xl:w-90 xl:p-0">
          <h1 className="text-xl tracking-widest uppercase font-bold sm:text-3xl md:text-4xl xl:text-7xl">
            Social Media Manager
          </h1>
          <h2 className="text-sm p-12 pt-3 pl-0 tracking-widest leading-7 font-regular sm:text-base md:text-md xl:text-lg xl:pr-96">
            Hello! I&apos;m Akogun Believe, a dedicated Social Media Manager
            with a passion for crafting engaging online experiences and driving
            impactful digital strategies. With more than 4years of experience in
            the dynamic world of social media, I thrive on creating meaningful
            connections between brands and their audiences.
          </h2>
          <a
            className="border border-orange-700 rounded-full py-4 px-6 tracking-wider cursor-pointer font-medium bg-orange-700 text-white hover:bg-transparent hover:text-orange-700"
            href="#"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
