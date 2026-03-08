// components/certificates.tsx ✅ FULL UPDATED (View + Download inside modal)
"use client";

import { useState } from "react";
import Modal from "@/components/modal";
import { ArrowRight, Download } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  tags: string[];
  file: string;
};

const CERTS: Cert[] = [
  {
    title: "PetroCamp Certificate",
    issuer: "SPE Suez University (SPE SU)",
    date: "Feb 2026",
    tags: ["Competition", "EOR", "Polymer Flooding", "1st Place"],
    file: "/certificates/petrocamp-spe-su-feb-2026.png",
  },
  {
    title: "Jet Pump Course",
    issuer: "OPA Energy",
    date: "Dec 2025",
    tags: ["Artificial Lift", "Production Engineering"],
    file: "/certificates/jet-pump-opa-dec-2025.pdf",
  },
  {
    title: "Rig Inspection Course",
    issuer: "IAOSH-UK",
    date: "Oct 2025",
    tags: ["HSE", "Rig Inspection", "Safety"],
    file: "/certificates/rig-inspection-iaosh-uk-oct-2025.pdf",
  },
  {
    title: "Reservoir Engineering Intern",
    issuer: "OPA Energy",
    date: "Oct 2025",
    tags: ["Reservoir Engineering", "MBAL", "History Matching", "2nd Place", "Best Member"],
    file: "/certificates/reservoir-intern-opa-oct-2025.pdf",
  },
  {
    title: "Process Engineering Intern",
    issuer: "Cairo Oil Refining Company (CORC)",
    date: "Aug 2025",
    tags: ["Process", "Refining", "Distillation"],
    file: "/certificates/process-intern-corc-aug-2025.png",
  },
  {
    title: "Process Engineering Intern",
    issuer: "ENPPI",
    date: "Jul 2025",
    tags: ["Process", "P&IDs", "Utilities"],
    file: "/certificates/process-intern-enppi-jul-2025.png",
  },
];

const isPdf = (p: string) => p.toLowerCase().endsWith(".pdf");

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <>
      <div className="card">
        <p className="kicker">Certificates</p>
        <h2 className="h2">Credentials & Recognitions</h2>
        <p className="p">Click any certificate to preview and download.</p>

        <div className="sep" />

        <div className="grid grid2">
          {CERTS.map((c) => (
            <button
              key={`${c.title}-${c.issuer}-${c.date}`}
              className="card"
              style={{ textAlign: "left", cursor: "pointer" }}
              onClick={() => {
                setActive(c);
                setOpen(true);
              }}
            >
              <p className="kicker">{c.date}</p>
              <h3 className="h2" style={{ marginTop: 6 }}>
                {c.title}
              </h3>
              <p className="p">{c.issuer}</p>

              <div className="tagRow">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <p className="small" style={{ marginTop: 10 }}>
                Click to preview →
              </p>
            </button>
          ))}
        </div>

        <p className="small" style={{ marginTop: 12 }}>
        
        </p>
      </div>

      <Modal
        open={open}
        title={active ? `${active.title} — ${active.issuer}` : "Certificate"}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
      >
        {active && (
          <>
            <p className="kicker">{active.date}</p>

            {/* ✅ View + Download buttons */}
            <div className="row" style={{ marginTop: 10 }}>
              <a className="btn" href={active.file} target="_blank" rel="noreferrer">
                View <ArrowRight size={18} />
              </a>
              <a className="btn btnPrimary" href={active.file} download>
                Download <Download size={18} />
              </a>
            </div>

            <div className="sep" />

            {isPdf(active.file) ? (
              <div className="card" style={{ padding: 10 }}>
                <p className="kicker">Preview (PDF)</p>
                <iframe
                  src={active.file}
                  title={active.title}
                  style={{
                    width: "100%",
                    height: "70vh",
                    border: "1px solid var(--line)",
                    borderRadius: 12,
                    background: "black",
                  }}
                />
              </div>
            ) : (
              <div className="card" style={{ padding: 10 }}>
                <p className="kicker">Preview (Image)</p>
                <img
                  src={active.file}
                  alt={active.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 12,
                    border: "1px solid var(--line)",
                  }}
                />
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}