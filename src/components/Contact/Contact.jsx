import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // phone input useState();
  const [inputValue, setInputValue] = useState();
  // form inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, public Key
    const serviceId = "service_7llibkf";
    const templateid = "template_a4k7j4m";
    const publickey = "fDmQMhMPVmTEwPDrm";

    // send the email using EmailJS
    emailjs
      .sendForm(serviceId, templateid, form.current, {
        publicKey: publickey,
      })
      .then((response) => {
        // console.log("Email sent successfully", response);
        alert("Email sent successfully", response);
        setInputs({
          name: "",
          email: "",
          message: "",
        });

        setInputValue("");
      })
      .catch((error) => {
        // console.log("Error sending email", error);
        alert("Error sending email", error);
      });
  };

  // name, email and message handler...
  const handleChange = (identifier, event) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
  };

  return (
    <section className="font-body text-orange-700 lg:flex xl:w-90 xl:mx-auto">
      <div className="lg:flex lg:flex-col lg:justify-center lg:w-full">
        <h1
          id="contact"
          className="text-center text-4xl font-bold text-orange-700 mb-2 lg:text-7xl lg:text-left lg:px-6"
        >
          Let&apos;s get started
        </h1>
        <p className="px-6 lg:text-lg">
          Whether you&apos;re a small business, a well-established brand, or a
          large organization, I&apos;m here to help you elevate your social
          media presence and achieve your goals.
        </p>
      </div>
      <form ref={form} onSubmit={handleSubmit} className="p-6 lg:w-full">
        <div className="bg-orange-100 p-12 mb-4 rounded-2xl shadow-xl">
          <div className="mb-4">
            {/* <label htmlFor="name">Name</label> */}
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-950 bg-transparent placeholder:text-slate-600"
              required
              value={inputs.name}
              onChange={(event) => handleChange("name", event)}
            />
          </div>

          <div className="mb-4">
            {/* <label htmlFor="email">Email</label> */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-950 bg-transparent placeholder:text-slate-600"
              required
              value={inputs.email}
              onChange={(event) => handleChange("email", event)}
            />
          </div>

          <PhoneInput
            id="phoneInput"
            name="phoneInput"
            international
            defaultCountry="US"
            value={inputValue}
            onChange={setInputValue}
            className="border"
          />

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-950 bg-transparent placeholder:text-slate-600"
              required
              value={inputs.message}
              onChange={(event) => handleChange("message", event)}
            />
          </div>
        </div>
        <p>
          <button
            type="submit"
            className="border border-orange-700 rounded py-2 px-4 tracking-wider cursor-pointer font-medium bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:animate-pulse"
          >
            Send
          </button>
        </p>
      </form>
    </section>
  );
};

export default Contact;
