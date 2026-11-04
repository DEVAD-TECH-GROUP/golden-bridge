import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Sprout,
  Wheat,
  Tractor,
  Leaf,
  FlaskConical,
  Droplets,
  Cpu,
  Sun,
  Apple,
  Beef,
  Factory,
  Globe2,
  Microscope,
  ShieldCheck,
  Recycle,
  TrendingUp,
  Users,
  Handshake,
  Package,
  ShoppingBasket,
  BookOpen,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const agriculturePillars = [
  {
    number: "01",
    icon: Sprout,
    title: "Crop Production",
    description:
      "Supporting better crop cultivation through improved practices, quality inputs, crop planning and sustainable production systems.",
    tags: ["Crop cultivation", "Horticulture", "Farm management"],
  },
  {
    number: "02",
    icon: Beef,
    title: "Livestock & Animal Production",
    description:
      "Promoting responsible livestock production, animal care, improved productivity and better access to animal-based food.",
    tags: ["Animal health", "Poultry", "Livestock systems"],
  },
  {
    number: "03",
    icon: Tractor,
    title: "Modern & Smart Agriculture",
    description:
      "Exploring practical ways to use technology, automation, data and improved equipment to make agricultural production more efficient.",
    tags: ["Smart farming", "Automation", "Mechanisation"],
  },
  {
    number: "04",
    icon: Factory,
    title: "Food Processing & Preservation",
    description:
      "Encouraging value addition, food processing, preservation and packaging to reduce waste and extend the value of agricultural produce.",
    tags: ["Processing", "Preservation", "Packaging"],
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Agricultural Research",
    description:
      "Promoting practical research into crops, soils, production methods and agricultural challenges that affect local communities.",
    tags: ["Crop research", "Soil science", "Field trials"],
  },
  {
    number: "06",
    icon: Globe2,
    title: "Food Security & Sustainability",
    description:
      "Supporting resilient food systems that improve access to food while protecting natural resources for future generations.",
    tags: ["Food security", "Sustainability", "Climate resilience"],
  },
];

const agricultureProgrammes = [
  {
    number: "01",
    category: "FARMING & PRODUCTION",
    title: "Practical Crop Production",
    description:
      "Practical learning and initiatives around crop selection, cultivation, farm planning and production management.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Green agricultural fields stretching across a landscape",
    link: "/contact",
  },
  {
    number: "02",
    category: "CONTROLLED ENVIRONMENTS",
    title: "Greenhouse Agriculture",
    description:
      "Exploring controlled-environment farming, greenhouse systems, irrigation, crop monitoring and year-round production.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85",
    alt: "Greenhouse plants growing in a protected environment",
    link: "/contact",
  },
  {
    number: "03",
    category: "FOOD INNOVATION",
    title: "Food Processing & Value Addition",
    description:
      "Developing ideas around processing, preservation, packaging and turning raw produce into valuable food products.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh food ingredients prepared for processing",
    link: "/contact",
  },
  {
    number: "04",
    category: "AGRICULTURAL TECHNOLOGY",
    title: "Smart Farming Solutions",
    description:
      "Applying sensors, data, automation and digital systems to solve real agricultural production problems.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern agricultural machinery working on farmland",
    link: "/departments/technology",
  },
  {
    number: "05",
    category: "RESEARCH & DEVELOPMENT",
    title: "Crop Research & Experimentation",
    description:
      "Investigating crop varieties, growing conditions, soil requirements and production methods through practical trials.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",
    alt: "Agricultural researcher examining a growing crop",
    link: "/contact",
  },
  {
    number: "06",
    category: "AGRIBUSINESS",
    title: "Agricultural Enterprise",
    description:
      "Exploring opportunities across farming, agricultural services, food supply chains and sustainable agribusiness.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh produce displayed in a food market",
    link: "/contact",
  },
];

const ecosystemItems = [
  {
    icon: Sprout,
    title: "Production",
    description: "Growing crops and raising livestock responsibly.",
  },
  {
    icon: Microscope,
    title: "Research",
    description: "Testing ideas and improving agricultural knowledge.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    description: "Applying technology to real farming challenges.",
  },
  {
    icon: Factory,
    title: "Processing",
    description: "Transforming produce into useful food products.",
  },
  {
    icon: Package,
    title: "Distribution",
    description: "Connecting producers to markets and consumers.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand the challenge",
    description:
      "Identify agricultural needs, production gaps and food-system challenges within the communities we serve.",
  },
  {
    number: "02",
    title: "Research and explore",
    description:
      "Study possible solutions, assess resources and test ideas before moving into implementation.",
  },
  {
    number: "03",
    title: "Develop practical solutions",
    description:
      "Build, improve and apply methods, systems and initiatives that respond to real agricultural needs.",
  },
  {
    number: "04",
    title: "Measure the impact",
    description:
      "Evaluate results, learn from experience and improve solutions for lasting value.",
  },
];

