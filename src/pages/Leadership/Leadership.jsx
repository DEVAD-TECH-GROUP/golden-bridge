import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  Handshake,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const leadershipPrinciples = [
  {
    icon: Compass,
    number: "01",
    title: "Vision & Direction",
    description:
      "Establishing a clear direction and keeping the organization focused on its long-term purpose.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Integrity & Accountability",
    description:
      "Encouraging responsible decisions, transparency and accountability across the organization.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Collaboration",
    description:
      "Building partnerships and encouraging cooperation across departments and sectors.",
  },
  {
    icon: Target,
    number: "04",
    title: "Strategic Execution",
    description:
      "Turning organizational priorities into practical initiatives, measurable progress and meaningful outcomes.",
  },
];

export default function Leadership() {
  return (
    <main className="leadership-page">
      <section className="leadership-hero">
        <div className="leadership-hero-grid" aria-hidden="true" />

        <div className="container leadership-hero-content">
          <span className="leadership-eyebrow">
            <span />
            LEADERSHIP & GOVERNANCE
          </span>

          <h1>
            Leadership that
            <br />
            <span>connects vision to action.</span>
          </h1>

          <p>
            Building a connected ecosystem requires clear direction, responsible
            leadership and a shared commitment to creating meaningful value
            across sectors.
          </p>

          <div className="leadership-hero-actions">
            <a href="#leadership-approach" className="leadership-button">
              Our leadership approach <ArrowRight size={18} />
            </a>

            <Link to="/about" className="leadership-secondary-link">
              Discover GBC
            </Link>
          </div>

          <div className="leadership-hero-footer">
            <span>GOLDEN BRIDGE CONCEPT</span>
            <span>CONNECTING IDEAS • CREATING VALUE • BUILDING THE FUTURE</span>
          </div>
        </div>

        <div
          className="leadership-orbit leadership-orbit-one"
          aria-hidden="true"
        >
          <Users size={23} />
        </div>

        <div
          className="leadership-orbit leadership-orbit-two"
          aria-hidden="true"
        >
          <Network size={20} />
        </div>
      </section>

      <section
        className="leadership-intro section-padding"
        id="leadership-approach"
      >
        <div className="container leadership-intro-grid">
          <div>
            <span className="leadership-section-label">01 / OUR APPROACH</span>
            <h2>
              One direction.
              <span> Shared responsibility.</span>
            </h2>
          </div>

          <div className="leadership-intro-copy">
            <p className="leadership-lead">
              Leadership at GBC is about creating the conditions for people,
              ideas and departments to work together toward a common purpose.
            </p>

            <p>
              As a multi-sector organization, Golden Bridge Concept requires
              coordination across different areas of expertise. Our leadership
              approach is designed to support strategic thinking, responsible
              governance, collaboration and the effective delivery of
              initiatives.
            </p>

            <p>
              We believe leadership is not only about setting direction. It also
              means creating clarity, encouraging accountability and helping
              teams translate ideas into practical results.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-principles section-padding">
        <div className="container">
          <div className="leadership-section-heading">
            <span className="leadership-section-label">
              02 / LEADERSHIP PRINCIPLES
            </span>
            <h2>
              The principles behind
              <span> our direction.</span>
            </h2>
            <p>
              The standards that should guide leadership, decisions and
              collaboration throughout the GBC ecosystem.
            </p>
          </div>

          <div className="leadership-principles-grid">
            {leadershipPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="leadership-principle-card"
                  key={principle.number}
                >
                  <div className="leadership-principle-top">
                    <span className="leadership-principle-icon">
                      <Icon size={23} />
                    </span>
                    <span className="leadership-principle-number">
                      {principle.number}
                    </span>
                  </div>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <span className="leadership-principle-accent" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="leadership-ecosystem section-padding">
        <div className="container leadership-ecosystem-grid">
          <div className="leadership-ecosystem-copy">
            <span className="leadership-section-label">
              03 / LEADING A CONNECTED ECOSYSTEM
            </span>

            <h2>
              Different expertise.
              <span> A shared purpose.</span>
            </h2>

            <p>
              GBC brings together departments working across technology, health,
              agriculture, education, enterprise and other important sectors.
              Effective leadership helps these different capabilities complement
              one another rather than operate in isolation.
            </p>

            <Link to="/departments" className="leadership-inline-link">
              Explore our departments <ArrowRight size={18} />
            </Link>
          </div>

          <div className="leadership-ecosystem-visual">
            <div className="leadership-visual-ring ring-one" />
            <div className="leadership-visual-ring ring-two" />

            <div className="leadership-visual-core">
              <Network size={30} />
              <strong>GBC</strong>
              <span>SHARED VISION</span>
            </div>

            <span className="leadership-node leadership-node-one">People</span>
            <span className="leadership-node leadership-node-two">Ideas</span>
            <span className="leadership-node leadership-node-three">
              Strategy
            </span>
            <span className="leadership-node leadership-node-four">Impact</span>
          </div>
        </div>
      </section>

      <section className="leadership-commitment section-padding">
        <div className="container leadership-commitment-inner">
          <div className="leadership-commitment-icon">
            <Handshake size={28} />
          </div>

          <div>
            <span className="leadership-section-label">
              04 / OUR COMMITMENT
            </span>

            <h2>
              Leadership in service
              <span> of lasting value.</span>
            </h2>

            <p>
              We aim to build a culture where integrity guides decisions,
              collaboration strengthens execution and a shared vision keeps our
              efforts focused on meaningful outcomes.
            </p>
          </div>

          <Link to="/contact" className="leadership-button">
            Connect with GBC <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
