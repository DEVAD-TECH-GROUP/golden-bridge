import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/BT8dXEw1S4dFkdkQSOfIUC";

const contactOptions = [
  {
    icon: Handshake,
    title: "Partnerships & Collaboration",
    description:
      "Have a business idea, partnership proposal or initiative you would like to explore with GBC?",
  },
  {
    icon: Users,
    title: "Community & Participation",
    description:
      "Interested in joining our community, contributing your skills or participating in our activities?",
  },
  {
    icon: Mail,
    title: "General Enquiries",
    description:
      "Have a question about GBC, our departments or the work we do? Send us your enquiry.",
  },
];

export default function Contact() {
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: location.state?.subject || "",
    message: location.state?.message || "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (location.state?.subject || location.state?.message) {
      setForm((current) => ({
        ...current,
        subject: location.state.subject || current.subject,
        message: location.state.message || current.message,
      }));
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(
      "Your details have been validated, but this form is not connected to a message service yet. Please contact GBC through our WhatsApp community below.",
    );
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-one" />
        <div className="contact-hero-glow contact-hero-glow-two" />

        <div className="contact-container contact-hero-grid">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              LET'S CONNECT
            </span>

            <h1>
              Every great idea
              <br />
              starts with a <span>conversation.</span>
            </h1>

            <p className="contact-hero-description">
              Have a question, a proposal or an idea for the future? Connect
              with Golden Bridge Concept and let’s explore what we can build
              together.
            </p>

            <div className="contact-hero-actions">
              <a
                className="contact-button contact-button-primary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={21} />
                Join our WhatsApp community
                <ArrowUpRight size={17} />
              </a>

              <a className="contact-text-link" href="#contact-form">
                Send an enquiry
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="contact-hero-note">
              <span className="contact-note-icon">
                <CheckCircle2 size={17} />
              </span>
              Ideas, partnerships and meaningful connections start here.
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-orbit contact-orbit-outer" />
            <div className="contact-orbit contact-orbit-inner" />

            <div className="contact-visual-card">
              <div className="contact-visual-icon">
                <Handshake size={38} strokeWidth={1.5} />
              </div>

              <span className="contact-visual-kicker">GBC CONNECTIONS</span>

              <h2>Connect.</h2>
              <h2 className="contact-visual-gold">Collaborate.</h2>
              <h2>Create impact.</h2>

              <p>Bringing people, ideas and opportunities together.</p>

              <div className="contact-visual-line" />

              <span className="contact-visual-tag">
                CONNECTING IDEAS • CREATING VALUE
              </span>
            </div>

            <div className="contact-float-card contact-float-top">
              <span className="contact-float-icon">
                <Users size={18} />
              </span>

              <span>
                <strong>People</strong>
                <small>Stronger together</small>
              </span>
            </div>

            <div className="contact-float-card contact-float-bottom">
              <span className="contact-float-icon">
                <MessageCircle size={18} />
              </span>

              <span>
                <strong>Ideas</strong>
                <small>Start a conversation</small>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-hero-bottom-line" />
      </section>

      {/* CONTACT OPTIONS */}
      <section className="contact-options-section">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">HOW CAN WE HELP?</span>

            <h2>
              What would you like to <span>discuss?</span>
            </h2>

            <p>
              Choose a starting point. We welcome conversations that create
              value and move good ideas forward.
            </p>
          </div>

          <div className="contact-options-grid">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article className="contact-option-card" key={option.title}>
                  <div className="contact-option-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-option-link"
                  >
                    Start a conversation <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-container contact-main-grid">
          <div className="contact-main-copy">
            <span className="contact-eyebrow">GET IN TOUCH</span>

            <h2>
              Tell us what
              <br />
              you have in <span>mind.</span>
            </h2>

            <p>
              Share a little about yourself and what you would like to discuss.
              You can also join our WhatsApp community directly for another way
              to connect.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FaWhatsapp size={22} />
                </span>

                <div>
                  <strong>WhatsApp community</strong>
                  <p>Connect with the GBC community.</p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the group <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={20} />
                </span>

                <div>
                  <strong>Our ecosystem</strong>
                  <p>Explore our departments and areas of interest.</p>

                  <Link to="/departments">
                    Explore departments <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Clock3 size={20} />
                </span>

                <div>
                  <strong>Let’s explore possibilities</strong>
                  <p>Tell us about your idea, question or proposal.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-form-icon">
                <Send size={21} />
              </span>

              <div>
                <h3>Send an enquiry</h3>
                <p>Complete the fields below to prepare your enquiry.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Your name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your message
                <textarea
                  name="message"
                  placeholder="Tell us a little about your idea or enquiry..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button
                type="submit"
                className="contact-button contact-button-primary contact-submit-button"
              >
                <Send size={17} />
                Validate enquiry
                <ArrowRight size={17} />
              </button>

              {status && (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              )}

              <p className="contact-form-disclaimer">
                This form currently validates your entries only. It does not
                send or store your message.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="contact-bottom-cta">
        <div className="contact-container contact-bottom-cta-inner">
          <div>
            <span className="contact-eyebrow">JOIN THE CONVERSATION</span>

            <h2>
              Be part of the <span>GBC community.</span>
            </h2>

            <p>
              Connect with people, share ideas and discover opportunities to
              create value together.
            </p>
          </div>

          <a
            className="contact-button contact-button-whatsapp"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={23} />
            Join GBC on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
