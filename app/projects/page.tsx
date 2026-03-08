"use client";

import Nav from "@/components/nav";
import { Page, Reveal } from "@/components/motion";
import Modal from "@/components/modal";
import LabeledGallery from "@/components/labeled-gallery";
import { useEffect, useState } from "react";

type GalleryGroup = {
  label: string;
  images: string[];
};

type Project = {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  bullets: string[];
  groups?: GalleryGroup[];
};

const projects: Project[] = [
  {
    title: "PetroCairo (MuskatPro) — Reservoir Performance Prediction (Muskat Method)",
    date: "Mar 2026",
    desc:
      "Reservoir performance prediction tool based on the Muskat method. Accepts PVT + production/pressure inputs, generates predicted saturations and key performance outputs, and exports results (Excel/CSV + PDF) with built-in plots.",
    tags: ["Reservoir", "Muskat Method", "Performance Prediction", "Desktop App", "Export: PDF/CSV"],
    bullets: [
      "Muskat-based workflow with clear Data → Inputs → Results → Plots flow.",
      "Outputs table + plots for quick interpretation and reporting.",
      "Export features for Excel/CSV and PDF reports.",
    ],
    groups: [
      { label: "Data", images: ["petrocairo-1.png"] },
      { label: "Inputs", images: ["petrocairo-2.png"] },
      { label: "Results Table", images: ["petrocairo-3.png"] },
      { label: "Plots", images: ["petrocairo-4.png"] },
    ],
  },
  {
    title: "Polymer Flooding — High Permeability Reservoir (PetroCamp, UEE)",
    date: "Feb 2026",
    desc:
      "Real-case study for Pelican Lake & Mooney Bluesky (Alberta). Built a structured EOR workflow covering screening, polymer selection considerations, operational challenges/mitigations, and recommended a path from polymer flooding toward ASP flooding for improved sweep efficiency.",
    tags: ["EOR", "Polymer Flooding", "ASP Flooding", "Field Case", "Competition"],
    bullets: [
      "Field overview + production challenges and why polymer improves mobility ratio and sweep.",
      "Operational challenges: channeling/thief zones, polymer degradation, early breakthrough; mitigation plan.",
      "Recommendation: polymer flooding as a step toward ASP flooding to further improve recovery.",
    ],
    groups: [
      { label: "Title", images: ["polymer-1.png"] },
      { label: "Field Overview", images: ["polymer-2.png"] },
      { label: "Pilot / Performance Evidence", images: ["polymer-3.png"] },
      { label: "Conclusions", images: ["polymer-4.png"] },
      { label: "Recommendation (ASP path)", images: ["polymer-5.png"] },
    ],
  },
  {
    title: "Detailed Well Planning — Landmark Suite",
    date: "2025–2026",
    desc:
      "Well planning workflow using Compass, StressCheck, CasingSeat, CasingWear, and WellPlan. Structured inputs/assumptions and compiled outputs into report-ready deliverables.",
    tags: ["Drilling", "Well Planning", "Landmark"],
    bullets: [
      "Compass: generated survey report and trajectory outputs to validate well path and casing points.",
      "StressCheck: reviewed casing/tubular stress outputs and safety margins for design decisions.",
      "CasingWear: evaluated wear risk along the trajectory and verified wear status in 3D visualization.",
      "WellPlan: produced a full well schematic visualization to communicate casing/tubing design clearly.",
    ],
    groups: [
      { label: "Compass", images: ["landmark-compass-1.png", "landmark-compass-2.png"] },
      { label: "StressCheck", images: ["landmark-stresscheck-1.png", "landmark-stresscheck-2.png"] },
      { label: "CasingWear", images: ["landmark-casingwear-1.png", "landmark-casingwear-2.png"] },
      { label: "WellPlan", images: ["landmark-wellplan-1.png", "landmark-wellplan-2.png"] },
    ],
  },
  {
    title: "Well Logging Interpretation — Techlog",
    date: "2025–2026",
    desc:
      "Well log interpretation workflow in Techlog; organized outputs into clear deliverables and communicated formation evaluation results.",
    tags: ["Petrophysics", "Techlog", "Interpretation"],
    bullets: [
      "Built a clean Techlog layout for multi-track log visualization and interpretation.",
      "Generated zonation/flag-based summaries for rock, reservoir, and pay classification.",
      "Compiled report-ready tables and outputs (net/gross, porosity, saturation indicators) to support conclusions.",
    ],
    groups: [
      { label: "Techlog Layout", images: ["techlog-1.png", "techlog-2.png"] },
      { label: "Zonation Summary Table", images: ["techlog-3.png"] },
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  // When modal opens, scroll the page to the top so the modal is centered and readable
  useEffect(() => {
    if (open) window.scrollTo(0, 0);
  }, [open]);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <>
      <Nav />
      <Page>
        <div className="container">
          <section className="hero">
            <Reveal>
              <p className="kicker">Projects</p>
              <h1 className="h1">Work I’m proud of</h1>
              <p className="sub">
                Reservoir tools, competition projects, and petroleum engineering workflows — with labeled screenshots.
              </p>
            </Reveal>
          </section>

          <div className="grid" style={{ gap: 14 }}>
            {projects.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 0.03}>
                <button
                  className="card"
                  style={{ textAlign: "left", cursor: "pointer" }}
                  onClick={() => openProject(p)}
                >
                  <p className="kicker">{p.date}</p>
                  <h2 className="h2">{p.title}</h2>
                  <p className="p">{p.desc}</p>

                  <div className="tagRow">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>

                  <p className="small" style={{ marginTop: 10 }}>
                    Click to open details →
                  </p>
                </button>
              </Reveal>
            ))}
          </div>

          <footer className="footer">
          
          </footer>
        </div>

        <Modal
          open={open}
          title={active?.title}
          onClose={() => {
            setOpen(false);
            setActive(null);
          }}
        >
          {active && (
            <>
              <p className="kicker">{active.date}</p>
              <p className="p" style={{ marginTop: 6 }}>
                {active.desc}
              </p>

              <div className="sep" />

              <div className="card">
                <p className="kicker">What I did</p>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.55 }}>
                  {active.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                  ))}
                </ul>
              </div>

              {active.groups && active.groups.length > 0 && (
                <>
                  <div className="sep" />
                  <div className="card">
                    <p className="kicker">Screenshots (Labeled)</p>
                    <LabeledGallery title={active.title} groups={active.groups} />
                    <p className="small" style={{ marginTop: 10 }}>
                      Open any image to browse with section labels.
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </Modal>
      </Page>
    </>
  );
}