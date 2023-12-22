
import {
    RBC,
    proj1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Summer Intern",
      company_name: "RBC",
      icon: RBC,
      iconBg: "#e3dfd3",
      date: "May 2022 - August 2022",
      points: [
        "Analyze 10ks for 30+ companies, analyze balance sheets, cash flows, and income statements.",
        "Input and sort client information for financial and retirement planning.",
        "Attended and assisted the event coordinator at RBC’s Next-Level conference event.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Web Portfolio",
      description:
        "Creating a website portfolio to learn web development",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: proj1,
      source_code_link: "https://github.com/Alexde-Ath",
    },
  ];
  
  export {experiences, testimonials, projects };