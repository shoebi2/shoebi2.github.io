import Link from "next/link";

type SiteHeaderProps = {
  current?: "home" | "biography" | "publications" | "contact";
};

export function SiteHeader({ current = "home" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link
        className="site-mark"
        href="/"
        aria-label="Kentaro Hiromitsu — Home"
        aria-current={current === "home" ? "page" : undefined}
      >
        KH
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link
          href="/biography"
          aria-current={current === "biography" ? "page" : undefined}
        >
          Biography
        </Link>
        <Link
          href="/publications"
          aria-current={current === "publications" ? "page" : undefined}
        >
          Publications
        </Link>
        <Link
          href="/contact"
          aria-current={current === "contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© Kentaro Hiromitsu</span>
      <span>Tokyo, Japan</span>
    </footer>
  );
}
