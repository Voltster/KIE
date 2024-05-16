import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/contact", {
          name,
          phone,
          email,
          message,
        });
        console.log(response.data);
        // Clear form after successful submission
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setErrors({});
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4">
      <div class="sm:col-span-3">
        <label
          for="first-name"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <div class="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            value={name}
            required
            placeholder="Rohit Mishra"
            onChange={(e) => setName(e.target.value)}
            class="block w-full rounded-md p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 outline-none border focus:border-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-3 mt-2">
        <label
          for="phone-no"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone No <span className="text-red-500">*</span>
        </label>
        <div class="mt-2">
          <input
            type="tel"
            pattern="[0-9]{10}"
            name="first-name"
            id="phone-no"
            autocomplete="given-name"
            value={phone}
            required
            placeholder="+91 1234567890"
            onChange={(e) => setPhone(e.target.value)}
            class="block w-full rounded-md border p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none  focus:border-blue-500"
          />
        </div>
      </div>
      <div class="sm:col-span-4 mt-2">
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address <span className="text-red-500">*</span>
        </label>
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            value={email}
            required
            placeholder="rohit@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            class="block w-full rounded-md border p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none  focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mb-6 mt-2">
        <label
          htmlFor="message"
          className="block text-sm text-gray-700 font-medium mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          required
          placeholder="Hello ji"
          onChange={(e) => setMessage(e.target.value)}
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none  sm:text-sm sm:leading-6  focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="btn border-blue-50  bg-blue-500 after:bg-gradient-to-l from-blue-500 to-blue-800 hover:text-white"
          type="submit"
        >
          <span className="flex items-center gap-3 text-[1vh] md:text-[1vw]">
            Send Message <FaArrowRight />
          </span>
        </button>
        <a
          href="#"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Need More Help?
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
