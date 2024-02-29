import aboutImg from "../../assets/img/about-7.jpg";
import TabButton from "../About/TabButtons";
import { useState } from "react";
import Section from "../About/TabContent-Section";

const About = () => {
  const [selectedTopic, setSelectedtTopic] = useState("skills");

  //   handleSelect Function();
  const handleSelect = (selectedButton) => {
    setSelectedtTopic(selectedButton);
  };

  return (
    <>
      <section className="font-body md:flex xl:w-90 xl:mx-auto">
        <div className="m-6 md:w-full lg:w-4/12">
          <img
            className="w-full mx-auto rounded-3xl"
            src={aboutImg}
            alt="about-image"
          />
        </div>

        {/* about me */}
        <div className="px-6 md:w-full md:flex md:flex-col md:justify-center lg:w-3/5">
          <div>
            <h1 className="text-4xl font-bold text-orange-700 mb-3 text-center md:text-left md:text-6xl lg:text-7xl">
              About Me
            </h1>
            <p className="text-regular text-orange-700 text-sm tracking-wider leading-6 font-regular md:text-base lg:text-md xl:text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even slightly believable. If
              you are going to use a passage of Lorem Ipsum,
            </p>
          </div>
          <section className="tabButton my-5">
            <TabButton
              isSelected={selectedTopic === "skills"}
              onSelect={() => handleSelect("skills")}
            >
              Main Skills
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "experience"}
              onSelect={() => handleSelect("experience")}
            >
              Experience
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "education"}
              onSelect={() => handleSelect("education")}
            >
              Education
            </TabButton>
          </section>
          <Section topic={selectedTopic} />
        </div>
      </section>
    </>
  );
};

export default About;
