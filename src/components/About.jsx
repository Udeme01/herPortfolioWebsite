import aboutImg from "../assets/img/about-7.jpg";
// import { EXAMPLES } from "./data";
// import Tabs from "./Tabs";
import TabButton from "./TabButtons";
// import { useState } from "react";

const About = () => {
  // const [selectedTopic, setSelectedtTopic] = useState();

  return (
    <>
      <section className="font-body">
        <div>
          <img className="px-6 my-12 w-full mx-auto" src={aboutImg} alt="about image" />
        </div>

        {/* about me */}
        <div className="px-6">
          <div>
            <h1 className="text-xl font-medium text-orange-700 mb-3">
              About Me
            </h1>
            <p className="text-regular text-orange-700 text-sm tracking-wider leading-6 font-regular">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even slightly believable. If
              you are going to use a passage of Lorem Ipsum,
            </p>
          </div>
          <section className="my-5">
            <TabButton>Main Skills</TabButton>
            <TabButton>Awards</TabButton>
            <TabButton>Experience</TabButton>
            <TabButton>Education</TabButton>
          </section>
        </div>
        {/* about me */}
      </section>
    </>
  );
};

export default About;
