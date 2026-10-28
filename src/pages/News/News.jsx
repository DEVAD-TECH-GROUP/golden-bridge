import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
  Search,
  Sparkles,
} from "lucide-react";

const categories = [
  "All Updates",
  "Announcements",
  "Technology & Digital",
  "Health & Nutrition",
  "Agriculture & Food",
  "Education & Skills",
  "Business & Enterprise",
  "Research, Data & Intelligence",
  "Finance & Investment",
  "Media & Communication",
  "Logistics & Distribution",
  "Community Development",
  "Real Estate & Infrastructure",
  "Innovation & Strategy",
];

const articles = [
  {
    id: 1,
    category: "Announcements",
    title: "Discover the vision behind Golden Bridge Concept",
    excerpt:
      "Explore how GBC connects ideas, people, and opportunities across an interconnected ecosystem of industries.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "GBC Overview",
    featured: true,
    slug: null,
  },
  {
    id: 2,
    category: "Technology & Digital",
    title: "Technology as a bridge to new possibilities",
    excerpt:
      "Explore the role of digital tools, software, and technology-led thinking in solving practical problems.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Digital",
    slug: "technology",
  },
  {
    id: 3,
    category: "Health & Nutrition",
    title: "Building a healthier future through knowledge",
    excerpt:
      "Discover how health awareness, nutrition knowledge, and practical approaches can support healthier communities.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Health",
    slug: "health",
  },
  {
    id: 4,
    category: "Agriculture & Food",
    title: "Connecting agriculture, food, and opportunity",
    excerpt:
      "Explore the opportunities within food production, agricultural innovation, and more sustainable food systems.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Agriculture",
    slug: "agriculture",
  },
  {
    id: 5,
    category: "Education & Skills",
    title: "Learning and skills for a changing world",
    excerpt:
      "Discover the importance of accessible learning, practical skills, and continuous development.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Education",
    slug: "education",
  },
  {
    id: 6,
    category: "Business & Enterprise",
    title: "Turning ideas into enterprise opportunities",
    excerpt:
      "Explore the foundations of business development, entrepreneurship, and sustainable enterprise.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Business",
    slug: "business",
  },
  {
    id: 7,
    category: "Research, Data & Intelligence",
    title: "Using research and data to make better decisions",
    excerpt:
      "See how evidence, analysis, and reliable information can help people and organizations make informed choices.",
    date: "Editorial preview",
    readTime: "4 min read",
    tag: "Research & Data",
    slug: "research-data-intelligence",
  },
  {
    id: 8,
    category: "Finance & Investment",
    title: "Understanding finance, investment, and value",
    excerpt:
      "Explore financial awareness, investment thinking, and responsible approaches to creating long-term value.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Finance",
    slug: "finance-investment",
  },
  {
    id: 9,
    category: "Media & Communication",
    title: "The power of communication and storytelling",
    excerpt:
      "Discover how media, clear messaging, and storytelling can connect people with ideas and opportunities.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Media",
    slug: "media-communication",
  },
  {
    id: 10,
    category: "Logistics & Distribution",
    title: "Connecting supply, movement, and delivery",
    excerpt:
      "Explore the role of logistics and distribution in moving goods, coordinating operations, and serving communities.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Logistics",
    slug: "logistics-distribution",
  },
  {
    id: 11,
    category: "Community Development",
    title: "Creating opportunities through community development",
    excerpt:
      "Learn how collaboration, local initiatives, and shared responsibility can contribute to stronger communities.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Community",
    slug: "community-development",
  },
  {
    id: 12,
    category: "Real Estate & Infrastructure",
    title: "Thinking about spaces, infrastructure, and growth",
    excerpt:
      "Explore how the built environment and infrastructure support development, connection, and everyday life.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Infrastructure",
    slug: "real-estate-infrastructure",
  },
  {
    id: 13,
    category: "Innovation & Strategy",
    title: "Connecting innovation with strategic direction",
    excerpt:
      "Explore how creative thinking, planning, and strategic decisions can turn promising ideas into meaningful progress.",
    date: "Editorial preview",
    readTime: "3 min read",
    tag: "Innovation",
    slug: "innovation-strategy",
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Updates" || article.category === activeCategory;

      const matchesSearch =
        !query ||
        [article.title, article.excerpt, article.category, article.tag].some(
          (value) => value.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredArticle = filteredArticles.find((article) => article.featured);

  const latestArticles = filteredArticles.filter(
    (article) => !article.featured,
  );

  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="news-container">
          <div className="news-hero-content">
            <span className="news-eyebrow">
              <Newspaper size={15} />
              THE GBC JOURNAL
            </span>

            <h1>
              Ideas in motion.
              <span> Stories that matter.</span>
            </h1>

            <p>
              Explore perspectives, developments, and stories from across Golden
              Bridge Concept's interconnected ecosystem.
            </p>

            <a className="news-hero-link" href="#explore-updates">
              Explore our updates
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="news-hero-mark" aria-hidden="true">
            <div className="news-mark-orbit news-mark-orbit-one" />
            <div className="news-mark-orbit news-mark-orbit-two" />
            <div className="news-mark-center">
              <Sparkles size={36} />
            </div>
            <span className="news-mark-label">CONNECT</span>
            <span className="news-mark-label news-mark-label-bottom">
              CREATE · BUILD
            </span>
          </div>
        </div>
      </section>

      <section className="news-updates-section" id="explore-updates">
        <div className="news-container">
          <div className="news-section-heading">
            <div>
              <span className="news-eyebrow">STAY INFORMED</span>
              <h2>Explore our updates</h2>
              <p>
                Browse stories from all 12 GBC departments or search for a topic
                that interests you.
              </p>
            </div>

            <div className="news-count">
              <span>{filteredArticles.length}</span>
              <small>
                {filteredArticles.length === 1 ? "story" : "stories"}
              </small>
            </div>
          </div>

          <div className="news-toolbar">
            <div className="news-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search updates, topics, or departments..."
                aria-label="Search news and updates"
              />
            </div>

            {searchQuery && (
              <button
                type="button"
                className="news-clear-search"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </button>
            )}
          </div>

          <div className="news-filter-heading">
            <span>FILTER BY CATEGORY</span>
            <span>All 12 departments included</span>
          </div>

          <div
            className="news-category-list"
            aria-label="Filter updates by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`news-category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredArticle && (
            <article className="news-featured-card">
              <div className="news-featured-visual">
                <span className="news-featured-visual-label">
                  GOLDEN BRIDGE CONCEPT
                </span>

                <div className="news-featured-graphic" aria-hidden="true">
                  <span className="news-graphic-line news-graphic-line-one" />
                  <span className="news-graphic-line news-graphic-line-two" />
                  <span className="news-graphic-line news-graphic-line-three" />
                  <span className="news-graphic-node news-graphic-node-one" />
                  <span className="news-graphic-node news-graphic-node-two" />
                  <span className="news-graphic-node news-graphic-node-three" />
                  <span className="news-graphic-node news-graphic-node-four" />
                  <div className="news-graphic-core">GBC</div>
                </div>

                <span className="news-featured-visual-caption">
                  CONNECTING IDEAS · CREATING VALUE
                </span>
              </div>

              <div className="news-featured-content">
                <div className="news-article-meta">
                  <span className="news-article-category">
                    {featuredArticle.category}
                  </span>
                  <span className="news-preview-label">Preview</span>
                </div>

                <h3>{featuredArticle.title}</h3>
                <p>{featuredArticle.excerpt}</p>

                <div className="news-article-details">
                  <span>
                    <CalendarDays size={15} />
                    {featuredArticle.date}
                  </span>
                  <span>
                    <Clock3 size={15} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <Link to="/about" className="news-read-link">
                  Discover GBC
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          )}

          {latestArticles.length > 0 && (
            <div className="news-results-heading">
              <h3>
                {activeCategory === "All Updates"
                  ? "Across our ecosystem"
                  : activeCategory}
              </h3>
              <span>
                {latestArticles.length}{" "}
                {latestArticles.length === 1 ? "story" : "stories"}
              </span>
            </div>
          )}

          {latestArticles.length > 0 ? (
            <div className="news-articles-grid">
              {latestArticles.map((article) => (
                <article className="news-article-card" key={article.id}>
                  <div className="news-card-topline">
                    <span className="news-card-icon">
                      <Newspaper size={20} />
                    </span>
                    <span className="news-card-tag">{article.tag}</span>
                  </div>

                  <div className="news-article-meta">
                    <span className="news-article-category">
                      {article.category}
                    </span>
                    <span className="news-preview-label">Preview</span>
                  </div>

                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>

                  <div className="news-article-details">
                    <span>
                      <CalendarDays size={15} />
                      {article.date}
                    </span>
                    <span>
                      <Clock3 size={15} />
                      {article.readTime}
                    </span>
                  </div>

                  <Link
                    to={
                      article.slug ? `/departments/${article.slug}` : "/about"
                    }
                    className="news-read-link"
                  >
                    Explore department
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          ) : !featuredArticle ? (
            <div className="news-empty-state">
              <Search size={30} />
              <h3>No matching updates found</h3>
              <p>
                Try another search term or choose a different department
                category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Updates");
                }}
              >
                View all updates
              </button>
            </div>
          ) : null}

          {featuredArticle && latestArticles.length === 0 && (
            <div className="news-single-result-note">
              This is the only preview currently shown in this category. Explore
              another category to see more.
            </div>
          )}
        </div>
      </section>

      <section className="news-cta-section">
        <div className="news-container news-cta-content">
          <div>
            <span className="news-eyebrow">BE PART OF THE JOURNEY</span>
            <h2>Every great connection starts somewhere.</h2>
            <p>
              Discover what GBC does, explore our departments, or get in touch
              to start a conversation.
            </p>
          </div>

          <div className="news-cta-actions">
            <Link to="/departments" className="news-cta-primary">
              Explore departments
              <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="news-cta-secondary">
              Contact GBC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
