import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Taqiyy Faiz",
  initials: "TA",
  url: "https://github.com/Taqiyyfaiz",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Aspiring Software Engineer. I love building things and solving real world problems with technology.",
  summary: `Pre-Final Year B.Tech Student Specializing in Data Science and AI who loves technology.passionate about problem-solving, innovation, and creating impactful solutions while continuously learning and growing.`,
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "C++",
    "C",
    "HTML",
    "CSS",
    "IBM Services - WatsonX Assitent, Cognos BI",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Git",
    "Linux",
    "Tailwind CSS",
    "Appwrite",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://taqiyyfaiz.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "taqiyyfaiz@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Taqiyyfaiz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/taqiyy-faiz/", // Replace with your actual LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:taqiyyfaiz@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Google Developer Student Club",
      href: "[Achievment Badge]https://www.cloudskillsboost.google/public_profiles/a5fe716d-774e-453d-a25a-b8ad1949553b",
      badges: [],
      location: "Hybrid",
      title: "Member of GDSC",
      logoUrl: "GDSC.png",
      start: "2024",
      end: "Present",
      description:
        "Experience in Google Cloud as I have attended various Sessions on LLM.etc" + 
        "I have Joined on a Google Cloud Study jam where I have learned. How Google Cloud Works." +
        "Build some Applications Using Google Cloud in the Study Jam Course like Chatbot using Chatgpt and Gemini API." +
        "I have got Swags from Google For Completing the Cloud Study Jam Which makes me Explore new Technology.",
    },
  ],
  education: [
    {
      school: "Dr.M.G.R. Educational and Research Institute",
      href: "",
      degree: "B.Tech CSE Specialization in Data Science and AI",
      logoUrl: "/MGR.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Diabetes-Prediction",
      href: "https://github.com/Taqiyyfaiz/Diabetes-Prediction",
      dates: "2024",
      active: true,
      description:
        "This project is a Diabetes Prediction App using an SVM model to assess diabetes risk from health data (e.g., blood pressure, glucose). Built with Scikit-Learn and deployed via Streamlit, it provides a quick, user-friendly prediction interface.",
      technologies: ["Python","Scikit-Learn","Streamlit",],
      links: [
        {
          type: "Source",
          href: "https://github.com/Taqiyyfaiz/Diabetes-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Diabetes Predicion.png",
      video: "",
    },
    {
      title: "MediAssist--Chatbot",
      href: "wellcare-medical-center.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "A Simple Healthcare Chatbot using IBM WatsonX Assistant which makes user easy to understand the website and Easy to Use.",
      technologies: ["HTML", "CSS", "IBM WatsonX Assistant"],
      links: [
        {
          type: "Website",
          href: "wellcare-medical-center.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Taqiyyfaiz/MediAssist--Chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Medi.png",
      video: "",
    },
    {
      title: "Retail-Merchandising-Analysis-Dashboard",
      href: "retail-insight-hub.netlify.app/",
      dates: "2024",
      active: true,
      description:
        "This Project Contains My College Mini Project on Retail Merchandising Analysis Using IBM Cognos BI. It includes Data Visualizations and insights aimed to optimizing retail performance, focusing on sales inventory, and promotional effectiveness.",
      technologies: [
        "Data Visualization",
        "IBM Cognos BI",
        "IBM Services",
      ],
      links: [
        {
          type: "Website",
          href: "retail-insight-hub.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Taqiyyfaiz/Retail-Merchandising-Analysis-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Dashboard.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Software Conceptual Design",
      dates: "Nov 2024",
      certifiedBy: "NPTEL - IIT Bombay",
      description: "From understanding Behavior, Function, and Structure (BFS) to mastering component design, I learned how software is crafted before writing a single line of code. Key takeaways:Breaking down software into manageable parts: Behavior, Function, and Structure Learning Agile methodology and its impact Exploring UML diagrams for idea visualizationUnderstanding testing phases like Alpha and Beta testing",
      image: "/NPTEL .png",
      links: [
        {
          type: "Certified",
          href: "https://drive.google.com/file/d/1dcpDYyKQD1xVugvwqgSpjX7uQdI0MkMM/view",
          icon: <Icons.shield className="size-3" />,
        }
      ],
    },
    {
      title: "Red Hat System Administration I (RH124)",
      dates: "March 2024",
      certifiedBy: "Red Hat Academy - Program Learner",
      description: "earned the Red Hat Academy Program Learner credential is a student at a Red Hat Academy partner institution enrolled in a Red Hat course. Earners of this badge actively engaged with Red Hat course content and practiced hands-on labs on the Red Hat Academy Learning Platform.I have developed a solid foundation in Red Hat technologies, setting the stage for continued growth in the tech field.",
      image: "/Redhat.png",
      links: [
        {
          type: "Certified",
          href: "https://www.credly.com/badges/eed86e51-0f07-405d-9ca3-3fc774f39a7b/linked_in_profile",
          icon: <Icons.shield className="size-3" />,
        }
      ],
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description:"",
      image: "",
      links: [],
    },
  ],
} as const;
