import { Link } from "react-router-dom";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Apple,
  Baby,
  Brain,
  CheckCircle2,
  ClipboardPlus,
  Dna,
  HeartPulse,
  Leaf,
  Microscope,
  Pill,
  Salad,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Thermometer,
  Users,
} from "lucide-react";

const healthPillars = [
  {
    number: "01",
    title: "Healthcare & Medical Services",
    description:
      "Exploring healthcare delivery, medical services, clinical practice and approaches that improve access to quality care.",
    icon: Stethoscope,
    tags: ["Clinical care", "Medical services", "Health systems"],
  },
  {
    number: "02",
    title: "Nutrition & Healthy Food",
    description:
      "Promoting nutrition awareness, balanced diets, food literacy and healthier eating habits for individuals and families.",
    icon: Salad,
    tags: ["Healthy eating", "Food literacy", "Nutrition"],
  },
  {
    number: "03",
    title: "Preventive Healthcare",
    description:
      "Encouraging prevention, early detection, health screening and informed decisions that help reduce avoidable health risks.",
    icon: ShieldCheck,
    tags: ["Prevention", "Screening", "Awareness"],
  },
  {
    number: "04",
    title: "Medical Research & Innovation",
    description:
      "Exploring research, scientific knowledge and innovations that can contribute to better health outcomes.",
    icon: Microscope,
    tags: ["Research", "Medical science", "Innovation"],
  },
  {
    number: "05",
    title: "Community & Public Health",
    description:
      "Supporting community health education, public awareness, outreach and initiatives that promote collective wellbeing.",
    icon: Users,
    tags: ["Public health", "Outreach", "Community"],
  },
  {
    number: "06",
    title: "Digital Health & Technology",
    description:
      "Examining how digital platforms, health data and emerging technologies can support healthcare and health education.",
    icon: Activity,
    tags: ["Digital health", "Health data", "Innovation"],
  },
];

const programmes = [
  {
    number: "01",
    category: "Medical care",
    title: "Healthcare Awareness",
    description:
      "Initiatives that improve understanding of health conditions, available care options and responsible health decisions.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Healthcare professional working in a clinical environment",
    className: "health-programme--care",
  },
  {
    number: "02",
    category: "Nutrition",
    title: "Nutrition & Food Education",
    description:
      "Practical learning about balanced diets, food groups, nutrition needs and healthy eating habits.",
    icon: Apple,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fresh vegetables and healthy food in a bowl",
    className: "health-programme--nutrition",
  },
  {
    number: "03",
    category: "Prevention",
    title: "Preventive Health Initiatives",
    description:
      "Promoting health checks, early detection, hygiene and everyday practices that support disease prevention.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Medical equipment used in healthcare",
    className: "health-programme--prevention",
  },
];

const medicalTools = [
  { label: "Stethoscope", icon: Stethoscope },
  { label: "Diagnostic equipment", icon: Thermometer },
  { label: "Medical instruments", icon: Syringe },
  { label: "Clinical supplies", icon: Pill },
  { label: "Health monitoring", icon: Activity },
  { label: "Medical research", icon: Microscope },
];

const approach = [
  {
    number: "01",
    title: "Identify",
    description:
      "Understand health needs, nutrition challenges and gaps affecting individuals and communities.",
    icon: ClipboardPlus,
  },
  {
    number: "02",
    title: "Research",
    description:
      "Explore evidence, information and practical approaches to the identified challenges.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Educate & Act",
    description:
      "Translate knowledge into awareness, learning, partnerships and practical initiatives.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Evaluate outcomes, learn from implementation and strengthen future interventions.",
    icon: CheckCircle2,
  },
];

const relatedDepartments = [
  {
    number: "01",
    title: "Technology",
    description: "Digital health tools, data and technology-enabled care.",
    to: "/departments/technology",
  },
  {
    number: "02",
    title: "Agriculture",
    description: "Food production, food quality and nutrition systems.",
    to: "/departments/agriculture",
  },
  {
    number: "03",
    title: "Research",
    description: "Scientific investigation, evidence and innovation.",
    to: "/departments/research",
  },
  {
    number: "04",
    title: "Education",
    description: "Health literacy, learning and public awareness.",
    to: "/departments/education",
  },
];

function HealthEyebrow({ children }) {
  return (
    <div className="health-eyebrow">
      <span className="health-eyebrow-mark" />
      <span>{children}</span>
    </div>
  );
}

