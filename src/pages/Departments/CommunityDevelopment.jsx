import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Users,
  HandHeart,
  Sprout,
  Lightbulb,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Target,
  MoveUpRight,
  CircleCheck,
  Handshake,
  Network,
  MapPin,
} from "lucide-react";

const communityFocus = [
  {
    number: "01",
    title: "Community Development",
    description:
      "Exploring practical ways to strengthen communities, improve shared environments and support sustainable local development.",
    icon: Building2,
    color: "orange",
    keywords: ["Local development", "Community planning"],
  },
  {
    number: "02",
    title: "Youth Empowerment",
    description:
      "Encouraging young people to develop their abilities, participate in society and contribute to meaningful initiatives.",
    icon: Sprout,
    color: "green",
    keywords: ["Youth participation", "Personal growth"],
  },
  {
    number: "03",
    title: "Social Innovation",
    description:
      "Exploring new approaches to persistent social challenges through ideas, collaboration and practical solutions.",
    icon: Lightbulb,
    color: "yellow",
    keywords: ["New ideas", "Social solutions"],
  },
  {
    number: "04",
    title: "Education & Inclusion",
    description:
      "Promoting access to knowledge, learning opportunities and participation for people from different backgrounds.",
    icon: GraduationCap,
    color: "blue",
    keywords: ["Learning access", "Inclusion"],
  },
  {
    number: "05",
    title: "Volunteerism & Service",
    description:
      "Recognising the value of service, shared responsibility and individual contributions to collective wellbeing.",
    icon: HandHeart,
    color: "pink",
    keywords: ["Voluntary service", "Collective action"],
  },
  {
    number: "06",
    title: "Partnerships & Collaboration",
    description:
      "Encouraging cooperation between individuals, organisations and institutions to address shared challenges.",
    icon: Handshake,
    color: "teal",
    keywords: ["Partnerships", "Cooperation"],
  },
];

const communityValues = [
  {
    number: "01",
    title: "People first",
    description:
      "Every meaningful community effort begins with understanding the people it is intended to serve.",
  },
  {
    number: "02",
    title: "Shared responsibility",
    description:
      "Progress becomes stronger when people recognise their role in improving the communities around them.",
  },
  {
    number: "03",
    title: "Inclusion",
    description:
      "Different voices, experiences and perspectives should have room to contribute.",
  },
  {
    number: "04",
    title: "Sustainable impact",
    description:
      "The goal is not just an activity or temporary intervention, but positive change that can continue.",
  },
];

const communityJourney = [
  {
    number: "01",
    title: "Listen",
    text: "Understand the people, their experiences and the challenges they face.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Understand",
    text: "Examine the causes, context and opportunities for meaningful improvement.",
    icon: Target,
  },
  {
    number: "03",
    title: "Collaborate",
    text: "Bring people, knowledge, skills and resources together.",
    icon: Users,
  },
  {
    number: "04",
    title: "Act",
    text: "Turn shared ideas into practical, responsible action.",
    icon: HandHeart,
  },
  {
    number: "05",
    title: "Sustain",
    text: "Learn from the outcome and build on what works.",
    icon: Sprout,
  },
];

