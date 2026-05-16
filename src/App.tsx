import type { CSSProperties } from "react";
import { DiscordIcon, WhopIcon } from "./components/Icons";
import { site } from "./config/site";

function App() {
  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="/">
            <img className="brand__logo" src={site.logo} alt="" width={32} height={32} />
            <span className="brand__name">{site.name}</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn--ghost btn--sm" href={site.discordInvite} target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="btn__icon btn__icon--discord" />
              Discord
            </a>
            <a className="btn btn--primary btn--sm" href={site.whopUrl} target="_blank" rel="noopener noreferrer">
              <WhopIcon className="btn__icon btn__icon--whop" />
              Join on Whop
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <h1 className="sr-only">
              {site.name} — {site.tagline}
            </h1>
            <div className="hero__visual">
              <img
                className="hero__image"
                src={site.heroImage}
                alt={`${site.name} — ${site.tagline}`}
                width={1200}
                height={675}
                fetchPriority="high"
              />
            </div>
            <p className="hero__eyebrow">Elite trading community</p>
            <p className="hero__lead">{site.description}</p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.discordInvite} target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="btn__icon btn__icon--discord" />
                Join Discord
              </a>
              <a className="btn btn--outline btn--lg" href={site.whopUrl} target="_blank" rel="noopener noreferrer">
                <WhopIcon className="btn__icon btn__icon--whop" />
                View memberships
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <p className="section__label">Why join us</p>
            <h2 className="section__title">Built for active traders</h2>
            <p className="section__lead">Everything you need to stay aligned with the market — in one place.</p>
            <ul className="grid">
              {site.features.map((feature, index) => (
                <li key={feature.title} className="card" style={{ "--card-i": index } as CSSProperties}>
                  <h3 className="card__title">{feature.title}</h3>
                  <p className="card__text">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--cta">
          <div className="container cta">
            <p className="section__label">Get started</p>
            <h2 className="cta__title">Ready to plug in?</h2>
            <p className="cta__text">Start free on Discord. Upgrade on Whop when you want the full experience.</p>
            <div className="cta__actions">
              <a className="btn btn--primary btn--lg" href={site.discordInvite} target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="btn__icon btn__icon--discord" />
                Join Discord
              </a>
              <a className="btn btn--outline btn--lg" href={site.whopUrl} target="_blank" rel="noopener noreferrer">
                <WhopIcon className="btn__icon btn__icon--whop" />
                Go to Whop
              </a>
            </div>
          </div>
        </section>

        <section className="section section--faq" id="faq">
          <div className="container">
            <p className="section__label">Questions</p>
            <h2 className="section__title">FAQ</h2>
            <dl className="faq">
              {site.faq.map((item) => (
                <div key={item.question} className="faq__item">
                  <dt className="faq__q">{item.question}</dt>
                  <dd className="faq__a">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__brand">{site.name}</p>
          {site.contactEmail ? (
            <p className="footer__contact">
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          ) : null}
          <p className="footer__disclaimer">{site.disclaimer}</p>
          <p className="footer__copy">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
