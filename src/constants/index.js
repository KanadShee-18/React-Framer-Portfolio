import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import newsimg from "../assets/projects/newsimg.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Taste Buddy",
    image: project3,
    link: "https://taste-buddy-mu.vercel.app/",
    description:
      "A food delivery app connects users with local restaurants, allowing them to order meals for delivery or pickup with ease. It provides a seamless experience for browsing menus, placing orders, and tracking delivery in real-time.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Fold Facts - News Website",
    image: newsimg,
    link: "https://fold-facts.vercel.app/",
    description:
      "FoldFacts is a dynamic news website built with React, Bootstrap, and vanilla CSS, providing users with real-time updates on top categories like science, technology, sports, business, and more. Integrated with the NewsAPI, it delivers the latest articles, ensuring users stay informed with fresh content. The site features a modern infinite scroll functionality, allowing seamless browsing without the need for pagination, enhancing the user experience for continuous exploration of news stories.",
    technologies: ["React", "React-Infinite-Scroll", "Bootstrap", "Vanila CSS"],
  },
  {
    title: "Netflix Clone with Gpt Search",
    image: project5,
    link: "https://docsflix.netlify.app/",
    description:
      "Developed a Netflix clone using React, Redux Toolkit, and Tailwind CSS, providing a seamless user experience. The application features user authentication, where users must log in to access content. Upon each refresh, a movie trailer is automatically played, enhancing engagement. Implemented a robust movie search functionality using the Gemini API for intelligent search suggestions, with movie data sourced from the TMDB API. The project demonstrates strong proficiency in state management, API integration, and responsive UI design.",
    technologies: ["React", "Redux", "Tailwind", "Firebase", "TMDB", "Gemini"],
  },
  {
    title: "Wanderlust",
    image: project1,
    link: "https://wanderlust-b8bm.onrender.com/",
    description:
      "An online marketplace connecting travelers with accommodations experiences, and adventures worldwide.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "MongoDB",
      "EJS",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Spotify",
    image: project2,
    link: "https://spotify-frontend-izzd.onrender.com/",
    description:
      "A FULL Stack music streaming service providing access to millions of songs,playlists and podcasts, with a user-friendly interface and added an admin panel to manage(upload, delete) all the songs and albums.",
    technologies: ["React", "MongoDb", "HTML", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    link: "",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
