// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";

// const ContactForm = () => {
//   const [resultMessage, setResultMessage] = useState("");
//   const [messageClass, setMessageClass] = useState("text-gray-500");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const formObject = {};
//     formData.forEach((value, key) => {
//       formObject[key] = value;
//     });
//     const json = JSON.stringify(formObject);
//     setResultMessage("Please wait...");
//     setMessageClass("text-gray-500");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: json,
//       });
//       const jsonResponse = await response.json();
//       if (response.status === 200) {
//         setResultMessage(jsonResponse.message);
//         setMessageClass("text-green-500");
//       } else {
//         setResultMessage(jsonResponse.message);
//         setMessageClass("text-red-500");
//       }
//     } catch (error) {
//       console.error(error);
//       setResultMessage("Something went wrong!");
//       setMessageClass("text-red-500");
//     } finally {
//       e.target.reset();
//       setTimeout(() => {
//         setResultMessage("");
//       }, 5000);
//     }

//   };

//   return (
//     <div>
//       <div className="container mx-auto mt-12 md:mt-0">
//         <div className="max-w-xl mx-auto rounded-md ">
//           <div>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="hidden"
//                 name="access_key"
//                 value="e6d3898d-ed03-4b2d-990c-ee23d102c011"
//               />
//              <input type="hidden" name="from_name" value="New Inquiry Received"/>
//               <input
//                 type="hidden"
//                 name="subject"
//                 value="New Submission from KIE"
//               />
//               <input
//                 type="checkbox"
//                 name="botcheck"
//                 id=""
//                 style={{ display: "none" }}
//               />

//               <div className="flex mb-6 space-x-4">
//                 <div className="w-full md:w-1/2">
//                   <label
//                     htmlFor="first_name"
//                     className="block mb-2 text-sm text-gray-600 "
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="first_name"
//                     id="first_name"
//                     placeholder="John"
//                     required
//                     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <label
//                     htmlFor="last_name"
//                     className="block mb-2 text-sm text-gray-600 "
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="last_name"
//                     id="last_name"
//                     placeholder="Doe"
//                     required
//                     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
//                   />
//                 </div>
//               </div>

//               <div className="flex mb-6 space-x-4">
//                 <div className="w-full md:w-1/2">
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm text-gray-600 "
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="you@company.com"
//                     required
//                     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <label
//                     htmlFor="phone"
//                     className="block mb-2 text-sm text-gray-600 "
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     placeholder="+91 1234567890"
//                     required
//                     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="block mb-2 text-sm text-gray-600 "
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   rows="5"
//                   name="message"
//                   id="message"
//                   placeholder="Your Message"
//                   className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="btn mt-4 bg-blue-500 border-blue-500 group hover:bg-blue-600 hover:border-blue-500  mx-auto"
//               >
//                 <p className="flex items-center gap-3  md:text-[1vw] hover:text-blue-500 text-white group-hover:text-blue-500">
//                   Submit
//                   <FaArrowRight />
//                 </p>
//               </button>
//               <p
//                 className={`text-base text-center mt-2 ${messageClass}`}
//                 id="result"
//               >
//                 {resultMessage}
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [resultMessage, setResultMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);
    setResultMessage("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const jsonResponse = await response.json();
      if (response.status === 200) {
        toast.success(jsonResponse.message);
      } else {
        toast.error(jsonResponse.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      e.target.reset();
      setTimeout(() => {
        setResultMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-12 md:mt-0">
        <div className="max-w-xl mx-auto rounded-md ">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="e6d3898d-ed03-4b2d-990c-ee23d102c011"
              />
              <input
                type="hidden"
                name="from_name"
                value="New Inquiry Received"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from KIE"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="John"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+91 1234567890"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 "
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 "
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn mt-4 bg-blue-500 border-blue-500 group hover:bg-blue-600 hover:border-blue-500 mx-auto"
              >
                <p className="flex items-center gap-3 md:text-[1vw] hover:text-blue-500 text-white group-hover:text-blue-500">
                  Submit
                  <FaArrowRight />
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
