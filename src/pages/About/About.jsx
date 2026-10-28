import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Compass,
  Eye,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const coreValues = [
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We bring people, organizations and ideas together because meaningful progress is stronger when we work together.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We encourage creative thinking and practical solutions that respond to real challenges and emerging opportunities.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We value honesty, accountability, transparency and responsible decision-making in everything we do.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description:
      "We pursue quality, continuous improvement and meaningful results across every sector of our ecosystem.",
    number: "04",
  },
  {
    icon: Compass,
    title: "Sustainability",
    description:
      "We think beyond immediate gains and work toward solutions that create lasting economic, social and environmental value.",
    number: "05",
  },
  {
    icon: HeartHandshake,
    title: "Impact",
    description:
      "We measure progress by the value we create, the people we empower and the positive change we help make possible.",
    number: "06",
  },
];

const departments = [
  { name: "Technology & Digital", slug: "technology" },
  { name: "Health & Nutrition", slug: "health" },
  { name: "Agriculture & Food", slug: "agriculture" },
  { name: "Education & Skills", slug: "education" },
  { name: "Business & Enterprise", slug: "business" },
  { name: "Research, Data & Intelligence", slug: "research" },
  { name: "Finance & Investment", slug: "finance" },
  { name: "Media & Communication", slug: "media" },
  { name: "Logistics & Distribution", slug: "logistics" },
  { name: "Community Development", slug: "community" },
  { name: "Real Estate & Infrastructure", slug: "real-estate" },
  { name: "Innovation & Strategy", slug: "innovation" },
];

