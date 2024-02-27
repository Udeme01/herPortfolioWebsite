import vase from "../../assets/img/vase.webp";
import profileImg from "../../assets/img/logo.ico";

const Blog = () => {
  return (
    <section className="font-body text-orange-700">
      <article className="mt-8 px-6 mb-24">
        <h1 className="text-center text-3xl font-medium text-orange-700 mb-3">
          Blog
        </h1>
        <img className="rounded-2xl" src={vase} alt="newsImg" />
        <h1 className="mt-8 font-bold text-orange-700 text-md">
          Your most happy customers are your greatest source of learning
        </h1>
        <p className="mt-2 text-orange-700 text-sm">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts{" "}
          <span className="rounded-md p-1 my-10">
            <a className="text-sm text-orange-900 hover:text-orange-700 cursor-pointer" href="#">Read More...</a>
          </span>
        </p>
        <div className="flex flex-row items-center gap-3 mt-2">
          <span>
            <img src={profileImg} alt="#" className="rounded-full w-8" />
          </span>
          <span className="text-xs">
            <h5 className="text-sm font-bold">Akogun Believe</h5>
            <p className="font-medium">CEO and Founder</p>
          </span>
        </div>
      </article>
    </section>
  );
};

export default Blog;
