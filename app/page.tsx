// app/page.tsx  ✅ FULL UPDATED (View + Download for CV)
import Nav from "@/components/nav";
import { Page, Reveal } from "@/components/motion";
import Certificates from "@/components/certificates";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";

const skills = [
  "MBAL History Matching",
  "Reservoir Performance Prediction",
  "Muskat Method",
  "Landmark (Compass/StressCheck/CasingSeat/CasingWear/WellPlan)",
  "Techlog Interpretation",
  "Well Planning",
  "Casing Design Concepts",
  "Distillation Towers",
  "P&IDs Awareness",
  "Excel Engineering Sheets",
];

export default function Home() {
  return (
    <>
      <Nav />
      <Page>
        <div className="container">
          <section className="hero">
            <Reveal>
              <p className="kicker">Portfolio</p>
              <h1 className="h1">Ahmed M. Othman</h1>
              <p className="sub">
                Petroleum Engineering Student | Reservoir & Well Planning | SPE Vice President
              </p>

              <div className="row">
                <a className="btn btnPrimary" href="/projects">
                  View Projects <ArrowRight size={18} />
                </a>

                {/* ✅ CV Buttons: View + Download */}
                <a className="btn" href="/cv.pdf" target="_blank" rel="noreferrer">
                  View CV <ArrowRight size={18} />
                </a>
                <a className="btn" href="/cv.pdf" download>
                  Download CV <Download size={18} />
                </a>

                <a className="btn" href="#contact">
                  Contact <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          <section className="grid grid2">
            <Reveal>
              <div className="card">
                <p className="kicker">About</p>
                <h2 className="h2">Reservoir-focused builder with practical tools + competitions</h2>
                <p className="p">
                  Senior Petroleum Engineering student (Cairo University, Expected 2026, GPA 3.25)
                  with internships in well planning and reservoir history matching (MBAL), plus
                  refinery and process exposure. I contributed to building{" "}
                  <b>PetroCairo (MuskatPro)</b>, a reservoir performance prediction tool based on
                  the Muskat method.
                </p>
                <div className="tagRow">
                  <span className="tag">Cairo University</span>
                  <span className="tag">SPE Vice President</span>
                  <span className="tag">Reservoir + Well Planning</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card">
                <p className="kicker">Highlights</p>
                <h2 className="h2">Achievements & Certifications</h2>
                <p className="p">
                  <b>1st Place</b> (Reservoir Teams) — PetroCamp hosted by United Energy Egypt (UEE),{" "}
                  <b>Feb 2026</b>.
                  <br />
                  <b>2nd Place</b> — Reservoir & Well Planning, OPA Energy Online Internship,{" "}
                  <b>Oct 2025</b>.
                  <br />
                  Certifications: Jet Pump Course (OPA Energy) • Advanced Practical Reservoir Simulation
                  (OPA Energy)
                </p>
              </div>
            </Reveal>
          </section>

          <div className="sep" />

          <section>
            <Reveal>
              <div className="card">
                <p className="kicker">Skills</p>
                <h2 className="h2">Tools & Technical Areas</h2>
                <div className="tagRow">
                  {skills.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* ✅ Certificates Section */}
          <div className="sep" />

          <section>
            <Reveal>
              <Certificates />
            </Reveal>
          </section>

          <div className="sep" />

          <section className="grid grid2">
            <Reveal>
              <div className="card">
                <p className="kicker">Experience</p>
                <h2 className="h2">Internships</h2>
                <p className="p">
                  <b>OPA Internship</b> — Reservoir & Well Planning (Online), Oct 2025
                  <br />
                  <b>CORC</b> — Process/Operations, Aug 2025
                  <br />
                  <b>ENPPI</b> — Process Engineering Exposure, Jul 2025
                  <br />
                  <b>PETRONOVO</b> — Wellhead Exposure, Jul 2024
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card" id="contact">
                <p className="kicker">Contact</p>
                <h2 className="h2">Let’s connect</h2>
                <div className="row">
                  <a className="btn btnPrimary" href="mailto:walahmedothman2002@gmail.com">
                    <Mail size={18} /> Email
                  </a>
                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/ahmed-othman-a31904284"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowRight size={18} /> LinkedIn
                  </a>
                  <a className="btn" href="https://wa.me/201093042654" target="_blank" rel="noreferrer">
                    <Phone size={18} /> WhatsApp
                  </a>
                </div>
                <p className="small" style={{ marginTop: 10 }}>
                  Cairo, Egypt • Open to internships and project opportunities.
                </p>
              </div>
            </Reveal>
          </section>

          <footer className="footer">
            <div className="container">
              <p className="small">
                © {new Date().getFullYear()} Ahmed M. Othman
              </p>
            </div>
          </footer>
        </div>
      </Page>
    </>
  );
}