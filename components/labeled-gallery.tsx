"use client";

import { useMemo, useState } from "react";
import Modal from "./modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Group = {
  label: string;
  images: string[];
};

export default function LabeledGallery({
  groups,
  title,
}: {
  title: string;
  groups: Group[];
}) {
  const flat = useMemo(() => {
    const items: { label: string; img: string }[] = [];
    for (const g of groups) {
      for (const img of g.images) items.push({ label: g.label, img });
    }
    return items.filter((x) => x.img);
  }, [groups]);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % flat.length);
  const prev = () => setIdx((i) => (i - 1 + flat.length) % flat.length);

  if (!flat.length) return null;

  return (
    <>
      <div className="grid grid2" style={{ marginTop: 10 }}>
        {flat.slice(0, 4).map((it, i) => (
          <button
            key={it.img}
            className="card"
            style={{ padding: 10, cursor: "pointer", textAlign: "left" }}
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            aria-label="Open gallery"
          >
            <div className="kicker" style={{ marginBottom: 6 }}>
              {it.label}
            </div>
            <img
              src={`/${it.img}`}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                border: "1px solid var(--line)",
              }}
            />
          </button>
        ))}
      </div>

      <Modal open={open} title={title} onClose={() => setOpen(false)}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
          <button className="btn" onClick={prev} disabled={flat.length <= 1}>
            <ChevronLeft size={18} /> Prev
          </button>
          <div className="small">
            {idx + 1} / {flat.length}
          </div>
          <button className="btn" onClick={next} disabled={flat.length <= 1}>
            Next <ChevronRight size={18} />
          </button>
        </div>

        <div style={{ marginTop: 10 }}>
          <div className="kicker" style={{ marginBottom: 8 }}>
            {flat[idx].label}
          </div>
          <img
            src={`/${flat[idx].img}`}
            alt={`${title} - ${flat[idx].label}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 14,
              border: "1px solid var(--line)",
            }}
          />
        </div>

        <div className="sep" />
        <div className="card">
          <p className="kicker">Sections</p>
          <div className="tagRow" style={{ marginTop: 8 }}>
            {groups.map((g) => (
              <span className="tag" key={g.label}>
                {g.label} ({g.images.length})
              </span>
            ))}
          </div>
          <p className="small" style={{ marginTop: 10 }}>
            Tip: Use Next/Prev to navigate across all sections.
          </p>
        </div>
      </Modal>
    </>
  );
}