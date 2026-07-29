import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

const Arrow = () => <span aria-hidden="true">↗</span>;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="top" className="hero" aria-labelledby="profile-name">
        <div className="hero-copy">
          <div className="name-block">
            <h1 id="profile-name">Kentaro Hiromitsu</h1>
            <p className="degree">Ph.D.</p>
          </div>

          <p className="affiliation">
            <span className="affiliation-role">Project Researcher</span>
            <br />
            <a
              className="affiliation-link"
              href="http://humancentric.race.t.u-tokyo.ac.jp/"
              target="_blank"
              rel="noreferrer"
            >
              Research into Artifacts, Center for Engineering
              <br />
              School of Engineering, The University of Tokyo
            </a>
          </p>

          <div className="expertise">
            <p className="expertise-label">Expertise</p>
            <p className="expertise-list">
              Neuropsychology / Experimental Psychology / Cognitive Neuroscience
            </p>
          </div>

          <div className="hero-links" aria-label="Featured pages">
            <Link href="/biography">
              Biography <Arrow />
            </Link>
            <Link href="/publications">
              Publications <Arrow />
            </Link>
          </div>
        </div>

        <figure className="portrait">
          <Image
            src={`${basePath}/kentaro-hiromitsu-cutout-v2.png`}
            alt="Illustrated portrait of Kentaro Hiromitsu"
            width={1411}
            height={1114}
            priority
          />
        </figure>

        <p className="portrait-note" aria-hidden="true">
          Kentaro Hiromitsu / 2026
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
