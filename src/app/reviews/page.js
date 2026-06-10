"use client";

import { useMemo, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS, ALL_TAGS, REVIEW_STATS } from "@/lib/reviews";

const SORT_OPTIONS = [
  { id: "newest", label: "Newest first" },
  { id: "stars",  label: "Highest rated" },
  { id: "oldest", label: "Oldest first" },
];

export default function ReviewsPage() {
  const [tag, setTag] = useState("all");
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = REVIEWS;
    if (tag !== "all") list = list.filter((r) => r.tags.includes(tag));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((r) =>
        r.headline.toLowerCase().includes(q) ||
        r.body.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q)
      );
    }
    list = [...list];
    if (sort === "newest") list.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    if (sort === "oldest") list.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    if (sort === "stars")  list.sort((a, b) => b.stars - a.stars);
    return list;
  }, [tag, sort, query]);

  return (
    <>
      {/* HEADER */}
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 48px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>All member reviews</div>
            <h1 className="h1" style={{ marginBottom: 16 }}>
              {REVIEW_STATS.total} reviews. <span style={{ color: "var(--gold)" }}>★ {REVIEW_STATS.avgStars}</span> average.
            </h1>
            <p className="lead">
              Every review here is from a verified program member. Names, locations, and dates are real. We don&apos;t edit reviews
              for sentiment — what you see is what they wrote.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section style={{ position: "sticky", top: 72, zIndex: 20, background: "rgba(10, 10, 15, 0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="wrap" style={{ padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search reviews…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: 280 }}
          />
          <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ maxWidth: 200 }}>
            {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginLeft: "auto" }}>
            <Chip active={tag === "all"} onClick={() => setTag("all")}>All ({REVIEWS.length})</Chip>
            {ALL_TAGS.map((t) => (
              <Chip key={t} active={tag === t} onClick={() => setTag(t)}>{t.replace(/-/g, " ")}</Chip>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-quaternary)" }}>
              No reviews match. Try clearing filters.
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 24, color: "var(--text-muted)", fontSize: 14 }}>
                Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> of {REVIEWS.length} reviews
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
                {filtered.map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        border: "1px solid " + (active ? "var(--accent)" : "var(--border)"),
        background: active ? "var(--accent-soft)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-muted)",
        cursor: "pointer",
        transition: "all 120ms ease",
        textTransform: "capitalize",
      }}
    >
      {children}
    </button>
  );
}
