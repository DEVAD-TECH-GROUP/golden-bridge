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
              <Link
                to={`/departments/${department.slug}`}
                className="pillar-card-link"
                key={department.slug}
                aria-label={`Explore ${department.name}`}
              >
                <article className="pillar-card">
                  <div className="pillar-top">
                    <span>{department.number}</span>
                    <ArrowRight size={22} />
                  </div>

                  <h3>{department.name}</h3>

                  <p>{department.description}</p>

                  <span className="text-link">
                    Explore department <ArrowRight size={16} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
