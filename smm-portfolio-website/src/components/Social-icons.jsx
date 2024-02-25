// font awesome icons/package import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <>
      <ul className="social-icon-wrapper">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Icons;
