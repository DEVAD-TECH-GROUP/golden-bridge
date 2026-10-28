import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { departments } from "../../data/departments";

export default function Departments() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">THE GBC ECOSYSTEM</span>
            <h1>One vision. Multiple pillars.</h1>
            <p>
              Explore the twelve interconnected departments of Golden Bridge
              Concept, each contributing to our wider vision of creating value.
            </p>
          </div>

          <div className="pillar-grid">
            {departments.map((department) => (
              <article className="pillar-card" key={department.slug}>
                <div className="pillar-top">
                  <span>{department.number}</span>
                  <ArrowRight size={22} />
                </div>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
                <Link
                  className="text-link"
                  to={`/departments/${department.slug}`}
                >
                  Explore department <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
