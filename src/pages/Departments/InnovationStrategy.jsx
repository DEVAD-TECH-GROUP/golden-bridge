import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FlaskConical,
  Lightbulb,
  Network,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const innovationAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Ideas & Problem Discovery",
    description:
      "Identifying real challenges, understanding people's needs, and discovering opportunities for meaningful solutions.",
    tag: "Discover",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Research & Experimentation",
    description:
      "Exploring possibilities, testing assumptions, and learning what works through research and practical experiments.",
    tag: "Explore",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Technology & Prototyping",
    description:
      "Using technology, engineering, and creative thinking to transform concepts into working prototypes.",
    tag: "Build",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Systems & Process Innovation",
    description:
      "Finding better ways to deliver services, improve processes, and solve problems across different sectors.",
    tag: "Improve",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Solution Development",
    description:
      "Developing promising ideas into practical solutions that can be tested, improved, and adopted.",
    tag: "Develop",
  },
  {
    number: "06",
    icon: Network,
    title: "Collaboration & Partnerships",
    description:
      "Connecting people, knowledge, institutions, and resources to make ambitious ideas achievable.",
    tag: "Connect",
  },
];

const innovationChallenges = [
  {
    title: "Everyday problems",
    text: "How can everyday challenges be solved more effectively through better ideas, tools, and systems?",
    number: "01",
  },
  {
    title: "Access to solutions",
    text: "How can useful innovations become more accessible, affordable, and relevant to the people who need them?",
    number: "02",
  },
  {
    title: "Inefficient systems",
    text: "How can existing processes and services be redesigned to work better?",
    number: "03",
  },
  {
    title: "Untapped potential",
    text: "How can local knowledge, creativity, and available resources become opportunities for progress?",
    number: "04",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Identify",
    text: "Understand the problem and the people experiencing it.",
  },
  {
    number: "02",
    title: "Imagine",
    text: "Explore possibilities and develop promising ideas.",
  },
  {
    number: "03",
    title: "Experiment",
    text: "Test concepts, learn from evidence, and refine assumptions.",
  },
  {
    number: "04",
    title: "Develop",
    text: "Build practical solutions and improve their effectiveness.",
  },
  {
    number: "05",
    title: "Apply",
    text: "Explore how successful solutions can create meaningful impact.",
  },
];

const connectedPillars = [
  {
    title: "Technology",
    text: "Engineering and digital tools that turn ideas into working solutions.",
    href: "/departments/technology",
  },
  {
    title: "Research & Data",
    text: "Evidence and insights that help guide better decisions.",
    href: "/departments/research",
  },
  {
    title: "Agriculture",
    text: "New approaches to food production and agricultural challenges.",
    href: "/departments/agriculture",
  },
  {
    title: "Health & Nutrition",
    text: "Ideas that can contribute to healthier communities.",
    href: "/departments/health",
  },
  {
    title: "Education & Skills",
    text: "Developing the knowledge and abilities needed to create solutions.",
    href: "/departments/education",
  },
  {
    title: "Business",
    text: "Exploring sustainable ways to develop and deliver valuable solutions.",
    href: "/departments/business",
  },
];

