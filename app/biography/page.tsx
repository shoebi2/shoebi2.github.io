import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Biography — Kentaro Hiromitsu, Ph.D.",
  description:
    "Biography, appointments, education and teaching experience of Kentaro Hiromitsu.",
};

type TimelineItemProps = {
  date: string;
  title: string;
  organisation: ReactNode;
  detail?: string;
};

function TimelineItem({
  date,
  title,
  organisation,
  detail,
}: TimelineItemProps) {
  return (
    <li className="timeline-item">
      <p className="timeline-date">{date}</p>
      <div className="timeline-copy">
        <h3>{title}</h3>
        <p>{organisation}</p>
        {detail ? <p className="timeline-detail">{detail}</p> : null}
      </div>
    </li>
  );
}

export default function Biography() {
  return (
    <div className="site-shell biography-page">
      <SiteHeader current="biography" />

      <main className="biography-main">
        <header className="biography-heading">
          <p className="eyebrow">Profile / 2026</p>
          <h1>Biography</h1>
        </header>

        <section className="biography-intro" aria-labelledby="short-biography">
          <h2 id="short-biography">Short Biography</h2>
          <div className="lead-copy">
            <p>
              Kentaro Hiromitsu, Ph.D., is a <strong>Project Researcher</strong>{" "}
              at the Research into Artifacts, Center for Engineering (RACE),
              School of Engineering, The University of Tokyo. He is a{" "}
              <strong>neuropsychologist</strong> and is registered in Japan as a{" "}
              <strong>Certified Public Psychologist</strong>.
            </p>
            <p>
              He received his <strong>Ph.D. in Psychology</strong> from Chuo
              University in 2019 and subsequently served as a{" "}
              <strong>JSPS Research Fellow (PD)</strong> at The University of
              Tokyo. Before joining RACE, he was a{" "}
              <strong>Researcher</strong> in the Department of Cognitive
              Neuroscience at Advanced Telecommunications Research Institute
              International (<strong>ATR</strong>), where he remains affiliated
              as a Collaborative Researcher. From 2012 to 2023, he
              worked in the Department of Neurosurgery at Tokyo Metropolitan
              Cancer and Infectious Diseases Center Komagome Hospital.
            </p>
            <p>
              His research investigates <strong>disturbances of the self</strong>{" "}
              in individuals with brain lesions and seeks to elucidate the{" "}
              <strong>
                cognitive and neural mechanisms underlying the sense of self
              </strong>, drawing on experimental psychology, neuropsychology and
              cognitive neuroscience.
            </p>
          </div>
        </section>

        <div className="profile-sections">
          <section className="profile-section" aria-labelledby="current-appointments">
            <div className="section-heading">
              <p className="section-number">01</p>
              <h2 id="current-appointments">Current Appointments</h2>
            </div>
            <ul className="timeline">
              <TimelineItem
                date="May 2026–present"
                title="Project Researcher"
                organisation="Research into Artifacts, Center for Engineering (RACE), School of Engineering, The University of Tokyo"
              />
              <TimelineItem
                date="May 2026–present"
                title="Collaborative Researcher"
                organisation="Department of Cognitive Neuroscience, Cognitive Mechanisms Laboratories, Advanced Telecommunications Research Institute International (ATR)"
              />
              <TimelineItem
                date="Apr 2019–present"
                title="Visiting Researcher"
                organisation="Institute of Cultural Sciences, Chuo University"
              />
            </ul>
          </section>

          <section className="profile-section" aria-labelledby="education">
            <div className="section-heading">
              <p className="section-number">02</p>
              <h2 id="education">Education</h2>
            </div>
            <ul className="timeline">
              <TimelineItem
                date="Apr 2014–Mar 2019"
                title="Ph.D. in Psychology"
                organisation="Graduate School of Letters, Chuo University"
              />
              <TimelineItem
                date="Apr 2012–Mar 2014"
                title="M.A. in Psychology"
                organisation="Graduate School of Letters, Chuo University"
              />
              <TimelineItem
                date="Apr 2008–Mar 2012"
                title="B.A. in Education"
                organisation="Faculty of Letters, Chuo University"
              />
            </ul>
          </section>

          <section className="profile-section" aria-labelledby="previous-appointments">
            <div className="section-heading">
              <p className="section-number">03</p>
              <h2 id="previous-appointments">Previous Appointments</h2>
            </div>
            <ul className="timeline">
              <TimelineItem
                date="Apr 2023–Apr 2026"
                title="Researcher"
                organisation="Department of Cognitive Neuroscience, Cognitive Mechanisms Laboratories, Advanced Telecommunications Research Institute International (ATR)"
              />
              <TimelineItem
                date="Apr 2020–Mar 2023"
                title="JSPS Research Fellow (PD)"
                organisation={
                  <>
                    <a
                      className="timeline-organisation-link"
                      href="https://www.l.u-tokyo.ac.jp/~imamizu/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Imamizu Laboratory
                    </a>
                    <br />
                    Graduate School of Humanities and Sociology, The University
                    of Tokyo
                  </>
                }
              />
              <TimelineItem
                date="Jun 2018–Mar 2021"
                title="Project Researcher"
                organisation={
                  <>
                    <a
                      className="timeline-organisation-link"
                      href="https://www.l.u-tokyo.ac.jp/~imamizu/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Imamizu Laboratory
                    </a>
                    <br />
                    Graduate School of Humanities and Sociology, The University
                    of Tokyo
                  </>
                }
              />
              <TimelineItem
                date="Sep 2014–Mar 2019"
                title="Associate Researcher and Research Assistant"
                organisation="Institute of Cultural Sciences, Chuo University"
              />
              <TimelineItem
                date="Apr 2012–Mar 2023"
                title="Neuropsychologist"
                organisation="Department of Neurosurgery, Tokyo Metropolitan Cancer and Infectious Diseases Center Komagome Hospital"
              />
            </ul>
          </section>

          <section className="profile-section" aria-labelledby="teaching-experience">
            <div className="section-heading">
              <p className="section-number">04</p>
              <h2 id="teaching-experience">Teaching Experience</h2>
            </div>
            <ul className="timeline">
              <TimelineItem
                date="Apr 2021–Mar 2022"
                title="Part-Time Lecturer"
                organisation="Faculty of Human Life and Environmental Sciences, Ochanomizu University"
                detail="Cognitive Neuroscience"
              />
              <TimelineItem
                date="Apr 2019–Mar 2023"
                title="Part-Time Lecturer"
                organisation="Faculty of Psychology, Atomi University"
                detail="Psychological Experiments"
              />
              <TimelineItem
                date="Apr 2016–Aug 2019"
                title="Part-Time Teaching Staff"
                organisation="Faculty of Human Sciences, Musashino University"
                detail="Experimental Psychology Practicum I and II"
              />
              <TimelineItem
                date="Apr 2016–Mar 2019"
                title="Part-Time Lecturer"
                organisation="Department of Prosthetics and Orthotics, Seibu Gakuen College of Medical Technology"
                detail="Psychology"
              />
              <TimelineItem
                date="Apr 2016–Mar 2018"
                title="Part-Time Lecturer"
                organisation="School of Distance Learning, Musashino University"
                detail="Psychological Measurement"
              />
            </ul>
          </section>

          <section className="profile-section qualification-section" aria-labelledby="qualification">
            <div className="section-heading">
              <p className="section-number">05</p>
              <h2 id="qualification">Professional Qualification</h2>
            </div>
            <ul className="timeline">
              <TimelineItem
                date="Apr 2021"
                title="Certified Public Psychologist"
                organisation="National qualification, Japan"
              />
            </ul>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