export default function HealthNutrition() {
  return (
    <main className="health-page">
      {/* HERO — MEDICAL + NATURAL WELLNESS */}
      <section className="health-hero" id="health-home">
        <div className="health-container">
          <nav className="health-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/departments">Departments</Link>
            <span>/</span>
            <span aria-current="page">Health & Nutrition</span>
          </nav>

          <div className="health-hero-layout">
            <div className="health-hero-copy">
              <HealthEyebrow>
                Golden Bridge Concept / Health & Nutrition
              </HealthEyebrow>

              <h1>
                Advancing
                <span className="health-heading-accent"> health.</span>
                <br />
                Nourishing
                <span className="health-heading-accent"> life.</span>
              </h1>

              <p className="health-hero-intro">
                Where healthcare, medical science and nutrition come together to
                create healthier people and stronger communities.
              </p>

              <p className="health-hero-description">
                We explore practical solutions across healthcare, preventive
                medicine, nutrition, research and wellness — because a healthier
                society is built through knowledge, access, innovation and
                informed everyday choices.
              </p>

              <div className="health-hero-actions">
                <Link to="/contact" className="health-button">
                  Explore collaboration
                  <ArrowUpRight size={18} />
                </Link>

                <a href="#health-pillars" className="health-link-arrow">
                  Discover our work
                  <ArrowDown size={17} />
                </a>
              </div>

              <div className="health-hero-trust">
                <span className="health-trust-icon">
                  <HeartPulse size={19} />
                </span>
                <span>
                  Better health is not one solution.
                  <strong> It is a connected effort.</strong>
                </span>
              </div>
            </div>

            <div className="health-hero-art">
              <div className="health-hero-main-image">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                  alt="Medical professional using healthcare equipment"
                />
                <span className="health-image-caption">
                  Healthcare · Science · Wellbeing
                </span>
              </div>

              <div className="health-hero-food-image">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=85"
                  alt="Fresh fruits and vegetables for healthy nutrition"
                />
              </div>

              <div className="health-hero-medical-card">
                <span className="health-medical-card-icon">
                  <Activity size={20} />
                </span>
                <span>
                  <strong>Whole-person health</strong>
                  <small>Care, prevention and nutrition</small>
                </span>
                <ArrowUpRight size={18} />
              </div>

              <div className="health-hero-orbit health-hero-orbit-one" />
              <div className="health-hero-orbit health-hero-orbit-two" />

              <span className="health-hero-index">H / N — 01</span>
            </div>
          </div>

          <div className="health-hero-bottom">
            <span>HEALTHCARE</span>
            <span className="health-hero-bottom-line" />
            <span>NUTRITION</span>
            <span className="health-hero-bottom-line" />
            <span>RESEARCH</span>
            <span className="health-hero-bottom-line" />
            <span>WELLNESS</span>
            <a href="#health-overview" aria-label="Scroll to overview">
              <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="health-overview" id="health-overview">
        <div className="health-container">
          <div className="health-section-topline">
            <HealthEyebrow>Our perspective</HealthEyebrow>
            <span className="health-section-index">01 / THE BIG PICTURE</span>
          </div>

          <div className="health-overview-layout">
            <div className="health-overview-heading">
              <h2>
                Health is not
                <br />
                simply the absence
                <br />
                of <span>illness.</span>
              </h2>
            </div>

            <div className="health-overview-content">
              <div className="health-overview-symbol">
                <HeartPulse size={29} />
              </div>

              <p className="health-overview-lead">
                It is the ability to live, grow, function and thrive.
              </p>

              <p>
                Health and wellbeing are influenced by many connected factors —
                from access to healthcare and medical knowledge to nutrition,
                environment, lifestyle and community support.
              </p>

              <p>
                Our department explores these connections and promotes practical
                approaches that can improve health awareness, encourage
                prevention and support better quality of life.
              </p>

              <Link to="/about" className="health-inline-link">
                Discover Golden Bridge Concept
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="health-overview-bottom">
            <div className="health-overview-stat">
              <span className="health-stat-icon">
                <Stethoscope size={21} />
              </span>
              <span>
                <strong>Healthcare</strong>
                <small>Care and access</small>
              </span>
            </div>

            <div className="health-overview-stat">
              <span className="health-stat-icon">
                <Salad size={21} />
              </span>
              <span>
                <strong>Nutrition</strong>
                <small>Food and wellbeing</small>
              </span>
            </div>

            <div className="health-overview-stat">
              <span className="health-stat-icon">
                <Microscope size={21} />
              </span>
              <span>
                <strong>Research</strong>
                <small>Evidence and discovery</small>
              </span>
            </div>

            <div className="health-overview-stat">
              <span className="health-stat-icon">
                <ShieldCheck size={21} />
              </span>
              <span>
                <strong>Prevention</strong>
                <small>Awareness and action</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL EQUIPMENT FEATURE */}
      <section className="health-medical" id="healthcare">
        <div className="health-container">
          <div className="health-medical-layout">
            <div className="health-medical-visual">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1100&q=85"
                alt="Medical instruments and clinical equipment"
                loading="lazy"
              />

              <div className="health-medical-image-label">
                <span className="health-live-dot" />
                <span>MEDICAL SCIENCE & CARE</span>
              </div>

              <div className="health-medical-number">02</div>
            </div>

            <div className="health-medical-copy">
              <HealthEyebrow>Healthcare & medical science</HealthEyebrow>

              <h2>
                Advancing the
                <span> understanding</span>
                of healthcare.
              </h2>

              <p>
                Medical knowledge, equipment, diagnostics and healthcare
                services play important roles in identifying health needs,
                supporting treatment and improving patient outcomes.
              </p>

              <p>
                We explore the healthcare ecosystem — from clinical environments
                and medical equipment to health education, preventive services
                and emerging medical innovations.
              </p>

              <div className="health-medical-tool-grid">
                {medicalTools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <div className="health-medical-tool" key={tool.label}>
                      <Icon size={18} />
                      <span>{tool.label}</span>
                    </div>
                  );
                })}
              </div>

              <Link to="/contact" className="health-text-link">
                Discuss healthcare initiatives
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION FEATURE */}
      <section className="health-nutrition" id="health-nutrition">
        <div className="health-container">
          <div className="health-nutrition-heading">
            <div>
              <HealthEyebrow>Nutrition & healthy living</HealthEyebrow>
              <h2>
                Nourishment for
                <span> better living.</span>
              </h2>
            </div>

            <p>
              Healthy food choices, nutrition knowledge and responsible food
              practices are essential parts of individual and community
              wellbeing.
            </p>
          </div>

          <div className="health-nutrition-layout">
            <div className="health-nutrition-main-image">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85"
                alt="A fresh bowl of vegetables and nutritious food"
                loading="lazy"
              />

              <div className="health-nutrition-image-overlay">
                <span>FOOD IS PART OF HEALTH.</span>
                <strong>Eat well. Live well.</strong>
              </div>
            </div>

            <div className="health-nutrition-side">
              <div className="health-nutrition-small-image">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=85"
                  alt="A selection of fresh fruits, vegetables and healthy ingredients"
                  loading="lazy"
                />
              </div>

              <div className="health-nutrition-text">
                <span className="health-nutrition-number">03 / NUTRITION</span>

                <h3>
                  Better food knowledge.
                  <br />
                  Better everyday choices.
                </h3>

                <p>
                  We promote practical understanding of balanced diets,
                  nutrition needs, food quality, food safety and healthy eating
                  habits.
                </p>

                <Link to="/contact" className="health-inline-link">
                  Explore nutrition initiatives
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div className="health-nutrition-points">
            <div>
              <Apple size={21} />
              <span>Food literacy</span>
            </div>
            <div>
              <Salad size={21} />
              <span>Balanced nutrition</span>
            </div>
            <div>
              <Leaf size={21} />
              <span>Healthy food choices</span>
            </div>
            <div>
              <Baby size={21} />
              <span>Nutrition across life stages</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT PILLARS */}
      <section className="health-pillars" id="health-pillars">
        <div className="health-container">
          <div className="health-section-topline">
            <HealthEyebrow>Our areas of focus</HealthEyebrow>
            <span className="health-section-index">04 / OUR PILLARS</span>
          </div>

          <div className="health-pillars-heading">
            <h2>
              A connected approach
              <br />
              to <span>human wellbeing.</span>
            </h2>

            <p>
              Our work spans multiple areas of health and nutrition, bringing
              together knowledge, research, education and practical action.
            </p>
          </div>

          <div className="health-pillar-list">
            {healthPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <a
                  href="#health-programmes"
                  className="health-pillar-row"
                  key={pillar.number}
                  aria-label={`Explore programmes related to ${pillar.title}`}
                >
                  <span className="health-pillar-number">{pillar.number}</span>

                  <span className="health-pillar-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </span>

                  <span className="health-pillar-content">
                    <strong>{pillar.title}</strong>
                    <span className="health-pillar-description">
                      {pillar.description}
                    </span>

                    <span className="health-pillar-tags">
                      {pillar.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </span>
                  </span>

                  <span className="health-pillar-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="health-programmes" id="health-programmes">
        <div className="health-container">
          <div className="health-programmes-heading">
            <HealthEyebrow>From knowledge to action</HealthEyebrow>

            <h2>
              Areas where
              <span> impact begins.</span>
            </h2>

            <p>
              We explore practical programmes and collaborative initiatives that
              respond to health, nutrition and wellbeing needs.
            </p>
          </div>

          <div className="health-programme-grid">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <Link
                  to="/contact"
                  className={`health-programme ${programme.className}`}
                  key={programme.number}
                >
                  <div className="health-programme-image">
                    <img
                      src={programme.image}
                      alt={programme.imageAlt}
                      loading="lazy"
                    />

                    <span className="health-programme-image-number">
                      {programme.number}
                    </span>
                  </div>

                  <div className="health-programme-content">
                    <div className="health-programme-category">
                      <Icon size={16} />
                      <span>{programme.category}</span>
                    </div>

                    <h3>{programme.title}</h3>
                    <p>{programme.description}</p>

                    <span className="health-programme-link">
                      Explore this area <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH & PREVENTION BANNER */}
      <section className="health-research" id="health-research">
        <div className="health-container health-research-layout">
          <div className="health-research-copy">
            <HealthEyebrow>Research · Prevention · Innovation</HealthEyebrow>

            <h2>
              Knowledge that
              <br />
              supports <span>better health.</span>
            </h2>

            <p>
              Reliable information, scientific research and health education
              help people make more informed decisions. We believe that
              knowledge should lead to understanding — and understanding should
              support meaningful action.
            </p>

            <Link to="/contact" className="health-button health-button-light">
              Collaborate with us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="health-research-visual">
            <img
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professionals discussing medical research"
              loading="lazy"
            />

            <div className="health-research-stamp">
              <Dna size={25} />
              <span>SCIENCE</span>
              <strong>For better living</strong>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="health-approach" id="health-approach">
        <div className="health-container">
          <div className="health-approach-heading">
            <HealthEyebrow>Our approach</HealthEyebrow>

            <h2>
              Understand the need.
              <br />
              <span>Develop the response.</span>
            </h2>

            <p>
              We follow a practical process that connects identified needs with
              research, education, implementation and improvement.
            </p>
          </div>

          <div className="health-approach-grid">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <div className="health-approach-step" key={step.number}>
                  <div className="health-approach-top">
                    <span>{step.number}</span>
                    <Icon size={23} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED DEPARTMENTS */}
      <section className="health-connections" id="health-connections">
        <div className="health-container health-connections-layout">
          <div className="health-connections-copy">
            <HealthEyebrow>Connected disciplines</HealthEyebrow>

            <h2>
              Health is connected
              <span> to everything.</span>
            </h2>

            <p>
              Better health outcomes require collaboration across sectors.
              Technology, agriculture, research and education all have roles to
              play in building healthier communities.
            </p>

            <Link to="/departments" className="health-connection-button">
              Explore all departments
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="health-connection-list">
            {relatedDepartments.map((department) => (
              <Link
                to={department.to}
                className="health-connection-item"
                key={department.number}
              >
                <span className="health-connection-number">
                  {department.number}
                </span>

                <span className="health-connection-content">
                  <strong>{department.title}</strong>
                  <small>{department.description}</small>
                </span>

                <ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="health-cta" id="health-contact">
        <div className="health-container">
          <div className="health-cta-content">
            <span className="health-cta-icon">
              <HeartPulse size={28} />
            </span>

            <HealthEyebrow>Let's make a difference</HealthEyebrow>

            <h2>
              Healthier people.
              <br />
              <span>Stronger communities.</span>
            </h2>

            <p>
              Have a health initiative, research idea, nutrition project or
              partnership opportunity? Let's explore how we can contribute to a
              healthier future.
            </p>

            <Link to="/contact" className="health-button">
              Start a conversation
              <ArrowUpRight size={18} />
            </Link>

            <span className="health-cta-caption">
              GOLDEN BRIDGE CONCEPT · HEALTH & NUTRITION
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
