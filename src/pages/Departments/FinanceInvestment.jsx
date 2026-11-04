import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Coins,
  CreditCard,
  Globe2,
  Landmark,
  Lightbulb,
  PieChart,
  ShieldCheck,
  Wallet,
  TrendingUp,
  MoveUpRight,
  CircleDollarSign,
  Network,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: <Wallet />,
    title: "Personal Finance",
    description:
      "Understanding income, expenses, budgeting, saving and the financial decisions that shape everyday life.",
    tags: ["Budgeting", "Saving", "Financial habits"],
  },
  {
    number: "02",
    icon: <ChartNoAxesCombined />,
    title: "Investment & Wealth",
    description:
      "Exploring investment principles, asset classes, risk, long-term wealth creation and responsible investing.",
    tags: ["Investments", "Wealth", "Risk"],
  },
  {
    number: "03",
    icon: <BriefcaseBusiness />,
    title: "Business Finance",
    description:
      "Examining business funding, financial planning, cash flow, profitability and sustainable business growth.",
    tags: ["Cash flow", "Funding", "Planning"],
  },
  {
    number: "04",
    icon: <Landmark />,
    title: "Financial Systems",
    description:
      "Understanding banking, financial institutions, payment systems and how money moves through the economy.",
    tags: ["Banking", "Payments", "Systems"],
  },
  {
    number: "05",
    icon: <ShieldCheck />,
    title: "Financial Literacy",
    description:
      "Building the knowledge needed to understand financial products, avoid common mistakes and make informed decisions.",
    tags: ["Education", "Awareness", "Protection"],
  },
  {
    number: "06",
    icon: <Globe2 />,
    title: "Digital Finance",
    description:
      "Exploring financial technology, digital payments, financial innovation and emerging economic opportunities.",
    tags: ["Fintech", "Digital payments", "Innovation"],
  },
];

const principles = [
  {
    icon: <Lightbulb />,
    title: "Knowledge before decisions",
    text: "Financial decisions should be guided by understanding, not assumptions or pressure.",
  },
  {
    icon: <ShieldCheck />,
    title: "Responsibility and integrity",
    text: "Financial growth must be approached with transparency, discipline and accountability.",
  },
  {
    icon: <TrendingUp />,
    title: "Long-term thinking",
    text: "Sustainable financial progress requires patience, planning and consistent decisions.",
  },
];

const connections = [
  {
    name: "Technology",
    description:
      "Financial technology, automation and digital payment systems.",
    link: "/departments/technology",
  },
  {
    name: "Business",
    description:
      "Capital, business models, financial planning and enterprise growth.",
    link: "/departments/business",
  },
  {
    name: "Research & Data",
    description:
      "Financial research, economic data and evidence-based decisions.",
    link: "/departments/research",
  },
  {
    name: "Education & Skills",
    description:
      "Financial literacy, practical knowledge and lifelong learning.",
    link: "/departments/education",
  },
];

