import Icons from "../Header/Social-icons";
import footerImg from "../../assets/img/footer.png";

const Footer = () => {
  return (
    <footer className="font-body bg-footerColor shadow-2xl">
      <section className="p-6 text-center text-orange-700">
        {/* image and name */}
        <div>
          <img
            className="rounded-full w-28 mx-auto"
            src={footerImg}
            alt="footer logo"
          />
          <h1 className="font-regular mb-2">Akogun Believe</h1>
        </div>
        {/* links and copyright msg */}
        <div>
          <Icons />
          <h2>Copyright &copy; 2024. All Rights Reserved.</h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
