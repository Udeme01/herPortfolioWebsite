import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

const Contact = () => {
  const [inputValue, setInputValue] = useState();
  return (
    <section className="font-body text-orange-700 lg:flex xl:w-90 xl:mx-auto">
      <div className="lg:flex lg:flex-col lg:justify-center lg:w-full">
        <h1 className="text-center text-4xl font-bold text-orange-700 mb-2 lg:text-7xl lg:text-left lg:px-6">
          Let&apos;s get started
        </h1>
        <p className="px-6 lg:text-lg">
          Whether you&apos;re a small business, a well-established brand, or a
          large organization, I&apos;m here to help you elevate your social
          media presence and achieve your goals.
        </p>
      </div>
      <form className="p-6 lg:w-full">
        <div className="bg-orange-100 p-12 mb-4 rounded-2xl shadow-xl">
          <div className="mb-4">
            {/* <label htmlFor="name">Name</label> */}
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-700 bg-transparent placeholder:text-slate-600"
              required
            />
          </div>

          <div className="mb-4">
            {/* <label htmlFor="email">Email</label> */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-700 bg-transparent placeholder:text-slate-600"
              required
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
              className="border focus:border-orange-700 outline-none rounded w-full p-2 text-orange-700 bg-transparent placeholder:text-slate-600"
              required
            />
          </div>
        </div>
        <p>
          <button
            type="submit"
            className="border border-orange-700 rounded py-2 px-4 tracking-wider cursor-pointer font-medium bg-orange-700 text-white hover:bg-transparent hover:text-orange-700"
          >
            Send
          </button>
        </p>
      </form>
    </section>
  );
};

export default Contact;
