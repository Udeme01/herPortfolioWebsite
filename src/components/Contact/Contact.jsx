import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

const Contact = () => {
  // phone input useState();
  const [inputValue, setInputValue] = useState();
  // form inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (identifier, event) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
  };

  const handleDisabled = () => {
    setIsDisabled(true);
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
      <form onSubmit={handleSubmit} className="p-6 lg:w-full">
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
          {isDisabled && (
            <button
              onClick={handleDisabled}
              type="submit"
              className="border border-slate-300 rounded py-2 px-4 tracking-wider cursor-none font-medium bg-slate-200 text-orange-200"
            >
              Send
            </button>
          )}
        </p>
      </form>
    </section>
  );
};

export default Contact;
