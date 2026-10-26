
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";

const linkedinUrl = "https://www.linkedin.com/in/wycliffe-m-6a60991a8/";
const githubUrl = "https://github.com/"; // Replace with your GitHub profile URL.

const projectData = {
  engineering: [
    {
      title: "Automation Solution",
      description:
        "Describe a repetitive task you automated, the approach you took, and how the solution improved the workflow.",
      tools: ["JavaScript", "Python", "RPA"],
      link: "",
      linkLabel: "Add project link",
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Showcase a web application with a React interface and, if used, a Node.js/Express backend and database.",
      tools: ["React.js", "Node.js", "Express.js", "APIs"],
      link: "",
      linkLabel: "Add project link",
    },
    {
      title: "AI or Data Project",
      description:
        "Explain the problem, the data or model you worked with, and what you learned or achieved.",
      tools: ["Python", "AI / ML", "Data"],
      link: "",
      linkLabel: "Add project link",
    },
  ],
  disaster: [
    {
      title: "Community Resilience Research",
      description:
        "Present research on community-based disaster preparedness, local capacity, and resilience strategies.",
      tools: ["Research", "Risk Reduction"],
      link: "",
      linkLabel: "Add research link",
    },
    {
      title: "Disaster Preparedness Plan",
      description:
        "Showcase a preparedness plan, hazard assessment, early-warning concept, or emergency communication resource.",
      tools: ["Preparedness", "Risk Assessment"],
      link: "",
      linkLabel: "Add project link",
    },
  ],
  writing: [
    {
      title: "B2B SaaS Website Copy",
      description:
        "Show how you would communicate a technology product's value to a clearly defined business audience.",
      tools: ["B2B", "SaaS", "Website Copy"],
      link: "",
      linkLabel: "Add writing sample",
    },
    {
      title: "Technology Article or Thought Leadership",
      description:
        "Feature an article or ghostwriting sample that makes a complex technical subject easier to understand.",
      tools: ["Research", "Ghostwriting", "Tech Content"],
      link: "",
      linkLabel: "Add writing sample",
    },
  ],
};

const engineeringSkills = [
  "JavaScript", "React.js", "Node.js", "Express.js", "Python", "C#", "C++",
  "REST APIs", "AI / Machine Learning", "Automation & RPA", "Cloud & CRM",
  "MySQL / NoSQL", "Big Data", "MLOps",
];

const disasterSkills = [
  "Disaster Risk Assessment", "Preparedness Planning", "Risk Reduction",
  "Early Warning Systems", "Community Resilience", "Emergency Communication",
  "Incident Reporting", "Stakeholder Engagement",
];

const writingSkills = [
  "B2B Tech Copywriting", "SaaS Copywriting", "Website Copy",
  "Ghostwriting", "Thought Leadership", "Blog Articles",
  "Content Strategy", "Technical Content",
];

function Header() {
  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Wycliffe Masita home">
        WM<span>.</span>
      </Link>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/engineering">Engineering</NavLink>
        <NavLink to="/disaster-management">Disaster Management</NavLink>
        <NavLink to="/copywriting">Copywriting</NavLink>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SkillTags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectGrid({ items }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-mark" aria-hidden="true">↗</div>

          <div className="project-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {project.link ? (
            <a
              className="text-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-placeholder">
              {project.linkLabel} in App.jsx
            </span>
          )}
        </article>
      ))}
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero code-bg">
        <div className="hero-content">
          <span className="eyebrow">
            ENGINEERING · RESILIENCE · COMMUNICATION
          </span>

          <h1>
            Building technology.
            <br />
            Strengthening communities.
            <br />
            <span>Communicating ideas.</span>
          </h1>

          <p className="lead">
            I'm Wycliffe Masita — a Software Engineer, Disaster Management
            professional, and B2B Tech/SaaS Copywriter and Ghostwriter. I bring
            technology, risk awareness, and clear communication together to
            solve meaningful problems.
          </p>

          <div className="actions">
            <Link className="button" to="/engineering">
              Explore my work <span>↗</span>
            </Link>

            <a
              className="button secondary"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            Open to meaningful projects and opportunities
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">WM<span>.</span></div>
          <div className="orbit-label label-code">{"</>"}</div>
          <div className="orbit-label label-risk">◎</div>
          <div className="orbit-label label-write">Aa</div>
        </div>
      </section>

      <section className="home-pillars content-section">
        <SectionHeading
          eyebrow="THREE DISCIPLINES · ONE PURPOSE"
          title="Different skills. Shared impact."
          description="I enjoy working at the intersection of practical technology, safer communities, and clear communication."
        />

        <div className="pillar-grid">
          <Link className="pillar-card" to="/engineering">
            <span className="pillar-number">01 / BUILD</span>
            <h3>Software Engineering</h3>
            <p>
              Developing applications, automation, and digital solutions that
              address real needs.
            </p>
            <span className="card-arrow">Explore engineering ↗</span>
          </Link>

          <Link className="pillar-card" to="/disaster-management">
            <span className="pillar-number">02 / PREPARE</span>
            <h3>Disaster Management</h3>
            <p>
              Supporting risk awareness, preparedness, and community-centred
              resilience.
            </p>
            <span className="card-arrow">
              Explore disaster management ↗
            </span>
          </Link>

          <Link className="pillar-card" to="/copywriting">
            <span className="pillar-number">03 / COMMUNICATE</span>
            <h3>B2B Tech & SaaS Writing</h3>
            <p>
              Making complex products and ideas clear, useful, and relevant to
              their audience.
            </p>
            <span className="card-arrow">Explore writing ↗</span>
          </Link>
        </div>
      </section>

      <section className="closing-band">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Have an idea, project, or opportunity in mind?</h2>
        <p>
          I'm always interested in work that solves problems and creates
          meaningful value.
        </p>
        <a
          className="button"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get in touch ↗
        </a>
      </section>
    </main>
  );
}