function Finance() {
  return (
    <main className="finance-page">
      {/* HERO */}
      <section className="finance-hero">
        <div className="finance-hero-grid"></div>

        <div className="finance-hero-top">
          <span className="finance-eyebrow">
            <span className="finance-eyebrow-dot"></span>
            GBC / FINANCIAL INTELLIGENCE
          </span>

          <span className="finance-index">DEPARTMENT 09 — FINANCE</span>
        </div>

        <div className="finance-hero-content">
          <div className="finance-hero-copy">
            <p className="finance-kicker">
              UNDERSTANDING MONEY. BUILDING VALUE.
            </p>

            <h1>
              Finance is
              <br />
              more than
              <span> money.</span>
            </h1>

            <p className="finance-hero-description">
              It is about understanding value, making informed decisions and
              creating the financial foundations for individuals, businesses and
              society to progress.
            </p>

            <div className="finance-hero-actions">
              <a href="#finance-focus" className="finance-primary-btn">
                Explore our focus
                <ArrowUpRight size={18} />
              </a>

              <a href="#finance-purpose" className="finance-text-link">
                Discover our perspective
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="finance-visual">
            <div className="finance-visual-glow"></div>

            <div className="finance-orbit finance-orbit-one"></div>
            <div className="finance-orbit finance-orbit-two"></div>
            <div className="finance-orbit finance-orbit-three"></div>

            <div className="finance-core">
              <CircleDollarSign size={62} strokeWidth={1.1} />
              <span>VALUE</span>
            </div>

            <div className="finance-floating-card finance-card-top">
              <span className="finance-card-icon">
                <TrendingUp size={17} />
              </span>
              <div>
                <small>LONG-TERM THINKING</small>
                <strong>Growth with purpose</strong>
              </div>
            </div>

            <div className="finance-floating-card finance-card-bottom">
              <span className="finance-card-icon finance-card-icon-gold">
                <ShieldCheck size={17} />
              </span>
              <div>
                <small>FINANCIAL FOUNDATION</small>
                <strong>Knowledge & discipline</strong>
              </div>
            </div>

            <div className="finance-visual-label">
              <span>01</span>
              FINANCIAL UNDERSTANDING
            </div>
          </div>
        </div>

        <div className="finance-hero-footer">
          <span>KNOWLEDGE</span>
          <span className="finance-footer-line"></span>
          <span>DECISIONS</span>
          <span className="finance-footer-line"></span>
          <span>VALUE CREATION</span>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="finance-purpose" id="finance-purpose">
        <div className="finance-section-label">
          <span>01 / OUR PERSPECTIVE</span>
          <span>THE ROLE OF FINANCE</span>
        </div>

        <div className="finance-purpose-layout">
          <div className="finance-purpose-heading">
            <p className="finance-kicker finance-kicker-dark">
              FINANCE SHAPES POSSIBILITIES
            </p>

            <h2>
              Money is a tool.
              <br />
              <span>Understanding</span>
              <br />
              is the advantage.
            </h2>
          </div>

          <div className="finance-purpose-text">
            <p className="finance-purpose-lead">
              Every individual, organisation and economy makes financial
              decisions. The quality of those decisions can influence
              opportunities, stability and the ability to create lasting value.
            </p>

            <p>
              At Golden Bridge Concept, the Finance department is intended to
              explore the knowledge, systems, tools and ideas that help people
              understand finance and approach financial decisions more
              responsibly.
            </p>

            <p>
              Our interest goes beyond the movement of money. It includes
              financial literacy, business sustainability, investment
              understanding, innovation and the role of finance in societal
              development.
            </p>

            <div className="finance-purpose-signature">
              <span className="finance-signature-mark">GBC.</span>
              <span>CONNECTING IDEAS. CREATING VALUE.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCE CONCEPT VISUAL */}
      <section className="finance-concept">
        <div className="finance-concept-heading">
          <span>02 / THE BIGGER PICTURE</span>
          <h2>Finance connects the dots.</h2>
          <p>
            Financial understanding influences more than personal wealth. It
            connects people, enterprises, technology and economic systems.
          </p>
        </div>

        <div className="finance-system">
          <div className="finance-system-center">
            <div className="finance-system-center-inner">
              <Coins size={38} />
              <strong>FINANCE</strong>
              <span>VALUE & DECISIONS</span>
            </div>
          </div>

          <div className="finance-system-node finance-node-one">
            <span>
              <Wallet size={20} />
            </span>
            <strong>Individuals</strong>
            <small>Personal decisions</small>
          </div>

          <div className="finance-system-node finance-node-two">
            <span>
              <BriefcaseBusiness size={20} />
            </span>
            <strong>Businesses</strong>
            <small>Enterprise growth</small>
          </div>

          <div className="finance-system-node finance-node-three">
            <span>
              <Landmark size={20} />
            </span>
            <strong>Institutions</strong>
            <small>Financial systems</small>
          </div>

          <div className="finance-system-node finance-node-four">
            <span>
              <Globe2 size={20} />
            </span>
            <strong>Society</strong>
            <small>Economic development</small>
          </div>

          <div className="finance-system-caption">
            <Network size={15} />
            ONE FINANCIAL ECOSYSTEM
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="finance-focus" id="finance-focus">
        <div className="finance-section-label">
          <span>03 / AREAS OF INTEREST</span>
          <span>EXPLORING FINANCIAL POSSIBILITIES</span>
        </div>

        <div className="finance-focus-heading">
          <div>
            <p className="finance-kicker finance-kicker-dark">
              OUR AREAS OF FOCUS
            </p>
            <h2>
              A broader view
              <br />
              of <span>finance.</span>
            </h2>
          </div>

          <p>
            These are areas through which GBC intends to examine financial
            knowledge, systems, opportunities and challenges.
          </p>
        </div>

        <div className="finance-focus-grid">
          {focusAreas.map((area) => (
            <article className="finance-focus-card" key={area.number}>
              <div className="finance-focus-card-top">
                <span className="finance-focus-number">{area.number}</span>
                <span className="finance-focus-icon">{area.icon}</span>
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>

              <div className="finance-tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="finance-card-bottom-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="finance-principles">
        <div className="finance-principles-intro">
          <span>04 / OUR GUIDING PRINCIPLES</span>
          <h2>
            Growth means
            <br />
            <span>nothing without</span>
            responsibility.
          </h2>
          <p>
            Financial progress should be built on knowledge, sound judgement and
            a commitment to responsible value creation.
          </p>
        </div>

        <div className="finance-principles-list">
          {principles.map((principle, index) => (
            <div className="finance-principle" key={principle.title}>
              <span className="finance-principle-index">0{index + 1}</span>

              <span className="finance-principle-icon">{principle.icon}</span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>

              <ArrowUpRight className="finance-principle-arrow" size={21} />
            </div>
          ))}
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="finance-connections">
        <div className="finance-section-label">
          <span>05 / BEYOND ONE DEPARTMENT</span>
          <span>THE GBC ECOSYSTEM</span>
        </div>

        <div className="finance-connections-heading">
          <h2>
            Finance does not
            <br />
            <span>work in isolation.</span>
          </h2>
          <p>
            The most meaningful financial ideas often emerge where different
            fields, disciplines and perspectives meet.
          </p>
        </div>

        <div className="finance-connections-grid">
          {connections.map((item, index) => (
            <Link
              to={item.link}
              className="finance-connection-card"
              key={item.name}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <MoveUpRight size={19} />
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finance-cta">
        <div className="finance-cta-pattern"></div>

        <div className="finance-cta-content">
          <span>GOLDEN BRIDGE CONCEPT / FINANCE</span>

          <h2>
            Understand value.
            <br />
            <span>Shape the future.</span>
          </h2>

          <p>
            Better financial understanding can lead to better decisions,
            stronger enterprises and more informed communities.
          </p>

          <Link to="/contact" className="finance-cta-button">
            Connect with GBC
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="finance-cta-symbol">
          <BarChart3 size={115} strokeWidth={0.65} />
          <div className="finance-cta-symbol-circle"></div>
        </div>
      </section>
    </main>
  );
}

export default Finance;
