import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Apple,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Dna,
  HeartPulse,
  Microscope,
  Salad,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Promoting informed health choices, everyday wellbeing and preventive approaches that support healthier individuals and communities.",
    tags: ["Wellness", "Prevention", "Healthy Living"],
  },
  {
    number: "02",
    icon: Salad,
    title: "Nutrition & Healthy Diets",
    description:
      "Exploring balanced diets, food choices and practical nutrition knowledge that support health throughout different stages of life.",
    tags: ["Balanced Diets", "Food Choices", "Nutrition Education"],
  },
  {
    number: "03",
    icon: Apple,
    title: "Food Quality & Safety",
    description:
      "Building awareness of food hygiene, safe handling, storage and practices that help reduce food contamination risks.",
    tags: ["Food Hygiene", "Safe Storage", "Food Handling"],
  },
  {
    number: "04",
    icon: Activity,
    title: "Preventive Health",
    description:
      "Supporting health education, awareness and responsible preventive practices that encourage people to seek appropriate care.",
    tags: ["Health Awareness", "Early Detection", "Prevention"],
  },
  {
    number: "05",
    icon: Microscope,
    title: "Health Research & Innovation",
    description:
      "Exploring research, evidence and responsible innovation that can improve understanding of health and nutrition challenges.",
    tags: ["Health Research", "Evidence", "Innovation"],
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Health Information & Technology",
    description:
      "Exploring how digital tools and well-organized information can support health education, service coordination and responsible data management.",
    tags: ["Digital Health", "Health Records", "Data Awareness"],
  },
  {
    number: "07",
    icon: Users,
    title: "Community Health Education",
    description:
      "Supporting accessible health and nutrition education through community engagement, awareness initiatives and practical learning.",
    tags: ["Public Awareness", "Community Outreach", "Health Literacy"],
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Public Health & Safety",
    description:
      "Promoting awareness of environmental health, sanitation and community practices that contribute to safer living conditions.",
    tags: ["Sanitation", "Environmental Health", "Safety"],
  },
];

const solutionAreas = [
  {
    icon: Stethoscope,
    title: "Health Education Initiatives",
    description:
      "Educational resources and awareness activities that help people understand health topics and make informed decisions.",
  },
  {
    icon: Apple,
    title: "Nutrition Awareness Programmes",
    description:
      "Practical nutrition education focused on balanced eating, food quality and healthier food choices.",
  },
  {
    icon: HeartPulse,
    title: "Community Wellness Activities",
    description:
      "Community-oriented initiatives that encourage preventive health awareness and appropriate use of health services.",
  },
  {
    icon: Dna,
    title: "Research & Evidence",
    description:
      "Exploring research questions, reviewing evidence and identifying opportunities for responsible health-related innovation.",
  },
  {
    icon: Brain,
    title: "Digital Health Literacy",
    description:
      "Helping people understand digital health information and use technology responsibly to access relevant information and services.",
  },
  {
    icon: Syringe,
    title: "Prevention & Health Awareness",
    description:
      "Promoting awareness of appropriate preventive services and encouraging people to consult qualified health professionals.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Identify Needs",
    description:
      "Understand health and nutrition concerns, the people affected and the information or support they need.",
  },
  {
    number: "02",
    title: "Learn & Collaborate",
    description:
      "Use credible information and work with relevant professionals, organizations and community stakeholders.",
  },
  {
    number: "03",
    title: "Develop Initiatives",
    description:
      "Design appropriate educational resources, awareness activities or collaborative projects.",
  },
  {
    number: "04",
    title: "Evaluate Impact",
    description:
      "Gather feedback, assess participation and identify practical ways to improve future initiatives.",
  },
];

const connections = [
  {
    number: "01",
    title: "Technology & Digital",
    description: "Digital health education and responsible information systems",
  },
  {
    number: "02",
    title: "Agriculture & Food",
    description: "Food quality, nutrition, food security and safe handling",
  },
  {
    number: "03",
    title: "Education & Skills",
    description: "Health literacy and nutrition learning resources",
  },
  {
    number: "04",
    title: "Research, Data & Intelligence",
    description: "Research analysis and responsible interpretation of data",
  },
  {
    number: "05",
    title: "Community Development",
    description: "Community wellness education and outreach initiatives",
  },
];

