import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Radio,
  RadioTower,
  Play,
  Mic2,
  Camera,
  Newspaper,
  Video,
  MessageCircle,
  Globe2,
  Podcast,
  Signal,
  Share2,
  Megaphone,
  MoveUpRight,
} from "lucide-react";

const communicationAreas = [
  {
    number: "01",
    title: "Digital Media",
    description:
      "Exploring digital platforms, online publishing and the changing ways people discover and consume information.",
    icon: Globe2,
    tag: "DIGITAL",
  },
  {
    number: "02",
    title: "Broadcast & Production",
    description:
      "The creative and technical processes behind audio, video, broadcasting and multimedia production.",
    icon: Video,
    tag: "PRODUCTION",
  },
  {
    number: "03",
    title: "Journalism & Publishing",
    description:
      "Promoting informed storytelling, responsible reporting, research-based content and meaningful publishing.",
    icon: Newspaper,
    tag: "STORYTELLING",
  },
  {
    number: "04",
    title: "Public Relations",
    description:
      "Understanding reputation, public engagement, strategic communication and relationships between organisations and people.",
    icon: MessageCircle,
    tag: "RELATIONS",
  },
  {
    number: "05",
    title: "Photography & Visual Media",
    description:
      "Using photography, visual storytelling and creative direction to communicate ideas and experiences.",
    icon: Camera,
    tag: "VISUALS",
  },
  {
    number: "06",
    title: "Audio & Podcasting",
    description:
      "Exploring audio storytelling, podcast production, voice, sound design and other forms of spoken communication.",
    icon: Podcast,
    tag: "AUDIO",
  },
];

const communicationPrinciples = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Information should be understandable, relevant and accessible to its intended audience.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Communication should respect facts, context, responsibility and the people receiving the message.",
  },
  {
    number: "03",
    title: "Creativity",
    description:
      "Ideas deserve thoughtful presentation, compelling storytelling and appropriate use of media.",
  },
  {
    number: "04",
    title: "Connection",
    description:
      "Communication should create understanding, encourage participation and bring people closer.",
  },
];

