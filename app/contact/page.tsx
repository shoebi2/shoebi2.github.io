import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contact — Kentaro Hiromitsu, Ph.D.",
  description:
    "Contact information for Kentaro Hiromitsu at The University of Tokyo.",
};

export default function Contact() {
  return (
    <div className="site-shell contact-page">
      <SiteHeader current="contact" />

      <main className="contact-main">
        <header className="contact-heading">
          <p className="eyebrow">Get in touch</p>
          <h1>Contact</h1>
        </header>

        <section className="contact-content" aria-labelledby="contact-email">
          <div className="contact-intro">
            <p className="section-number">Email</p>
            <h2 id="contact-email">Professional enquiries</h2>
          </div>

          <div className="contact-details">
            <p className="contact-message">
              For academic enquiries, research collaborations and other
              professional correspondence, please contact me by email.
            </p>
            <p className="contact-address">
              hiromitsu [at] race.t.u-tokyo.ac.jp
            </p>
            <p className="contact-address-note">
              * Please replace [at] with @.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
