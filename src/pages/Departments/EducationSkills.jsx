import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Brain,
  Laptop,
  Wrench,
  BriefcaseBusiness,
  Users,
  Presentation,
  FlaskConical,
  Globe2,
  BookMarked,
  Puzzle,
  MessageCircle,
  Library,
  CheckCircle2,
  ChevronRight,
  ChartNoAxesCombined,
} from "lucide-react";

const learningAreas = [
  {
    number: "01",
    icon: BookOpen,
    title: "Foundational & General Education",
    description:
      "Building essential knowledge, literacy, numeracy, critical thinking and the foundations needed for lifelong learning.",
    tags: ["Foundational knowledge", "Literacy", "Critical thinking"],
  },
  {
    number: "02",
    icon: Laptop,
    title: "Digital & Technology Skills",
    description:
      "Developing practical digital capabilities and technical knowledge relevant to an increasingly connected world.",
    tags: ["Digital literacy", "Programming", "Digital tools"],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Technical & Vocational Skills",
    description:
      "Connecting learning with practical experience through hands-on training, technical disciplines and applied skills.",
    tags: ["Practical training", "Technical skills", "Craftsmanship"],
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Professional & Career Development",
    description:
      "Helping people strengthen workplace capabilities, professional confidence and readiness for changing career opportunities.",
    tags: ["Career readiness", "Workplace skills", "Professional growth"],
  },
  {
    number: "05",
    icon: Brain,
    title: "Personal Development & Leadership",
    description:
      "Encouraging self-development, communication, leadership, creativity, discipline and responsible decision-making.",
    tags: ["Leadership", "Communication", "Personal growth"],
  },
  {
    number: "06",
    icon: FlaskConical,
    title: "Research & Knowledge Development",
    description:
      "Promoting inquiry, experimentation, knowledge sharing and the ability to use evidence to understand and solve problems.",
    tags: ["Research", "Innovation", "Knowledge sharing"],
  },
];

const learningProgrammes = [
  {
    number: "01",
    category: "PRACTICAL LEARNING",
    title: "Hands-on Skills Development",
    description:
      "Learning experiences that help participants move beyond theory and develop abilities through practice, projects and guided activities.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "Students collaborating around a table during a learning activity",
    href: "/contact",
  },
  {
    number: "02",
    category: "DIGITAL LEARNING",
    title: "Technology & Digital Education",
    description:
      "Building digital confidence and practical technology skills for education, work, entrepreneurship and everyday problem-solving.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    alt: "Learner using a laptop for digital education",
    href: "/departments/technology",
  },
  {
    number: "03",
    category: "CAREER DEVELOPMENT",
    title: "Professional Readiness",
    description:
      "Developing the communication, collaboration, problem-solving and workplace capabilities needed to navigate professional environments.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Professionals working together in a collaborative environment",
    href: "/contact",
  },
  {
    number: "04",
    category: "LEADERSHIP & GROWTH",
    title: "Personal Development",
    description:
      "Encouraging purposeful growth through leadership development, self-awareness, discipline, creativity and lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
    alt: "People participating in a group learning and development session",
    href: "/contact",
  },
  {
    number: "05",
    category: "KNOWLEDGE & DISCOVERY",
    title: "Research and Learning Resources",
    description:
      "Supporting curiosity, independent study, research skills and access to useful knowledge that informs better decisions.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
    alt: "Bookshelves in a library and learning environment",
    href: "/departments/research",
  },
  {
    number: "06",
    category: "COMMUNITY EDUCATION",
    title: "Learning for Communities",
    description:
      "Creating opportunities for knowledge exchange, awareness, community learning and the development of useful local capabilities.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
    alt: "People attending a community workshop",
    href: "/contact",
  },
];

const learningMethods = [
  {
    number: "01",
    icon: BookMarked,
    title: "Understand",
    description:
      "Build a clear understanding of concepts, principles and the knowledge behind a subject.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Practise",
    description:
      "Apply what has been learned through exercises, demonstrations and practical activities.",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Create",
    description:
      "Use knowledge and skills to develop ideas, complete projects and solve meaningful problems.",
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Improve",
    description:
      "Reflect on results, receive feedback and continue developing through experience.",
  },
];

