import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Network,
  TrendingUp,
  Globe,
} from "lucide-react";
import logo from "../../assets/images/hero_logo.png";

const pillars = [
  {
    number: "01",
    title: "Technology & Digital",
    slug: "technology",
    description: "Building digital solutions and technology-driven services.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Health & Nutrition",
    slug: "health",
    description: "Supporting healthier people and stronger communities.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Agriculture & Food",
    slug: "agriculture",
    description: "Connecting agricultural innovation with food systems.",
    icon: Network,
  },
  {
    number: "04",
    title: "Education & Skills",
    slug: "education",
    description: "Developing knowledge, practical skills and opportunity.",
    icon: TrendingUp,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              IDEAS CONNECTED. POSSIBILITIES UNLOCKED.
            </span>

            <h1>
              Connecting ideas.
              <br />
              <span>Building the future.</span>
            </h1>

            <p className="hero-description">
              Golden Bridge Concept is a multi-sector ecosystem bringing people,
              technology, resources and opportunities together to create
              meaningful value.
            </p>

            <div className="hero-actions">
              <Link to="/about" className="button button-primary">
                Discover GBC <ArrowRight size={18} />
              </Link>

              <Link to="/departments" className="button hero-secondary">
                Explore departments
              </Link>
            </div>

            <p className="hero-tagline">
              Connecting Ideas • Creating Value • Building the Future
            </p>
          </div>

          <div className="hero-visual" aria-label="GBC connected ecosystem">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="hero-core">
              <img
                src={logo}
                alt="Golden Bridge Concept"
                className="hero-logo"
              />
              {/* <strong>GBC</strong>
              <span>CONNECTED ECOSYSTEM</span> */}
            </div>
            <span className="orbit-node node-one">Technology</span>
            <span className="orbit-node node-two">People</span>
            <span className="orbit-node node-three">Ideas</span>
            <span className="orbit-node node-four">Opportunity</span>
            <span className="orbit-node node-five">Education</span>
            <span className="orbit-node node-six">Business</span>
            <span className="orbit-node node-seven">Innovation</span>
            <span className="orbit-node node-eight">Growth</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              One concept. Multiple pathways to{" "}
              <span className="text-gold">value.</span>
            </h2>
            <p>
              We bring different sectors together under one connected vision,
              encouraging collaboration, innovation and sustainable growth.
            </p>
          </div>

          <div className="value-grid">
            <article className="value-card">
              <span className="value-number">01</span>
              <h3>Connect</h3>
              <p>Bring people, ideas and resources together.</p>
            </article>

            <article className="value-card">
              <span className="value-number">02</span>
              <h3>Create</h3>
              <p>Turn knowledge and ideas into practical value.</p>
            </article>

            <article className="value-card">
              <span className="value-number">03</span>
              <h3>Build</h3>
              <p>Develop solutions for lasting progress.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section pillars-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR ECOSYSTEM</span>
            <h2>
              Explore our <span className="text-gold">departments.</span>
            </h2>
            <p>
              Twelve interconnected pillars support the wider GBC vision,
              bringing expertise, resources and opportunities together to create
              lasting value.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Link
                  to={`/departments/${pillar.slug}`}
                  className="pillar-card"
                  key={pillar.number}
                >
                  <div className="pillar-top">
                    <span>{pillar.number}</span>
                    <Icon size={24} />
                  </div>

                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </Link>
              );
            })}
          </div>

          <Link to="/departments" className="text-link">
            View all 12 departments <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">BUILD WITH US</span>
            <h2>Have an idea worth connecting?</h2>
            <p>
              Explore opportunities to collaborate with Golden Bridge Concept.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
