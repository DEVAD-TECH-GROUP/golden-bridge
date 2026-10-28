import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">GOLDEN BRIDGE CONCEPT</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/" className="button button-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}
