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
      <section className="font-body">
        <div>
          <img
            className="px-6 my-12 w-full mx-auto"
            src={aboutImg}
            alt="about-image"
          />
        </div>

        {/* about me */}
        <div className="px-6">
          <div>
            <h1 className="text-3xl font-medium text-orange-700 mb-3 text-center">
              About Me
            </h1>
            <p className="text-regular text-orange-700 text-sm tracking-wider leading-6 font-regular">
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
