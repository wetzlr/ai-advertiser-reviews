import { BUSINESS } from "@/lib/business";

function StarBar() {
  return <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>;
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function initials(name) {
  return (name || "?")
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function WinCard({ win }) {
  // schema.org Review — every win emits its own structured-data Review so
  // search engines + AI overviews index each one. Aggregated rating is
  // declared on the page level.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: win.memberName },
    datePublished: win.eventDate,
    reviewBody: win.body,
    name: win.title,
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    itemReviewed: {
      "@type": "Service",
      name: `${BUSINESS.dba} brand-scaling program`,
      provider: { "@type": "Organization", name: BUSINESS.dba },
    },
  };

  return (
    <article className="win-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="win-head">
        {win.memberPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={win.memberPhoto}
            alt={win.memberName}
            width={42}
            height={42}
            className="win-avatar"
          />
        ) : (
          <div className="win-avatar" aria-hidden="true">
            {initials(win.memberName)}
          </div>
        )}
        <div className="win-meta">
          <span className="win-name">{win.memberName}</span>
          <span className="win-date">{formatDate(win.eventDate)}</span>
        </div>
        <StarBar />
      </header>

      {win.title && <h3 className="win-title">{win.title}</h3>}
      {win.body && <p className="win-body">{win.body}</p>}

      {win.imageUrl && (
        <div className="win-image-wrap">
          {/* Raw <img> so each screenshot keeps its natural aspect ratio.
              Forced 16:10 crop was chopping tall iMessage / bank receipts. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={win.imageUrl}
            alt={`${win.memberName} — ${win.title}`}
            loading="lazy"
          />
        </div>
      )}

      <footer className="win-foot">
        <span>Submitted via member portal</span>
        <span className="verified">✓ Verified</span>
      </footer>
    </article>
  );
}
