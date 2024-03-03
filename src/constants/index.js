
import {
    RBC,
    proj1,
    UR,
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
    {
      title: "Team Member",
      company_name: "UR DandyHacks '24",
      icon: UR,
      iconBg: "#e3dfd3",
      date: "March 2024 - Present",
      points: [
        "Going to work with a team to run DandyHacks *Will update description after more information*",
      ],
    },
    {
      title: "Business Manager",
      company_name: "UR Woman's Soccer Club",
      icon: UR,
      iconBg: "#e3dfd3",
      date: "August 2023 - Present",
      points: [
        "Work with UR Finance Office to calculate teams budget and provide financial services to run the club.",
      ],
    },
    {
      title: "2nd level leader",
      company_name: "Medallion Program",
      icon: UR,
      iconBg: "#e3dfd3",
      date: "2022 - Present",
      points: [
        "Partook in campus leadership positions.",
        "Further workshops for learning about leadership.",
      ],
    },
    {
      title: "Captain",
      company_name: "UR Woman's Soccer Club",
      icon: UR,
      iconBg: "#e3dfd3",
      date: "August 2022 - 2023",
      points: [
        "Team reached second in Division.",
        "Requested to return as Captain.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Example",
      name: "John Doe",
      designation: "CTO",
      company: "123 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Web Portfolio",
      description:
        "Created a website portfolio to learn web development, click on github top right to learn more!",
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
      source_code_link: "https://github.com/Alexde-Ath/PORTFOLIO_AD",
    },
  ];
  
  export {experiences, testimonials, projects };