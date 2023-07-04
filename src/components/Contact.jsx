import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs
      .send(
        process.env.VITE_APP_SERVICE_ID,
        process.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Unaiz",
          from_email: form.email,
          to_email: "unaisshemim@gmail.com",
          message: form.message,
        },
        process.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      className="flex flex-col-reverse 
  xl:flex-row xl:mt-12 overflow-hidden
  gap-10"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 
    p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8 "
        >
          <label className="flex flex-col">
            <span
              className="
        text-white font-medium mb-4"
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what your good name?"
              className="bg-tertiary py-4 px-6
        placeholder:text-secondary 
        text-white rounded-lg
        outline-none border-none
        font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span
              className="
        text-white font-medium mb-4"
            >
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your email?"
              className="bg-tertiary py-4 px-6
        placeholder:text-secondary 
        text-white rounded-lg
        outline-none border-none
        font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span
              className="
        text-white font-medium mb-4"
            >
              Your Name
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what your want to say?"
              className="bg-tertiary py-4 px-6
        placeholder:text-secondary 
        text-white rounded-lg
        outline-none border-none
        font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white 
            font-bold shadow-md shadow-primary items-center"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
