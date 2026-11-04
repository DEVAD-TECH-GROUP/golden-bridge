import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Truck,
  Warehouse,
  MapPin,
  Route,
  PackageCheck,
  Network,
  Clock3,
  Globe2,
  Ship,
  Plane,
  Factory,
  BarChart3,
  Workflow,
  Container,
  Navigation,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: <Truck />,
    title: "Transportation",
    description:
      "Exploring how goods and resources move between locations through road, rail, air and water transportation systems.",
    tags: ["Road", "Air", "Sea"],
  },
  {
    number: "02",
    icon: <Warehouse />,
    title: "Warehousing",
    description:
      "Understanding storage facilities, inventory organisation, stock handling and the systems that keep goods accessible.",
    tags: ["Storage", "Inventory", "Handling"],
  },
  {
    number: "03",
    icon: <Boxes />,
    title: "Supply Chain Management",
    description:
      "Examining how sourcing, production, distribution and delivery activities work together across a supply chain.",
    tags: ["Sourcing", "Distribution", "Coordination"],
  },
  {
    number: "04",
    icon: <Route />,
    title: "Distribution & Delivery",
    description:
      "Exploring distribution networks, delivery planning, route optimisation and the final movement of products to customers.",
    tags: ["Last mile", "Routing", "Delivery"],
  },
  {
    number: "05",
    icon: <BarChart3 />,
    title: "Logistics Technology",
    description:
      "Investigating digital tools, tracking systems, automation and data-driven approaches to logistics operations.",
    tags: ["Tracking", "Automation", "Data"],
  },
  {
    number: "06",
    icon: <Globe2 />,
    title: "Trade & Global Logistics",
    description:
      "Understanding how goods move across borders and the infrastructure, processes and coordination behind international trade.",
    tags: ["Import", "Export", "Trade"],
  },
];

const journey = [
  {
    number: "01",
    title: "Source",
    description:
      "Identify and obtain the goods, materials or resources required.",
    icon: <Factory />,
  },
  {
    number: "02",
    title: "Store",
    description: "Receive, organise and manage inventory before movement.",
    icon: <Warehouse />,
  },
  {
    number: "03",
    title: "Move",
    description: "Coordinate transportation and the movement of goods.",
    icon: <Truck />,
  },
  {
    number: "04",
    title: "Distribute",
    description: "Direct products through distribution networks and routes.",
    icon: <Route />,
  },
  {
    number: "05",
    title: "Deliver",
    description: "Complete the journey by getting goods to their destination.",
    icon: <PackageCheck />,
  },
];

const connections = [
  {
    name: "Technology",
    description:
      "Tracking, automation, logistics software and intelligent systems.",
    link: "/departments/technology",
  },
  {
    name: "Business",
    description: "Operations, enterprise distribution and business efficiency.",
    link: "/departments/business",
  },
  {
    name: "Agriculture",
    description:
      "Moving agricultural produce from farms to markets and consumers.",
    link: "/departments/agriculture",
  },
  {
    name: "Finance",
    description: "Logistics costs, resource allocation and financial planning.",
    link: "/departments/finance",
  },
];