const relatedDepartments = [
  {
    number: "01",
    name: "Technology",
    description: "Digital systems, automation and smart agricultural tools.",
    href: "/departments/technology",
  },
  {
    number: "02",
    name: "Health & Nutrition",
    description:
      "The connection between food production, nutrition and wellbeing.",
    href: "/departments/health-nutrition",
  },
  {
    number: "03",
    name: "Research & Data",
    description: "Evidence, experimentation and data-driven decisions.",
    href: "/departments/research",
  },
  {
    number: "04",
    name: "Business",
    description:
      "Enterprise development, markets and agricultural value chains.",
    href: "/departments/business",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="agri-section-label">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

export default function AgricultureFood() {
  return (
    <main className="agriculture-page">
      {/* HERO */}
      <section className="agri-hero">
        <div className="agri-hero-grain" />

        <div className="agri-container">
          <div className="agri-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/departments">Departments</Link>
            <ChevronRight size={13} />
            <span>Agriculture & Food</span>
          </div>

          <div className="agri-hero-layout">
            <div className="agri-hero-copy">
              <div className="agri-eyebrow">
                <span className="agri-eyebrow-icon">
                  <Sprout size={15} />
                </span>
                <span>AGRICULTURE & FOOD</span>
                <span className="agri-eyebrow-line" />
              </div>

              <h1>
                Growing a better
                <br />
                future, <em>from the ground up.</em>
              </h1>

              <p className="agri-hero-description">
                Agriculture is more than growing food. It is about creating
                sustainable systems, strengthening communities, improving
                production and building a better future for generations to come.
              </p>

              <div className="agri-hero-actions">
                <Link to="/contact" className="agri-button agri-button-primary">
                  Explore opportunities
                  <ArrowUpRight size={17} />
                </Link>
                <a
                  href="#agri-focus"
                  className="agri-button agri-button-outline"
                >
                  Discover our focus
                  <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="agri-hero-note">
                <span className="agri-note-icon">
                  <Leaf size={16} />
                </span>
                <p>
                  <strong>From soil to society.</strong>
                  <span>Creating value across the food system.</span>
                </p>
              </div>
            </div>

            <div className="agri-hero-visual">
              <div className="agri-hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90"
                  alt="Expansive green agricultural farmland"
                />
                <div className="agri-image-shade" />
                <div className="agri-image-caption">
                  <span>01 / THE LAND</span>
                  <p>Where every harvest begins.</p>
                </div>
              </div>

              <div className="agri-hero-image-small">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85"
                  alt="Fresh vegetables and produce"
                />
              </div>

              <div className="agri-hero-floating">
                <span className="agri-floating-icon">
                  <Wheat size={20} />
                </span>
                <div>
                  <strong>Food systems</strong>
                  <span>Production. Innovation. Impact.</span>
                </div>
              </div>

              <div className="agri-hero-stamp">
                <span>GROW</span>
                <Sprout size={22} />
                <span>SUSTAIN</span>
              </div>

              <span className="agri-hero-coordinate">
                06° 27' N / 03° 23' E
              </span>
            </div>
          </div>

          <div className="agri-hero-bottom">
            <span>GBC / AGRICULTURE & FOOD</span>
            <a href="#agri-intro">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
            <span>GROWING WITH PURPOSE</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="agri-intro" id="agri-intro">
        <div className="agri-container">
          <SectionLabel number="01">OUR PERSPECTIVE</SectionLabel>

          <div className="agri-intro-layout">
            <h2>
              Food is essential.
              <br />
              <span>How we produce it matters.</span>
            </h2>

            <div className="agri-intro-copy">
              <p>
                Agriculture sits at the centre of human survival, economic
                development and community wellbeing. Yet food production faces
                challenges that demand more than traditional approaches.
              </p>
              <p>
                We see opportunities to combine practical agriculture, research,
                innovation, enterprise and sustainable thinking to develop
                solutions that make a meaningful difference.
              </p>
              <Link to="/about" className="agri-underlined-link">
                Learn about GBC's vision <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="agri-impact-strip">
            <div className="agri-impact-heading">
              <span>OUR AREAS OF IMPACT</span>
              <p>Connected parts of one food system.</p>
            </div>
            <div className="agri-impact-item">
              <Sprout size={21} />
              <strong>Production</strong>
              <span>Growing better</span>
            </div>
            <div className="agri-impact-item">
              <Factory size={21} />
              <strong>Value addition</strong>
              <span>Making more value</span>
            </div>
            <div className="agri-impact-item">
              <ShoppingBasket size={21} />
              <strong>Food access</strong>
              <span>Reaching communities</span>
            </div>
            <div className="agri-impact-item">
              <Recycle size={21} />
              <strong>Sustainability</strong>
              <span>Protecting tomorrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE FOOD SYSTEM */}
      <section className="agri-system">
        <div className="agri-container">
          <div className="agri-system-heading">
            <SectionLabel number="02">THE BIGGER PICTURE</SectionLabel>
            <div className="agri-system-title-row">
              <h2>
                Agriculture is
                <br />
                <em>an entire ecosystem.</em>
              </h2>
              <p>
                From the first seed planted to the food that reaches the table,
                every stage creates opportunities to improve lives and build
                value.
              </p>
            </div>
          </div>

          <div className="agri-system-grid">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="agri-system-card" key={item.title}>
                  <div className="agri-system-card-top">
                    <span>0{index + 1}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="agri-system-card-line" />
                </article>
              );
            })}
          </div>

          <div className="agri-system-footnote">
            <span>ONE CONNECTED SYSTEM</span>
            <p>
              Improving one stage can create value throughout the entire chain.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="agri-focus" id="agri-focus">
        <div className="agri-container">
          <div className="agri-focus-heading">
            <div>
              <SectionLabel number="03">WHAT WE FOCUS ON</SectionLabel>
              <h2>
                Building across
                <br />
                <em>the agricultural landscape.</em>
              </h2>
            </div>
            <p>
              Our focus spans the different disciplines, activities and
              opportunities that contribute to stronger agricultural and food
              systems.
            </p>
          </div>

          <div className="agri-focus-list">
            {agriculturePillars.map((item) => {
              const Icon = item.icon;
              return (
                <article className="agri-focus-row" key={item.number}>
                  <span className="agri-focus-number">{item.number}</span>
                  <span className="agri-focus-icon">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <div className="agri-focus-main">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="agri-focus-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#agri-programmes"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED AGRICULTURE */}
      <section className="agri-feature">
        <div className="agri-feature-image">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=90"
            alt="Plants growing inside a greenhouse"
          />
          <div className="agri-feature-image-caption">
            <span>FIELD NOTE / 001</span>
            <strong>Controlled-environment agriculture</strong>
          </div>
        </div>

        <div className="agri-feature-copy">
          <SectionLabel number="04">A CLOSER LOOK</SectionLabel>
          <span className="agri-feature-kicker">INNOVATION IN PRODUCTION</span>
          <h2>
            The future of farming can grow in <em>new environments.</em>
          </h2>
          <p>
            Greenhouse agriculture and controlled-environment systems create
            opportunities to manage growing conditions, use resources more
            efficiently and explore crops that may be difficult to produce
            consistently in open fields.
          </p>
          <p>
            We are interested in practical agricultural systems that respond to
            local conditions, real production challenges and the needs of food
            consumers.
          </p>
          <div className="agri-feature-points">
            <span>
              <CheckCircle2 size={16} /> Controlled growing conditions
            </span>
            <span>
              <CheckCircle2 size={16} /> Efficient water management
            </span>
            <span>
              <CheckCircle2 size={16} /> Crop monitoring and research
            </span>
          </div>
          <Link to="/contact" className="agri-text-cta">
            Explore collaboration <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="agri-programmes" id="agri-programmes">
        <div className="agri-container">
          <div className="agri-programmes-heading">
            <div>
              <SectionLabel number="05">OUR WORK IN ACTION</SectionLabel>
              <h2>
                Areas of <em>opportunity.</em>
              </h2>
            </div>
            <p>
              Discover the practical fields where we explore ideas, develop
              initiatives and create opportunities for meaningful impact.
            </p>
          </div>

          <div className="agri-programme-grid">
            {agricultureProgrammes.map((programme) => (
              <article className="agri-programme-card" key={programme.number}>
                <Link
                  to={programme.link}
                  className="agri-programme-image"
                  aria-label={`Explore ${programme.title}`}
                >
                  <img src={programme.image} alt={programme.alt} />
                  <span>{programme.number}</span>
                  <i>
                    <ArrowUpRight size={20} />
                  </i>
                </Link>
                <div className="agri-programme-content">
                  <span>{programme.category}</span>
                  <h3>{programme.title}</h3>
                  <p>{programme.description}</p>
                  <Link to={programme.link}>
                    Explore area <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD SECURITY STATEMENT */}
      <section className="agri-food-security">
        <div className="agri-container agri-food-security-layout">
          <div className="agri-food-security-copy">
            <SectionLabel number="06">WHY IT MATTERS</SectionLabel>
            <span className="agri-security-kicker">BEYOND THE FARM</span>
            <h2>
              A stronger food system means a stronger <em>society.</em>
            </h2>
            <p>
              Food security is not simply about producing more. It also involves
              reducing losses, improving storage, strengthening distribution,
              supporting producers and making nutritious food more accessible.
            </p>
            <p>
              We believe agricultural development should be measured by the
              positive difference it makes in people's lives.
            </p>
            <Link to="/contact" className="agri-button agri-button-light">
              Work with us <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="agri-food-security-visual">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1100&q=90"
              alt="A nutritious meal prepared with fresh vegetables and ingredients"
            />
            <div className="agri-security-note">
              <Apple size={23} />
              <div>
                <strong>From production to nutrition</strong>
                <span>Every stage matters.</span>
              </div>
            </div>
            <span className="agri-security-vertical">
              FOOD SYSTEMS / HUMAN IMPACT
            </span>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="agri-approach" id="agri-approach">
        <div className="agri-container">
          <div className="agri-approach-heading">
            <SectionLabel number="07">HOW WE APPROACH IT</SectionLabel>
            <h2>
              Ideas are only the beginning.
              <br />
              <em>Solutions require action.</em>
            </h2>
            <p>
              We approach agricultural challenges through a practical process
              that connects understanding, research, implementation and
              continuous improvement.
            </p>
          </div>

          <div className="agri-approach-grid">
            {approachSteps.map((step) => (
              <article className="agri-approach-step" key={step.number}>
                <span>{step.number}</span>
                <div className="agri-approach-marker">
                  <i />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED DEPARTMENTS */}
      <section className="agri-connections">
        <div className="agri-container agri-connections-layout">
          <div className="agri-connections-copy">
            <SectionLabel number="08">CONNECTED THINKING</SectionLabel>
            <h2>
              Agriculture does not
              <br />
              <em>work in isolation.</em>
            </h2>
            <p>
              Meaningful agricultural solutions often require knowledge and
              collaboration across different fields. We connect agriculture with
              technology, health, research and business to create broader value.
            </p>
            <Link to="/departments" className="agri-underlined-link">
              View all departments <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="agri-connection-list">
            {relatedDepartments.map((department) => (
              <Link
                to={department.href}
                className="agri-connection-item"
                key={department.number}
              >
                <span>{department.number}</span>
                <div>
                  <h3>{department.name}</h3>
                  <p>{department.description}</p>
                </div>
                <ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="agri-cta">
        <div className="agri-cta-pattern" />
        <div className="agri-container agri-cta-content">
          <div className="agri-cta-symbol">
            <Sprout size={32} />
          </div>
          <span>THE NEXT HARVEST STARTS WITH AN IDEA</span>
          <h2>
            Let's grow something
            <br />
            <em>that matters.</em>
          </h2>
          <p>
            Whether you are a farmer, researcher, innovator, organisation or
            someone passionate about food and agriculture, there is room to
            create meaningful solutions together.
          </p>
          <div className="agri-cta-actions">
            <Link to="/contact" className="agri-button agri-button-primary">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
            <Link to="/departments" className="agri-cta-secondary">
              Explore other departments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="agri-cta-bottom">
          <span>GOLDEN BRIDGE CONCEPT</span>
          <span>CONNECTING IDEAS · CREATING VALUE · BUILDING THE FUTURE</span>
        </div>
      </section>
    </main>
  );
}
