import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github, linkedin} from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

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
        'service_6w37hj9',
        'template_92rdi2v',
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Alexandra",
          from_email: form.email,
          to_email: "aldathome@icloud.com",
          message: form.message,
        },
        '7ukG2xkSvUpgwXZ4P'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks for reaching out! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Today's forecast: you will recieve an error message. Error, Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='flex-[0.75] bg-primary p-8 rounded-2xl'
      >
        <img
        />
        <p className={styles.sectionSubText}>Feel free to get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-tertiary font-serif font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Please enter name"
              className='bg-tan py-4 px-6 font-serif placeholder:text-navy text-tertiary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-tertiary font-serif font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Please enter email"
              className='bg-tan py-4 px-6 font-serif placeholder:text-navy text-tertiary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-tertiary font-serif font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write message here'
              className='bg-tan py-4 px-6 font-serif placeholder:text-navy text-tertiary rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-secondary py-3 px-8 rounded-xl outline-none w-fit font-serif text-tertiary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className='xl:h-auto md:h-[550px] h-[350px]'
      >
      </div>
      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");