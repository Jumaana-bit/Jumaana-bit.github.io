import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import projectz from "../assets/projects/project-z.jpg";

export const HERO_CONTENT = `I am a passionate and dedicated student in my fourth year of university, with a strong interest in full stack development.`;

export const ABOUT_TEXT = `I enjoy every aspect of software engineering, from learning it to applying it. The past four years have taught me that software engineering is not just about coding but a comprehensive discipline that encompasses the entire process from idea to deployment. I have a special interest in mobile app development and web programming. However, I appreciate every facet of software engineering and adapt myself to excel in any field within it.`;

export const MORE_ABOUT_TEXT = ` I am proficient in various programming languages and frameworks, including PHP, HTML, CSS, SQL, JavaScript, React, Java, Spring Boot, C, and C++. I have applied different software development methodologies such as incremental, spiral, agile, and DevOps. My experience includes working with distributed systems, including sockets, server/client architectures, and middleware. I am well-versed in using scripting tools like Command Prompt, PowerShell, and WSL for Linux. I have a solid understanding of operating system concepts like multi-threading and race conditions between processes, and I am knowledgeable in embedded systems software, including FreeRTOS, monolithic kernels, and ARM architecture.
`;




export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "IT Systems Assistant",
    company: "Ontario Public Service",
    description: `Developed a RESTful application using the Spring Framework and deployed it with Docker, Kubernetes, and Minikube, while also creating and managing API documentation with Swagger. Additionally, authored technical documentation on security logging and monitoring, and contributed to a full-stack development project using Angular and Spring, enhancing my expertise in both backend and frontend technologies.`,
    technologies: ["Spring", "Angular", "Docker", "Swagger", "GitLab"],
  },
  {
    year: "Feb 2024 - Apr 2024",
    role: "Web Developer",
    company: "Helios Sports Tech",
    description: `Worked part-time for Helios Sports Tech, creating a website using WordPress, PHP, and MySQL to manage combine events. Implemented various functionalities to enhance user experience and streamline event management.`,
    technologies: ["HTML", "CSS", "WordPress", "mySQL"],
  },
  {
    year: "May 2023 - Aug 2024",
    role: "Web Development Assistant",
    company: "Ontario Public Service",
    description: `Gained insights into the Ministry of Children, Community, and Social Services, working in the Social Assistance I & IT Branch on the Social Assistance Management System (SAMS). Participated in daily scrum meetings, often as Scrum Master, and served as a scribe during interviews for my manager.`,
    technologies: ["MS Teams", "JAWS", "IBM Curam"],
  },
];

export const PROJECTS = [
  {
    title: "Flight Booking System",
    image: project1,
    description:
      "An Expedia-inspired website featuring flight booking, flight selection from a live API, seat selection, and ticket generation.",
    technologies: ["PHP", "HTML", "Bootstrap", "MySQL"],
  },
  {
    title: "Virtual Memory App",
    image: projectz,
    description:
      "An application designed to assist seniors and individuals with dementia by providing a user-friendly interface to manage memories, reminders, and important information. ",
    technologies: ["Java", "XML", "Android SDK", "SQLite"],
  },
  {
    title: "Digital Library Application",
    image: project3,
    description:
      "A web-based platform designed to provide access to a collection of digital books without the need for borrowing.",
    technologies: ["Spring Boot", "H2", "JPA", "Thymeleaf"],
  },
  {
    title: "Ticket Booking Application",
    image: project4,
    description:
      "A platform for users to search, book, and manage flight itineraries that was created using TDD methodology.",
    technologies: ["Spring Boot", "JUnit", "Mockito", "Jenkins"],
  },
  {
    title: "Amusement Park Service",
    image: project5,
    description:
      "A Java-based RMI service simulating an amusement park. It provides ride management, join/leave ride functionality, waitlist handling, and a graceful server shutdown.",
    technologies: ["Java", "RMI", "Concurrency Utilities"],
  },
  {
    title: "Food Ordering App",
    image: project6,
    description:
      "A Flutter-based application that allows users to select food items from a predefined list while adhering to a specific target cost.",
    technologies: ["Flutter", "Dart", "SQLite" , "Android SDK"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};