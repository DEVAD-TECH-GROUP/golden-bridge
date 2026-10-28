import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  CircuitBoard,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Globe2,
  Lightbulb,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Designing, building and maintaining websites, web applications, APIs and software systems that solve practical problems.",
    tags: ["Frontend & Backend", "Web Applications", "APIs"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating mobile applications for smartphones and tablets to deliver useful services, improve accessibility and connect users with digital platforms.",
    tags: ["Android Apps", "Mobile UI/UX", "App Integration"],
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Data Analytics & Dashboards",
    description:
      "Transforming raw data into meaningful insights through data analysis, interactive dashboards, visual reports and business intelligence.",
    tags: ["Power BI", "Data Visualization", "Business Intelligence"],
  },
  {
    number: "04",
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Exploring AI models, intelligent applications and AI-enabled computing to support automation, prediction, research and decision-making.",
    tags: ["Machine Learning", "AI Applications", "Intelligent Systems"],
  },
  {
    number: "05",
    icon: CircuitBoard,
    title: "Embedded Systems & IoT",
    description:
      "Developing systems that combine microcontrollers, electronic components, sensors and software to monitor environments and control physical devices.",
    tags: ["Arduino & ESP32", "Sensors & Actuators", "IoT Automation"],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Understanding digital threats and developing safer systems through security awareness, access control, vulnerability assessment and data protection.",
    tags: ["Network Security", "Threat Awareness", "Data Protection"],
  },
  {
    number: "07",
    icon: CloudCog,
    title: "Cloud & Digital Infrastructure",
    description:
      "Exploring cloud platforms, servers, deployment environments, backups and reliable infrastructure for modern digital services.",
    tags: ["Cloud Computing", "Deployment", "System Reliability"],
  },
  {
    number: "08",
    icon: Workflow,
    title: "Digital Transformation & Automation",
    description:
      "Helping organizations improve their operations by digitizing processes, connecting tools and automating repetitive tasks.",
    tags: ["Workflow Automation", "Digital Processes", "Integration"],
  },
];

const visualConcepts = [
  {
    title: "Software Development",
    subtitle: "CODE • BUILD • DEPLOY",
    icon: Code2,
    number: "01",
  },
  {
    title: "Cybersecurity",
    subtitle: "PROTECT • DETECT • DEFEND",
    icon: ShieldCheck,
    number: "02",
  },
  {
    title: "Embedded Systems & IoT",
    subtitle: "SENSORS • ESP32 • AUTOMATION",
    icon: CircuitBoard,
    number: "03",
  },
  {
    title: "Data Analytics",
    subtitle: "DATA • INSIGHTS • DASHBOARDS",
    icon: ChartNoAxesCombined,
    number: "04",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "AI • MACHINE LEARNING",
    icon: Cpu,
    number: "05",
  },
  {
    title: "Mobile Applications",
    subtitle: "ANDROID • MOBILE EXPERIENCES",
    icon: Smartphone,
    number: "06",
  },
  {
    title: "Cloud Computing",
    subtitle: "SERVERS • CLOUD • DEPLOYMENT",
    icon: CloudCog,
    number: "07",
  },
  {
    title: "Digital Automation",
    subtitle: "WORKFLOWS • INTEGRATION",
    icon: Workflow,
    number: "08",
  },
];

const solutionAreas = [
  {
    icon: MonitorSmartphone,
    title: "Websites, Mobile Apps & Digital Platforms",
    description:
      "Digital experiences that help organizations communicate, provide services, manage information and connect with their audiences.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data & Business Intelligence Solutions",
    description:
      "Interactive dashboards, analytical reports and data-driven tools that help organizations understand performance and make informed decisions.",
  },
  {
    icon: CircuitBoard,
    title: "Embedded & Connected Systems",
    description:
      "Technology solutions combining microcontrollers, sensors, electronic hardware and software to monitor and control real-world environments.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Digital Systems",
    description:
      "Security-conscious applications, infrastructure and practices designed to protect information, reduce risks and improve system reliability.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Applications",
    description:
      "Practical applications of artificial intelligence to support research, automate tasks, discover patterns and solve complex problems.",
  },
  {
    icon: Network,
    title: "Integrated Business Systems",
    description:
      "Connected platforms, APIs and workflows that allow digital tools and organizational systems to work together more effectively.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Identify the problem, understand the people affected and define the outcome a technology solution should support.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description:
      "Explore suitable approaches, design the solution, develop the necessary components and test them against the identified need.",
  },
  {
    number: "03",
    title: "Secure & Test",
    description:
      "Evaluate functionality, check reliability, consider security risks and improve the solution before deployment.",
  },
  {
    number: "04",
    title: "Deploy & Improve",
    description:
      "Put the solution into use, assess its performance, gather feedback and identify opportunities for continuous improvement.",
  },
];

