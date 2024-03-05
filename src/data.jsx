import { motion } from "framer-motion";
import {
  faArrowsToCircle,
  faClapperboard,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

// Property of BLOG data
import ebuka from "./assets/img/ebuka.jpg";
import bliss from "./assets/img/bliss.jpeg";
import timini from "./assets/img/timini.jpg";
import gold from "./assets/img/gold.png";
import fireboy from "./assets/img/fireboy.png";
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

// SOCIAL ICON LINKS
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Nav HyperLinks
// import #home from "./components/HomePage";
// import #about from "./components/About/About";
// import Blog from "./components/Blog/Blog";
// import Contact from "./components/Contact/Contact";

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
      "I specialize in content writing, crafting engaging and compelling captions and posts that capture the essence of each brand.",
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
      "My content creation skills ensure that each piece of content is visually appealing and on-brand, utilizing high-quality images and videos.",
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
      " For those looking to incorporate the latest social media trends, I provide professional Reels editing services, turning ordinary videos into attention-grabbing content that stands out in the crowded social media landscape.",
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
      "I take the hassle out of maintaining a consistent posting schedule by handling the scheduling of content, ensuring that posts go out at the optimal times for maximum reach and engagement.",
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
    id: "01",
    blogImage: <img className={bImg} src={ebuka} alt="newsImg" />,
    blogTitle: <h1 className={bTitle}>EBUKA TURNS UP AFRICA.</h1>,
    blogDescription: (
      <p className={bBody}>
        The show is a travel-reality series that will feature the well-known
        Nigerian personality Ebuka Obi-Uchendu. It aims to take the audience on
        a thrilling journey across Africa, uncovering hidden gems and putting
        loyalties and friendships to the test.{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="https://kedutv.com/newsdetail?id=784">
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
    id: "02",
    blogImage: <img className={bImg} src={bliss} alt="newsImg" />,
    blogTitle: <h1 className={bTitle}>MOSES BLISS TRADITIONAL WEDDING.</h1>,
    blogDescription: (
      <p className={bBody}>
        In a celebration that wove together the rich blend of Nigerian and
        Ghanaian traditions, gospel singer Moses Bliss&apos;s traditional
        wedding was a cultural spectacle to behold.{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="https://kedutv.com/newsdetail?id=787">
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
    id: "03",
    blogImage: <img className={bImg} src={timini} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>DATING ABROAD IS BETTER THAN HERE IN NAIJA.</h1>
    ),
    blogDescription: (
      <p className={bBody}>
        Nigerian Nollywood actor shared his dating experience on the podcast
        called Menisms. According to Timini, when a Nigerian babe abroad is
        interested in you, you are considered a catch. He further expressed that
        his dating experiences with Nigerian girls abroad are better than those
        in Nigeria.{" "}
        <span className={bSpanLink}>
          <a className={bLink} href="https://kedutv.com/newsdetail?id=777">
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
    id: "04",
    blogImage: <img className={bImg} src={gold} alt="newsImg" />,
    blogTitle: <h1 className={bTitle}>YOU CAN SURVIVE BEING A SICKLE CELL.</h1>,
    blogDescription: (
      <p className={bBody}>
        Adekunle Gold, a Nigerian singer, recently made headlines during his
        concert for giving a shoutout to his fellow sickle cell members. In a
        heartwarming gesture, he encouraged them, assuring them that they can
        survive the challenges they face and manage their condition.{" "}
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
    id: "05",
    blogImage: <img className={bImg} src={fireboy} alt="newsImg" />,
    blogTitle: (
      <h1 className={bTitle}>
        ONE OF THE HIGHLIGHTS OF MY CAREER IS COLLABORATING WITH MADONNA, A
        GLOBAL ICON.
      </h1>
    ),
    blogDescription: (
      <p className={bBody}>
        In a recent Billboard interview, Nigerian singer Fireboy highlighted a
        memorable moment in his career. Recounting the unique experience,
        Fireboy expressed his awe at receiving a direct message from Madonna,
        where she expressed admiration for his music.{" "}
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

// NAVIGATION ROUTES
export const ROUTES = [
  {
    id: "home",
    title: "Home",
    href: "#home",
  },
  {
    id: "about",
    title: "About",
    href: "#about",
  },
  {
    id: "service",
    title: "Services",
    href: "#service",
  },
  {
    id: "blog",
    title: "Blog",
    href: "#blog",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
];

// SOCIAL ICON LINKS
export const ICONS = [
  {
    id: "footer001/&5t$#@_-=?,kill",
    href: "https://www.linkedin.com/in/believe-akogun-944412246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: faLinkedinIn,
  },
  {
    id: "footer0027^%$^*-+_./kill",
    href: "https://www.instagram.com/thebelieverplugg?igsh=MTlmajdka3BlZG52cw==",
    icon: faInstagram,
  },
];
