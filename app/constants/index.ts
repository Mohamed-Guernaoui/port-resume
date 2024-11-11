import {
  bbktour,
  randonne,
  multiservice,
  WordPressIcon,
  shopify,
  github,
  linkedIn,
  email,
} from "~/assets";

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
    id: "contact",
    title: "Contact",
  },
];

const worksexample = [
  //  {image: jobit, source_code_link: "https://github.com" },
  {
    type_id: 2,
    image: bbktour,
    source_code_link: "https://github.com",
    name: "bbktour",
    tags: [{ IT: "WordPress" }],
    url: "https://bbktours.com",
  },
  {
    type_id: 2,
    image: bbktour,
    source_code_link: "https://github.com",
    name: "bbktour",
    tags: [{ IT: "WordPress" }],
    url: "https://bbktours.com",
  },
  {
    type_id: 2,
    image: bbktour,
    source_code_link: "https://github.com",
    name: "bbktour",
    tags: [{ IT: "WordPress" }],
    url: "https://bbktours.com",
  },
  {
    type_id: 2,
    image: bbktour,
    source_code_link: "https://github.com",
    name: "bbktour",
    tags: [{ IT: "WordPress" }],
    url: "https://bbktours.com",
  },
  {
    type_id: 0,
    image: randonne,
    source_code_link: "https://github.com",
    name: "randonne Maroc",
    tags: [{ IT: "WordPress" }],
    url: "https://xn--randonne-maroc-hkb.com",
  },
  {
    type_id: 0,
    image: randonne,
    source_code_link: "https://github.com",
    name: "randonne Maroc",
    tags: [{ IT: "WordPress" }],
    url: "https://xn--randonne-maroc-hkb.com",
  },
  {
    type_id: 0,
    image: randonne,
    source_code_link: "https://github.com",
    name: "randonne Maroc",
    tags: [{ IT: "WordPress" }],
    url: "https://xn--randonne-maroc-hkb.com",
  },
  {
    type_id: 0,
    image: randonne,
    source_code_link: "https://github.com",
    name: "randonne Maroc",
    tags: [{ IT: "WordPress" }],
    url: "https://xn--randonne-maroc-hkb.com",
  },
  {
    type_id: 1,
    image: multiservice,
    source_code_link: "https://github.com",
    name: "Multiservice pro",
    tags: [{ IT: "WordPress" }],
    url: "https://multiservicepro.ma",
  },
  {
    type_id: 1,
    image: multiservice,
    source_code_link: "https://github.com",
    name: "Multiservice pro",
    tags: [{ IT: "WordPress" }],
    url: "https://multiservicepro.ma",
  },
  {
    type_id: 1,
    image: multiservice,
    source_code_link: "https://github.com",
    name: "Multiservice pro",
    tags: [{ IT: "WordPress" }],
    url: "https://multiservicepro.ma",
  },
  {
    type_id: 1,
    image: multiservice,
    source_code_link: "https://github.com",
    name: "Multiservice pro",
    tags: [{ IT: "WordPress" }],
    url: "https://multiservicepro.ma",
  },
];

const skills = [
  {
    title: "TypeScript",
    //   icon: web,
  },
  {
    title: "NodeJS",
    //   icon: backend,
  },
  {
    title: "Ionic Developer",
    //   icon: mobile,
  },
  {
    title: "Tailwindcss",
    //   icon: mobile,
  },
  {
    title: "NodeJS",
    //   icon: backend,
  },
  {
    title: "Remix.js",
    //   icon: backend,
  },
  {
    title: "Prisma",
    //   icon: web,
  },
  {
    title: "Supabase",
    //   icon: backend,
  },
  {
    title: "Problem Solver",
  },
  {
    title: "Figma",
  },
  {
    title: "Communicator",
  },
  {
    title: "Explorer",
  },
  {
    title: "Wordpress",
  },
];

const experiences = [
  {
    role: "fullstack developer",
    company_name: "web Media",
    icon: "https://webenclic.com/wp-content/uploads/2023/06/Logo-wec-pro1-e1686499174246.png",
    date: "2023",
  },
  {
    role: "shopify developer",
    company_name: "Xco Agency",
    icon: "https://media.licdn.com/dms/image/D4E0BAQEo6bReI2rhHw/company-logo_200_200/0/1715944361002/xco_agency_llc_logo?e=2147483647&v=beta&t=9jEdOX0bM6LJWKMv3Tc2AqpvQfszYqSO1ZZnG8_TrQ4",
    date: "2024",
  },
];

const projects = [
  {
    name: "Activities Track",
    description:
      "TrackApp is web application aims to collects daily activities data and tasks and mesuring the estimated time using charts for targeted task. the app also can read CSV file imported from Notion template,and represent these data as chart",
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
    image: "",
    source_code_link: "https://github.com/medmks/TrackApp",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "First Arabic Blog",
    description:
      "A first arabic blog platform that allows users to read and engage with their interests and also encorage content writers to post their works in the arabic way.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/medmks/vite-mern-auth-blog",
  },
];

const contact_links = [
  {
    icon: linkedIn,
    name: "LinkedIn",
    link: "https://linkedin.com/in/mohamed-guernaoui-ab27a2229",
  },
  { name: "GitHub", link: "https://github.com/medmks", icon: github },
  { name: "Email", link: "mailto:mguernaoui03@gmail.com", icon: email },
];
const WorkTabs = [
  {
    index: 0,
    TypeOfWork: "Featured",
    icon: "",
    IsJsx: true,
  },
  {
    index: 1,
    TypeOfWork: "Wordpress",
    icon: WordPressIcon,
  },
  {
    index: 2,
    TypeOfWork: "Shopify Apps",
    icon: shopify,
  },
];

export { skills, experiences, projects, contact_links, worksexample, WorkTabs };
