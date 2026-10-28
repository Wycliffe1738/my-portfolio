import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import "./App.css";

const linkedinUrl = "https://www.linkedin.com/in/wycliffe-m-6a60991a8/";
const githubUrl = "https://github.com/Wycliffe1738";

const phoneNumber = "+254712380466";
const emailAddress = "masitawycliffe.cy4@gmail.com";

const engineeringDriveUrl =
  "https://drive.google.com/drive/folders/1QLbWFF3IUk1NpcKNqfVUUNT9oQ2KYTsg";

const engineeringResumeUrl =
  "https://drive.google.com/file/d/1tt3V5gGjZoG7IbHwxeBQiHqaD4-Hd9V2/view?usp=sharing";

const disasterDriveUrl =
  "https://drive.google.com/file/d/1bNrWGIHad_8xVI7KZ_HuaixAgJpRKFcP/view?usp=drive_link";

const projectData = {
  engineering: [
    {
      title: "Eloquence Portfolio Website",
      description:
        "A portfolio concept showcasing my interests in technology, digital growth, automation, and communication.",
      tools: ["HTML", "CSS", "JavaScript", "JSON"],
      link: "https://wycliffe1738.github.io/ELO-QUENCE.COM/",
      linkLabel: "View project",
    },
    {
      title: "Weather Alerts Application",
      description:
        "A JavaScript application that retrieves weather alerts from the National Weather Service API.",
      tools: ["JavaScript", "Fetch API", "Async"],
      link: "",
      linkLabel: "Add project link",
    },
    {
      title: "Async/Await API Lab",
      description:
        "A practice project using asynchronous JavaScript to retrieve and display data from an API.",
      tools: ["JavaScript", "Async/Await", "API"],
      link: "",
      linkLabel: "Add project link",
    },
  ],

  disaster: [
    {
      title: "Community Resilience Research",
      description:
        "Add a summary of your research on community-based disaster preparedness, local capacity, and resilience strategies.",
      tools: ["Research", "Risk Reduction"],
      link: "",
      linkLabel: "Add research link",
    },
    {
      title: "Disaster Preparedness Plan",
      description:
        "Add a summary of a preparedness plan, hazard assessment, early-warning concept, or emergency communication resource.",
      tools: ["Preparedness", "Risk Assessment"],
      link: "",
      linkLabel: "Add project link",
    },
  ],

  writing: [
    {
      title: "B2B SaaS Website Copy",
      description:
        "Upload or link a sample that demonstrates how you communicate a technology product's value to a business audience.",
      tools: ["B2B", "SaaS", "Website Copy"],
      link: "",
      linkLabel: "Add writing sample",
    },
    {
      title: "Technology Article or Thought Leadership",
      description:
        "Upload or link an article or ghostwriting sample that makes a complex technical subject easier to understand.",
      tools: ["Research", "Ghostwriting", "Tech Content"],
      link: "",
      linkLabel: "Add writing sample",
    },
  ],
};

const engineeringSkills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Python",
  "C#",
  "C++",
  "REST APIs",
  "AI / Machine Learning",
  "Automation & RPA",
  "Cloud & CRM",
  "MySQL / NoSQL",
  "Big Data",
  "MLOps",
];

const disasterSkills = [
  "Disaster Risk Assessment",
  "Preparedness Planning",
  "Risk Reduction",
  "Early Warning Systems",
  "Community Resilience",
  "Emergency Communication",
  "Incident Reporting",
  "Stakeholder Engagement",
];

const writingSkills = [
  "B2B Tech Copywriting",
  "SaaS Copywriting",
  "Website Copy",
  "Ghostwriting",
  "Thought Leadership",
  "Blog Articles",
  "Content Strategy",
  "Technical Content",
];

function Header() {
  return (
    <header className="navbar">
      <Link
        className="brand"
        to="/"
        aria-label="Return to Wycliffe Masita's portfolio home"
        style={{
          fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
          letterSpacing: "0",
          lineHeight: "1.4",
        }}
      >
        Hi, Welcome to my portfolio.
      </Link>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/engineering">Engineering</NavLink>

        <NavLink to="/disaster-management">
          Disaster Management
        </NavLink>

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
          <div className="project-mark" aria-hidden="true">
            ↗
          </div>

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
              {project.linkLabel || "View project"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-placeholder">
              {project.linkLabel} — add a link in App.jsx
            </span>
          )}
        </article>
      ))}
    </div>
  );
}

