import projectData from "./projectData";
import resumeData from "./resumeData";

const data = {
  title: "Steven Gresh | Web Developer",
  name: "Steven Gresh",
  nameUpper: "STEVEN GRESH",
  subtitle: {
    one: "Web Dev",
    two: "Engineer",
    three: "Videographer"
  },
  nav: {
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    email: {
      title: "Email",
      link: "stvngrsh@gmail.com"
    },
    linkedin: {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/stevengresh"
    }
  },
  about: {
    title: "About Me",
    tagline: "I make cool stuff.",
    bullets: [
      "Web Developer",
      "Deloitte Consulting LLP",
      "Washington, DC",
      "BS Mechanical Engineering",
      "University of Maryland"
    ],
    blurb:
      "I currently work as a web developer. I also have experience in videography, robotics & programming. I own two 3D printers, have hosted a radio show, and love skiing."
  },
  projects: {
    title: "Featured Projects",
    projectData: projectData
  },
  resume: {
    title: "Experience",
    resumeData: resumeData
  }
};

export default data;
