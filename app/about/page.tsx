// src/app/about/page.tsx
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Lightbulb, Users, Zap, Target, Brain, Handshake, GraduationCap, Award, CalendarDays, Building2, CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const educationItems = [
    {
      icon: GraduationCap,
      title: "Master of Science in Information and Communication Engineering",
      institution: "Bangladesh University of Professionals (BUP)",
      location: "Dhaka, Bangladesh",
      duration: "2022 - Present",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Science in Information and Communication Engineering",
      institution: "Bangladesh University of Professionals (BUP)",
      location: "Dhaka, Bangladesh",
      duration: "2017 - 2021",
    },
    {
      icon: CalendarDays,
      title: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College",
      location: "Dhaka, Bangladesh",
      duration: "2016",
    },
    {
      icon: CalendarDays,
      title: "Secondary School Certificate (SSC)",
      institution: "BCIC School and College",
      location: "Dhaka, Bangladesh",
      duration: "2014",
    },
    {
      icon: Award,
      title: "Specialized Training in Professional Digital Marketing",
      institution: "Creative IT Institute",
      location: "Dhaka, Bangladesh",
      duration: "2024",
    },
  ];

  const experienceItems = [
    {
      title: "Full Stack Software Engineer ",
      company: "Next Solution Lab",
      duration: "2023 August - Present",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Full-Stack Development – Developed scalable applications using React JS (frontend) and Node JS, Express JS, MongoDB (backend).",
        "AI Integration – Built AI-powered systems and integrated AI models with web applications.",
        "Cloud Management – Managed applications using AWS Lambda, DynamoDB, EC2, S3 Bucket and CloudFront.",
        "Job Portal Development –Contributed to building an Job Portal for attendance, project management, analytics, and employee evaluation.",
        "E-commerce Development – Created a multi-vendor eCommerce platform with secure authentication and scalable features.",
        "Data Extraction & Annotation – Developed a project for data extraction and annotation using AI tools.",
        "Multilingual Website Development – Built websites supporting English and Japanese.",
        "AI Tool Development – Created multiple AI-based tools, including the VGG annotation tool.",
        "Code Optimization & Documentation – Wrote reusable, optimized code with proper documentation.",
      ],
    },
    {
      title: "Digital Marketing Contributions and Involevement",
      company: "Next Solution Lab",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Managed SEO efforts to improve Next Solution Lab website online visibility.",
        "Performed website audits and conducted keyword research, competitor analysis, and content optimization.",
        "Utilized Google Analytics to monitor and enhance website performance.",
        "Contributed to lead generation via LinkedIn Sales Navigator and email marketing.",
        "Operated Apollo.io  in lead generation and outreach strategies.",
      ],
    },
  ];

  return (
    <SectionWrapper>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fadeInUp">About Me</h1>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2 animate-fadeInUp animation-delay-200">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Image
                src="https://ik.imagekit.io/wmmxbuuwz/portfolioFahim/fahim.png?updatedAt=1748247738045"
                alt="MD. Ehtesamul Haque Fahim - Professional"
                width={900}
                height={1000}
                className="object-contain w-full h-auto"
                data-ai-hint="professional portrait"
                priority
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-8">
          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp animation-delay-400">
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg">
              <p>
                I am a dedicated Full Stack Software Engineer with robust hands-on experience in the MERN stack and a strong foundation in digital marketing. As a graduate from Bangladesh University of Professionals (BUP) with specialized training in Digital Marketing from Creative IT, I bring a unique blend of technical expertise and marketing acumen.
              </p>
              <p>
                My professional journey began at Next Solution Lab as an Associate Full Stack Software Engineer. There, I honed my skills in writing reusable code and comprehensive documentation. I have developed and collaborated on complex systems using React.js for intuitive frontends, and Node.js, Express, and MongoDB for powerful backends. This includes integrating AI models and deploying applications on AWS EC2. Key projects have involved an Job Portal for attendance and project management, a multi-vendor e-commerce website, data extraction/annotation tools, and multilingual (English/Japanese) websites.
              </p>
              <p>
                Concurrently, I serve as a part-time Global Marketing Officer at Next Solution Lab, where I contribute to lead generation via LinkedIn Sales Navigator and email marketing. My responsibilities also include performing website audits, conducting keyword research, managing SEO efforts, and utilizing Google Analytics to monitor and enhance website performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-card/50 border border-border/70 hover:shadow-lg hover:border-primary/40 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-start mb-2">
                    <Briefcase className="h-7 w-7 text-primary mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl text-primary/90">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4 mr-1.5" />
                        <span>{item.company}</span>
                        {item.location && <span className="mx-1.5 text-xs">&bull;</span>}
                        {item.location && <span>{item.location}</span>}
                      </div>
                      {item.duration ?
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <CalendarDays className="h-4 w-4 mr-1.5" />
                        <span>{item.duration}</span>
                      </div>
                      : null}
                    </div>
                  </div>
                  <ul className="mt-3 pl-6 space-y-2 list-disc list-outside text-foreground/80 marker:text-primary/70">
                    {item.responsibilities.map((responsibility, rIndex) => (
                      <li key={rIndex} className="text-sm leading-relaxed">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Education &amp; Certifications</CardTitle>
            </CardHeader>
        <CardContent className="p-6 pt-0 space-y-6">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-5 rounded-xl bg-card/60 border border-border/80 transition-all duration-300 animate-fadeInUp group transform hover:-translate-y-1 hover:shadow-primary/20 hover:border-primary/50"
                  )}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex items-start mb-2">
                    <item.icon className={cn(
                        "h-8 w-8 text-primary mr-4 mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                      )} 
                    />
                    <h3 className={cn(
                        "font-semibold text-xl text-primary/90 transition-colors group-hover:text-primary"
                      )}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="pl-12 mt-1 space-y-1.5">
                    <p className="text-md font-semibold text-foreground/90">{item.institution}</p>
                    {(item.location || item.duration) && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        {item.location && <span>{item.location}</span>}
                        {item.location && item.duration && <span className="mx-1.5 text-xs">&bull;</span>}
                        {item.duration && (
                          <span className={cn(
                              "px-2 py-0.5 rounded-full text-xs font-medium transition-colors bg-primary/10 text-primary/80 group-hover:bg-primary/20 group-hover:text-primary" 
                            )}
                          >
                            {item.duration}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Philosophy &amp; Values</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg">
              <p>
                I am passionate about integrating my web development skills with marketing strategies to deliver user-centric, scalable solutions. My primary aim is to leverage my expertise in both technology and marketing to contribute to impactful projects and help businesses achieve digital growth in the IT industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><Target className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Problem Solver:</strong> Keen on tackling complex challenges and finding innovative, user-centric solutions through logical thinking.</span></li>
                <li className="flex items-start"><Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Lifelong Learner:</strong> Committed to continuous learning and embracing new challenges in web development and digital marketing.</span></li>
                <li className="flex items-start"><Users className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Team Player:</strong> Value teamwork and possess strong communication and listening skills, believing the best products are built collaboratively.</span></li>
                <li className="flex items-start"><Brain className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><strong>Multitasking &amp; Punctual:</strong> Efficiently manage multiple tasks and adhere to timelines with a strong sense of punctuality.</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm shadow-lg animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90">Beyond the Code</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 text-lg">
              <p>
                When I&apos;m not immersed in development or marketing strategies, I actively seek experiences that broaden my perspective. I have volunteered with UNICEF on the Rubella Measles vaccination campaign, organized community-building events at Impact Hub Dhaka, and participated in BUP ICT Fest and BUP TECHSURGENCE. These activities fuel my passion for teamwork, networking, and continuous personal development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