const ecosystemSteps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Bring people, knowledge, resources and opportunities together.",
  },
  {
    number: "02",
    title: "Create",
    description: "Turn ideas into practical solutions, services and ventures.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop sustainable initiatives that deliver lasting value.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />

        <div className="container about-hero-content">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            GET TO KNOW US
          </div>

          <h1>
            One vision.
            <br />
            <span>Many possibilities.</span>
          </h1>

          <p className="about-hero-description">
            Golden Bridge Concept is a multi-sector organization built around a
            simple belief: when ideas, people, technology and resources connect,
            possibilities become progress.
          </p>

          <div className="about-hero-actions">
            <Link
              to="/departments"
              className="about-button about-button-primary"
            >
              Explore Our Ecosystem <ArrowRight size={18} />
            </Link>

            <a href="#our-story" className="about-text-link">
              Discover our story <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="about-hero-bottom">
            <span>GOLDEN BRIDGE CONCEPT</span>
            <span>CONNECTING IDEAS • CREATING VALUE • BUILDING THE FUTURE</span>
          </div>
        </div>

        <div className="about-hero-orbit orbit-top" aria-hidden="true">
          <Network size={23} />
        </div>
        <div className="about-hero-orbit orbit-bottom" aria-hidden="true">
          <Sparkles size={20} />
        </div>
      </section>

      <section className="about-story section-padding" id="our-story">
        <div className="container about-story-grid">
          <div className="about-section-intro">
            <span className="about-section-label">01 / OUR STORY</span>
            <h2>
              Bridging the gap between
              <span> ideas and impact.</span>
            </h2>
          </div>

          <div className="about-story-content">
            <p className="about-lead">
              We see a world full of ideas, talent and resources that can
              achieve more when they are connected.
            </p>

            <p>
              Golden Bridge Concept (GBC) is built on the principle of
              connection. We bring together different sectors, capabilities and
              opportunities within one broader ecosystem, creating room for
              collaboration, innovation and shared growth.
            </p>

            <p>
              From technology and education to agriculture, health, finance and
              enterprise, our approach recognizes that the challenges facing
              communities and businesses are interconnected. We therefore aim to
              encourage solutions that look beyond a single discipline and
              create value across multiple areas.
            </p>

            <p>
              Our ambition is to build meaningful connections that help
              promising ideas grow into practical initiatives, sustainable
              ventures and positive outcomes for people and communities.
            </p>

            <div className="about-story-signature">
              <span className="about-signature-icon">
                <Blocks size={23} />
              </span>
              <div>
                <strong>A connected ecosystem.</strong>
                <span>Different strengths. Shared progress.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose section-padding">
        <div className="container">
          <div className="about-centered-heading">
            <span className="about-section-label">02 / OUR PURPOSE</span>
            <h2>
              Guided by purpose.
              <span> Driven by possibility.</span>
            </h2>
            <p>
              Our direction defines what we aspire to achieve and how we intend
              to make it happen.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Eye size={27} />
              </div>
              <span className="about-card-kicker">OUR VISION</span>
              <h3>A future where connections create possibilities.</h3>
              <p>
                To build a connected, innovative and sustainable multi-sector
                ecosystem that empowers people, advances enterprise and
                contributes to lasting development.
              </p>
              <span className="about-card-index">V / 01</span>
            </article>

            <article className="about-purpose-card about-purpose-card-featured">
              <div className="about-purpose-icon">
                <Target size={27} />
              </div>
              <span className="about-card-kicker">OUR MISSION</span>
              <h3>Turn ideas into meaningful value.</h3>
              <p>
                To connect people, knowledge, technology and resources across
                diverse sectors, enabling collaboration and developing practical
                solutions, valuable opportunities and sustainable initiatives.
              </p>
              <span className="about-card-index">M / 02</span>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values section-padding">
        <div className="container">
          <div className="about-values-heading">
            <div>
              <span className="about-section-label">
                03 / WHAT WE STAND FOR
              </span>
              <h2>
                Our values.
                <span> Our foundation.</span>
              </h2>
            </div>
            <p>
              The principles that shape our decisions, partnerships, standards
              and the impact we strive to create.
            </p>
          </div>

          <div className="about-values-grid">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.number}>
                  <div className="about-value-top">
                    <span className="about-value-icon">
                      <Icon size={23} />
                    </span>
                    <span className="about-value-number">{value.number}</span>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <span className="about-value-accent" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-ecosystem section-padding">
        <div className="container">
          <div className="about-ecosystem-heading">
            <span className="about-section-label">04 / THE GBC ECOSYSTEM</span>
            <h2>
              Twelve departments.
              <span> One connected vision.</span>
            </h2>
            <p>
              Each department brings a distinct area of expertise to a wider
              network designed to encourage collaboration and create value
              across sectors.
            </p>
          </div>

          <div className="about-departments-grid">
            {departments.map((department, index) => (
              <Link
                to={`/departments/${department.slug}`}
                className="about-department-item"
                key={department.slug}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{department.name}</p>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>

          <div className="about-ecosystem-note">
            <Network size={25} />
            <p>
              <strong>Connected by design.</strong>
              <span>
                Our departments represent different capabilities working toward
                a broader purpose: creating value through connection.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="about-method section-padding">
        <div className="container">
          <div className="about-centered-heading">
            <span className="about-section-label">05 / HOW WE THINK</span>
            <h2>
              From connection
              <span> to lasting impact.</span>
            </h2>
            <p>Our approach is built around three complementary ideas.</p>
          </div>

          <div className="about-method-grid">
            {ecosystemSteps.map((step, index) => (
              <article className="about-method-step" key={step.number}>
                <span className="about-method-number">{step.number}</span>
                <div className="about-method-line">
                  <span />
                  {index < ecosystemSteps.length - 1 && (
                    <ArrowRight size={17} />
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div className="about-cta-icon">
            <Users size={29} />
          </div>

          <div className="about-cta-copy">
            <span className="about-section-label">
              BE PART OF THE CONNECTION
            </span>
            <h2>
              Great things happen
              <span> when we connect.</span>
            </h2>
            <p>
              Explore our departments, discover opportunities and learn more
              about the world of possibilities within Golden Bridge Concept.
            </p>
          </div>

          <div className="about-cta-actions">
            <Link
              to="/departments"
              className="about-button about-button-primary"
            >
              Explore Departments <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="about-button about-button-outline">
              Contact GBC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
