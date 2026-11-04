import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  Handshake,
  Lightbulb,
  LineChart,
  Network,
  Target,
  Users,
  Wallet,
  Workflow,
  CheckCircle2,
  ChevronRight,
  Sprout,
  Globe2,
  Scale,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Business() {
  const businessAreas = [
    {
      number: "01",
      icon: <Lightbulb />,
      title: "Entrepreneurship & Venture Development",
      description:
        "Exploring how ideas can be developed into viable ventures through problem identification, opportunity assessment, planning, and execution.",
      focus: "From idea to enterprise",
    },
    {
      number: "02",
      icon: <Building2 />,
      title: "Business Strategy & Management",
      description:
        "Understanding how organisations set direction, organise resources, manage operations, and build the capacity to achieve their objectives.",
      focus: "Direction and organisation",
    },
    {
      number: "03",
      icon: <LineChart />,
      title: "Business Growth & Development",
      description:
        "Exploring sustainable ways for businesses to improve their operations, reach customers, strengthen their value, and develop new opportunities.",
      focus: "Sustainable growth",
    },
    {
      number: "04",
      icon: <Handshake />,
      title: "Partnerships & Collaboration",
      description:
        "Encouraging productive relationships between businesses, professionals, institutions, communities, and other stakeholders.",
      focus: "Building relationships",
    },
    {
      number: "05",
      icon: <Target />,
      title: "Market & Customer Understanding",
      description:
        "Examining customer needs, market conditions, competition, and the factors that influence the value people receive from products and services.",
      focus: "Understanding the market",
    },
    {
      number: "06",
      icon: <Wallet />,
      title: "Business Models & Value Creation",
      description:
        "Examining how organisations create, deliver, and sustain value while developing responsible and practical approaches to revenue generation.",
      focus: "Creating lasting value",
    },
  ];

  const businessStages = [
    {
      number: "01",
      title: "Identify a need",
      description:
        "Understand a real problem, unmet need, or opportunity within a market or community.",
      icon: <SearchIcon />,
    },
    {
      number: "02",
      title: "Develop the idea",
      description:
        "Explore possible solutions, assess feasibility, and define the value being offered.",
      icon: <Lightbulb />,
    },
    {
      number: "03",
      title: "Build the enterprise",
      description:
        "Organise people, resources, processes, partnerships, and the business model.",
      icon: <Building2 />,
    },
    {
      number: "04",
      title: "Deliver and improve",
      description:
        "Serve customers, evaluate performance, learn from feedback, and improve continuously.",
      icon: <LineChart />,
    },
  ];

  const businessPrinciples = [
    {
      title: "Solve meaningful problems",
      description:
        "A business should understand the needs it exists to address.",
    },
    {
      title: "Create genuine value",
      description:
        "Products and services should provide something useful to the people they serve.",
    },
    {
      title: "Operate responsibly",
      description:
        "Trust, fairness, accountability, and integrity matter in business decisions.",
    },
    {
      title: "Build for sustainability",
      description:
        "Long-term thinking should guide the use of resources and the development of an enterprise.",
    },
  ];

  const businessConnections = [
    {
      title: "Technology",
      description:
        "Tools, systems, and innovation that improve how businesses operate.",
      to: "/departments/technology",
    },
    {
      title: "Research & Data",
      description:
        "Evidence and insight that support informed business decisions.",
      to: "/departments/research",
    },
    {
      title: "Education & Skills",
      description:
        "Knowledge and capabilities that help people contribute and grow.",
      to: "/departments/education",
    },
    {
      title: "Agriculture",
      description:
        "Enterprise opportunities across food systems and agricultural value chains.",
      to: "/departments/agriculture",
    },
  ];

  return (
    <main className="business-page">
      {/* HERO */}
      <section className="business-hero">
        <div className="business-hero-texture"></div>

        <div className="business-container business-hero-layout">
          <div className="business-hero-copy">
            <div className="business-overline">
              <span></span>
              GBC / BUSINESS
            </div>

            <p className="business-hero-pretitle">
              ENTERPRISE. VALUE. OPPORTUNITY.
            </p>

            <h1>
              BUSINESS
              <br />
              <em>WITH PURPOSE.</em>
            </h1>

            <p className="business-hero-description">
              We believe business should be more than the exchange of goods and
              services. It should identify needs, create value, develop
              opportunities, and contribute meaningfully to society.
            </p>

            <div className="business-hero-actions">
              <a href="#business-purpose" className="business-btn-solid">
                Discover our perspective
                <ArrowRight size={17} />
              </a>

              <a href="#business-focus" className="business-btn-text">
                Explore business areas
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="business-hero-footnote">
              <span className="business-footnote-mark">GBC</span>
              <span>CONNECTING IDEAS. CREATING VALUE.</span>
            </div>
          </div>

          <div className="business-hero-art">
            <div className="business-art-frame">
              <div className="business-art-top">
                <span>THE ENTERPRISE PERSPECTIVE</span>
                <span>001 / 006</span>
              </div>

              <div className="business-art-main">
                <div className="business-art-circle circle-large"></div>
                <div className="business-art-circle circle-medium"></div>
                <div className="business-art-circle circle-small"></div>

                <div className="business-art-emblem">
                  <Sprout size={61} strokeWidth={1.1} />
                  <span>VALUE</span>
                </div>

                <div className="business-art-label label-one">
                  <span>01</span>
                  <strong>IDEAS</strong>
                </div>

                <div className="business-art-label label-two">
                  <span>02</span>
                  <strong>PEOPLE</strong>
                </div>

                <div className="business-art-label label-three">
                  <span>03</span>
                  <strong>IMPACT</strong>
                </div>
              </div>

              <div className="business-art-bottom">
                <span>BUILD WITH INTENTION</span>
                <span>GBC BUSINESS</span>
              </div>
            </div>

            <div className="business-art-side-note">
              <span>01</span>
              <span>BEYOND PROFIT</span>
            </div>
          </div>
        </div>

        <div className="business-hero-bottom">
          <span>BUSINESS AS A FORCE FOR VALUE CREATION</span>
          <a href="#business-purpose">
            EXPLORE THE PILLAR <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="business-purpose" id="business-purpose">
        <div className="business-container">
          <div className="business-purpose-top">
            <span className="business-section-number">
              01 / OUR PERSPECTIVE
            </span>
            <span className="business-purpose-rule"></span>
          </div>

          <div className="business-purpose-content">
            <p className="business-small-heading">
              THE REASON BUSINESS MATTERS
            </p>

            <h2>
              A business is not defined only by what it earns, but also by
              <span> the value it creates.</span>
            </h2>

            <div className="business-purpose-columns">
              <p>
                Every community has needs. Every market has challenges. Every
                industry has opportunities to do things better. Business
                provides a way to organise ideas, people, resources, and
                capabilities around addressing those needs.
              </p>

              <p>
                At Golden Bridge Concept, we view business as an avenue for
                problem-solving, enterprise development, collaboration, and
                sustainable value creation. Financial performance matters, but
                the purpose and usefulness of what a business contributes matter
                too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STATEMENT */}
      <section className="business-statement">
        <div className="business-statement-image">
          <div className="business-statement-image-overlay"></div>
          <div className="business-statement-image-caption">
            <span>THE HUMAN SIDE OF ENTERPRISE</span>
            <span>02 / VALUE</span>
          </div>
        </div>

        <div className="business-statement-copy">
          <p className="business-small-heading">OUR CENTRAL BELIEF</p>

          <h2>
            Profit can sustain a business.
            <span> Purpose gives it direction.</span>
          </h2>

          <p>
            A business needs a viable economic foundation. But lasting relevance
            comes from understanding people, solving problems, delivering value,
            and earning trust.
          </p>

          <div className="business-statement-signature">
            <span className="business-signature-line"></span>
            <span>THE GBC BUSINESS PERSPECTIVE</span>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="business-focus" id="business-focus">
        <div className="business-container">
          <div className="business-focus-heading">
            <div>
              <p className="business-small-heading">03 / AREAS OF FOCUS</p>
              <h2>
                Understanding
                <br />
                <em>the business landscape.</em>
              </h2>
            </div>

            <p>
              Business involves many connected disciplines. These focus areas
              represent ways GBC can explore enterprise, organisational
              development, collaboration, and value creation.
            </p>
          </div>

          <div className="business-focus-grid">
            {businessAreas.map((area) => (
              <article className="business-focus-card" key={area.number}>
                <div className="business-focus-card-top">
                  <span>{area.number}</span>
                  <div>{area.icon}</div>
                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <div className="business-focus-card-bottom">
                  <span>{area.focus}</span>
                  <ArrowUpRight size={18} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE JOURNEY */}
      <section className="business-journey">
        <div className="business-container">
          <div className="business-journey-heading">
            <p className="business-small-heading">
              04 / THE ENTERPRISE JOURNEY
            </p>
            <h2>
              From identifying a need
              <br />
              <em>to delivering value.</em>
            </h2>
            <p>
              A business idea becomes meaningful when it is developed,
              organised, tested, and translated into something useful.
            </p>
          </div>

          <div className="business-journey-list">
            {businessStages.map((stage, index) => (
              <article className="business-journey-step" key={stage.number}>
                <div className="business-journey-index">
                  <span>{stage.number}</span>
                  {index !== businessStages.length - 1 && (
                    <div className="business-journey-connector"></div>
                  )}
                </div>

                <div className="business-journey-icon">{stage.icon}</div>

                <div className="business-journey-copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>

                <div className="business-journey-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS PRINCIPLES */}
      <section className="business-principles">
        <div className="business-container business-principles-layout">
          <div className="business-principles-intro">
            <p className="business-small-heading">05 / OUR PRINCIPLES</p>
            <h2>
              Growth should
              <em> mean something.</em>
            </h2>
            <p>
              We believe enterprise development should be guided by more than
              short-term results. The way value is created matters as much as
              the value itself.
            </p>
          </div>

          <div className="business-principles-list">
            {businessPrinciples.map((principle, index) => (
              <article className="business-principle" key={principle.title}>
                <span className="business-principle-number">0{index + 1}</span>

                <div className="business-principle-copy">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>

                <CheckCircle2 size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="business-collaboration">
        <div className="business-container">
          <div className="business-collaboration-top">
            <p className="business-small-heading">
              06 / THE POWER OF CONNECTION
            </p>
            <span>ONE ECOSYSTEM. MANY POSSIBILITIES.</span>
          </div>

          <h2>
            No meaningful enterprise
            <br />
            <em>grows in isolation.</em>
          </h2>

          <p className="business-collaboration-intro">
            Business is strengthened by knowledge, technology, people, research,
            and opportunities across different sectors. We recognise the
            importance of connecting disciplines and encouraging collaboration.
          </p>

          <div className="business-connections-grid">
            {businessConnections.map((item, index) => (
              <Link
                to={item.to}
                className="business-connection-card"
                key={item.title}
              >
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                  Explore connection <ArrowUpRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="business-closing">
        <div className="business-closing-decoration"></div>

        <div className="business-container business-closing-content">
          <div className="business-closing-brand">
            <BriefcaseBusiness size={22} />
            <span>GBC / BUSINESS</span>
          </div>

          <p className="business-closing-overline">
            THE FUTURE OF BUSINESS IS BUILT ON VALUE.
          </p>

          <h2>
            See a need.
            <br />
            Develop an idea.
            <br />
            <em>Create something that matters.</em>
          </h2>

          <div className="business-closing-bottom">
            <p>
              We believe in connecting ideas, developing opportunities, and
              building enterprises that contribute to a better future.
            </p>

            <Link to="/contact" className="business-btn-solid">
              Connect with GBC <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SearchIcon() {
  return <Compass />;
}