function Logistics() {
  return (
    <main className="logistics-page">
      {/* HERO */}
      <section className="logistics-hero">
        <div className="logistics-hero-grid"></div>
        <div className="logistics-hero-glow"></div>

        <div className="logistics-topbar">
          <span className="logistics-eyebrow">
            <span className="logistics-live-dot"></span>
            GBC / MOVEMENT & CONNECTIVITY
          </span>
          <span className="logistics-department-number">
            DEPARTMENT 10 — LOGISTICS
          </span>
        </div>

        <div className="logistics-hero-layout">
          <div className="logistics-hero-copy">
            <p className="logistics-overline">EVERYTHING HAS A DESTINATION.</p>

            <h1>
              Moving
              <br />
              the world
              <span> forward.</span>
            </h1>

            <p className="logistics-hero-description">
              From the movement of raw materials to the delivery of finished
              products, logistics connects people, businesses, markets and
              opportunities.
            </p>

            <div className="logistics-hero-actions">
              <a href="#logistics-focus" className="logistics-button">
                Explore logistics
                <ArrowUpRight size={18} />
              </a>

              <a href="#logistics-purpose" className="logistics-secondary-link">
                Understand the system
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="logistics-hero-note">
              <span className="logistics-note-line"></span>
              <span>CONNECTING ORIGINS TO DESTINATIONS</span>
            </div>
          </div>

          <div className="logistics-route-visual">
            <div className="logistics-map-grid"></div>

            <svg
              className="logistics-route-svg"
              viewBox="0 0 520 440"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="logistics-route-shadow"
                d="M70 340 C110 260 125 300 180 230 S270 200 300 135 S390 90 445 60"
              />
              <path
                className="logistics-route-path"
                d="M70 340 C110 260 125 300 180 230 S270 200 300 135 S390 90 445 60"
              />
              <path
                className="logistics-route-secondary"
                d="M70 340 C145 370 185 330 240 300 S350 285 445 330"
              />
              <circle
                cx="70"
                cy="340"
                r="7"
                className="logistics-route-point"
              />
              <circle
                cx="180"
                cy="230"
                r="6"
                className="logistics-route-point"
              />
              <circle
                cx="300"
                cy="135"
                r="6"
                className="logistics-route-point"
              />
              <circle
                cx="445"
                cy="60"
                r="8"
                className="logistics-route-point logistics-route-end"
              />
              <circle
                cx="445"
                cy="330"
                r="6"
                className="logistics-route-point"
              />
            </svg>

            <div className="logistics-map-label logistics-origin">
              <MapPin size={15} />
              <span>ORIGIN</span>
            </div>

            <div className="logistics-map-label logistics-destination">
              <Navigation size={15} />
              <span>DESTINATION</span>
            </div>

            <div className="logistics-map-node logistics-node-one">
              <Warehouse size={20} />
            </div>

            <div className="logistics-map-node logistics-node-two">
              <Truck size={20} />
            </div>

            <div className="logistics-map-node logistics-node-three">
              <Container size={20} />
            </div>

            <div className="logistics-route-info">
              <div className="logistics-route-info-top">
                <span>NETWORK OVERVIEW</span>
                <span className="logistics-route-status">CONNECTED</span>
              </div>
              <div className="logistics-route-info-main">
                <Route size={20} />
                <div>
                  <strong>One connected system</strong>
                  <small>From source to final destination</small>
                </div>
              </div>
              <div className="logistics-route-progress">
                <span></span>
              </div>
            </div>

            <div className="logistics-map-coordinate">
              SYSTEMS / MOVEMENT / DELIVERY
            </div>
          </div>
        </div>

        <div className="logistics-hero-bottom">
          <span>01 — SOURCE</span>
          <span className="logistics-bottom-line"></span>
          <span>02 — MOVEMENT</span>
          <span className="logistics-bottom-line"></span>
          <span>03 — DESTINATION</span>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="logistics-purpose" id="logistics-purpose">
        <div className="logistics-section-top">
          <span>01 / THE BIGGER PICTURE</span>
          <span>WHY LOGISTICS MATTERS</span>
        </div>

        <div className="logistics-purpose-layout">
          <div className="logistics-purpose-title">
            <p className="logistics-label-orange">BEHIND EVERY MOVEMENT</p>
            <h2>
              The world
              <br />
              doesn't just
              <span> move.</span>
              <br />
              It is coordinated.
            </h2>
          </div>

          <div className="logistics-purpose-copy">
            <p className="logistics-purpose-lead">
              A product may be manufactured in one location, stored in another,
              transported across several regions and finally delivered to
              someone who needs it.
            </p>

            <p>
              Every stage requires planning, coordination, infrastructure,
              information and resources. That is where logistics becomes
              essential.
            </p>

            <p>
              At Golden Bridge Concept, the Logistics department is intended to
              explore the systems, technologies and ideas that make the movement
              of goods and resources more organised, efficient and connected.
            </p>

            <div className="logistics-purpose-stamp">
              <span className="logistics-stamp-icon">
                <Network size={21} />
              </span>
              <div>
                <strong>CONNECTED SYSTEMS</strong>
                <small>FROM ORIGIN TO DESTINATION</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODES OF MOVEMENT */}
      <section className="logistics-modes">
        <div className="logistics-modes-heading">
          <div>
            <span>02 / MOVEMENT NETWORKS</span>
            <h2>Different routes. One connected world.</h2>
          </div>
          <p>
            Logistics relies on different transportation modes and
            interconnected infrastructure to move goods across locations.
          </p>
        </div>

        <div className="logistics-modes-grid">
          <article className="logistics-mode-card logistics-mode-road">
            <div className="logistics-mode-number">01 / LAND</div>
            <div className="logistics-mode-icon">
              <Truck size={31} />
            </div>
            <h3>Road & Rail</h3>
            <p>
              Connecting cities, industrial centres, warehouses, markets and
              communities through land transportation.
            </p>
            <span className="logistics-mode-line"></span>
          </article>

          <article className="logistics-mode-card logistics-mode-sea">
            <div className="logistics-mode-number">02 / WATER</div>
            <div className="logistics-mode-icon">
              <Ship size={31} />
            </div>
            <h3>Maritime</h3>
            <p>
              Supporting large-scale movement of goods through ports, shipping
              routes and waterways.
            </p>
            <span className="logistics-mode-line"></span>
          </article>

          <article className="logistics-mode-card logistics-mode-air">
            <div className="logistics-mode-number">03 / AIR</div>
            <div className="logistics-mode-icon">
              <Plane size={31} />
            </div>
            <h3>Air Freight</h3>
            <p>
              Enabling the movement of goods across long distances where speed
              and connectivity matter.
            </p>
            <span className="logistics-mode-line"></span>
          </article>
        </div>
      </section>

      {/* PROCESS JOURNEY */}
      <section className="logistics-journey">
        <div className="logistics-section-top logistics-section-top-light">
          <span>03 / THE LOGISTICS JOURNEY</span>
          <span>HOW MOVEMENT CONNECTS</span>
        </div>

        <div className="logistics-journey-heading">
          <h2>
            Every delivery
            <br />
            has a <span>journey.</span>
          </h2>
          <p>
            Logistics is not a single activity. It is a sequence of connected
            processes that help goods move from where they begin to where they
            are needed.
          </p>
        </div>

        <div className="logistics-timeline">
          <div className="logistics-timeline-track"></div>

          {journey.map((step) => (
            <article className="logistics-timeline-step" key={step.number}>
              <div className="logistics-timeline-marker">
                <span>{step.number}</span>
              </div>

              <div className="logistics-timeline-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="logistics-journey-footer">
          <span>
            <CheckCircle2 size={16} /> COORDINATION AT EVERY STAGE
          </span>
          <span>THE JOURNEY IS THE SYSTEM.</span>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="logistics-focus" id="logistics-focus">
        <div className="logistics-section-top">
          <span>04 / AREAS OF INTEREST</span>
          <span>EXPLORING LOGISTICS</span>
        </div>

        <div className="logistics-focus-heading">
          <div>
            <p className="logistics-label-orange">OUR AREAS OF FOCUS</p>
            <h2>
              Understanding
              <br />
              the <span>moving parts.</span>
            </h2>
          </div>

          <p>
            These focus areas represent the subjects GBC intends to explore
            within logistics, transportation and supply chain systems.
          </p>
        </div>

        <div className="logistics-focus-grid">
          {focusAreas.map((area) => (
            <article className="logistics-focus-card" key={area.number}>
              <div className="logistics-focus-card-top">
                <span>{area.number}</span>
                <div>{area.icon}</div>
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>

              <div className="logistics-focus-tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="logistics-focus-card-arrow">
                <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="logistics-systems">
        <div className="logistics-systems-visual">
          <div className="logistics-systems-ring logistics-ring-one"></div>
          <div className="logistics-systems-ring logistics-ring-two"></div>

          <div className="logistics-systems-center">
            <Workflow size={47} />
            <strong>LOGISTICS</strong>
            <span>CONNECTED OPERATIONS</span>
          </div>

          <div className="logistics-systems-orbit logistics-orbit-one">
            <span>
              <Clock3 size={19} />
            </span>
          </div>
          <div className="logistics-systems-orbit logistics-orbit-two">
            <span>
              <Layers3 size={19} />
            </span>
          </div>
          <div className="logistics-systems-orbit logistics-orbit-three">
            <span>
              <MapPin size={19} />
            </span>
          </div>
        </div>

        <div className="logistics-systems-copy">
          <span>05 / THE INTELLIGENT LOGISTICS SYSTEM</span>
          <h2>
            Efficiency is
            <br />
            built through
            <span> coordination.</span>
          </h2>

          <p>
            Modern logistics involves more than moving goods. It requires
            information, timing, inventory visibility, planning and the
            coordination of multiple activities.
          </p>

          <div className="logistics-system-points">
            <div>
              <CheckCircle2 size={18} />
              <span>Planning and coordination</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Visibility and tracking</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Resource and inventory management</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Continuous improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="logistics-connections">
        <div className="logistics-section-top">
          <span>06 / CONNECTED DISCIPLINES</span>
          <span>THE GBC ECOSYSTEM</span>
        </div>

        <div className="logistics-connections-heading">
          <h2>
            Logistics connects
            <br />
            <span>more than locations.</span>
          </h2>
          <p>
            Its impact reaches across industries, technologies and disciplines.
            This is why logistics belongs within a wider ecosystem of ideas.
          </p>
        </div>

        <div className="logistics-connections-grid">
          {connections.map((item, index) => (
            <Link
              to={item.link}
              className="logistics-connection"
              key={item.name}
            >
              <span className="logistics-connection-number">0{index + 1}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="logistics-cta">
        <div className="logistics-cta-decoration">
          <Route size={210} strokeWidth={0.55} />
        </div>

        <div className="logistics-cta-content">
          <span>GOLDEN BRIDGE CONCEPT / LOGISTICS</span>
          <h2>
            Connecting
            <br />
            movement to <span>possibility.</span>
          </h2>
          <p>
            Explore the systems, ideas and technologies that help people,
            resources and opportunities reach where they need to be.
          </p>

          <Link to="/contact" className="logistics-cta-button">
            Connect with GBC
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="logistics-cta-index">GBC / 010</div>
      </section>
    </main>
  );
}

export default Logistics;
