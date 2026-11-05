import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  House,
  Landmark,
  Map,
  MapPin,
  Ruler,
  Layers3,
  Compass,
  Trees,
  BriefcaseBusiness,
  HardHat,
  ChartNoAxesCombined,
  Lightbulb,
  Blocks,
  MoveUpRight,
  CheckCircle2,
  Building,
  PanelsTopLeft,
} from "lucide-react";

const realEstateAreas = [
  {
    number: "01",
    icon: <House />,
    title: "Residential Real Estate",
    description:
      "Exploring housing, residential communities, property ownership, rental markets and the changing needs of people and families.",
    tags: ["Housing", "Homes", "Communities"],
  },
  {
    number: "02",
    icon: <BriefcaseBusiness />,
    title: "Commercial Real Estate",
    description:
      "Understanding offices, retail spaces, business premises and the properties that support commercial activity.",
    tags: ["Offices", "Retail", "Workspaces"],
  },
  {
    number: "03",
    icon: <Building2 />,
    title: "Property Development",
    description:
      "Examining how land and property ideas move through planning, design, construction and development.",
    tags: ["Planning", "Construction", "Development"],
  },
  {
    number: "04",
    icon: <ChartNoAxesCombined />,
    title: "Property Investment",
    description:
      "Exploring property as an investment asset, including valuation, market research, risk and long-term considerations.",
    tags: ["Valuation", "Research", "Investment"],
  },
  {
    number: "05",
    icon: <Map />,
    title: "Land & Urban Development",
    description:
      "Understanding land use, infrastructure, neighbourhood planning and the development of sustainable urban spaces.",
    tags: ["Land use", "Infrastructure", "Planning"],
  },
  {
    number: "06",
    icon: <PanelsTopLeft />,
    title: "Property Technology",
    description:
      "Investigating how digital platforms, data, mapping and emerging technologies can improve property processes.",
    tags: ["PropTech", "Digital tools", "Data"],
  },
];

const developmentStages = [
  {
    number: "01",
    title: "Discover",
    description: "Identify a need, opportunity, location or development idea.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Study the land, market, feasibility and relevant constraints.",
  },
  {
    number: "03",
    title: "Plan",
    description: "Develop the concept, design, budget and project approach.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Coordinate the construction and delivery of the project.",
  },
  {
    number: "05",
    title: "Manage",
    description: "Maintain, operate and manage the property over time.",
  },
];

const realEstateConnections = [
  {
    name: "Technology",
    description:
      "Digital property platforms, mapping, smart buildings and automation.",
    link: "/departments/technology",
  },
  {
    name: "Business",
    description:
      "Commercial spaces, enterprise development and property operations.",
    link: "/departments/business",
  },
  {
    name: "Finance",
    description:
      "Property valuation, funding, investment and financial planning.",
    link: "/departments/finance",
  },
  {
    name: "Logistics",
    description:
      "Land access, transport links, distribution facilities and location planning.",
    link: "/departments/logistics",
  },
];

