import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  Braces,
  Code2,
  Coffee,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles,
  Terminal,
  Wind,
  Workflow,
} from 'lucide-react';
import { ReactNode, useMemo, useRef } from 'react';

const primaryText = '#E1E0CC';
const customEase = [0.16, 1, 0.3, 1] as const;
const cinematicVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';
const githubUrl = 'https://github.com/sravanakkaladevi';
const linkedInUrl = 'https://www.linkedin.com/in/akkaladevi-sravan-kumar-8311a43b3/';
const email = 'akkaladevisravankumar@gmail.com';

type Segment = {
  text: string;
  className?: string;
};

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
};

function WordsPullUp({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden pb-[0.08em]">
          <motion.span
            className="inline-block pr-[0.12em]"
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.7, delay: index * 0.045, ease: customEase }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function LettersPullUp({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={`inline-flex ${className}`} aria-label={text}>
      {Array.from(text).map((letter, index) => (
        <span key={`${letter}-${index}`} className="overflow-hidden pb-[0.08em]" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.72, delay: index * 0.055, ease: customEase }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function WordsPullUpMultiStyle({ segments, className = '' }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const words = useMemo(
    () =>
      segments.flatMap((segment) =>
        segment.text
          .trim()
          .split(/\s+/)
          .map((word) => ({ word, className: segment.className ?? '' })),
      ),
    [segments],
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map(({ word, className: wordClassName }, index) => (
        <span key={`${word}-${index}`} className={`overflow-hidden pb-[0.08em] ${wordClassName}`}>
          <motion.span
            className="inline-block pr-[0.16em]"
            initial={{ y: 22, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 22, opacity: 0 }}
            transition={{ duration: 0.65, delay: index * 0.035, ease: customEase }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function MagneticButton({ children, href, variant = 'primary', icon }: MagneticButtonProps) {
  const isExternal = href.startsWith('http');

  const classes =
    variant === 'primary'
      ? 'bg-primary text-black shadow-[0_0_45px_rgba(222,219,200,0.22)] hover:shadow-[0_0_70px_rgba(222,219,200,0.34)]'
      : 'border border-primary/20 bg-black/30 text-primary backdrop-blur-xl hover:border-primary/55 hover:bg-primary/10';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 ${classes}`}
    >
      {children}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
          variant === 'primary' ? 'bg-black text-primary' : 'bg-primary text-black'
        }`}
      >
        {icon ?? <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
      </span>
    </a>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-primary shadow-[0_0_20px_rgba(222,219,200,0.75)]" />;
}

function AmbientLayers() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#DEDBC8]/10 blur-[70px]" />
      <div className="absolute right-[-8%] top-[38%] h-80 w-80 rounded-full bg-[#8b7355]/14 blur-[80px]" />
      <div className="absolute bottom-[-12%] left-[30%] h-72 w-72 rounded-full bg-[#54483b]/14 blur-[80px]" />
    </div>
  );
}

function ResumeSignal() {
  const lines = [
    ['Education', "MCA, Aurora's PG College, Hyderabad", '2024 - 2026'],
    ['Internship', 'Front End Web Development, AICTE & Edunet', 'Aug - Sept 2025'],
    ['AI/ML', 'Virtual Intern, Microsoft & AICTE', 'Apr - May 2025'],
    ['Focus', 'Python, Django, React, ML, APIs, MySQL', 'Current'],
  ];

  return (
    <div className="relative overflow-hidden rounded-[1.45rem] border border-primary/15 bg-black/28 p-5 backdrop-blur-[10px] sm:p-6">
      <div className="light-texture pointer-events-none absolute inset-0 opacity-70" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <motion.p
        className="relative text-[10px] uppercase tracking-[0.32em] text-primary/65"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
      >
        Resume Data Stream
      </motion.p>
      <div className="relative mt-7 space-y-5">
        {lines.map(([label, value, meta], index) => (
          <motion.div
            key={label}
            className="border-l border-primary/20 pl-4"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.7 + index * 0.08, ease: customEase }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-primary/45">{label}</span>
              <span className="text-[10px] text-primary/45">{meta}</span>
            </div>
            <p className="mt-1 text-sm leading-snug text-primary sm:text-base">
              {value}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const navItems = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Stack', '#stack'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ];

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black p-4 md:p-6">
      <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050505] md:min-h-[calc(100vh-3rem)] md:rounded-[2rem]">
        <video className="absolute inset-0 h-full w-full object-cover opacity-85" src={cinematicVideo} autoPlay loop muted playsInline />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light" />
        <div className="light-texture pointer-events-none absolute inset-0 opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(222,219,200,0.12),transparent_30%),linear-gradient(105deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.43)_48%,rgba(0,0,0,0.62)_100%)]" />

        <nav className="absolute left-1/2 top-0 z-20 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-b-3xl border-x border-b border-white/10 bg-black/85 px-4 py-2.5 backdrop-blur-xl sm:w-auto sm:px-7">
          <div className="flex items-center justify-center gap-3 overflow-x-auto sm:gap-6 md:gap-10">
            {navItems.map(([item, href]) => (
              <a
                key={item}
                href={href}
                onClick={(event) => handleNavClick(event, href)}
                className="shrink-0 text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 sm:text-xs"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1500px] grid-cols-12 items-end gap-6 px-4 pb-8 pt-24 sm:px-6 md:min-h-[calc(100vh-3rem)] md:px-8 md:pb-12 lg:px-10">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              className="mb-4 max-w-xl text-xs uppercase tracking-[0.35em] text-primary/60 sm:text-sm"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              MCA Student | SDE Aspirant | AI/ML Explorer
            </motion.p>
            <LettersPullUp
              text="Sravan"
              className="text-[21vw] font-extrabold leading-[0.82] tracking-[-0.035em] text-[#E1E0CC] sm:text-[19vw] md:text-[16vw] lg:text-[11.6vw] xl:text-[10.5vw] 2xl:text-[9.5rem]"
            />
            <motion.h1
              className="mt-2 text-3xl font-light leading-none text-primary sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.28, ease: customEase }}
            >
              Software Development Engineer
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-sm leading-relaxed text-primary/70 sm:text-base md:text-lg"
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: customEase }}
            >
              MCA student with hands-on experience in machine learning and full-stack development, building responsive
              web systems, data-driven tools, and blockchain-powered healthcare applications.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: customEase }}
            >
              <MagneticButton href="#projects">Explore Projects</MagneticButton>
              <MagneticButton href="#about" variant="ghost">
                Enter Studio
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="col-span-12 lg:col-span-4 lg:pb-8"
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5, ease: customEase }}
          >
            <ResumeSignal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: '-120px' });
  const body =
    'MCA student with hands-on experience in machine learning and full-stack development. I have built responsive interfaces, Django applications, machine learning projects, and blockchain workflow demos while learning how to connect clean engineering with useful real-world outcomes.';

  return (
    <section id="about" className="relative bg-black px-4 py-20 sm:px-6 md:py-28 lg:py-36">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#101010]/85 px-5 py-16 text-center shadow-[0_40px_140px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:px-8 md:py-24 lg:px-12">
        <p className="mb-7 text-[10px] uppercase tracking-[0.32em] text-primary sm:text-xs">Creative Technologist</p>
        <WordsPullUpMultiStyle
          className="mx-auto max-w-4xl text-3xl font-normal leading-[0.97] text-primary sm:text-4xl sm:leading-[0.92] md:text-5xl lg:text-6xl"
          segments={[
            { text: "I'm Sravan Kumar,", className: 'font-normal' },
            { text: 'an MCA final semester student.', className: 'font-serif italic' },
            { text: 'I build frontend systems,', className: 'font-normal' },
            { text: 'machine learning projects,', className: 'font-serif italic' },
            { text: 'and practical blockchain applications.', className: 'font-normal' },
          ]}
        />
        <motion.p
          ref={textRef}
          className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-[#DEDBC8] sm:text-base md:mt-14 md:text-lg"
          initial={{ opacity: 0.35, y: 16 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 16 }}
          transition={{ duration: 0.75, ease: customEase }}
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Wildlife Explorer',
      tag: 'Cinematic Web',
      icon: Sparkles,
      repo: 'https://github.com/sravanakkaladevi/WildLife-Explorer',
      preview: 'https://sravanakkaladevi.github.io/WildLife-Explorer/',
      tech: 'HTML, CSS, JavaScript, GSAP',
      description:
        'Immersive wildlife experience using GSAP animations, cinematic visuals, parallax effects, lazy loading, and interactive storytelling.',
    },
    {
      title: 'Organ Donation Tracking System',
      tag: 'Blockchain Healthcare',
      icon: Blocks,
      repo: 'https://github.com/sravanakkaladevi/AN-APPLICATION-FOR-TRACKING-ORGAN-DONATION-IN-HOSPITALS-USING-BLOCKCHAIN',
      tech: 'Django, Web3, Ganache, Smart Contracts',
      description:
        'Blockchain-powered hospital organ donation workflow platform built using Django, Web3, Ganache, smart contracts, and admin dashboards.',
    },
    {
      title: 'Online Library Management System',
      tag: 'Full Stack App',
      icon: Workflow,
      repo: 'https://github.com/sravanakkaladevi/online-library-management-system',
      tech: 'PHP, MySQL, JavaScript',
      description:
        'Full-stack library management system for book inventory, issue, return workflows, role-based authentication, and efficient data handling.',
    },
    {
      title: 'Crime Rate Prediction Analysis',
      tag: 'Machine Learning',
      icon: BrainCircuit,
      repo: 'https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project',
      tech: 'Python, Django, Scikit-learn',
      description:
        'Django-based application to analyze crime datasets with K-Means clustering, preprocessing, feature engineering, and visualizations.',
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="relative mx-auto max-w-[1500px]">
        <SectionIntro
          label="Featured Projects"
          title="GitHub projects built across web, blockchain, and machine learning."
          muted="These repositories show practical academic and self-built systems: frontend experiments, Django apps, MySQL workflows, and data analysis."
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <RevealCard key={project.title} delay={index * 0.12} className="group min-h-[390px]">
                <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_15%,rgba(222,219,200,0.18),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/65">
                      {project.tag}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-normal leading-none text-primary md:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-primary/45">{project.tech}</p>
                  <p className="mt-5 text-sm leading-relaxed text-gray-400">{project.description}</p>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-10 text-sm text-primary"
                  >
                    Open GitHub repo
                    <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  {'preview' in project && project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-primary/70 transition-colors duration-300 hover:text-primary"
                    >
                      Live preview
                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </a>
                  )}
                </div>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const skills = [
    { name: 'Java', icon: Coffee },
    { name: 'Python', icon: Code2 },
    { name: 'HTML', icon: Braces },
    { name: 'CSS', icon: Wind },
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Sparkles },
    { name: 'TypeScript', icon: Braces },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'Framer Motion', icon: Sparkles },
    { name: 'GSAP', icon: Workflow },
    { name: 'Django', icon: Server },
    { name: 'PHP', icon: Terminal },
    { name: 'Scikit-learn', icon: BrainCircuit },
    { name: 'Pandas', icon: Database },
    { name: 'NumPy', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'GitHub', icon: Github },
    { name: 'Linux', icon: Terminal },
  ];

  return (
    <section id="stack" className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionIntro
          label="Skills / Tech Stack"
          title="Technical skills from frontend development to machine learning."
          muted="A practical stack from the resume: programming, web, backend, ML, database, and development tools."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
            <motion.div
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-primary/80 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-primary/45 hover:bg-primary/10 hover:text-primary sm:px-5"
              initial={{ y: 18, opacity: 0, scale: 0.96 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{
                duration: 0.5,
                delay: index * 0.025,
                ease: customEase,
              }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-3.5 w-3.5" />
              </span>
              {skill.name}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    ['MCA Journey', "Master of Computer Applications at Aurora's PG College, Hyderabad, pursuing from 2024 to 2026."],
    ['AI/ML Virtual Intern', 'Microsoft & AICTE virtual internship through Edunet Foundation from Apr 2025 to May 2025. Built a loan prediction model using Python, Pandas, NumPy, and Scikit-learn.'],
    ['Frontend Web Development Intern', 'AICTE & Edunet Foundation remote internship from Aug 2025 to Sept 2025. Developed responsive interfaces with HTML, CSS, and JavaScript.'],
    ['Blockchain Project Development', 'Building an organ donation tracking workflow with Django, Web3, Ganache, smart contracts, and admin dashboards.'],
    ['Full Stack Learning Phase', 'Connecting frontend craft with backend systems, MySQL databases, Git, GitHub, APIs, and deployment workflows.'],
  ];

  return (
    <section id="experience" className="relative scroll-mt-6 bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="relative mx-auto max-w-5xl">
        <SectionIntro
          label="Experience Timeline"
          title="Education, internships, and project development path."
          muted="Structured from the resume data: MCA education, AI/ML internship, frontend internship, and academic project builds."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/35 to-primary/0 sm:left-1/2" />
          {items.map(([title, text], index) => (
            <motion.div
              key={title}
              className={`relative mb-8 flex sm:mb-10 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: customEase }}
            >
              <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_24px_rgba(222,219,200,0.9)] sm:left-1/2" />
              <div className={`ml-10 w-[calc(100%-2.5rem)] rounded-[1.25rem] border border-white/10 bg-[#101010]/85 p-5 backdrop-blur-xl sm:ml-0 sm:w-[44%] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                <span className="text-xs text-primary/45">0{index + 1}</span>
                <h3 className="mt-3 text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative min-h-[72vh] overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(222,219,200,0.16),transparent_36%)]" />
      <div className="floating-particles absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex min-h-[52vh] max-w-5xl flex-col items-center justify-center text-center">
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.35em] text-primary/55"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          Final CTA
        </motion.p>
        <WordsPullUp className="justify-center text-4xl font-normal leading-[0.95] text-primary sm:text-6xl md:text-7xl lg:text-8xl" text="Let's create useful digital systems." />
        <motion.p
          className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: customEase }}
        >
          Open to internships, frontend development roles, AI/ML projects, Django applications, and practical full-stack engineering opportunities.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.32, ease: customEase }}
        >
          <MagneticButton href={githubUrl} variant="ghost" icon={<Github className="h-4 w-4" />}>
            GitHub
          </MagneticButton>
          <MagneticButton href={linkedInUrl} variant="ghost" icon={<Linkedin className="h-4 w-4" />}>
            LinkedIn
          </MagneticButton>
          <MagneticButton href={`mailto:${email}`} icon={<Mail className="h-4 w-4" />}>
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, muted }: { label: string; title: string; muted: string }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
      <motion.p
        className="mb-4 text-xs uppercase tracking-[0.32em] text-primary/55"
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: customEase }}
      >
        {label}
      </motion.p>
      <WordsPullUp className="justify-center text-3xl font-normal leading-tight text-primary sm:text-4xl md:text-5xl" text={title} />
      <motion.p
        className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
      >
        {muted}
      </motion.p>
    </div>
  );
}

function RevealCard({ children, delay, className = '' }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.article
      className={`glass-card relative overflow-hidden rounded-[1.5rem] p-5 transition-transform duration-500 hover:-translate-y-2 sm:p-6 ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.55, delay, ease: customEase }}
    >
      {children}
    </motion.article>
  );
}

export default function App() {
  return (
    <main className="relative overflow-hidden bg-black" style={{ color: primaryText }}>
      <ScrollProgress />
      <AmbientLayers />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