export default function HealthNutrition() {
  return (
    <main className="technology-page health-page">
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
              <span>Health & Nutrition</span>
            </nav>

            <span className="technology-eyebrow">
              <span className="technology-eyebrow-line" />
              GBC DEPARTMENT 02
            </span>

            <h1>
              Health
              <br />
              <span>& Nutrition.</span>
            </h1>

            <p className="technology-hero-lead">
              Supporting healthier lives through knowledge, nutrition and
              community-centred wellbeing.
            </p>

            <p className="technology-hero-description">
              The Health & Nutrition department explores health education,
              nutrition awareness, preventive health, food safety and
              collaborative approaches to improving wellbeing across
              communities.
            </p>

            <div className="technology-hero-actions">
              <a
                href="#health-focus"
                className="technology-btn technology-btn-primary"
              >
                Explore Our Focus Areas
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="technology-btn technology-btn-secondary"
              >
                Discuss an Initiative
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="technology-hero-footnote">
              <CheckCircle2 size={16} />
              <span>
                Better knowledge. Healthier choices. Stronger communities.
              </span>
            </div>
          </div>

          {/* HEALTH VISUAL */}
          <div
            className="technology-visual health-visual"
            aria-label="Health and nutrition illustration"
          >
            <div className="technology-visual-topline">
              <span>
                <span className="technology-live-dot" />
                COMMUNITY WELLBEING
              </span>
              <span>GBC / HEALTH</span>
            </div>

            <div className="technology-visual-canvas">
              <div className="technology-visual-ring ring-one" />
              <div className="technology-visual-ring ring-two" />
              <div className="technology-visual-ring ring-three" />

              <div className="technology-visual-line line-one" />
              <div className="technology-visual-line line-two" />
              <div className="technology-visual-line line-three" />
              <div className="technology-visual-line line-four" />

              <div className="technology-central-node">
                <div className="technology-central-icon">
                  <HeartPulse size={36} strokeWidth={1.5} />
                </div>
                <span>WELLNESS</span>
                <small>HEALTHIER COMMUNITIES</small>
              </div>

              <div className="technology-node tech-node-one">
                <Apple size={21} />
                <span>NUTRITION</span>
              </div>

              <div className="technology-node tech-node-two">
                <Activity size={21} />
                <span>HEALTH</span>
              </div>

              <div className="technology-node tech-node-three">
                <Microscope size={21} />
                <span>RESEARCH</span>
              </div>

              <div className="technology-node tech-node-four">
                <Users size={21} />
                <span>COMMUNITY</span>
              </div>
            </div>

            <div className="technology-visual-footer">
              <span>EDUCATE</span>
              <span className="technology-visual-divider" />
              <span>PREVENT</span>
              <span className="technology-visual-divider" />
              <span>SUPPORT</span>
            </div>
          </div>
        </div>

        <a
          href="#health-overview"
          className="technology-scroll-cue"
          aria-label="Scroll to department overview"
        >
          <span>DISCOVER THE DEPARTMENT</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* OVERVIEW */}
      <section className="technology-overview" id="health-overview">
        <div className="container technology-overview-grid">
          <div className="technology-overview-heading">
            <span className="technology-section-label">
              ABOUT THE DEPARTMENT
            </span>

            <h2>
              Health is a foundation.
              <span> Knowledge helps strengthen it.</span>
            </h2>
          </div>

          <div className="technology-overview-content">
            <p>
              At Golden Bridge Concept, Health & Nutrition focuses on knowledge,
              awareness and collaborative initiatives that can support healthier
              individuals and communities.
            </p>

            <p>
              Our areas of interest include nutrition education, food safety,
              preventive health, community wellness, health research and the
              responsible use of digital tools for health information.
            </p>

            <p>
              We recognize the importance of credible evidence and qualified
              professionals. Our role is to explore opportunities for education,
              collaboration and community engagement rather than replace
              professional medical assessment or treatment.
            </p>

            <Link to="/departments" className="technology-text-link">
              Explore the GBC ecosystem
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="technology-focus" id="health-focus">
        <div className="container">
          <div className="technology-section-heading">
            <div>
              <span className="technology-section-label">
                OUR AREAS OF FOCUS
              </span>

              <h2>
                Promoting wellbeing
                <span> through informed choices.</span>
              </h2>

              <p>
                Explore the fields and capabilities within the Health &
                Nutrition department.
              </p>
            </div>

            <span className="technology-section-index">
              02 <span>/ 08</span>
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
                FROM KNOWLEDGE TO ACTION
              </span>

              <h2>
                Practical initiatives.
                <span> Meaningful wellbeing.</span>
              </h2>

              <p>
                Potential areas for health education, responsible collaboration
                and community-oriented initiatives.
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
                Understand the need.
                <span> Support positive change.</span>
              </h2>

              <p>
                A collaborative framework for exploring health and nutrition
                initiatives responsibly.
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
              Health improves when
              <span> knowledge and sectors connect.</span>
            </h2>

            <p>
              Health and nutrition intersect with technology, food systems,
              education, research and community development. Collaboration helps
              identify more relevant and practical initiatives.
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

                <span>{connection.title}</span>

                <span className="technology-connection-detail">
                  {connection.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="technology-cta">
        <div className="container">
          <div className="technology-cta-inner">
            <div className="technology-cta-symbol">
              <HeartPulse size={30} strokeWidth={1.5} />
            </div>

            <div className="technology-cta-copy">
              <span className="technology-section-label">
                HAVE A HEALTH OR NUTRITION IDEA?
              </span>

              <h2>Let's explore how we can support healthier communities.</h2>

              <p>
                Have an educational initiative, a community wellness idea or an
                opportunity for collaboration? Start a conversation with GBC.
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
