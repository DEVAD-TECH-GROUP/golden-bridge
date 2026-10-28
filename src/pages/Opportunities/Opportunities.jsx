import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Search,
  Users,
} from "lucide-react";

const opportunities = [
  {
    id: 1,
    category: "Partnerships",
    title: "Strategic Partnerships",
    description:
      "Connect with GBC to explore collaborations, shared initiatives, and opportunities to create value across sectors.",
    icon: Handshake,
    audience: "Organizations and partners",
    action: "Discuss a partnership",
  },
  {
    id: 2,
    category: "Careers & Talent",
    title: "Careers and Talent Network",
    description:
      "Introduce your skills, experience, and interests for consideration when relevant opportunities become available.",
    icon: BriefcaseBusiness,
    audience: "Professionals and emerging talent",
    action: "Introduce yourself",
  },
  {
    id: 3,
    category: "Business",
    title: "Business Collaboration",
    description:
      "Explore potential business relationships, service collaborations, and ideas that align with GBC’s ecosystem.",
    icon: Building2,
    audience: "Entrepreneurs and businesses",
    action: "Explore collaboration",
  },
  {
    id: 4,
    category: "Projects & Initiatives",
    title: "Projects and Initiatives",
    description:
      "Share a project idea or discuss participating in initiatives that connect expertise with practical needs.",
    icon: Lightbulb,
    audience: "Project teams and innovators",
    action: "Share a project idea",
  },
  {
    id: 5,
    category: "Learning & Development",
    title: "Learning and Development",
    description:
      "Discuss knowledge-sharing, skills development, mentorship, and other ways to support continuous learning.",
    icon: GraduationCap,
    audience: "Learners, mentors, and educators",
    action: "Discuss learning opportunities",
  },
  {
    id: 6,
    category: "Community Engagement",
    title: "Community Engagement",
    description:
      "Explore ways to contribute skills, ideas, and time to collaborative efforts that support community development.",
    icon: HeartHandshake,
    audience: "Community members and volunteers",
    action: "Get involved",
  },
];

const categories = [
  "All Opportunities",
  "Partnerships",
  "Careers & Talent",
  "Business",
  "Projects & Initiatives",
  "Learning & Development",
  "Community Engagement",
];

const engagementSteps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Identify the opportunity or area of collaboration that best matches your interests and goals.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Contact GBC with a brief introduction, your area of interest, and what you hope to contribute.",
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Discuss alignment, possible next steps, and whether there is a suitable opportunity to move forward.",
  },
];