function Engineering() {
  return (
    <main className="page code-bg">
      <section className="page-intro">
        <span className="eyebrow">01 — SOFTWARE ENGINEERING</span>
        <h1>Turning ideas into <span>working solutions.</span></h1>
        <p className="lead">
          I enjoy solving problems through software, building practical digital
          products, and finding ways to make systems more useful, efficient,
          and scalable.
        </p>
      </section>

      <section className="content-section">
        <SectionHeading
          title="Technical toolkit"
          description="Technologies and areas I work with or am developing my expertise in."
        />
        <SkillTags items={engineeringSkills} />
        <p className="honesty-note">
          Keep this list aligned with the technologies you can confidently
          discuss and demonstrate.
        </p>
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Engineering projects"
          description="Replace these prompts with your real projects, repositories, demos, and measurable outcomes."
        />
        <ProjectGrid items={projectData.engineering} />
      </section>

      <section className="content-section two-column">
        <div>
          <SectionHeading title="How I approach engineering" />
        </div>
        <div className="plain-copy">
          <p>
            <strong>Understand the problem.</strong> Clarify the user's needs
            before choosing a technical solution.
          </p>
          <p>
            <strong>Build with care.</strong> Aim for readable, maintainable
            code and thoughtful user experiences.
          </p>
          <p>
            <strong>Keep improving.</strong> Test, learn, and refine solutions
            as requirements evolve.
          </p>
        </div>
      </section>
    </main>
  );
}

function DisasterManagement() {
  return (
    <main className="page disaster-bg">
      <section className="page-intro">
        <span className="eyebrow">02 — DISASTER MANAGEMENT</span>
        <h1>Helping communities <span>prepare, respond, and recover.</span></h1>
        <p className="lead">
          My interest in Disaster and Risk Management centres on reducing
          vulnerability, strengthening preparedness, and supporting
          community-led approaches to resilience.
        </p>
      </section>

      <section className="content-section">
        <SectionHeading
          title="Areas of focus"
          description="Adapt these areas to your actual training, experience, and project work."
        />
        <SkillTags items={disasterSkills} />
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="RESEARCH & PRACTICE"
          title="Disaster management projects"
          description="Showcase research, reports, preparedness plans, risk assessments, or community initiatives."
        />
        <ProjectGrid items={projectData.disaster} />
      </section>

      <section className="impact-panel">
        <span className="eyebrow">THE GOAL</span>
        <h2>
          Preparedness works best when people and communities are part of the
          solution.
        </h2>
        <p>
          Use this space to describe your approach, relevant field experience,
          research, or community engagement.
        </p>
      </section>
    </main>
  );
}

function Copywriting() {
  return (
    <main className="page writing-bg">
      <section className="page-intro">
        <span className="eyebrow">03 — B2B TECH / SAAS COPYWRITING</span>
        <h1>Making complex ideas <span>clear and compelling.</span></h1>
        <p className="lead">
          I help technology businesses explain what they do, communicate their
          value, and connect with the right audiences through useful, engaging,
          and audience-focused content.
        </p>
      </section>

      <section className="content-section">
        <SectionHeading
          title="Writing services"
          description="A selection of formats you can offer, depending on your experience and strengths."
        />
        <SkillTags items={writingSkills} />
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="SELECTED WRITING"
          title="Copywriting & ghostwriting projects"
          description="Add links to published work or samples you have permission to share."
        />
        <ProjectGrid items={projectData.writing} />
      </section>

      <section className="impact-panel writing-panel">
        <span className="eyebrow">MY APPROACH</span>
        <h2>Good writing helps people understand why a product matters.</h2>
        <p>
          I combine research, clear thinking, and an understanding of technology
          to make messages easier to follow and act on.
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/">WM<span>.</span></Link>
        <p>Technology, resilience, and communication for meaningful impact.</p>
      </div>

      <div className="footer-links">
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Wycliffe Masita. All rights reserved.
      </p>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="page not-found">
      <span className="eyebrow">404 — PAGE NOT FOUND</span>
      <h1>This page seems to have wandered off.</h1>
      <Link className="button" to="/">Return home</Link>
    </main>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route
          path="/disaster-management"
          element={<DisasterManagement />}
        />
        <Route path="/copywriting" element={<Copywriting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
