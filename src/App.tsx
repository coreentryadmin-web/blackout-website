import type { CSSProperties } from "react";
import { DiscordIcon, WhopIcon } from "./components/Icons";
import { site } from "./config/site";

function App() {
  const marqueeItems = [...site.marquee, ...site.marquee];

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="/">
            <img className="brand__logo" src={site.logo} alt="" width={32} height={32} />
            <span className="brand__name">{site.name}</span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#styles">Styles</a>
            <a href="#community">Community</a>
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
          <div className="hero__grid" aria-hidden />
          <div className="hero__glow hero__glow--red" aria-hidden />
          <div className="hero__glow hero__glow--gold" aria-hidden />

          <div className="container hero__shell">
            <h1 className="sr-only">
              {site.name} — {site.tagline}
            </h1>

            <div className="hero__frame">
              <img
                className="hero__image"
                src={site.heroImage}
                alt={`${site.name} — ${site.tagline}`}
                width={1200}
                height={675}
                fetchPriority="high"
              />
              <div className="hero__frame-shine" aria-hidden />
            </div>

            <ul className="hero__pills" aria-label="Trading focus">
              {site.tradingStyles.map((style) => (
                <li key={style.id} className={`hero__pill hero__pill--${style.id}`}>
                  <span className="hero__pill-tag">{style.tag}</span>
                  <span className="hero__pill-title">{style.title}</span>
                </li>
              ))}
            </ul>

            <p className="hero__eyebrow">Operator community · Discord</p>
            <p className="hero__lead">{site.description}</p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.discordInvite} target="_blank" rel="noopener noreferrer">
                <DiscordIcon className="btn__icon btn__icon--discord" />
                Join the community
              </a>
              <a className="btn btn--outline btn--lg" href={site.whopUrl} target="_blank" rel="noopener noreferrer">
                <WhopIcon className="btn__icon btn__icon--whop" />
                Memberships
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden>
          <div className="marquee__track">
            {marqueeItems.map((item, i) => (
              <span key={`${item}-${i}`} className="marquee__item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="section section--styles" id="styles">
          <div className="container">
            <p className="section__label">How we trade</p>
            <h2 className="section__title">Day trading. Swings. LEAPs.</h2>
            <p className="section__lead">
              One community, multiple timeframes — built for traders who want clarity, not chaos.
            </p>
            <ul className="style-grid">
              {site.tradingStyles.map((style, index) => (
                <li key={style.id} className="style-card" style={{ "--i": index } as CSSProperties}>
                  <span className="style-card__index">0{index + 1}</span>
                  <span className="style-card__tag">{style.tag}</span>
                  <h3 className="style-card__title">{style.title}</h3>
                  <p className="style-card__text">{style.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--community" id="community">
          <div className="community__bg" aria-hidden />
          <div className="container community">
            <p className="section__label section__label--light">The mission</p>
            <h2 className="community__headline">{site.community.headline}</h2>
            <p className="community__subhead">{site.community.subhead}</p>
            <ul className="community__pillars">
              {site.community.pillars.map((pillar, index) => (
                <li key={pillar.title} className="community__pillar" style={{ "--i": index } as CSSProperties}>
                  <h3 className="community__pillar-title">{pillar.title}</h3>
                  <p className="community__pillar-text">{pillar.text}</p>
                </li>
              ))}
            </ul>
            <p className="community__callout">{site.community.callout}</p>
            <a className="btn btn--primary btn--lg community__cta" href={site.discordInvite} target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="btn__icon btn__icon--discord" />
              Enter Discord
            </a>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <p className="section__label">Inside the server</p>
            <h2 className="section__title">What you get</h2>
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
            <p className="cta__text">Free on Discord. Go deeper on Whop when you’re ready.</p>
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