export default function Opportunities() {
  const [activeCategory, setActiveCategory] = useState("All Opportunities");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOpportunities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return opportunities.filter((item) => {
      const matchesCategory =
        activeCategory === "All Opportunities" ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        [item.title, item.description, item.category, item.audience].some(
          (value) => value.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="opportunities-page">
      <section className="opportunities-hero">
        <div className="opportunities-container opportunities-hero-layout">
          <div className="opportunities-hero-content">
            <span className="opportunities-eyebrow">
              <Users size={15} />
              OPPORTUNITIES AT GBC
            </span>

            <h1>
              Your next opportunity
              <span> starts with a connection.</span>
            </h1>

            <p>
              Discover ways to collaborate, contribute your expertise, develop
              your skills, and create value within the Golden Bridge Concept
              ecosystem.
            </p>

            <div className="opportunities-hero-actions">
              <a
                href="#explore-opportunities"
                className="opportunities-primary"
              >
                Explore opportunities
                <ArrowRight size={17} />
              </a>

              <Link to="/contact" className="opportunities-secondary">
                Contact GBC
              </Link>
            </div>

            <div className="opportunities-hero-note">
              <CheckCircle2 size={16} />
              <span>
                Open enquiries welcome. Availability is confirmed individually.
              </span>
            </div>
          </div>

          <div className="opportunities-visual" aria-hidden="true">
            <div className="opportunities-visual-orbit orbit-one" />
            <div className="opportunities-visual-orbit orbit-two" />

            <div className="opportunities-visual-center">
              <Handshake size={38} />
              <span>CONNECT</span>
            </div>

            <div className="opportunities-floating-card floating-card-one">
              <Users size={19} />
              <span>People</span>
            </div>

            <div className="opportunities-floating-card floating-card-two">
              <Lightbulb size={19} />
              <span>Ideas</span>
            </div>

            <div className="opportunities-floating-card floating-card-three">
              <Building2 size={19} />
              <span>Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      <section className="opportunities-intro">
        <div className="opportunities-container opportunities-intro-layout">
          <div>
            <span className="opportunities-eyebrow">GROW WITH GBC</span>
            <h2>
              Bring your ideas.
              <span> Find your place.</span>
            </h2>
          </div>

          <p>
            Opportunities take different forms. Whether you represent an
            organization, have a business idea, are developing your career, or
            want to contribute to a community initiative, start by finding the
            right area of engagement.
          </p>
        </div>
      </section>

      <section
        className="opportunities-list-section"
        id="explore-opportunities"
      >
        <div className="opportunities-container">
          <div className="opportunities-section-heading">
            <div>
              <span className="opportunities-eyebrow">FIND YOUR PATH</span>
              <h2>Explore opportunities</h2>
              <p>
                Choose an area that aligns with your interests and tell us how
                you would like to get involved.
              </p>
            </div>

            <div className="opportunities-count">
              <strong>{filteredOpportunities.length}</strong>
              <span>
                {filteredOpportunities.length === 1 ? "category" : "categories"}
              </span>
            </div>
          </div>

          <div className="opportunities-toolbar">
            <div className="opportunities-search">
              <Search size={18} />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search opportunities..."
                aria-label="Search opportunities"
              />
            </div>

            {searchQuery && (
              <button
                type="button"
                className="opportunities-clear"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </button>
            )}
          </div>

          <div
            className="opportunities-filters"
            aria-label="Filter opportunities"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`opportunities-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className="opportunities-grid">
              {filteredOpportunities.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="opportunity-card" key={item.id}>
                    <div className="opportunity-card-top">
                      <span className="opportunity-icon">
                        <Icon size={23} />
                      </span>

                      <span className="opportunity-category">
                        {item.category}
                      </span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="opportunity-audience">
                      <Users size={15} />
                      <span>{item.audience}</span>
                    </div>

                    <Link
                      to="/contact"
                      className="opportunity-link"
                      state={{
                        subject: item.title,
                        message: `I am interested in ${item.title}. Please let me know how I can proceed.`,
                      }}
                    >
                      {item.action}
                      <ArrowUpRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="opportunities-empty">
              <Search size={30} />
              <h3>No matching opportunities found</h3>
              <p>Try another search term or choose a different category.</p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Opportunities");
                }}
              >
                View all opportunities
              </button>
            </div>
          )}

          <p className="opportunities-availability-note">
            These are areas for engagement, not confirmed vacancies or active
            application programmes. Specific openings, eligibility, and
            availability must be confirmed by GBC.
          </p>
        </div>
      </section>

      <section className="opportunities-process-section">
        <div className="opportunities-container">
          <div className="opportunities-process-heading">
            <span className="opportunities-eyebrow">HOW TO GET STARTED</span>
            <h2>Three steps to a meaningful connection.</h2>
            <p>
              A straightforward path from your first enquiry to a conversation
              about possible collaboration.
            </p>
          </div>

          <div className="opportunities-process-grid">
            {engagementSteps.map((step) => (
              <article className="opportunities-step" key={step.number}>
                <span className="opportunities-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunities-cta">
        <div className="opportunities-container opportunities-cta-layout">
          <div>
            <span className="opportunities-eyebrow">LET'S CONNECT</span>
            <h2>Have an idea worth exploring?</h2>
            <p>
              Tell us about your interests, expertise, or proposed
              collaboration. Start a conversation with GBC.
            </p>
          </div>

          <div className="opportunities-cta-actions">
            <Link to="/contact" className="opportunities-primary">
              Start a conversation
              <ArrowRight size={17} />
            </Link>

            <Link to="/about" className="opportunities-cta-text-link">
              Learn more about GBC
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