function ResumeButton({ href }) {
  return (
    <div className="actions">
      <a
        className="button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        View my resume
      </a>
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
            I’m Wycliffe masita
            <br />
            <span>Full-Stack Software Engineer.</span>
          </h1>

          <p className="lead">
            I’m Wycliffe Masita, a full-stack software engineer driven by
            the intersection of robust technology, crisis resilience, and
            strategic communication. My technical practice focuses on
            architecting end-to-end software solutions, backed by a deep
            interest in disaster management and systems resilience. Beyond
            writing code, I specialize in B2B tech and SaaS copywriting and
            ghostwriting—translating complex engineering concepts, technical
            architectures, and product capabilities into clear, persuasive
            narratives for decision-makers and founders. By synthesizing
            engineering rigor, risk awareness, and high-impact messaging,
            I bridge the gap between complex tech and real-world impact to
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

        <div
          className="hero-orbit"
          aria-label="Software engineering, resilience, and communication"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="orbit-core">{"</>"}</div>

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
              Developing applications, automation, and digital solutions
              that address real needs.
            </p>

            <span className="card-arrow">
              Explore engineering ↗
            </span>
          </Link>

          <Link className="pillar-card" to="/disaster-management">
            <span className="pillar-number">02 / PREPARE</span>

            <h3>Disaster Management</h3>

            <p>
              Supporting risk awareness, preparedness, and
              community-centred resilience.
            </p>

            <span className="card-arrow">
              Explore disaster management ↗
            </span>
          </Link>

          <Link className="pillar-card" to="/copywriting">
            <span className="pillar-number">03 / COMMUNICATE</span>

            <h3>B2B Tech & SaaS Writing</h3>

            <p>
              Making complex products and ideas clear, useful, and
              relevant to their audience.
            </p>

            <span className="card-arrow">
              Explore writing ↗
            </span>
          </Link>
        </div>
      </section>

      <section className="closing-band">
        <span className="eyebrow">LET'S CONNECT</span>

        <h2>Have an idea, project, or opportunity in mind?</h2>

        <p>
          I'm interested in work that solves problems and creates
          meaningful value.
        </p>

        <a className="button" href={`mailto:${emailAddress}`}>
          Let's talk ↗
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

        <h1>
          Turning ideas into <span>working solutions.</span>
        </h1>

        <p className="lead">
          I enjoy solving problems through software, building practical
          digital products, and finding ways to make systems more useful,
          efficient, and scalable.
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
          description="A few learning projects and portfolio work. Add links to repositories or live demos as they become available."
        />

        <ProjectGrid items={projectData.engineering} />
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="PROFESSIONAL DOCUMENTS"
          title="Software engineering documents"
          description="View my software engineering resume using the button below."
        />

        <ResumeButton href={engineeringResumeUrl} />
      </section>

      <section className="content-section two-column">
        <div>
          <SectionHeading title="How I approach engineering" />
        </div>

        <div className="plain-copy">
          <p>
            <strong>Understand the problem.</strong> Clarify the user's
            needs before choosing a technical solution.
          </p>

          <p>
            <strong>Build with care.</strong> Aim for readable,
            maintainable code and thoughtful user experiences.
          </p>

          <p>
            <strong>Keep improving.</strong> Test, learn, and refine
            solutions as requirements evolve.
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

        <h1>
          Helping communities{" "}
          <span>prepare, respond, and recover.</span>
        </h1>

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

      <section className="content-section">
        <SectionHeading
          eyebrow="PROFESSIONAL DOCUMENTS"
          title="Disaster management documents"
          description="Open my Disaster Management Google Drive folder to view my professional documents."
        />

        <ResumeButton href={disasterDriveUrl} />
      </section>

      <section className="impact-panel">
        <span className="eyebrow">THE GOAL</span>

        <h2>
          Preparedness works best when people and communities are part
          of the solution.
        </h2>

        <p>
          Use this space to describe your approach, relevant field
          experience, research, or community engagement.
        </p>
      </section>
    </main>
  );
}

function Copywriting() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleFileChange(event) {
    setSelectedFiles(Array.from(event.target.files || []));
  }

  return (
    <main className="page writing-bg">
      <section className="page-intro">
        <span className="eyebrow">03 — B2B TECH / SAAS COPYWRITING</span>

        <h1>
          Making complex ideas <span>clear and compelling.</span>
        </h1>

        <p className="lead">
          I help technology businesses explain what they do, communicate
          their value, and connect with the right audiences through useful,
          engaging, audience-focused content.
        </p>
      </section>

      <section className="content-section">
        <SectionHeading
          title="Writing services"
          description="A selection of writing formats I am developing and offering."
        />

        <SkillTags items={writingSkills} />
      </section>

      <section className="content-section">
        <SectionHeading
          eyebrow="SELECTED WRITING"
          title="Copywriting & ghostwriting portfolio"
          description="Choose writing samples from your device to preview them here. To make them available to all visitors, upload them to a public or shareable hosting location and add their links to the project cards."
        />

        <div className="upload-panel">
          <div className="upload-panel-heading">
            <span className="upload-symbol" aria-hidden="true">
              ＋
            </span>

            <div>
              <h3>Add writing samples</h3>

              <p>
                Select PDF, Word, text, or other work samples from your
                device.
              </p>
            </div>
          </div>

          <label
            className="button upload-button"
            htmlFor="writing-samples"
          >
            Choose files
          </label>

          <input
            id="writing-samples"
            className="file-input"
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt,.md"
            onChange={handleFileChange}
          />

          <p className="upload-note">
            These selections are only previewed in your current browser
            session. They are not uploaded or saved to the website.
          </p>

          {selectedFiles.length > 0 && (
            <div className="selected-files" aria-live="polite">
              <h4>Selected files</h4>

              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={`${file.name}-${index}`}>
                    <span>{file.name}</span>

                    <span>{(file.size / 1024).toFixed(1)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ProjectGrid items={projectData.writing} />
      </section>

      <section className="impact-panel writing-panel">
        <span className="eyebrow">MY APPROACH</span>

        <h2>
          Good writing helps people understand why a product matters.
        </h2>

        <p>
          I combine research, clear thinking, and an understanding of
          technology to make messages easier to follow and act on.
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/">
          W<span>.</span>
        </Link>

        <p>
          Technology, resilience, and communication for meaningful impact.
        </p>
      </div>

      <div className="footer-links">
        <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
          Let's talk: {phoneNumber}
        </a>

        <a href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>

        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>

        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <a href={engineeringDriveUrl} target="_blank" rel="noreferrer">
          Engineering documents ↗
        </a>

        <a href={disasterDriveUrl} target="_blank" rel="noreferrer">
          Disaster documents ↗
        </a>
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

      <Link className="button" to="/">
        Return home
      </Link>
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