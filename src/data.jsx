import { motion } from "framer-motion";
import {
  faArrowsToCircle,
  faClapperboard,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

// Property of BLOG data
import vase from "./assets/img/vase.webp";
import work from "./assets/img/work.webp";
import room from "./assets/img/room.webp";
import fone from "./assets/img/fone.webp";
import flower from "./assets/img/flower.webp";
import profileImg from "./assets/img/favicon.ico";

// BLOG styles...
const bImg = "rounded-2xl shadow-sm";
const bTitle = "mt-4 font-bold text-orange-700 text-md";
const bBody = "mt-2 text-orange-700 text-sm";
const bSpanLink = "rounded-md p-1 my-10";
const bLink = "text-sm text-orange-900 hover:text-orange-700 cursor-pointer";
const bProfile = "rounded-full w-8";
const bName = "text-sm font-bold";
const bTag = "font-medium";

// SERVICES data
export const SERVICES = [
  {
    image: (
      <FontAwesomeIcon
        icon={faPenToSquare}
        size="5x"
        className="text-orange-700"
      />
    ),
    title: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus nemo alias fugit nesciunt? Repellat suscipit asperiores dolorum qui nisi?",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faArrowsToCircle}
        size="5x"
        className="text-orange-700"
      />
    ),
    title: "Content Creation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus nemo alias fugit nesciunt? Repellat suscipit asperiores dolorum qui nisi?",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faClapperboard}
        size="5x"
        className="text-orange-700"
      />
    ),
    title: "Reels Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus nemo alias fugit nesciunt? Repellat suscipit asperiores dolorum qui nisi?",
  },
  {
    image: (
      <FontAwesomeIcon
        icon={faCalendarDays}
        size="5x"
        className="text-orange-700"
      />
    ),
    title: "Scheduling Content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae necessitatibus nemo alias fugit nesciunt? Repellat suscipit asperiores dolorum qui nisi?",
  },
];

// ABOUT data
export const EXAMPLES = {
  skills: {
    person: [
      {
        title: "Social Media Marketing",
        percent: "95%",
        details: (
          <div className="progressbar-wrapper mb-4">
            <div className="progressbar w-full h-3 rounded-xl bg-orange-200">
              <motion.div
                className="bar h-3 rounded-xl bg-orange-700"
                animate={{ width: "95%" }}
                duration={2}
              />
            </div>
          </div>
        ),
      },
      {
        title: "Content Writing",
        percent: "90%",
        details: (
          <div className="progressbar-wrapper mb-4">
            <div className="progressbar w-full h-3 rounded-xl bg-orange-200">
              <motion.div
                className="bar h-3 rounded-xl bg-orange-700"
                animate={{ width: "90%" }}
                duration={{ duration: 2 }}
              />
            </div>
          </div>
        ),
      },
      {
        title: "Content Marketing",
        percent: "85%",
        details: (
          <div className="progressbar-wrapper">
            <div className="progressbar w-full h-3 rounded-xl bg-orange-200">
              <motion.div
                className="bar h-3 rounded-xl bg-orange-700"
                animate={{ width: "85%" }}
                duration={{ duration: 2 }}
              />
            </div>
          </div>
        ),
      },
    ],
  },
  experience: {
    person: [
      {
        title: "Social Media Manager",
        details: (
          <div className="experience-wrapper my-2">
            <div className="mb-4">
              <p>
                <span className="font-regular">KeduTV LLC</span>, 2021 - 2024
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Blogger | Brand Manager",
        details: (
          <div className="my-2">
            <div>
              <p>
                <span className="font-regular">Ara Entertainment</span>, 2023
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  education: {
    person: [
      {
        title: "Mc Royal College",
        details: (
          <div className="mb-4">
            <p>
              <span>O&apos;Level SSCE</span> - 2019
            </p>
          </div>
        ),
      },
      {
        title: "Coursera Online",
        details: (
          <div className="education">
            <p>
              <span>Meta Social Media Marketing</span> - 2023
            </p>
          </div>
        ),
      },
    ],
  },
};

// NEWS BLOG data

export const BLOG = [
  {
    blogImage: <img className={bImg} src={vase} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        Your most happy customers are your greatest source of learning
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="#">
            Read More...
          </a>
        </span>
      </p>
    ),
    profileImage: (
      <span>
        <img src={profileImg} alt="#" className={bProfile} />
      </span>
    ),
    profileName: <h5 className={bName}>Akogun Believe</h5>,
    profileTag: <p className={bTag}>CEO and Founder</p>,
  },
  {
    blogImage: <img className={bImg} src={work} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        Your most happy customers are your greatest source of learning
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="#">
            Read More...
          </a>
        </span>
      </p>
    ),
    profileImage: (
      <span>
        <img src={profileImg} alt="#" className={bProfile} />
      </span>
    ),
    profileName: <h5 className={bName}>Akogun Believe</h5>,
    profileTag: <p className={bTag}>CEO and Founder</p>,
  },
  {
    blogImage: <img className={bImg} src={room} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        Your most happy customers are your greatest source of learning
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="#">
            Read More...
          </a>
        </span>
      </p>
    ),
    profileImage: (
      <span>
        <img src={profileImg} alt="#" className={bProfile} />
      </span>
    ),
    profileName: <h5 className={bName}>Akogun Believe</h5>,
    profileTag: <p className={bTag}>CEO and Founder</p>,
  },
  {
    blogImage: <img className={bImg} src={fone} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        Your most happy customers are your greatest source of learning
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="#">
            Read More...
          </a>
        </span>
      </p>
    ),
    profileImage: (
      <span>
        <img src={profileImg} alt="#" className={bProfile} />
      </span>
    ),
    profileName: <h5 className={bName}>Akogun Believe</h5>,
    profileTag: <p className={bTag}>CEO and Founder</p>,
  },
  {
    blogImage: <img className={bImg} src={flower} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        Your most happy customers are your greatest source of learning
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="#">
            Read More...
          </a>
        </span>
      </p>
    ),
    profileImage: (
      <span>
        <img src={profileImg} alt="#" className={bProfile} />
      </span>
    ),
    profileName: <h5 className={bName}>Akogun Believe</h5>,
    profileTag: <p className={bTag}>CEO and Founder</p>,
  },
];
