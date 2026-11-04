import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Database,
  ChartNoAxesCombined,
  Microscope,
  BrainCircuit,
  FlaskConical,
  FileSearch,
  Globe,
  Network,
  Activity,
  ShieldCheck,
  Lightbulb,
  Target,
  Layers,
  ChevronRight,
  BarChart3,
  Users,
  BookOpen,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function ResearchData() {
  const researchAreas = [
    {
      number: "01",
      icon: <Search />,
      title: "Applied Research",
      description:
        "Investigating real-world problems, exploring possible solutions, and developing knowledge that can support meaningful decisions.",
      tags: ["Problem investigation", "Field studies", "Applied solutions"],
    },
    {
      number: "02",
      icon: <Database />,
      title: "Data Analytics",
      description:
        "Transforming raw data into understandable information through collection, preparation, analysis, and interpretation.",
      tags: ["Data preparation", "Analysis", "Reporting"],
    },
    {
      number: "03",
      icon: <ChartNoAxesCombined />,
      title: "Business Intelligence",
      description:
        "Using data, reports, and analytical tools to help organisations understand performance and make informed decisions.",
      tags: ["Performance insights", "Dashboards", "Decision support"],
    },
    {
      number: "04",
      icon: <Microscope />,
      title: "Scientific Exploration",
      description:
        "Exploring questions through observation, experimentation, testing, and systematic investigation.",
      tags: ["Observation", "Experimentation", "Testing"],
    },
    {
      number: "05",
      icon: <BrainCircuit />,
      title: "AI & Predictive Research",
      description:
        "Exploring how artificial intelligence, machine learning, and predictive methods can address practical challenges.",
      tags: ["Machine learning", "AI applications", "Prediction"],
    },
    {
      number: "06",
      icon: <Globe />,
      title: "Social & Market Research",
      description:
        "Understanding people, communities, markets, and changing needs through structured research and evidence.",
      tags: ["Surveys", "Market studies", "Community insights"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Ask",
      description:
        "Identify the problem, define the research question, and understand what needs to be discovered.",
    },
    {
      number: "02",
      title: "Investigate",
      description:
        "Gather relevant information, observe conditions, review existing knowledge, and collect data.",
    },
    {
      number: "03",
      title: "Analyse",
      description:
        "Organise, examine, test, and interpret the evidence to identify patterns and useful findings.",
    },
    {
      number: "04",
      title: "Apply",
      description:
        "Translate findings into recommendations, solutions, strategies, or opportunities for improvement.",
    },
  ];

  const capabilities = [
    {
      icon: <BarChart3 />,
      title: "Data analysis & visualisation",
      description: "Making complex information easier to understand.",
    },
    {
      icon: <FlaskConical />,
      title: "Testing & experimentation",
      description: "Examining ideas through practical investigation.",
    },
    {
      icon: <FileSearch />,
      title: "Research & documentation",
      description: "Building organised, traceable research outputs.",
    },
    {
      icon: <Network />,
      title: "Systems & pattern analysis",
      description: "Understanding relationships between different factors.",
    },
  ];

  const principles = [
    "Evidence before assumptions",
    "Questions before conclusions",
    "Accuracy in data handling",
    "Transparency in methodology",
    "Ethical and responsible research",
    "Practical value in every insight",
  ];

  return (
    <main className="research-page">
      {/* HERO */}
      <section className="research-hero">
        <div className="research-hero-grid"></div>

        <div className="research-container research-hero-inner">
          <div className="research-hero-copy">
            <div className="research-eyebrow">
              <span className="research-eyebrow-line"></span>
              GBC / RESEARCH & DATA
            </div>

            <h1>
              ASK BETTER.
              <br />
              <span>KNOW MORE.</span>
              <br />
              DO BETTER.
            </h1>

            <p className="research-hero-description">
              We believe meaningful progress begins with understanding. Through
              research, data, and analytical thinking, we explore problems,
              uncover insights, and support better decisions.
            </p>

            <div className="research-hero-actions">
              <a href="#research-focus" className="research-button-primary">
                Explore our focus
                <ArrowRight size={18} />
              </a>

              <a href="#research-approach" className="research-button-outline">
                Our approach
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="research-hero-note">
              <span className="research-pulse"></span>
              KNOWLEDGE BUILT ON EVIDENCE
            </div>
          </div>

          <div className="research-hero-visual">
            <div className="research-orbit orbit-one"></div>
            <div className="research-orbit orbit-two"></div>
            <div className="research-orbit orbit-three"></div>

            <div className="research-visual-top">
              <span>RESEARCH SYSTEM / 001</span>
              <span className="research-live">
                <i></i> ANALYTICAL
              </span>
            </div>

            <div className="research-data-core">
              <div className="research-core-ring">
                <div className="research-core-center">
                  <BrainCircuit size={56} strokeWidth={1.2} />
                  <span>INSIGHT</span>
                </div>
              </div>
            </div>

            <div className="research-floating-card research-card-top">
              <Database size={19} />
              <div>
                <small>INFORMATION</small>
                <strong>Data collection</strong>
              </div>
            </div>

            <div className="research-floating-card research-card-bottom">
              <ChartNoAxesCombined size={20} />
              <div>
                <small>INTELLIGENCE</small>
                <strong>Pattern discovery</strong>
              </div>
            </div>

            <div className="research-visual-bottom">
              <span>OBSERVE</span>
              <span>ANALYSE</span>
              <span>UNDERSTAND</span>
            </div>
          </div>
        </div>

        <div className="research-hero-footer">
          <span>01 — THE PURPOSE</span>
          <span>RESEARCH / DATA / INSIGHT</span>
          <a href="#research-intro">
            SCROLL TO EXPLORE <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="research-intro" id="research-intro">
        <div className="research-container research-intro-layout">
          <div className="research-intro-label">
            <span>01</span>
            <p>
              WHY RESEARCH
              <br />
              MATTERS
            </p>
          </div>

          <div className="research-intro-main">
            <p className="research-section-kicker">
              UNDERSTANDING BEFORE ACTION
            </p>

            <h2>
              The quality of a solution often depends on the
              <span> quality of our understanding.</span>
            </h2>

            <div className="research-intro-bottom">
              <p>
                Many challenges persist because they are approached without
                enough understanding of their causes, context, or consequences.
                Research helps us look deeper. Data helps us see what may
                otherwise be missed.
              </p>

              <p>
                At Golden Bridge Concept, Research & Data represents our
                commitment to asking meaningful questions, examining evidence,
                and developing knowledge that can contribute to practical
                progress across different sectors of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="research-focus" id="research-focus">
        <div className="research-container">
          <div className="research-section-heading">
            <div>
              <p className="research-section-kicker">
                02 / AREAS OF EXPLORATION
              </p>
              <h2>
                Where curiosity
                <br />
                <span>meets investigation.</span>
              </h2>
            </div>

            <p>
              Research and data are broad fields. These are areas through which
              GBC can explore questions, develop knowledge, and support
              evidence-informed solutions.
            </p>
          </div>

          <div className="research-area-list">
            {researchAreas.map((area) => (
              <article className="research-area-item" key={area.number}>
                <div className="research-area-number">{area.number}</div>

                <div className="research-area-icon">{area.icon}</div>

                <div className="research-area-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <div className="research-area-tags">
                    {area.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="research-area-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DATA FEATURE */}
      <section className="research-feature">
        <div className="research-feature-grid"></div>

        <div className="research-container research-feature-layout">
          <div className="research-feature-copy">
            <p className="research-section-kicker">
              03 / FROM DATA TO DECISIONS
            </p>

            <h2>
              Data is more than numbers.
              <span> It is a way to understand reality.</span>
            </h2>

            <p>
              Data becomes valuable when it is collected responsibly,
              interpreted correctly, and connected to the questions that matter.
              We recognise the role of data in helping individuals, businesses,
              institutions, and communities understand their situations and
              consider better ways forward.
            </p>

            <a href="#research-capabilities" className="research-feature-link">
              Explore our capabilities <ArrowRight size={17} />
            </a>
          </div>

          <div className="research-dashboard">
            <div className="research-dashboard-header">
              <div>
                <span>ILLUSTRATIVE INTERFACE</span>
                <strong>Data intelligence</strong>
              </div>
              <span className="research-dashboard-menu">•••</span>
            </div>

            <div className="research-dashboard-stat">
              <div>
                <small>THE ANALYTICAL PROCESS</small>
                <strong>From raw information to useful insight</strong>
              </div>
              <Activity size={23} />
            </div>

            <div className="research-chart">
              <div className="research-chart-y">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="research-chart-main">
                <div className="research-chart-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <svg viewBox="0 0 420 170" preserveAspectRatio="none">
                  <defs>
                    <linearGradient
                      id="researchAreaFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#37d5d0" stopOpacity=".28" />
                      <stop offset="100%" stopColor="#37d5d0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 135 C35 125 40 105 75 112 S125 75 155 91 S210 115 240 72 S290 78 320 47 S375 56 420 12 L420 170 L0 170 Z"
                    fill="url(#researchAreaFill)"
                  />
                  <path
                    d="M0 135 C35 125 40 105 75 112 S125 75 155 91 S210 115 240 72 S290 78 320 47 S375 56 420 12"
                    fill="none"
                    stroke="#37d5d0"
                    strokeWidth="3"
                  />
                </svg>

                <div className="research-chart-x">
                  <span>STAGE 01</span>
                  <span>STAGE 02</span>
                  <span>STAGE 03</span>
                  <span>STAGE 04</span>
                </div>
              </div>
            </div>

            <div className="research-dashboard-footer">
              <span>
                <i></i> COLLECTION
              </span>
              <span>
                <i></i> ANALYSIS
              </span>
              <span>
                <i></i> INSIGHT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="research-capabilities" id="research-capabilities">
        <div className="research-container">
          <div className="research-capabilities-heading">
            <p className="research-section-kicker">
              04 / WHAT RESEARCH ENABLES
            </p>
            <h2>
              Tools and thinking for
              <br />
              meaningful discovery.
            </h2>
          </div>

          <div className="research-capabilities-grid">
            {capabilities.map((item, index) => (
              <article className="research-capability" key={item.title}>
                <span className="research-capability-index">0{index + 1}</span>
                <div className="research-capability-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="research-approach" id="research-approach">
        <div className="research-container">
          <div className="research-approach-heading">
            <div>
              <p className="research-section-kicker">05 / OUR APPROACH</p>
              <h2>
                From a question
                <br />
                <span>to a practical outcome.</span>
              </h2>
            </div>

            <p>
              Good research is not simply about gathering information. It is
              about following a thoughtful process that connects the original
              question to findings that can be understood and applied.
            </p>
          </div>

          <div className="research-process">
            {process.map((step, index) => (
              <article className="research-process-step" key={step.number}>
                <div className="research-process-top">
                  <span>{step.number}</span>
                  {index !== process.length - 1 && <ArrowRight size={19} />}
                </div>

                <div className="research-process-line">
                  <i></i>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="research-principles">
        <div className="research-container research-principles-layout">
          <div className="research-principles-heading">
            <p className="research-section-kicker">06 / WHAT GUIDES US</p>
            <h2>
              Research without
              <span> integrity is incomplete.</span>
            </h2>
            <p>
              Useful knowledge must be built on trust. Our approach places
              importance on responsible investigation, careful interpretation,
              and respect for the people and communities represented by data.
            </p>
          </div>

          <div className="research-principles-list">
            {principles.map((principle, index) => (
              <div className="research-principle" key={principle}>
                <span>0{index + 1}</span>
                <ShieldCheck size={19} />
                <strong>{principle}</strong>
                <ChevronRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="research-connections">
        <div className="research-container research-connections-layout">
          <div className="research-connections-symbol">
            <div className="research-connection-node node-one">
              <Database />
            </div>
            <div className="research-connection-node node-two">
              <Lightbulb />
            </div>
            <div className="research-connection-node node-three">
              <Target />
            </div>
            <div className="research-connection-center">
              <Layers size={38} />
              <span>GBC</span>
            </div>
            <div className="research-connection-line line-one"></div>
            <div className="research-connection-line line-two"></div>
            <div className="research-connection-line line-three"></div>
          </div>

          <div className="research-connections-copy">
            <p className="research-section-kicker">07 / CONNECTING KNOWLEDGE</p>
            <h2>
              Research becomes more powerful when it
              <span> connects with other disciplines.</span>
            </h2>
            <p>
              Research and data can support progress across technology,
              healthcare, agriculture, education, business, and other fields. By
              connecting knowledge with practical needs, we create opportunities
              for ideas to move beyond theory.
            </p>

            <div className="research-connection-links">
              <Link to="/departments/technology">
                Technology <ArrowUpRight size={15} />
              </Link>
              <Link to="/departments/health-nutrition">
                Health & Nutrition <ArrowUpRight size={15} />
              </Link>
              <Link to="/departments/agriculture">
                Agriculture <ArrowUpRight size={15} />
              </Link>
              <Link to="/departments/education">
                Education & Skills <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="research-closing">
        <div className="research-closing-pattern"></div>

        <div className="research-container research-closing-content">
          <div className="research-closing-mark">
            <BookOpen size={23} />
            <span>GBC / RESEARCH & DATA</span>
          </div>

          <p>THE FUTURE FAVOURS THOSE WHO SEEK TO UNDERSTAND.</p>

          <h2>
            Don't just accept
            <br />
            what is known.
            <span> Explore what is possible.</span>
          </h2>

          <div className="research-closing-bottom">
            <p>
              Every meaningful discovery begins with a question. Every practical
              solution benefits from understanding.
            </p>

            <Link to="/contact" className="research-button-primary">
              Connect with GBC <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
