import { motion } from "framer-motion";

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