const connections = [
  {
    number: "01",
    title: "Education & Skills",
    description:
      "Learning platforms, educational technology and digital skills",
  },
  {
    number: "02",
    title: "Agriculture & Food",
    description: "Smart agriculture, environmental sensors and automation",
  },
  {
    number: "03",
    title: "Health & Nutrition",
    description: "Digital information systems and health data tools",
  },
  {
    number: "04",
    title: "Research, Data & Intelligence",
    description: "Analytics, visualization, reporting and decision support",
  },
  {
    number: "05",
    title: "Business & Enterprise",
    description:
      "Business applications, process automation and digital services",
  },
];

export default function TechnologyDigital() {
  return (
    <main className="technology-page">
      {/* HERO */}
      <section className="technology-hero">
        <div className="technology-hero-grid" aria-hidden="true" />
        <div className="technology-hero-glow" aria-hidden="true" />

        <div className="container technology-hero-inner">
          <div className="technology-hero-copy">
            <nav className="technology-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/departments">Departments</Link>
              <span>/</span>
              <span>Technology & Digital</span>
            </nav>

            <span className="technology-eyebrow">
              <span className="technology-eyebrow-line" />
              GBC DEPARTMENT 01
            </span>

            <h1>
              Technology
              <br />
              <span>& Digital.</span>
            </h1>

            <p className="technology-hero-lead">
              Turning ideas into digital solutions. Connecting technology with
              people, organizations and the challenges that matter.
            </p>

            <p className="technology-hero-description">
              The Technology & Digital department explores software development,
              mobile applications, data analytics, artificial intelligence,
              embedded systems, cybersecurity and digital innovation to create
              practical solutions across the GBC ecosystem.
            </p>

            <div className="technology-hero-actions">
              <a
                href="#technology-focus"
                className="technology-btn technology-btn-primary"
              >
                Explore Our Focus Areas
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="technology-btn technology-btn-secondary"
              >
                Discuss an Idea
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="technology-hero-footnote">
              <CheckCircle2 size={16} />
              <span>Technology with purpose. Innovation with impact.</span>
            </div>
          </div>

          {/* ANIMATED DIGITAL ECOSYSTEM */}
          <div
            className="technology-visual"
            aria-label="Animated digital technology concepts"
          >
            <div className="technology-visual-topline">
              <span>
                <span className="technology-live-dot" />
                DIGITAL ECOSYSTEM
              </span>
              <span>GBC / TECH</span>
            </div>

            <div className="technology-visual-canvas">
              <div className="technology-orb technology-orb-gold" />
              <div className="technology-orb technology-orb-blue" />

              <div className="technology-visual-ring ring-one" />
              <div className="technology-visual-ring ring-two" />
              <div className="technology-visual-ring ring-three" />

              <div className="technology-visual-line line-one" />
              <div className="technology-visual-line line-two" />
              <div className="technology-visual-line line-three" />
              <div className="technology-visual-line line-four" />

              <div className="technology-central-node">
                <div className="technology-central-icon">
                  <Code2 size={34} strokeWidth={1.5} />
                </div>
                <span>DEV / TECH</span>
                <small>IDEAS INTO SOLUTIONS</small>
              </div>

              <div className="technology-concept-window" aria-hidden="true">
                {visualConcepts.map((concept, index) => {
                  const Icon = concept.icon;

                  return (
                    <div
                      className="technology-concept"
                      key={concept.number}
                      style={{
                        "--concept-delay": `${index * 3}s`,
                      }}
                    >
                      <div className="technology-concept-card">
                        <div className="technology-concept-icon">
                          <Icon size={30} strokeWidth={1.6} />
                        </div>

                        <div className="technology-concept-copy">
                          <span className="technology-concept-number">
                            CONCEPT / {concept.number}
                          </span>

                          <h3>{concept.title}</h3>

                          <p>{concept.subtitle}</p>
                        </div>

                        <ArrowUpRight
                          className="technology-concept-arrow"
                          size={21}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <span className="technology-orbit-label orbit-label-top">
                SYSTEM ONLINE
              </span>

              <span className="technology-orbit-label orbit-label-bottom">
                CONNECTED INTELLIGENCE
              </span>

              <span className="technology-orbit-dot orbit-dot-one" />
              <span className="technology-orbit-dot orbit-dot-two" />
              <span className="technology-orbit-dot orbit-dot-three" />
            </div>

            <div className="technology-visual-footer">
              <span>BUILD</span>
              <span className="technology-visual-divider" />
              <span>CONNECT</span>
              <span className="technology-visual-divider" />
              <span>INNOVATE</span>
            </div>
          </div>
        </div>

        <a
          href="#technology-overview"
          className="technology-scroll-cue"
          aria-label="Scroll to department overview"
        >
          <span>DISCOVER THE DEPARTMENT</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* DEPARTMENT OVERVIEW */}
      <section className="technology-overview" id="technology-overview">
        <div className="container technology-overview-grid">
          <div className="technology-overview-heading">
            <span className="technology-section-label">
              ABOUT THE DEPARTMENT
            </span>

            <h2>
              Technology is more than tools.
              <span> It is a way to solve problems.</span>
            </h2>
          </div>

          <div className="technology-overview-content">
            <p>
              At Golden Bridge Concept, Technology & Digital focuses on how
              software, hardware, data and connected systems can help people and
              organizations work smarter, communicate better and respond to
              changing needs.
            </p>

            <p>
              Our interests span web and mobile development, business
              intelligence, artificial intelligence, embedded electronics,
              Internet of Things, cybersecurity and digital infrastructure. Each
              area offers different ways to address practical challenges.
            </p>

            <p>
              We also explore how technology can support other sectors,
              including business, education, agriculture, healthcare, research
              and community development. Our approach begins with understanding
              the problem and choosing technology according to the need.
            </p>

            <Link to="/departments" className="technology-text-link">
              Explore the GBC ecosystem
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="technology-focus" id="technology-focus">
        <div className="container">
          <div className="technology-section-heading">
            <div>
              <span className="technology-section-label">
                OUR AREAS OF FOCUS
              </span>

              <h2>
                Where technology
                <span> meets possibility.</span>
              </h2>

              <p>
                Explore the fields and capabilities within the Technology &
                Digital department.
              </p>
            </div>

            <span className="technology-section-index">
              01 <span>/ 08</span>
            </span>
          </div>

          <div className="technology-focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="technology-focus-card" key={area.number}>
                  <div className="technology-focus-card-top">
                    <span className="technology-focus-number">
                      {area.number}
                    </span>

                    <span className="technology-focus-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <div className="technology-tags">
                    {area.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="technology-solutions">
        <div className="container">
          <div className="technology-section-heading">
            <div>
              <span className="technology-section-label">
                FROM IDEAS TO APPLICATION
              </span>

              <h2>
                Technology that
                <span> serves a purpose.</span>
              </h2>

              <p>
                Potential solution areas where digital thinking can support real
                needs across the GBC ecosystem.
              </p>
            </div>
          </div>

          <div className="technology-solutions-grid">
            {solutionAreas.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  className="technology-solution-card"
                  key={solution.title}
                >
                  <div className="technology-solution-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>

                  <span className="technology-solution-mark">
                    <ArrowUpRight size={18} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKING APPROACH */}
      <section className="technology-process">
        <div className="container">
          <div className="technology-section-heading">
            <div>
              <span className="technology-section-label">OUR APPROACH</span>

              <h2>
                Start with the problem.
                <span> Build with purpose.</span>
              </h2>

              <p>
                A practical framework for exploring, developing and improving
                technology-led ideas.
              </p>
            </div>
          </div>

          <div className="technology-process-grid">
            {processSteps.map((step) => (
              <article className="technology-process-step" key={step.number}>
                <span className="technology-process-number">{step.number}</span>

                <div className="technology-process-line" />

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-DEPARTMENT CONNECTIONS */}
      <section className="technology-connections">
        <div className="container technology-connections-inner">
          <div className="technology-connections-copy">
            <span className="technology-section-label">
              CONNECTED ACROSS GBC
            </span>

            <h2>
              Technology creates more value
              <span> when sectors work together.</span>
            </h2>

            <p>
              Digital tools can support many fields. The Technology & Digital
              department can explore cross-sector ideas with other GBC
              departments to identify useful, connected solutions.
            </p>

            <Link
              to="/departments"
              className="technology-btn technology-btn-secondary"
            >
              Explore Other Departments
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="technology-connection-list">
            {connections.map((connection) => (
              <div key={connection.number}>
                <span className="technology-connection-index">
                  {connection.number}
                </span>

                <span className="technology-connection-title">
                  {connection.title}
                </span>

                <span className="technology-connection-detail">
                  {connection.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="technology-cta">
        <div className="container">
          <div className="technology-cta-inner">
            <div className="technology-cta-symbol">
              <Lightbulb size={30} strokeWidth={1.5} />
            </div>

            <div className="technology-cta-copy">
              <span className="technology-section-label">
                HAVE A TECHNOLOGY IDEA?
              </span>

              <h2>Let's explore what we can build together.</h2>

              <p>
                Have a digital concept, a problem to solve or an idea worth
                exploring? Start a conversation with GBC.
              </p>
            </div>

            <Link
              to="/contact"
              className="technology-btn technology-btn-primary"
            >
              Contact GBC
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
