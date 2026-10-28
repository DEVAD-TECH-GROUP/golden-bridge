import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/images/hero_logo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Leadership", to: "/leadership" },
  { label: "Departments", to: "/departments" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "News & Updates", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

const description =
  "Golden Bridge Concept is a multi-sector organization connecting people, ideas, technology, resources and opportunities to create meaningful value and build a better future. Through collaboration, innovation and strategic partnerships, we bring diverse sectors together to develop practical solutions, empower communities and create lasting impact.";

export default function Footer() {
  const footerRef = useRef(null);

  const [footerVisible, setFooterVisible] = useState(false);
  const [typedDescription, setTypedDescription] = useState("");

  // Detect when the footer enters or leaves the viewport.
  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Animate the description while the footer is visible.
  useEffect(() => {
    if (!footerVisible) {
      setTypedDescription("");
      return;
    }

    let index = 0;
    setTypedDescription("");

    const timer = setInterval(() => {
      index += 1;
      setTypedDescription(description.slice(0, index));

      if (index >= description.length) {
        clearInterval(timer);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [footerVisible]);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="container">
        <div className="footer-main">
          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-logo"
              aria-label="Golden Bridge Concept home"
            >
              <img
                src={logo}
                alt="Golden Bridge Concept logo"
                className="footer-logo-image"
              />

              <span className="footer-brand-name">
                GOLDEN BRIDGE
                <span>CONCEPT</span>
              </span>
            </Link>

            <p className="footer-tagline">
              Connecting Ideas <span>•</span> Creating Value
              <span> • </span> Building the Future
            </p>

            <p
              className="footer-description"
              aria-label={description}
              aria-live="off"
            >
              {typedDescription}
              {footerVisible &&
                typedDescription.length < description.length && (
                  <span className="typing-cursor" aria-hidden="true">
                    |
                  </span>
                )}
            </p>
          </div>

          {/* EXPLORE GBC COLUMN */}
          <div className="footer-navigation">
            <h3>Explore GBC</h3>

            <nav className="footer-links" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT COLUMN */}
          <div className="footer-contact">
            <h3>Connect With Us</h3>

            <p>
              <MapPin size={18} aria-hidden="true" />
              <span>
                Building connections.
                <br />
                Creating opportunities.
              </span>
            </p>

            <p>
              <Mail size={18} aria-hidden="true" />
              <span>Get in touch with our team.</span>
            </p>

            <Link to="/contact" className="footer-contact-link">
              Contact GBC
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Golden Bridge Concept. All rights
            reserved.
          </p>

          <p className="footer-signature">
            Built on <span>ideas</span>. Driven by <span>innovation</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