function RealEstate() {
  return (
    <main className="realestate-page">
      {/* HERO */}
      <section className="re-hero">
        <div className="re-hero-image"></div>
        <div className="re-hero-overlay"></div>

        <header className="re-topline">
          <span>GBC / BUILT ENVIRONMENT</span>
          <span>DEPARTMENT 11 — REAL ESTATE</span>
        </header>

        <div className="re-hero-content">
          <div className="re-hero-copy">
            <span className="re-kicker">
              <span></span>
              LAND. SPACE. OPPORTUNITY.
            </span>

            <h1>
              Shaping
              <br />
              spaces.
              <br />
              <em>Building</em>
              <br />
              possibilities.
            </h1>

            <p>
              Real estate is more than buildings and land. It is about the
              spaces people inhabit, the places businesses grow and the
              environments communities depend on.
            </p>

            <div className="re-hero-actions">
              <a href="#re-explore" className="re-primary-button">
                Explore the department
                <ArrowUpRight size={17} />
              </a>

              <a href="#re-purpose" className="re-text-link">
                Our perspective
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="re-hero-side">
            <span className="re-side-index">01 / 06</span>
            <div className="re-side-rule"></div>
            <p>
              THE BUILT
              <br />
              ENVIRONMENT
            </p>
            <span className="re-side-coordinate">GBC — RE</span>
          </div>
        </div>

        <div className="re-hero-footer">
          <span>LANDSCAPE</span>
          <span>ARCHITECTURE</span>
          <span>DEVELOPMENT</span>
          <span>PROPERTY</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="re-purpose" id="re-purpose">
        <div className="re-section-marker">
          <span>01 — THE IDEA</span>
          <span>BEYOND BRICKS AND MORTAR</span>
        </div>

        <div className="re-purpose-grid">
          <div className="re-purpose-heading">
            <span className="re-overline">A PLACE FOR EVERY POSSIBILITY</span>
            <h2>
              Space shapes
              <br />
              the way we
              <br />
              <em>live.</em>
            </h2>
          </div>

          <div className="re-purpose-copy">
            <p className="re-large-copy">
              Where we live, work, learn, trade and gather is influenced by the
              way land and buildings are planned, developed and managed.
            </p>

            <p>
              Real estate connects physical spaces with human needs and economic
              activity. It brings together land, architecture, construction,
              investment, infrastructure and property management.
            </p>

            <p>
              At Golden Bridge Concept, this department is intended to explore
              the ideas, systems and opportunities shaping the built environment
              and the future of property.
            </p>

            <div className="re-purpose-signature">
              <span>GBC / REAL ESTATE</span>
              <span className="re-signature-line"></span>
              <span>LAND WITH PURPOSE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL FEATURE */}
      <section className="re-architecture">
        <div className="re-architecture-image">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85"
            alt="Contemporary architectural building with clean geometric lines"
          />
          <span className="re-image-caption">01 / ARCHITECTURE & DESIGN</span>
        </div>

        <div className="re-architecture-content">
          <span className="re-overline">THE SPACES WE CREATE</span>
          <h2>
            Good spaces
            <br />
            begin with
            <br />
            <em>good thinking.</em>
          </h2>
          <p>
            Every successful development begins with understanding its purpose,
            its users and the environment around it. Design and planning
            influence how spaces function, how people experience them and how
            they serve communities.
          </p>

          <div className="re-architecture-points">
            <div>
              <Ruler size={19} />
              <span>Design and spatial planning</span>
            </div>
            <div>
              <Compass size={19} />
              <span>Location and land considerations</span>
            </div>
            <div>
              <Trees size={19} />
              <span>Environmental and community context</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="re-property-types">
        <div className="re-section-marker">
          <span>02 — PROPERTY LANDSCAPE</span>
          <span>DIFFERENT SPACES, DIFFERENT NEEDS</span>
        </div>

        <div className="re-property-heading">
          <h2>
            Every space
            <br />
            serves a <em>purpose.</em>
          </h2>
          <p>
            The property landscape includes different types of spaces, each
            serving distinct needs and playing a role in how people and
            organisations function.
          </p>
        </div>

        <div className="re-property-grid">
          <article className="re-property-card re-property-residential">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
              alt="Modern residential interior"
              loading="lazy"
            />
            <div className="re-property-shade"></div>
            <div className="re-property-card-content">
              <span>01 / LIVING</span>
              <h3>Residential</h3>
              <p>Homes, housing and places for everyday life.</p>
              <House size={22} />
            </div>
          </article>

          <article className="re-property-card re-property-commercial">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
              alt="Contemporary commercial office interior"
              loading="lazy"
            />
            <div className="re-property-shade"></div>
            <div className="re-property-card-content">
              <span>02 / WORKING</span>
              <h3>Commercial</h3>
              <p>Workplaces, offices and business environments.</p>
              <BriefcaseBusiness size={22} />
            </div>
          </article>

          <article className="re-property-card re-property-industrial">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"
              alt="Industrial production and facility environment"
              loading="lazy"
            />
            <div className="re-property-shade"></div>
            <div className="re-property-card-content">
              <span>03 / PRODUCING</span>
              <h3>Industrial</h3>
              <p>Facilities that support production and operations.</p>
              <Building size={22} />
            </div>
          </article>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="re-explore" id="re-explore">
        <div className="re-section-marker">
          <span>03 — AREAS OF INTEREST</span>
          <span>EXPLORING REAL ESTATE</span>
        </div>

        <div className="re-explore-heading">
          <div>
            <span className="re-overline">OUR AREAS OF FOCUS</span>
            <h2>
              Understanding
              <br />
              the property
              <br />
              <em>ecosystem.</em>
            </h2>
          </div>
          <p>
            These are areas GBC intends to explore across the real estate
            sector, from the spaces people occupy to the systems that support
            property development and management.
          </p>
        </div>

        <div className="re-focus-list">
          {realEstateAreas.map((area) => (
            <article className="re-focus-item" key={area.number}>
              <span className="re-focus-number">{area.number}</span>

              <div className="re-focus-icon">{area.icon}</div>

              <div className="re-focus-main">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="re-focus-tags">
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <ArrowUpRight className="re-focus-arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="re-development">
        <div className="re-development-top">
          <span>04 — FROM IDEA TO PLACE</span>
          <span>THE DEVELOPMENT PROCESS</span>
        </div>

        <div className="re-development-heading">
          <h2>
            An idea becomes
            <br />a <em>place.</em>
          </h2>
          <p>
            Property development involves a series of connected decisions and
            activities. The process varies by project, but each stage
            contributes to turning an opportunity into a usable space.
          </p>
        </div>

        <div className="re-development-image">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1800&q=85"
            alt="Building construction site showing the development process"
            loading="lazy"
          />
          <div className="re-development-image-label">
            <HardHat size={18} />
            <span>FROM CONCEPT TO COMPLETION</span>
          </div>
        </div>

        <div className="re-development-stages">
          {developmentStages.map((stage) => (
            <article className="re-stage" key={stage.number}>
              <span>{stage.number}</span>
              <div className="re-stage-line"></div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BUILT ENVIRONMENT */}
      <section className="re-built-environment">
        <div className="re-built-copy">
          <span className="re-overline">BEYOND INDIVIDUAL PROPERTIES</span>
          <h2>
            We don't just
            <br />
            develop buildings.
            <br />
            We shape
            <em> environments.</em>
          </h2>
          <p>
            A building exists within a wider environment. Roads, utilities,
            public spaces, services, accessibility and the surrounding community
            all influence how a location functions.
          </p>

          <div className="re-built-facts">
            <div>
              <MapPin size={18} />
              <span>Location and accessibility</span>
            </div>
            <div>
              <Blocks size={18} />
              <span>Infrastructure and services</span>
            </div>
            <div>
              <Trees size={18} />
              <span>Environmental considerations</span>
            </div>
          </div>
        </div>

        <div className="re-built-visual">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"
            alt="Modern urban architecture and built environment"
            loading="lazy"
          />
          <div className="re-built-image-note">
            <span>URBAN FORM / 01</span>
            <strong>Spaces connected to people.</strong>
          </div>
          <div className="re-built-number">RE—11</div>
        </div>
      </section>

      {/* TECHNOLOGY AND THE FUTURE */}
      <section className="re-future">
        <div className="re-future-visual">
          <div className="re-future-grid"></div>
          <div className="re-future-building">
            <div className="re-building-roof"></div>
            <div className="re-building-body">
              <div className="re-building-windows">
                {Array.from({ length: 24 }, (_, index) => (
                  <span key={index}></span>
                ))}
              </div>
            </div>
          </div>
          <div className="re-future-orbit re-orbit-a">
            <Lightbulb size={20} />
          </div>
          <div className="re-future-orbit re-orbit-b">
            <ChartNoAxesCombined size={20} />
          </div>
          <div className="re-future-orbit re-orbit-c">
            <Layers3 size={20} />
          </div>
          <span className="re-future-visual-label">
            PROPERTY / TECHNOLOGY / FUTURE
          </span>
        </div>

        <div className="re-future-copy">
          <span className="re-overline">05 — WHAT COMES NEXT</span>
          <h2>
            The future
            <br />
            of property
            <br />
            is <em>evolving.</em>
          </h2>
          <p>
            Technology and data are changing how properties are designed,
            marketed, managed and experienced. New ideas are also shaping energy
            use, building performance and the relationship between people and
            their surroundings.
          </p>

          <div className="re-future-points">
            <div>
              <CheckCircle2 size={17} />
              <span>Smart buildings and connected spaces</span>
            </div>
            <div>
              <CheckCircle2 size={17} />
              <span>Property platforms and digital transactions</span>
            </div>
            <div>
              <CheckCircle2 size={17} />
              <span>Data-informed property decisions</span>
            </div>
            <div>
              <CheckCircle2 size={17} />
              <span>Sustainable design and development</span>
            </div>
          </div>
        </div>
      </section>

      {/* GBC CONNECTIONS */}
      <section className="re-connections">
        <div className="re-section-marker">
          <span>06 — CONNECTED DISCIPLINES</span>
          <span>THE GBC ECOSYSTEM</span>
        </div>

        <div className="re-connections-heading">
          <h2>
            Property is
            <br />
            connected to <em>everything.</em>
          </h2>
          <p>
            Real estate intersects with technology, finance, business and
            infrastructure. These connections create opportunities for ideas and
            disciplines to work together.
          </p>
        </div>

        <div className="re-connection-grid">
          {realEstateConnections.map((item, index) => (
            <Link to={item.link} className="re-connection-card" key={item.name}>
              <span>0{index + 1} / GBC</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <MoveUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="re-closing">
        <div className="re-closing-image"></div>
        <div className="re-closing-content">
          <span>GOLDEN BRIDGE CONCEPT / REAL ESTATE</span>
          <h2>
            Creating spaces.
            <br />
            Inspiring <em>possibilities.</em>
          </h2>
          <p>
            Explore the ideas, opportunities and systems shaping the places
            where people live, work, connect and build the future.
          </p>
          <Link to="/contact" className="re-closing-button">
            Connect with GBC
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="re-closing-index">GBC / 011</div>
      </section>
    </main>
  );
}

export default RealEstate;
