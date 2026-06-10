import { BUSINESS } from "@/lib/business";

function StarBar({ stars }) {
  return (
    <span className="stars" aria-label={`${stars} out of 5 stars`}>
      {"★".repeat(stars)}{"☆".repeat(5 - stars)}
    </span>
  );
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ReviewCard({ review }) {
  // schema.org Review markup — every card emits its own Review JSON-LD so
  // AI search engines can index each one independently. Aggregated rating
  // is added at the page level.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    datePublished: review.dateISO,
    reviewBody: review.body,
    name: review.headline,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.stars,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "Service",
      name: `${BUSINESS.dba} brand-scaling program`,
      provider: { "@type": "Organization", name: BUSINESS.dba },
    },
  };

  return (
    <article className="review-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="review-head">
        <div
          className="review-avatar"
          style={{ background: review.avatarBg }}
          aria-hidden="true"
        >
          {initials(review.name)}
        </div>
        <div className="review-meta">
          <span className="review-name">{review.name}</span>
          <span className="review-loc">{review.location}</span>
        </div>
      </header>
      <StarBar stars={review.stars} />
      <h3 className="review-headline">{review.headline}</h3>
      <p className="review-body">{review.body}</p>
      <footer className="review-foot">
        <span>{formatDate(review.dateISO)}</span>
        <span>Verified member</span>
      </footer>
    </article>
  );
}
