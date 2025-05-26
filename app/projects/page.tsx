// src/app/projects/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard, { type Project } from '@/components/shared/ProjectCard';

// Moved projectsData outside the component and exported it
export const projectsData: Project[] = [
  {
    slug: 'draw-board-application',
    title: 'Draw Board Application',
    description: 'A collaborative whiteboarding tool for real-time sketching and idea sharing. Built with the MERN stack, enabling seamless teamwork.',
    longDescription: 'The Draw Board Application is a dynamic, real-time collaborative platform designed to mimic the experience of a physical whiteboard in a digital environment. Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication, it allows multiple users to simultaneously draw, write, and share ideas. Key features include a variety of drawing tools (pen, eraser, shapes), text input capabilities, color selection, and the ability to save and load whiteboard sessions. This project emphasizes low-latency interactions and a user-friendly interface to foster effective remote teamwork and brainstorming sessions.',
    imageUrl: 'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/d.png?updatedAt=1748247784981',
    screenshots: [
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/a.png?updatedAt=1748247783990',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/b.png?updatedAt=1748247785123',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/f.png?updatedAt=1748247785016',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/i.png?updatedAt=1748247785104',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/j.png?updatedAt=1748247784197',

      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/d.png?updatedAt=1748247784981',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/e.png?updatedAt=1748247784939',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/k.png?updatedAt=1748247789112',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/g.png?updatedAt=1748247785346',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/drawapp/h.png?updatedAt=1748247784699',
    ],
    imageHint: 'digital whiteboard', // For main card image
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/FahimEhtesham73/whiteboard-application',
    liveUrl: 'https://whiteboard.fahimehtesham.com', // Placeholder - replace with actual link
  },
  {
    slug: 'office-portal',
    title: 'Office Portal',
    description: 'A centralized platform for managing attendance, projects, employee evaluations, and analytics within an organization.',
    longDescription: 'The Office Portal is an all-in-one web application designed to streamline internal operations of an organization. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers modules for managing employee attendance, tracking project progress, submitting leave requests, and evaluating employee performance. It features role-based access control, data visualization for analytics, and multilingual support (English and Japanese). Integration with AWS Lambda enables backend automation for specific AI-driven features. This portal enhances organizational transparency and efficiency through a clean, responsive user interface.',
    imageUrl: 'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/b.png?updatedAt=1748247915338',
    screenshots: [
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/e.png?updatedAt=1748247915826',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/p.png?updatedAt=1748247920378',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/f.png?updatedAt=1748247915785',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/o.png?updatedAt=1748247919961',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/n.png?updatedAt=1748247920337',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/officeportal/l.png?updatedAt=1748247919807',
    ],
    imageHint: 'office dashboard UI', // For main card image
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda'],
    githubUrl: 'https://github.com/FahimEhtesham73/office-portal', // Replace with actual repo link
    liveUrl: 'https://officeportal.fahimehtesham.com', // Placeholder - replace with actual link
  },
  {
    slug: 'rnd_portal',
    title: 'R&D Portal',
    description: 'A Research and Development portal for managing projects, tracking progress, and facilitating collaboration among team members.',
    longDescription: 'The R&D Portal is a comprehensive web application designed to streamline the research and             development process within an organization. Built with the MERN stack, it provides a platform for teams to manage projects, track progress, and collaborate effectively. Key features include project creation and management, task assignment, progress tracking, and team communication tools. The portal supports role-based access control to ensure that sensitive information is only accessible to authorized users. It also includes data visualization tools to help teams analyze project metrics and outcomes. This portal aims to enhance productivity and innovation by providing a centralized hub for all R&D activities.',
    imageUrl: 'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-00.png?updatedAt=1748258489456',
    screenshots: [
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-16-35.png?updatedAt=1748258493473',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-00.png?updatedAt=1748258489456',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-19.png?updatedAt=1748258489529',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-30.png?updatedAt=1748258489285',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-25.png?updatedAt=1748258489433',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-35.png?updatedAt=1748258489166',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-18-19.png?updatedAt=1748258489053',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-15.png?updatedAt=1748258489281',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/R&D_Portal/Screenshot%20from%202025-05-26%2009-17-22.png?updatedAt=1748258489146'

    ],
    imageHint: 'research and development dashboard',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    githubUrl: ' https://github.com/FahimEhtesham73/office-portal',
    liveUrl: 'https://rnp.fahimehtesham.com',
  },
 {
    slug: 'Next Gari',
    title: 'Next Gari',
    description: 'A Next.js-based e-commerce platform for buying and selling used cars, featuring advanced search filters and user-friendly interfaces.',
    longDescription: 'Next Gari is a modern e-commerce platform built with Next.js, designed specifically for the used car market. It allows users to buy and sell vehicles with ease, featuring advanced search filters for make, model, price range, and location. The platform includes user authentication, profile management, and a secure payment gateway for transactions. Sellers can create detailed listings with images and descriptions, while buyers can save their favorite listings and contact sellers directly. The responsive design ensures a seamless experience across devices, making it easy for users to navigate and find their ideal vehicle.',
    imageUrl: 'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-33-33.png?updatedAt=1748259387232',
    screenshots: [
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-33-33.png?updatedAt=1748259387232',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-33-37.png?updatedAt=1748259382448',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-34-09.png?updatedAt=1748259381191',

     ' https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-33-45.png?updatedAt=1748259381155',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-34-20.png?updatedAt=1748259381375',
      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-34-16.png?updatedAt=1748259381690',

      'https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/car/Screenshot%20from%202025-05-26%2017-34-28.png?updatedAt=1748259381487',
    ],
    imageHint: 'used car marketplace',
    techStack: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/FahimEhtesham73/next-gari',
    liveUrl: 'https://nextgari.fahimehtesham.com', // Placeholder - replace with actual link
    },
  {
    slug: 'job-portal',
    title: 'Job Portal',
    description: 'A comprehensive platform connecting job seekers with employers, featuring robust job listings, application tracking, and user profile management.',
    longDescription: 'This Job Portal is a full-featured web application built to bridge the gap between job seekers and employers. It offers a comprehensive suite of tools for both parties. Job seekers can create profiles, upload resumes, search for jobs using various filters (location, industry, job type), apply for positions, and track their application status. Employers can post job openings, manage applications, search for candidates, and communicate with applicants. The platform is built with the MERN stack and deployed on AWS EC2 for scalability and reliability, ensuring a smooth experience even with a large number of listings and users.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'job search',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'AWS EC2'],
    githubUrl: 'https://github.com/FahimEhtesham73/job-portal',
    liveUrl: 'https://jobs.fahimehtesham.com', // Placeholder - replace with actual link
  },
  {
    slug: 'employee-evaluation-system',
    title: 'Employee Evaluation System',
    description: 'An Job Portal module for managing employee evaluations, tracking performance metrics, and facilitating constructive feedback.',
    longDescription: 'The Employee Evaluation System is an integral module of a larger Job Portal, designed to streamline and digitize the performance review process. It allows managers to set evaluation criteria, conduct periodic reviews, provide feedback, and track employee performance over time. Employees can view their evaluations, submit self-assessments, and engage in a transparent review cycle. The system uses JWT for secure authentication and is built upon the MERN stack, ensuring data integrity and a user-friendly interface for both managers and employees. This tool aims to improve HR efficiency and foster a culture of continuous improvement.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'performance review',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    githubUrl: 'https://github.com/FahimEhtesham73/employee-evaluation',
    // No liveUrl, as it's likely an internal tool
  },
  {
    slug: 'multi-vendor-e-commerce-site',
    title: 'Multi-Vendor E-commerce Site',
    description: 'A feature-rich multi-vendor e-commerce website, enabling sellers to list and manage products. Focused on scalability and AI integration.',
    longDescription: 'This Multi-Vendor E-commerce Site provides a robust platform for multiple sellers to create their storefronts, list products, manage inventory, and process orders. The system is designed for scalability, leveraging AWS services like Lambda for serverless functions. A key feature is the integration of AI models for tasks such as product recommendations and personalized user experiences. The platform includes comprehensive dashboards for vendors and administrators, secure payment gateway integration, and a user-friendly shopping experience for customers. Built with the MERN stack, it offers a modern, responsive design suitable for a wide range of products and vendors.',
    imageUrl: 'https://placehold.co/600x400.png',
    screenshots: [
      'https://placehold.co/800x500.png',
      'https://placehold.co/800x500.png',
    ],
    imageHint: 'online marketplace',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS Lambda', 'AI Integration'],
    githubUrl: 'https://github.com/FahimEhtesham73/multi-vendor-ecommerce',
    liveUrl: 'https://ecommerce.fahimehtesham.com', // Placeholder - replace with actual link
  },
];

export default function ProjectsPage() {
  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary animate-fadeInUp">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            animationDelay={`${index * 0.1 + 0.2}s`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