export default function Community() {
  return (
    <main className="community-page">
      {/* HERO: A DIFFERENT EDITORIAL STRUCTURE */}
      <section className="community-hero">
        <div className="community-hero-pattern" />

        <nav className="community-topbar">
          <Link to="/departments" className="community-back">
            <ArrowUpRight size={15} />
            GBC / DEPARTMENTS
          </Link>

          <span className="community-topbar-label">
            PEOPLE. PURPOSE. PROGRESS.
          </span>
        </nav>

        <div className="community-hero-layout">
          <div className="community-hero-copy">
            <div className="community-kicker">
              <span className="community-kicker-dot" />
              THE COMMUNITY PILLAR
            </div>

            <h1>
              Change
              <br />
              begins
              <br />
              <span>with us.</span>
            </h1>

            <p>
              Stronger communities are built when people come together,
              recognise shared challenges and take responsibility for creating a
              better future.
            </p>

            <div className="community-hero-buttons">
              <a href="#community-purpose" className="community-button">
                Discover our purpose
                <ArrowRight size={17} />
              </a>

              <a href="#community-focus" className="community-quiet-link">
                Explore our focus areas
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="community-hero-note">
              <span className="community-note-line" />
              <span>BETTER COMMUNITIES. SHARED FUTURES.</span>
            </div>
          </div>

          <div className="community-hero-art">
            <div className="community-art-caption">
              <span>01 — THE POWER OF PEOPLE</span>
              <span>GBC / COMMUNITY</span>
            </div>

            <div className="community-photo-main">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1100&q=85"
                alt="People working together in a community collaboration session"
              />

              <div className="community-photo-overlay">
                <span>TOGETHER</span>
                <span>WE BUILD.</span>
              </div>
            </div>

            <div className="community-photo-small">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=650&q=85"
                alt="Volunteers working together on a community initiative"
              />
            </div>

            <div className="community-floating-mark">
              <HeartHandshake size={29} />
              <span>PEOPLE</span>
              <span>POWER</span>
            </div>

            <div className="community-art-number">C / 09</div>
          </div>
        </div>

        <div className="community-hero-footer">
          <span>CONNECTING PEOPLE</span>
          <span className="community-footer-divider" />
          <span>SHARING RESPONSIBILITY</span>
          <span className="community-footer-divider" />
          <span>BUILDING COMMUNITIES</span>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="community-purpose" id="community-purpose">
        <div className="community-section-heading">
          <span>01 / WHY COMMUNITY MATTERS</span>
          <span>OUR PERSPECTIVE</span>
        </div>

        <div className="community-purpose-layout">
          <div className="community-purpose-intro">
            <span className="community-eyebrow">THE BIGGER PICTURE</span>

            <h2>
              No one
              <br />
              builds a
              <br />
              <em>better world</em>
              <br />
              alone.
            </h2>

            <div className="community-purpose-stamp">
              <Heart size={18} />
              <span>
                PEOPLE
                <br />
                MATTER
              </span>
            </div>
          </div>

          <div className="community-purpose-content">
            <div className="community-purpose-highlight">
              Communities are not just places.
              <br />
              <strong>They are people connected by shared experiences.</strong>
            </div>

            <p>
              Every community has people with different abilities, experiences,
              needs, challenges and aspirations. How these people interact,
              cooperate and respond to shared challenges influences the
              wellbeing and development of the society around them.
            </p>

            <p>
              At GBC, the Community pillar explores how individuals, groups,
              institutions and organisations can contribute to positive social
              development.
            </p>

            <p>
              We believe that meaningful progress should involve the people
              affected by the challenges being addressed. It should recognise
              local realities, encourage participation and pursue solutions that
              can create lasting value.
            </p>

            <a href="#community-approach" className="community-inline-link">
              How we approach community development
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="community-purpose-bottom">
          <div className="community-purpose-bottom-item">
            <span>01</span>
            <strong>Understand people</strong>
          </div>

          <div className="community-purpose-bottom-item">
            <span>02</span>
            <strong>Recognise challenges</strong>
          </div>

          <div className="community-purpose-bottom-item">
            <span>03</span>
            <strong>Encourage participation</strong>
          </div>

          <div className="community-purpose-bottom-item">
            <span>04</span>
            <strong>Support progress</strong>
          </div>
        </div>
      </section>

      {/* HUMAN-CENTRED FEATURE */}
      <section className="community-human">
        <div className="community-human-image">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"
            alt="A diverse group of people sharing a moment together"
          />

          <div className="community-human-image-tag">
            <span>THE HUMAN ELEMENT</span>
            <HeartHandshake size={20} />
          </div>
        </div>

        <div className="community-human-copy">
          <span className="community-eyebrow">PEOPLE BEFORE PROJECTS</span>

          <h2>
            The real
            <br />
            measure of
            <br />
            progress is
            <br />
            <em>people.</em>
          </h2>

          <p>
            Development should not be measured only by the number of activities
            completed or projects announced. It should also consider whether
            people's lives, opportunities and environments are improving.
          </p>

          <div className="community-human-quote">
            <span>“</span>
            <p>
              Listen to the people. Understand the need. Build with the
              community.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="community-focus" id="community-focus">
        <div className="community-section-heading">
          <span>02 / AREAS OF INTEREST</span>
          <span>THE COMMUNITY LANDSCAPE</span>
        </div>

        <div className="community-focus-heading">
          <div>
            <span className="community-eyebrow">
              WHERE PEOPLE AND PROGRESS MEET
            </span>

            <h2>
              Many needs.
              <br />
              <em>Shared responsibility.</em>
            </h2>
          </div>

          <p>
            Community development involves different but connected areas of
            society. These are some of the fields the GBC Community pillar
            explores.
          </p>
        </div>

        <div className="community-focus-grid">
          {communityFocus.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className={`community-focus-card community-card-${item.color}`}
                key={item.number}
              >
                <div className="community-focus-top">
                  <span>{item.number}</span>
                  <ArrowUpRight size={18} />
                </div>

                <div className="community-focus-icon">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="community-focus-tags">
                  {item.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>

                <div className="community-focus-decoration" />
              </article>
            );
          })}
        </div>
      </section>

      {/* COMMUNITY APPROACH */}
      <section className="community-approach" id="community-approach">
        <div className="community-approach-top">
          <div>
            <span className="community-eyebrow">
              03 / A PEOPLE-CENTRED APPROACH
            </span>

            <h2>
              Progress is
              <br />a <em>process.</em>
            </h2>
          </div>

          <p>
            Meaningful community development requires understanding,
            cooperation, action and continuous learning. It is not simply about
            starting a project; it is about responding to real needs and
            learning from the results.
          </p>
        </div>

        <div className="community-journey">
          <div className="community-journey-track" />

          {communityJourney.map((step) => {
            const Icon = step.icon;

            return (
              <article className="community-journey-step" key={step.number}>
                <div className="community-journey-node">
                  <Icon size={23} />
                </div>

                <span className="community-journey-number">
                  STEP {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            );
          })}
        </div>

        <div className="community-approach-note">
          <CircleCheck size={20} />
          <span>
            The approach should always reflect the actual needs, context and
            participation of the people involved.
          </span>
        </div>
      </section>

      {/* COMMUNITY NETWORK */}
      <section className="community-network-section">
        <div className="community-network-copy">
          <span className="community-eyebrow">
            04 / THE POWER OF COLLABORATION
          </span>

          <h2>
            One community.
            <br />
            <em>Many contributions.</em>
          </h2>

          <p>
            Community development is rarely the responsibility of one person or
            institution. Individuals, families, businesses, educators, civil
            society groups and public institutions can all contribute in
            different ways.
          </p>

          <p>
            The challenge is to connect these contributions around shared goals
            and practical solutions.
          </p>

          <div className="community-network-list">
            <div>
              <Users size={18} />
              <span>Individuals & families</span>
            </div>

            <div>
              <Building2 size={18} />
              <span>Institutions & organisations</span>
            </div>

            <div>
              <BriefcaseBusiness size={18} />
              <span>Businesses & enterprises</span>
            </div>

            <div>
              <Globe2 size={18} />
              <span>Community groups & partners</span>
            </div>
          </div>
        </div>

        <div className="community-network-visual">
          <div className="community-network-orbit orbit-a" />
          <div className="community-network-orbit orbit-b" />
          <div className="community-network-orbit orbit-c" />

          <div className="community-network-lines">
            <span className="network-line line-a" />
            <span className="network-line line-b" />
            <span className="network-line line-c" />
            <span className="network-line line-d" />
            <span className="network-line line-e" />
            <span className="network-line line-f" />
          </div>

          <div className="community-network-center">
            <HeartHandshake size={32} />
            <span>COMMUNITY</span>
          </div>

          <div className="community-network-node node-a">
            <Users size={19} />
            <span>PEOPLE</span>
          </div>

          <div className="community-network-node node-b">
            <Building2 size={19} />
            <span>INSTITUTIONS</span>
          </div>

          <div className="community-network-node node-c">
            <BriefcaseBusiness size={19} />
            <span>BUSINESS</span>
          </div>

          <div className="community-network-node node-d">
            <GraduationCap size={19} />
            <span>EDUCATION</span>
          </div>

          <div className="community-network-node node-e">
            <Globe2 size={19} />
            <span>PARTNERS</span>
          </div>

          <div className="community-network-node node-f">
            <HandHeart size={19} />
            <span>SERVICE</span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="community-values">
        <div className="community-section-heading">
          <span>05 / OUR GUIDING PRINCIPLES</span>
          <span>WHAT WE STAND FOR</span>
        </div>

        <div className="community-values-intro">
          <span className="community-eyebrow">
            THE FOUNDATION OF OUR APPROACH
          </span>

          <h2>
            Values that
            <br />
            <em>move people forward.</em>
          </h2>
        </div>

        <div className="community-values-grid">
          {communityValues.map((value) => (
            <article className="community-value-item" key={value.number}>
              <span className="community-value-number">{value.number}</span>

              <div className="community-value-mark">
                <ShieldCheck size={24} />
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONNECTION TO OTHER PILLARS */}
      <section className="community-cross-pillar">
        <div className="community-cross-image">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
            alt="Friends and community members connecting outdoors"
          />
          <div className="community-cross-image-label">
            <MapPin size={15} />
            <span>CONNECTED BY PURPOSE</span>
          </div>
        </div>

        <div className="community-cross-copy">
          <span className="community-eyebrow">06 / THE GBC ECOSYSTEM</span>

          <h2>
            Every pillar
            <br />
            has a role
            <br />
            in <em>society.</em>
          </h2>

          <p>
            Community development connects naturally with the other GBC pillars.
            Technology can improve access to services. Education can expand
            opportunity. Agriculture can support food systems. Business can
            create livelihoods.
          </p>

          <p>
            Research can help us understand challenges, while media and
            communication can improve awareness and participation.
          </p>

          <Link to="/departments" className="community-inline-link">
            Discover the GBC ecosystem
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="community-final">
        <div className="community-final-shape community-final-shape-one" />
        <div className="community-final-shape community-final-shape-two" />
        <div className="community-final-shape community-final-shape-three" />

        <div className="community-final-content">
          <span className="community-final-kicker">GBC / COMMUNITY</span>

          <h2>
            A better future
            <br />
            is something
            <br />
            <em>we build together.</em>
          </h2>

          <p>
            Connecting people, encouraging participation and supporting ideas
            that can make a meaningful difference.
          </p>

          <div className="community-final-actions">
            <Link to="/departments" className="community-final-button">
              Explore all departments
              <ArrowRight size={18} />
            </Link>

            <Link to="/" className="community-final-home">
              Return to homepage
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="community-final-footer">
          <span>CONNECTING IDEAS</span>
          <span>CREATING VALUE</span>
          <span>BUILDING THE FUTURE</span>
        </div>
      </section>
    </main>
  );
}
