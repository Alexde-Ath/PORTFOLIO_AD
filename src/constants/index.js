
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    RBC,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "work",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "example",
      icon: web,
    },
    {
      title: "example",
      icon: mobile,
    },
    {
      title: "example",
      icon: backend,
    },
    {
      title: "example",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
        "Skills: Excel, Microsoft office",
        "Analyze 10ks for 30+ companies, looking into balance sheets, cash flows, and income statements.",
        "Input and analyze client information for financial and retirement planning.",
        "Attended and assisted the event coordinator at RBC’s Next-Level conference event at the residence inn.",
      ],
    },
    {
      title: "University of Michigan: Introduction to Structured Query Language (SQL)",
      company_name: "Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "Basic syntax, database design with multiple tables, foreign keys, JOIN Operation.",
      ],
    },
    {
      title: "University of Michigan: Introduction to Structured Query Language (SQL)",
      company_name: "Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2021",
      points: [
        "Basic syntax, database design with multiple tables, foreign keys, JOIN Operation.",
      ],
    },
    {
      title: "University of Michigan: Introduction to Structured Query Language (SQL)",
      company_name: "Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "Basic syntax, database design with multiple tables, foreign keys, JOIN Operation.",
      ],
    },
    {
      title: "University of Michigan: Introduction to Structured Query Language (SQL)",
      company_name: "Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "Basic syntax, database design with multiple tables, foreign keys, JOIN Operation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: starbucks,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };