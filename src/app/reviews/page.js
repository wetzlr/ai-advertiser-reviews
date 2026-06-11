"use client";

import { useMemo, useState } from "react";
import WinCard from "@/components/WinCard";
import { WINS, STATS } from "@/lib/wins";

const SORT_OPTIONS = [
  { id: "newest", label: "Newest first" },
  { id: "oldest", label: "Oldest first" },
];

export default function ReviewsPage() {
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const PER_PAGE = 24;

  const filtered = useMemo(() => {
    let list = WINS;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((w) =>
        (w.title || "").toLowerCase().includes(q) ||
        (w.body || "").toLowerCase().includes(q) ||
        (w.memberName || "").toLowerCase().includes(q)
      );
    }
    list = [...list];
    if (sort === "newest") list.sort((a, b) => (b.eventDate || "").localeCompare(a.eventDate || ""));
    if (sort === "oldest") list.sort((a, b) => (a.eventDate || "").localeCompare(b.eventDate || ""));
    return list;
  }, [sort, query]);

  const paged = filtered.slice(0, (page + 1) * PER_PAGE);
  const hasMore = filtered.length > paged.length;

  return (
    <>
      {/* HEADER */}
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 48px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>All member wins</div>
            <h1 className="h1" style={{ marginBottom: 16 }}>
              Verified member wins.
            </h1>
            <p className="lead">
              Every entry is from a verified member of the AI-Advertiser program — pulled directly from our internal member portal.
              Names, screenshots, and stories are theirs.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section
        style={{
          position: "sticky",
          top: 66,
          zIndex: 20,
          background: "rgba(10, 10, 26, 0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border-soft)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        <div className="wrap" style={{ padding: "14px 24px", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search wins…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(0); }}
            style={{ maxWidth: 280 }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ maxWidth: 200 }}
          >
            {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
          <div style={{ marginLeft: "auto", fontSize: 13, color: "var(--text-muted)" }}>
            {query && <>Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> matching</>}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          {paged.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-quaternary)" }}>
              No wins match your search.
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
                {paged.map((w) => <WinCard key={w.id} win={w} />)}
              </div>
              {hasMore && (
                <div style={{ textAlign: "center", marginTop: 36 }}>
                  <button onClick={() => setPage((p) => p + 1)} className="btn btn-ghost">
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* TRUSTPILOT BAND */}
      <section
        className="section"
        style={{
          background: "var(--bg-elev-1)",
          borderTop: "1px solid var(--border-soft)",
          textAlign: "center",
        }}
      >
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Want a third-party verified read?</div>
          <h2 className="h2" style={{ marginBottom: 14 }}>See AI-Advertiser on Trustpilot.</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Trustpilot reviews are verified independently and can&apos;t be edited by us.
          </p>
          <a
            href="https://www.trustpilot.com/review/ai-advertiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="trustpilot-link"
          >
            <span style={{ fontSize: 18 }}>★</span> View Trustpilot reviews
          </a>
        </div>
      </section>
    </>
  );
}