export default function MediaCommunication() {
  return (
    <main className="mc-page">
      {/* HERO */}
      <section className="mc-hero">
        <div className="mc-hero-noise" />

        <div className="mc-topline">
          <span>
            <span className="mc-live-dot" />
            GBC / DEPARTMENTS
          </span>

          <span className="mc-topline-right">
            MEDIA & COMMUNICATION <span>— 08</span>
          </span>
        </div>

        <div className="mc-hero-content">
          <div className="mc-hero-copy">
            <div className="mc-eyebrow">
              <span className="mc-eyebrow-line" />
              THE POWER OF CONNECTION
            </div>

            <h1>
              Ideas
              <br />
              deserve
              <br />
              <span>a voice.</span>
            </h1>

            <p className="mc-hero-description">
              We explore how stories, information and creative expression
              connect people, influence perspectives and shape the world around
              us.
            </p>

            <div className="mc-hero-actions">
              <a href="#mc-explore" className="mc-primary-link">
                Explore the department
                <ArrowUpRight size={17} />
              </a>

              <a href="#mc-purpose" className="mc-secondary-link">
                Discover our perspective
              </a>
            </div>
          </div>

          <div
            className="mc-signal-visual"
            aria-label="Abstract communication signal animation"
          >
            <div className="mc-orbit mc-orbit-one" />
            <div className="mc-orbit mc-orbit-two" />
            <div className="mc-orbit mc-orbit-three" />

            <div className="mc-signal-core">
              <div className="mc-core-inner">
                <RadioTower size={43} strokeWidth={1.2} />
                <span>TRANSMIT</span>
              </div>
            </div>

            <div className="mc-signal-point mc-point-one">
              <span />
              <small>IDEAS</small>
            </div>

            <div className="mc-signal-point mc-point-two">
              <span />
              <small>PEOPLE</small>
            </div>

            <div className="mc-signal-point mc-point-three">
              <span />
              <small>IMPACT</small>
            </div>

            <div className="mc-signal-caption">
              <Signal size={14} />
              <span>CONNECTED / EVERYWHERE</span>
            </div>
          </div>
        </div>

        <div className="mc-hero-bottom">
          <span>INFORMATION IS POWERFUL.</span>
          <span>HOW WE COMMUNICATE MATTERS.</span>
          <a href="#mc-purpose" aria-label="Scroll to the next section">
            <ArrowDownRight size={20} />
          </a>
        </div>
      </section>

      {/* MOVING TICKER */}
      <div className="mc-ticker" aria-label="Media and communication themes">
        <div className="mc-ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="mc-ticker-group" key={index}>
              <span>STORIES THAT MATTER</span>
              <AudioLines size={20} />
              <span>IDEAS THAT TRAVEL</span>
              <Radio size={19} />
              <span>MEDIA THAT CONNECTS</span>
              <Megaphone size={19} />
              <span>VOICES THAT INSPIRE</span>
              <Globe2 size={19} />
            </div>
          ))}
        </div>
      </div>

      {/* PURPOSE */}
      <section className="mc-purpose" id="mc-purpose">
        <div className="mc-section-index">
          <span>01 / OUR PERSPECTIVE</span>
          <span>THE BIGGER PICTURE</span>
        </div>

        <div className="mc-purpose-grid">
          <div className="mc-purpose-heading">
            <span className="mc-small-label">BEYOND THE MESSAGE</span>

            <h2>
              Communication
              <br />
              is more than
              <br />
              <em>being heard.</em>
            </h2>
          </div>

          <div className="mc-purpose-content">
            <p className="mc-purpose-lead">It is about being understood.</p>

            <p>
              Every day, information influences decisions, shapes opinions,
              creates opportunities and affects how communities interact. Yet
              the value of communication goes beyond simply sending a message.
            </p>

            <p>
              At GBC, Media & Communication explores the relationship between
              people, information, technology and storytelling. We are
              interested in how communication can educate, inform, encourage
              dialogue and contribute to meaningful change.
            </p>

            <a href="#mc-explore" className="mc-text-link">
              Explore our areas of interest
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="mc-statement">
          <div className="mc-statement-mark">“</div>
          <p>
            A message can travel across the world.
            <br />
            Its real value is in the difference it makes.
          </p>
          <span>GBC / MEDIA & COMMUNICATION</span>
        </div>
      </section>

      {/* EXPLORE AREAS */}
      <section className="mc-explore" id="mc-explore">
        <div className="mc-section-index mc-section-index-light">
          <span>02 / AREAS OF INTEREST</span>
          <span>EXPLORE THE LANDSCAPE</span>
        </div>

        <div className="mc-explore-heading">
          <div>
            <span className="mc-small-label mc-light-label">
              THE COMMUNICATION ECOSYSTEM
            </span>
            <h2>
              Many channels.
              <br />
              <span>One connected world.</span>
            </h2>
          </div>

          <p>
            Media and communication take many forms. These are some of the areas
            we explore and their role in connecting people with information and
            ideas.
          </p>
        </div>

        <div className="mc-area-grid">
          {communicationAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="mc-area-card" key={area.number}>
                <div className="mc-area-card-top">
                  <span className="mc-area-number">{area.number}</span>
                  <span className="mc-area-tag">{area.tag}</span>
                </div>

                <div className="mc-area-icon">
                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="mc-area-card-bottom">
                  <span>AREA OF INTEREST</span>
                  <ArrowUpRight size={19} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* THE COMMUNICATION JOURNEY */}
      <section className="mc-journey">
        <div className="mc-section-index">
          <span>03 / HOW COMMUNICATION WORKS</span>
          <span>FROM THOUGHT TO IMPACT</span>
        </div>

        <div className="mc-journey-heading">
          <span className="mc-small-label">THE JOURNEY OF AN IDEA</span>
          <h2>
            From a thought
            <br />
            to a <span>lasting impact.</span>
          </h2>
          <p>
            Effective communication involves more than creating content. It
            requires understanding the message, the audience, the medium and the
            response.
          </p>
        </div>

        <div className="mc-process">
          <div className="mc-process-line" />

          <div className="mc-process-item">
            <div className="mc-process-node">
              <span>01</span>
            </div>
            <span className="mc-process-label">THE ORIGIN</span>
            <h3>IDEA</h3>
            <p>A thought, discovery, question or message worth sharing.</p>
          </div>

          <div className="mc-process-item">
            <div className="mc-process-node">
              <span>02</span>
            </div>
            <span className="mc-process-label">THE CRAFT</span>
            <h3>CREATE</h3>
            <p>
              Developing the message through research, creativity and context.
            </p>
          </div>

          <div className="mc-process-item">
            <div className="mc-process-node">
              <span>03</span>
            </div>
            <span className="mc-process-label">THE CHANNEL</span>
            <h3>CONNECT</h3>
            <p>Delivering the message through the right medium and platform.</p>
          </div>

          <div className="mc-process-item">
            <div className="mc-process-node">
              <span>04</span>
            </div>
            <span className="mc-process-label">THE OUTCOME</span>
            <h3>IMPACT</h3>
            <p>Creating understanding, awareness, participation or action.</p>
          </div>
        </div>
      </section>

      {/* VISUAL FEATURE */}
      <section className="mc-feature">
        <div className="mc-feature-image">
          <img
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85"
            alt="Audio production equipment in a recording studio"
          />

          <div className="mc-feature-image-overlay" />

          <div className="mc-feature-image-caption">
            <span>THE POWER OF A VOICE</span>
            <AudioLines size={22} />
          </div>
        </div>

        <div className="mc-feature-copy">
          <span className="mc-small-label mc-light-label">
            COMMUNICATION IN ACTION
          </span>

          <h2>
            The right story
            <br />
            can change
            <br />
            <em>the conversation.</em>
          </h2>

          <p>
            Whether through a documentary, a research report, a podcast,
            photography, journalism or a digital campaign, the way a story is
            presented can influence how it is understood.
          </p>

          <p>
            We recognise the importance of responsible media, thoughtful
            storytelling and communication that gives people access to useful
            information.
          </p>

          <div className="mc-feature-bottom">
            <span>STORYTELLING / KNOWLEDGE / CONNECTION</span>
            <MoveUpRight size={21} />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mc-principles">
        <div className="mc-section-index">
          <span>04 / WHAT GUIDES US</span>
          <span>OUR COMMUNICATION VALUES</span>
        </div>

        <div className="mc-principles-heading">
          <h2>
            The message matters.
            <br />
            <span>So does how we deliver it.</span>
          </h2>

          <p>
            Communication carries responsibility. The principles behind it
            matter just as much as the platforms used to deliver it.
          </p>
        </div>

        <div className="mc-principle-list">
          {communicationPrinciples.map((item) => (
            <article className="mc-principle-row" key={item.number}>
              <span className="mc-principle-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <ArrowUpRight className="mc-principle-arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      {/* CROSS-PILLAR CONNECTION */}
      <section className="mc-connection">
        <div className="mc-connection-visual">
          <div className="mc-connection-circle mc-connection-circle-one" />
          <div className="mc-connection-circle mc-connection-circle-two" />
          <div className="mc-connection-circle mc-connection-circle-three" />

          <div className="mc-connection-center">
            <Share2 size={30} />
            <span>GBC</span>
          </div>

          <span className="mc-connection-label mc-label-top">TECHNOLOGY</span>
          <span className="mc-connection-label mc-label-right">BUSINESS</span>
          <span className="mc-connection-label mc-label-bottom">EDUCATION</span>
          <span className="mc-connection-label mc-label-left">COMMUNITY</span>
        </div>

        <div className="mc-connection-copy">
          <span className="mc-small-label">A CONNECTED APPROACH</span>

          <h2>
            Communication
            <br />
            connects
            <br />
            <span>everything.</span>
          </h2>

          <p>
            Technology creates new ways to communicate. Business depends on
            clear information and relationships. Education spreads knowledge.
            Communities grow through participation and shared understanding.
          </p>

          <p>
            Media & Communication has a role across the GBC ecosystem,
            connecting ideas and perspectives across different fields.
          </p>

          <Link to="/departments" className="mc-text-link">
            Explore all GBC departments
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mc-final">
        <div className="mc-final-background">
          <div className="mc-final-ring mc-final-ring-one" />
          <div className="mc-final-ring mc-final-ring-two" />
          <div className="mc-final-ring mc-final-ring-three" />
        </div>

        <div className="mc-final-content">
          <span className="mc-final-label">GBC / MEDIA & COMMUNICATION</span>

          <h2>
            Every idea
            <br />
            deserves a<span>connection.</span>
          </h2>

          <p>
            Discover the many ways information, creativity and communication can
            contribute to a more connected world.
          </p>

          <div className="mc-final-actions">
            <Link to="/departments" className="mc-final-button">
              Explore GBC
              <ArrowRight size={18} />
            </Link>

            <Link to="/" className="mc-final-home">
              Back to homepage
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mc-final-footer">
          <span>CONNECTING IDEAS</span>
          <span>CREATING VALUE</span>
          <span>BUILDING THE FUTURE</span>
        </div>
      </section>
    </main>
  );
}