const connectedFields = [
  {
    number: "01",
    title: "Technology",
    description:
      "Digital skills, computing, software and emerging technologies.",
    href: "/departments/technology",
  },
  {
    number: "02",
    title: "Health & Nutrition",
    description:
      "Health awareness, nutrition knowledge and community wellbeing.",
    href: "/departments/health-nutrition",
  },
  {
    number: "03",
    title: "Agriculture & Food",
    description:
      "Agricultural knowledge, food systems and practical production skills.",
    href: "/departments/agriculture",
  },
  {
    number: "04",
    title: "Research & Data",
    description: "Research methods, data literacy and evidence-based learning.",
    href: "/departments/research",
  },
  {
    number: "05",
    title: "Business",
    description:
      "Entrepreneurship, enterprise skills and business development.",
    href: "/departments/business",
  },
];

function EducationSectionLabel({ number, children }) {
  return (
    <div className="edu-section-label">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

export default function EducationSkills() {
  return (
    <main className="education-page">
      {/* HERO */}
      <section className="edu-hero">
        <div className="edu-hero-grid-pattern" />
        <div className="edu-container">
          <div className="edu-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/departments">Departments</Link>
            <ChevronRight size={13} />
            <span>Education & Skills</span>
          </div>

          <div className="edu-hero-layout">
            <div className="edu-hero-copy">
              <div className="edu-eyebrow">
                <span className="edu-eyebrow-icon">
                  <GraduationCap size={16} />
                </span>
                <span>EDUCATION & SKILLS</span>
                <i />
                <span className="edu-eyebrow-code">GBC / 05</span>
              </div>

              <h1>
                Knowledge
                <br />
                opens doors.
                <br />
                <em>Skills move us forward.</em>
              </h1>

              <p className="edu-hero-description">
                We believe education should do more than transfer information.
                It should develop understanding, build practical abilities,
                inspire creativity and equip people to contribute meaningfully
                to society.
              </p>

              <div className="edu-hero-actions">
                <Link to="/contact" className="edu-button edu-button-primary">
                  Explore learning opportunities
                  <ArrowUpRight size={17} />
                </Link>
                <a
                  href="#edu-pathways"
                  className="edu-button edu-button-outline"
                >
                  Discover our focus
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="edu-hero-proof">
                <span className="edu-proof-icon">
                  <Lightbulb size={17} />
                </span>
                <div>
                  <strong>Learning with purpose</strong>
                  <span>Knowledge. Skills. Application. Impact.</span>
                </div>
              </div>
            </div>

            <div className="edu-hero-visual">
              <div className="edu-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
                  alt="Students learning and collaborating together"
                />
                <div className="edu-hero-image-shade" />
                <div className="edu-image-caption">
                  <span>LEARNING IN ACTION / 001</span>
                  <p>Every skill begins with a willingness to learn.</p>
                </div>
              </div>

              <div className="edu-hero-floating-card">
                <div className="edu-floating-icon">
                  <BookOpen size={21} />
                </div>
                <div>
                  <strong>Learn. Apply. Grow.</strong>
                  <span>Make knowledge useful.</span>
                </div>
              </div>

              <div className="edu-hero-side-card">
                <span>THE LEARNING CYCLE</span>
                <div className="edu-cycle">
                  <i>01</i>
                  <i>02</i>
                  <i>03</i>
                  <i>04</i>
                </div>
                <strong>From knowledge to ability</strong>
              </div>

              <span className="edu-hero-vertical">
                EDUCATION / HUMAN POTENTIAL
              </span>
              <div className="edu-hero-orbit">
                <GraduationCap size={27} />
              </div>
            </div>
          </div>

          <div className="edu-hero-bottom">
            <span>GOLDEN BRIDGE CONCEPT</span>
            <a href="#edu-intro">
              SCROLL TO EXPLORE <ArrowRight size={14} />
            </a>
            <span>CONNECTING KNOWLEDGE TO OPPORTUNITY</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="edu-intro" id="edu-intro">
        <div className="edu-container">
          <EducationSectionLabel number="01">OUR BELIEF</EducationSectionLabel>

          <div className="edu-intro-layout">
            <div className="edu-intro-statement">
              <h2>
                Education should prepare people for <em>life,</em> not just
                examinations.
              </h2>
              <span className="edu-statement-mark">“</span>
            </div>

            <div className="edu-intro-copy">
              <p>
                Knowledge is powerful, but its value grows when people can
                understand it, apply it and use it to make a difference.
              </p>
              <p>
                We see education as a continuous process of discovery,
                development and application. It includes formal learning,
                practical training, professional development, research and the
                everyday pursuit of knowledge.
              </p>
              <p>
                Our interest is in learning that builds capable individuals and
                strengthens the communities and industries around them.
              </p>
              <Link to="/about" className="edu-text-link">
                Discover the GBC vision <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="edu-principles">
            <div className="edu-principle">
              <span>01</span>
              <BookOpen size={22} />
              <strong>Knowledge</strong>
              <p>Understand the world around us.</p>
            </div>
            <div className="edu-principle">
              <span>02</span>
              <Wrench size={22} />
              <strong>Practical ability</strong>
              <p>Turn understanding into action.</p>
            </div>
            <div className="edu-principle">
              <span>03</span>
              <Lightbulb size={22} />
              <strong>Creativity</strong>
              <p>Explore ideas and possibilities.</p>
            </div>
            <div className="edu-principle">
              <span>04</span>
              <Globe2 size={22} />
              <strong>Contribution</strong>
              <p>Use what we learn to serve society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING PATHWAYS */}
      <section className="edu-pathways" id="edu-pathways">
        <div className="edu-container">
          <div className="edu-pathways-heading">
            <div>
              <EducationSectionLabel number="02">
                OUR LEARNING LANDSCAPE
              </EducationSectionLabel>
              <h2>
                Different paths.
                <br />
                <em>One purpose: development.</em>
              </h2>
            </div>
            <p>
              People learn in different ways and at different stages of life.
              Our areas of focus recognise the many forms education and skills
              development can take.
            </p>
          </div>

          <div className="edu-pathway-grid">
            <article className="edu-pathway-card edu-pathway-featured">
              <div className="edu-pathway-top">
                <span>01 / KNOWLEDGE</span>
                <BookOpen size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Foundations for lifelong learning</h3>
                <p>
                  Essential knowledge, literacy, numeracy and the thinking
                  abilities that support continuous learning.
                </p>
                <a href="#edu-focus">
                  Explore focus areas <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="edu-pathway-decoration">A</div>
            </article>

            <article className="edu-pathway-card">
              <div className="edu-pathway-top">
                <span>02 / DIGITAL</span>
                <Laptop size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Digital capabilities</h3>
                <p>
                  Building confidence and competence in digital tools, platforms
                  and technologies.
                </p>
                <a href="#edu-programmes">
                  Explore programmes <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="edu-pathway-card">
              <div className="edu-pathway-top">
                <span>03 / TECHNICAL</span>
                <Wrench size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Practical and technical skills</h3>
                <p>
                  Developing useful abilities through hands-on experience,
                  demonstrations and projects.
                </p>
                <a href="#edu-programmes">
                  Explore programmes <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="edu-pathway-card">
              <div className="edu-pathway-top">
                <span>04 / PROFESSIONAL</span>
                <BriefcaseBusiness size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Career and professional growth</h3>
                <p>
                  Preparing people for professional responsibilities, workplace
                  collaboration and career development.
                </p>
                <a href="#edu-focus">
                  Explore focus areas <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="edu-pathway-card edu-pathway-dark">
              <div className="edu-pathway-top">
                <span>05 / PERSONAL</span>
                <Brain size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Personal development</h3>
                <p>
                  Encouraging leadership, self-awareness, communication,
                  discipline and responsible growth.
                </p>
                <a href="#edu-approach">
                  Discover our approach <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="edu-pathway-card">
              <div className="edu-pathway-top">
                <span>06 / RESEARCH</span>
                <FlaskConical size={25} />
              </div>
              <div className="edu-pathway-body">
                <h3>Research and discovery</h3>
                <p>
                  Strengthening inquiry, experimentation, independent study and
                  evidence-based thinking.
                </p>
                <a href="#edu-programmes">
                  Explore programmes <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURE: PRACTICAL LEARNING */}
      <section className="edu-practical">
        <div className="edu-practical-visual">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1300&q=90"
            alt="Learners collaborating on a practical group project"
          />
          <div className="edu-practical-image-note">
            <span>LEARNING BEYOND THE CLASSROOM</span>
            <strong>Knowledge becomes ability through application.</strong>
          </div>
          <div className="edu-practical-index">02—04</div>
        </div>

        <div className="edu-practical-copy">
          <EducationSectionLabel number="03">
            LEARNING THAT CONNECTS
          </EducationSectionLabel>
          <span className="edu-practical-kicker">THEORY MEETS PRACTICE</span>
          <h2>
            Knowing is important.
            <em> Knowing how to do is powerful.</em>
          </h2>
          <p>
            A person may understand a concept without yet being able to apply
            it. Practical learning bridges that gap.
          </p>
          <p>
            Through demonstrations, guided exercises, workshops, projects and
            real-world challenges, learners have opportunities to develop
            confidence in what they know and what they can do.
          </p>
          <div className="edu-practical-points">
            <span>
              <CheckCircle2 size={16} /> Guided hands-on activities
            </span>
            <span>
              <CheckCircle2 size={16} /> Project-based learning
            </span>
            <span>
              <CheckCircle2 size={16} /> Problem-solving exercises
            </span>
            <span>
              <CheckCircle2 size={16} /> Continuous feedback
            </span>
          </div>
          <Link to="/contact" className="edu-text-link">
            Discuss a learning initiative <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="edu-focus" id="edu-focus">
        <div className="edu-container">
          <div className="edu-focus-heading">
            <div>
              <EducationSectionLabel number="04">
                OUR AREAS OF FOCUS
              </EducationSectionLabel>
              <h2>
                Building capabilities
                <br />
                <em>for a changing world.</em>
              </h2>
            </div>
            <p>
              Our focus brings together different dimensions of learning and
              development, from foundational knowledge to specialised skills and
              research.
            </p>
          </div>

          <div className="edu-focus-list">
            {learningAreas.map((item) => {
              const Icon = item.icon;
              return (
                <article className="edu-focus-row" key={item.number}>
                  <span className="edu-focus-number">{item.number}</span>
                  <div className="edu-focus-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <div className="edu-focus-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="edu-focus-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#edu-programmes"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="edu-programmes" id="edu-programmes">
        <div className="edu-container">
          <div className="edu-programmes-heading">
            <div>
              <EducationSectionLabel number="05">
                LEARNING IN ACTION
              </EducationSectionLabel>
              <h2>
                Opportunities to
                <br />
                <em>learn and develop.</em>
              </h2>
            </div>
            <p>
              Explore the kinds of initiatives and learning experiences that can
              help people build knowledge, strengthen their abilities and
              discover new opportunities.
            </p>
          </div>

          <div className="edu-programme-grid">
            {learningProgrammes.map((programme) => (
              <article className="edu-programme-card" key={programme.number}>
                <Link
                  to={programme.href}
                  className="edu-programme-image"
                  aria-label={`Explore ${programme.title}`}
                >
                  <img src={programme.image} alt={programme.alt} />
                  <span>{programme.number}</span>
                  <i>
                    <ArrowUpRight size={20} />
                  </i>
                </Link>
                <div className="edu-programme-content">
                  <span>{programme.category}</span>
                  <h3>{programme.title}</h3>
                  <p>{programme.description}</p>
                  <Link to={programme.href}>
                    Explore area <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING METHOD */}
      <section className="edu-approach" id="edu-approach">
        <div className="edu-container">
          <div className="edu-approach-heading">
            <EducationSectionLabel number="06">
              OUR APPROACH TO LEARNING
            </EducationSectionLabel>
            <h2>
              Learning should lead
              <br />
              <em>somewhere meaningful.</em>
            </h2>
            <p>
              We value a learning process that moves from understanding to
              application and continuous improvement.
            </p>
          </div>

          <div className="edu-method-grid">
            {learningMethods.map((step) => {
              const Icon = step.icon;
              return (
                <article className="edu-method-card" key={step.number}>
                  <div className="edu-method-top">
                    <span>{step.number}</span>
                    <Icon size={24} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="edu-method-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE AND COMMUNITY */}
      <section className="edu-knowledge">
        <div className="edu-container edu-knowledge-layout">
          <div className="edu-knowledge-image">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=90"
              alt="A library filled with books and learning resources"
            />
            <div className="edu-knowledge-image-caption">
              <Library size={21} />
              <span>KNOWLEDGE IS A RESOURCE TO SHARE</span>
            </div>
          </div>

          <div className="edu-knowledge-copy">
            <EducationSectionLabel number="07">
              KNOWLEDGE FOR EVERYONE
            </EducationSectionLabel>
            <h2>
              Learning should not
              <em> stop at the classroom.</em>
            </h2>
            <p>
              Knowledge grows when it is explored, discussed, shared and
              applied. We value learning environments that encourage curiosity,
              independent thinking and meaningful exchange.
            </p>
            <p>
              From learning resources and educational initiatives to workshops,
              research and community engagement, we recognise the importance of
              making useful knowledge accessible.
            </p>
            <div className="edu-knowledge-features">
              <div>
                <BookMarked size={19} />
                <span>Learning resources</span>
              </div>
              <div>
                <Presentation size={19} />
                <span>Workshops and seminars</span>
              </div>
              <div>
                <MessageCircle size={19} />
                <span>Knowledge exchange</span>
              </div>
              <div>
                <Users size={19} />
                <span>Community learning</span>
              </div>
            </div>
            <Link to="/contact" className="edu-text-link">
              Connect with us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONNECTED DEPARTMENTS */}
      <section className="edu-connections">
        <div className="edu-container edu-connections-layout">
          <div className="edu-connections-copy">
            <EducationSectionLabel number="08">
              LEARNING ACROSS DISCIPLINES
            </EducationSectionLabel>
            <h2>
              Knowledge connects
              <em> every field.</em>
            </h2>
            <p>
              Education is not isolated from the world around us. It supports
              innovation, strengthens industries, improves communities and helps
              people understand the challenges facing society.
            </p>
            <Link to="/departments" className="edu-text-link">
              Explore all departments <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="edu-connection-list">
            {connectedFields.map((field) => (
              <Link
                to={field.href}
                className="edu-connection-item"
                key={field.number}
              >
                <span>{field.number}</span>
                <div>
                  <h3>{field.title}</h3>
                  <p>{field.description}</p>
                </div>
                <ArrowUpRight size={19} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="edu-cta">
        <div className="edu-cta-decoration edu-cta-decoration-one" />
        <div className="edu-cta-decoration edu-cta-decoration-two" />

        <div className="edu-container edu-cta-content">
          <div className="edu-cta-icon">
            <GraduationCap size={32} />
          </div>
          <span>THE JOURNEY OF DEVELOPMENT CONTINUES</span>
          <h2>
            Learn something.
            <br />
            <em>Build something.</em>
            <br />
            Make a difference.
          </h2>
          <p>
            Whether you are a learner, educator, trainer, professional,
            organisation or knowledge enthusiast, there are opportunities to
            contribute to a more capable and informed society.
          </p>
          <div className="edu-cta-actions">
            <Link to="/contact" className="edu-button edu-button-amber">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
            <Link to="/departments" className="edu-cta-secondary">
              Explore GBC departments <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="edu-cta-bottom">
          <span>GOLDEN BRIDGE CONCEPT</span>
          <span>CONNECTING IDEAS · CREATING VALUE · BUILDING THE FUTURE</span>
        </div>
      </section>
    </main>
  );
}