function Innovation() {
  return (
    <main className="innovation-page">
      <section className="innovation-hero">
        <div className="innovation-grid-bg" />
        <div className="innovation-glow innovation-glow-one" />
        <div className="innovation-glow innovation-glow-two" />

        <div className="innovation-hero-inner">
          <div className="innovation-hero-copy">
            <div className="innovation-eyebrow">
              <span className="innovation-eyebrow-dot" />
              THE POWER TO REIMAGINE
            </div>

            <h1>
              Ideas are
              <br />
              <span>only the beginning.</span>
            </h1>

            <p className="innovation-hero-description">
              The world does not move forward by ideas alone. It moves when
              people question limitations, explore possibilities, and turn
              promising ideas into solutions that matter.
            </p>

            <div className="innovation-hero-actions">
              <a href="#innovation-purpose" className="innovation-primary-btn">
                Explore Innovation
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#innovation-process"
                className="innovation-secondary-btn"
              >
                How we approach it
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="innovation-hero-footnote">
              <span>THINK DIFFERENTLY</span>
              <span className="innovation-footnote-line" />
              <span>BUILD MEANINGFULLY</span>
            </div>
          </div>

          <div className="innovation-visual">
            <div className="innovation-visual-label">
              <span className="innovation-live-dot" />
              IDEAS IN MOTION
            </div>

            <div className="innovation-orbit orbit-one">
              <span className="orbit-node node-one" />
              <span className="orbit-node node-two" />
            </div>

            <div className="innovation-orbit orbit-two">
              <span className="orbit-node node-three" />
            </div>

            <div className="innovation-orbit orbit-three">
              <span className="orbit-node node-four" />
            </div>

            <div className="innovation-core">
              <div className="innovation-core-inner">
                <Lightbulb size={58} strokeWidth={1.2} />
                <span>IDEA</span>
              </div>
            </div>

            <div className="innovation-float-card float-card-one">
              <Sparkles size={17} />
              <span>Possibility</span>
            </div>

            <div className="innovation-float-card float-card-two">
              <Atom size={18} />
              <span>Experiment</span>
            </div>

            <div className="innovation-float-card float-card-three">
              <Zap size={17} />
              <span>Impact</span>
            </div>

            <div className="innovation-coordinate coordinate-one">
              06.5244° N
            </div>
            <div className="innovation-coordinate coordinate-two">
              CONCEPT_001
            </div>
          </div>
        </div>

        <div className="innovation-hero-bottom">
          <span>GBC / INNOVATION</span>
          <span>01 — REIMAGINING WHAT IS POSSIBLE</span>
        </div>
      </section>

      <section className="innovation-purpose" id="innovation-purpose">
        <div className="innovation-section-index">
          <span>01</span>
          <span>THE PURPOSE</span>
        </div>

        <div className="innovation-purpose-content">
          <div className="innovation-purpose-heading">
            <span className="innovation-small-label">BEYOND THE IDEA</span>

            <h2>
              Innovation is not
              <br />
              <span>just about creating something new.</span>
            </h2>
          </div>

          <div className="innovation-purpose-text">
            <p>
              It is about creating something better, more useful, more
              accessible, or more effective. It begins with understanding
              problems and asking whether there is a better way to solve them.
            </p>

            <p>
              At Golden Bridge Concept, Innovation represents an approach to
              exploring possibilities, developing practical solutions, and
              connecting ideas with the knowledge, people, and resources
              required to bring them closer to reality.
            </p>

            <div className="innovation-purpose-statement">
              <Sparkles size={21} />
              <span>
                The measure of an idea is not how impressive it sounds, but what
                it can make possible.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-challenges">
        <div className="innovation-challenges-header">
          <div>
            <span className="innovation-small-label">
              START WITH THE PROBLEM
            </span>
            <h2>
              What are we
              <br />
              trying to <span>change?</span>
            </h2>
          </div>

          <p>
            Meaningful innovation starts with questions that matter. These are
            some of the challenges our innovation thinking seeks to explore.
          </p>
        </div>

        <div className="innovation-challenge-grid">
          {innovationChallenges.map((item) => (
            <article className="innovation-challenge-card" key={item.number}>
              <span className="challenge-number">{item.number}</span>
              <div className="challenge-mark">
                <span />
                <span />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowUpRight className="challenge-arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="innovation-areas">
        <div className="innovation-section-heading">
          <div>
            <span className="innovation-small-label">
              OUR AREAS OF EXPLORATION
            </span>
            <h2>
              Where ideas
              <br />
              become <span>possibilities.</span>
            </h2>
          </div>

          <p>
            Innovation can happen in many forms. These focus areas represent
            different ways of exploring problems and developing solutions.
          </p>
        </div>

        <div className="innovation-area-grid">
          {innovationAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="innovation-area-card" key={area.number}>
                <div className="innovation-area-top">
                  <span>{area.number} / 06</span>
                  <span className="innovation-area-tag">{area.tag}</span>
                </div>

                <div className="innovation-area-icon">
                  <Icon size={29} strokeWidth={1.5} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="innovation-area-bottom">
                  <span>EXPLORE THE POSSIBILITY</span>
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="innovation-process" id="innovation-process">
        <div className="innovation-process-intro">
          <span className="innovation-small-label">
            FROM PROBLEM TO POSSIBILITY
          </span>
          <h2>
            A journey from
            <br />
            <span>thinking to doing.</span>
          </h2>
          <p>
            Innovation is a process of discovery, experimentation, learning, and
            improvement. Every stage helps move an idea closer to a practical
            solution.
          </p>
        </div>

        <div className="innovation-process-track">
          {processSteps.map((step, index) => (
            <div className="innovation-process-step" key={step.number}>
              <div className="process-step-top">
                <span>{step.number}</span>
                <div className="process-step-dot" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>

              {index !== processSteps.length - 1 && (
                <div className="process-step-connector" />
              )}
            </div>
          ))}
        </div>

        <div className="innovation-process-note">
          <CheckCircle2 size={19} />
          <span>
            The process is iterative. Testing and learning may take an idea back
            to an earlier stage for improvement.
          </span>
        </div>
      </section>

      <section className="innovation-lab">
        <div className="innovation-lab-visual">
          <div className="lab-background-grid" />
          <div className="lab-scan-line" />

          <div className="lab-window lab-window-one">
            <span className="lab-window-dot" />
            <span className="lab-window-dot" />
            <span className="lab-window-dot" />
            <div className="lab-window-content">
              <div className="lab-code-line long" />
              <div className="lab-code-line medium" />
              <div className="lab-code-line short" />
              <div className="lab-code-line long" />
              <div className="lab-code-line medium" />
            </div>
          </div>

          <div className="lab-central-symbol">
            <div className="lab-symbol-ring">
              <Atom size={76} strokeWidth={1} />
            </div>
            <span>EXPERIMENT / LEARN / IMPROVE</span>
          </div>

          <div className="lab-window lab-window-two">
            <div className="lab-chart-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="lab-chart-caption">TEST / ITERATION 04</div>
          </div>

          <span className="lab-visual-caption">INNOVATION ENVIRONMENT</span>
        </div>

        <div className="innovation-lab-copy">
          <span className="innovation-small-label">EXPLORE. TEST. LEARN.</span>

          <h2>
            Think boldly.
            <br />
            <span>Test practically.</span>
          </h2>

          <p>
            New ideas need more than enthusiasm. They need curiosity,
            experimentation, evidence, and a willingness to improve.
          </p>

          <p>
            We see experimentation and prototyping as important ways to discover
            what is possible, understand limitations, and develop better
            approaches to real-world challenges.
          </p>

          <div className="innovation-lab-points">
            <div>
              <span>01</span>
              <p>Question existing assumptions.</p>
            </div>
            <div>
              <span>02</span>
              <p>Test ideas before scaling them.</p>
            </div>
            <div>
              <span>03</span>
              <p>Learn from results and improve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-connections">
        <div className="innovation-connections-header">
          <span className="innovation-small-label">
            INNOVATION DOES NOT EXIST IN ISOLATION
          </span>

          <h2>
            Connecting ideas
            <br />
            across <span>disciplines.</span>
          </h2>

          <p>
            Many important challenges cannot be solved by one discipline alone.
            Innovation connects knowledge, skills, and capabilities from across
            GBC's areas of focus.
          </p>
        </div>

        <div className="innovation-connections-grid">
          {connectedPillars.map((pillar, index) => (
            <Link
              to={pillar.href}
              className="innovation-connection-card"
              key={pillar.title}
            >
              <span className="connection-index">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <div className="connection-link">
                Explore pillar <ArrowUpRight size={17} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="innovation-future">
        <div className="innovation-future-orb future-orb-one" />
        <div className="innovation-future-orb future-orb-two" />

        <div className="innovation-future-content">
          <span className="innovation-small-label">
            THE POSSIBILITIES ARE OPEN
          </span>

          <h2>
            The future is not
            <br />
            simply something
            <br />
            we <span>wait for.</span>
          </h2>

          <p>
            It is something we can help shape through the questions we ask, the
            ideas we explore, the solutions we develop, and the impact we seek
            to create.
          </p>

          <Link to="/contact" className="innovation-future-btn">
            Connect with GBC
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="innovation-future-mark">
          <div className="future-mark-ring">
            <Sparkles size={43} />
          </div>
          <span>IMAGINE WHAT'S POSSIBLE</span>
        </div>
      </section>
    </main>
  );
}

export default Innovation;
