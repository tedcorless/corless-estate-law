/**
 * Civic Field Notes page: American civic wayfinding meets contemporary editorial design.
 * Use Ponderosa Teal, Brick Signal, field-note labels, asymmetry, and direct, neighborly copy.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CirclePlay,
  ClipboardList,
  FileCheck2,
  FolderOpen,
  LockKeyhole,
  Menu,
  MoveRight,
  Route,
  Scale,
  Sparkles,
  X,
} from "lucide-react";
import { firstVideos } from "./estatePlanningGuide";

const logoUrl = "/corless-keystone-mark.png";
const reversedLogoUrl = "/corless-horizontal-logo-lockup-reversed.png";
const formalLogoLockupUrl = "/corless-horizontal-logo-lockup.png";
const heroUrl = "/hero-desk-flatirons.jpg";
const planningTableUrl = "/hero-desk-flatirons.jpg";
const boulderFieldGuideUrl = "/hero-desk-flatirons.jpg";
const boulderFamilyUrl = "/hero-desk-flatirons.jpg";
const tedCorlessHeadshotUrl = "/ted-corless-headshot.jpg";
const foundationGuideUrl = "/foundation-first-guide.md";
const publicPhone = "(720) 378-8967";
const publicPhoneHref = "tel:+17203788967";

const planParts = [
  {
    number: "01",
    title: "A lawyer who starts with your life",
    copy: "Mr. Ted starts with the people who depend on you, what you have built, and the decisions that cannot be left to chance.",
  },
  {
    number: "02",
    title: "Simple, private information gathering",
    copy: "The firm keeps the process practical. Sensitive planning information is handled privately, without turning your first step into a technology project.",
  },
  {
    number: "03",
    title: "Modern tools where they help",
    copy: "Technology helps organize your asset inventory and the work behind the scenes. Your plan is still built through direct conversations and lawyer judgment.",
  },
];

const communities = [
  {
    marker: "A",
    place: "Boulder",
    state: "The county seat",
    note: "Planning conversations rooted in the city and the foothill communities around it.",
    tone: "teal",
    href: "#conversation",
  },
  {
    marker: "B",
    place: "Longmont",
    state: "North Boulder County",
    note: "A practical planning home for families, homeowners, and people preparing for what is next.",
    tone: "brick",
    href: "/longmont-estate-planning",
  },
  {
    marker: "C",
    place: "East County",
    state: "Lafayette · Louisville · Erie · Superior",
    note: "County-wide support for the communities connected by family, work, and home.",
    tone: "gold",
    href: "/east-boulder-county-estate-planning",
  },
  {
    marker: "D",
    place: "Foothill communities",
    state: "Lyons · Nederland · Niwot + beyond",
    note: "A local practice that recognizes Boulder County is more than one zip code.",
    tone: "ink",
    href: "/boulder-county-foothills-estate-planning",
  },
];

const firstCallTopics = [
  {
    number: "01",
    title: "What you want to protect",
    copy: "Talk about the people, children, pets, home, business, and responsibilities that deserve a clear plan.",
  },
  {
    number: "02",
    title: "The people you choose",
    copy: "Talk through the decision-makers and trusted people who should be prepared to act if life changes suddenly.",
  },
  {
    number: "03",
    title: "From draft to signing",
    copy: "Identify the simple next steps, the focused meetings needed, and any question that belongs in a later review.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Corless Estate Law Firm home">
          <img src={formalLogoLockupUrl} alt="Corless Estate Law Firm — Boulder County, Colorado" className="brand-lockup-image" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#first-call">How it works</a>
          <a href="#foundation">Your plan</a>
          <a href="#attorney">Mr. Ted</a>
          <a href="#conversation">Start here</a>
        </nav>

        <a className="header-cta" href={publicPhoneHref}>
          Call Mr. Ted Now <ArrowUpRight size={16} strokeWidth={2.2} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </header>

      <div id="mobile-navigation" className={`mobile-panel ${menuOpen ? "mobile-panel--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <a href="#first-call" onClick={closeMenu}>How it works <ArrowDownRight size={19} /></a>
          <a href="#foundation" onClick={closeMenu}>Your plan <ArrowDownRight size={19} /></a>
          <a href="#attorney" onClick={closeMenu}>Mr. Ted <ArrowDownRight size={19} /></a>
          <a href={publicPhoneHref} onClick={closeMenu}>Call Mr. Ted Now <ArrowDownRight size={19} /></a>
          <a href="#conversation" onClick={closeMenu}>Send a planning request <ArrowDownRight size={19} /></a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy hero-reveal">
              <SectionLabel>Boulder County, Colorado</SectionLabel>
              <p className="route-note route-note--hero"><span>01</span><i /><b>Starting point / close to home</b></p>
              <h1 id="hero-title">
                Your estate may be easier to build <em>than you think.</em>
                <span className="hero-do-this">Let’s do this.</span>
              </h1>
              <p className="hero-intro">
                <strong>Start with a complimentary call.</strong> Talk about the people you love, the home you have built, the pets, business, and responsibilities that depend on you. Mr. Ted will help you identify the simplest useful starting point—and whether anything more is needed.
              </p>
              <div className="hero-actions">
                <a className="text-link" href="#first-call">
                  Our first call — what I need to get to work <ArrowDownRight size={19} />
                </a>
              </div>
            </div>

            <div className="hero-art hero-reveal">
              <img src={heroUrl} alt="A sunlit home study with a planning portfolio and Colorado foothill view" />
              <a className="hero-quick-call" href={publicPhoneHref} aria-label="Call Mr. Ted now at 720 378 8967">
                <span>Complimentary call</span>
                <strong>Call <span>Mr. Ted</span> Now <MoveRight size={17} /></strong>
                <small>Zoom calls or in-home meetings welcome</small>
              </a>
              <div className="hero-art-stamp">
                <span>Field note</span>
                <strong>01</strong>
                <small>Start with your life.</small>
              </div>
            </div>
          </div>
          <div className="hero-rule" />
          <div className="hero-facts" aria-label="Practice focus">
            <span><i /> 01 · Complimentary first call</span>
            <span><i /> 02 · Zoom calls or in-home meetings welcome</span>
            <span><i /> 03 · Available 8am–8pm</span>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-intro">
            <SectionLabel>Your needs / practical solutions</SectionLabel>
            <h2 id="approach-title">Your needs. Your solution. <em>Mr. Ted.</em></h2>
            <p>
              Estate planning should not feel like a burdensome assignment. Mr. Ted starts with your life, your concerns, and the people who count on you—then builds the solution that fits, rather than asking you to fit a pre-set formula.
            </p>
          </div>
          <div className="scope-card">
            <div className="scope-card__top">
              <span className="scope-icon"><Scale size={22} /></span>
              <span className="scope-number">FIELD NOTE / 02</span>
            </div>
            <h3>Take care of the children first.</h3>
            <p>If a parent dies or becomes unable to act, a family should not be left wondering who can care for a child, make decisions, or reach the resources intended for that child. The first job of an estate plan is to put those answers in place.</p>
            <div className="scope-line" />
            <a className="text-link" href={foundationGuideUrl} download="corless-foundation-first-guide.md">Next Steps / Answers to Your Questions <ArrowDownRight size={18} /></a>
          </div>
        </section>

        <section className="attorney-section" id="attorney" aria-labelledby="attorney-title">
          <figure className="attorney-portrait">
            <img src={tedCorlessHeadshotUrl} alt="Ted A. Corless, Esq. in front of the Boulder County foothills" loading="eager" />
            <figcaption><span>Route point</span><strong>02</strong><small>Rooted in Boulder County</small></figcaption>
          </figure>

          <div className="attorney-copy">
            <SectionLabel>Route point / 02 — Meet your estate lawyer</SectionLabel>
            <h2 id="attorney-title">Say hello to Mr. Ted.<br /><em>Build your plan now.</em></h2>
            <p className="attorney-name">Ted A. Corless, Esq.</p>
            <p>
              Raised in Missouri, Mr. Ted has practiced law for more than 30 years in Colorado, Missouri, Kansas, and Florida. Earlier in his career, he worked at two of the nation’s largest law firms and represented sophisticated clients in significant matters. In law school, he captained the trial team to a top-ten national finish and served as Managing Editor of the University of Missouri’s law review.
            </p>
            <p>
              He has spent much of his career litigating the kinds of documents, insurance interests, businesses, and financial relationships that estate plans are meant to protect. That experience shapes the documents he now creates for his clients: clear, practical, and written with an eye toward how they will actually work when a family needs them.
            </p>
            <p>
              Mr. Ted also makes house calls. He will meet clients at home and, when circumstances call for it, at a hospital or hospice. The firm uses modern technology where it makes the process easier, including a simple asset-inventory process and secure methods for sensitive information. Technology supports the work; it does not replace the lawyer.
            </p>
            <a className="button button--brick attorney-cta" href={publicPhoneHref}>Call Mr. Ted Now <MoveRight size={18} /></a>
            <div className="attorney-facts" aria-label="Attorney profile summary">
              <span><b>30+</b> years in practice</span>
              <span><b>Dozens</b> of jury trials</span>
              <span><b>1</b> Boulder County home</span>
            </div>
          </div>
        </section>

        <section className="first-call-invite" aria-labelledby="first-call-invite-title">
          <div>
            <SectionLabel>Your first move</SectionLabel>
            <h2 id="first-call-invite-title">You do not need every answer.<br /><em>Call Mr. Ted now.</em></h2>
          </div>
          <div className="first-call-invite__detail">
            <p>A complimentary call is the easiest way to begin. Talk through what you want to protect, decide whether a foundational plan is the right next step, and leave with a clear sense of what happens next.</p>
            <div className="first-call-invite__facts"><span>In-home Boulder County</span><span>Zoom available</span><span>8:00 a.m.–8:00 p.m.</span></div>
            <div className="first-call-invite__actions">
              <a className="button button--brick" href={publicPhoneHref}>Call Mr. Ted Now <MoveRight size={18} /></a>
              <a className="text-link text-link--light" href="#conversation">Or send a planning request <ArrowDownRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="plans-section" id="plans" aria-labelledby="plans-title">
          <div className="plans-header">
            <div>
              <SectionLabel>Route stop / 03 — Personal judgment, modern methods</SectionLabel>
              <h2 id="plans-title">Real conversations. <em>A simpler process.</em></h2>
            </div>
            <p>
              The process is intentionally straightforward: real conversations, lawyer judgment, and documents built for your life. Modern tools help with organization and privacy behind the scenes, but they are not the product.
            </p>
          </div>

          <div className="plans-layout">
            <div className="plan-list">
              {planParts.map((item) => (
                <article className="plan-row" key={item.number}>
                  <span className="plan-row__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <ArrowUpRight className="plan-row__arrow" size={21} />
                </article>
              ))}
            </div>
            <figure className="planning-image">
              <img src={planningTableUrl} alt="A carefully arranged planning folio and pen on a light wood table" />
              <figcaption>
                <span>Prepared with care</span>
                <span>Not rushed</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="process-section" id="first-call" aria-labelledby="process-title">
          <div className="process-rail">
            <div className="rail-route" aria-hidden="true"><span>03</span><i /><span>04</span></div>
            <SectionLabel>Route stop / 04 — A simple process</SectionLabel>
            <h2 id="process-title">A few meetings.<br />A clear foundation.</h2>
            <p className="process-intro">Start with a complimentary call. If the fit is right, we use a small number of focused in-person or Zoom meetings to clarify goals, prepare the core documents, review them, sign, and close. A lawyer who makes house calls? Yes—throughout Boulder County.</p>
            <a className="text-link text-link--light" href={publicPhoneHref}>
              Call Mr. Ted Now <ArrowDownRight size={19} />
            </a>
          </div>
          <ol className="process-list">
            {firstCallTopics.map((topic) => (
              <li key={topic.number}>
                <span>{topic.number}</span>
                <div><h3>{topic.title}</h3><p>{topic.copy}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="foundation-section" aria-labelledby="foundation-title">
          <div className="foundation-header">
            <SectionLabel>Route stop / 05 — Foundation first</SectionLabel>
            <h2 id="foundation-title">Foundations matter—especially <em>when children depend on you.</em></h2>
            <p>A plan is about protecting what you own, who you love, and what happens one day when you are gone. Start with the elements your family needs now; later review belongs only where life calls for it.</p>
          </div>
          <div className="foundation-stages">
            <article className="foundation-stage foundation-stage--one">
              <div className="foundation-stage__top"><span>Stage 1</span><FileCheck2 size={23} /></div>
              <h3>Protect your people now.</h3>
              <p>Put the foundational pieces in place quickly: the right will or trust, guardianship planning for children, powers of attorney, health-care directions, beneficiary coordination, and the instructions your family may need if something happens tomorrow.</p>
              <p className="foundation-stage__note">Protect the children, your assets, and your wishes before optimizing anything else.</p>
            </article>
            <article className="foundation-stage foundation-stage--two">
              <div className="foundation-stage__top"><span>Stage 2</span><ClipboardList size={23} /></div>
              <h3>Then look for opportunities.</h3>
              <p>With the foundation in place, Phase Two can address tax planning, wealth-transfer strategies, asset protection, business issues, and other savings opportunities that make sense for your circumstances.</p>
              <p className="foundation-stage__note">Foundation first. Optimization second.</p>
            </article>
          </div>
        </section>

        <section className="guide-section" id="common-mistakes" aria-labelledby="guide-title">
          <div className="guide-rail">
            <p className="guide-kicker"><FolderOpen size={17} /> A short field guide</p>
              <SectionLabel>Route stop / 06 — Foundation First guide</SectionLabel>
              <h2 id="guide-title">Children first. <em>Foundation first.</em></h2>
              <p>
              Download Next Steps / Answers to Your Questions for a plain-English explanation of the foundational decisions that protect children, family, assets, and your wishes before more advanced tax or savings planning begins.
              </p>
            <div className="guide-safeguard"><LockKeyhole size={17} /><span>Keep the public step simple. Do not enter asset, account, document, or other confidential details here.</span></div>
            <a className="guide-download" href={foundationGuideUrl} download="corless-foundation-first-guide.md"><FolderOpen size={17} /> Download Next Steps / Answers to Your Questions <ArrowDownRight size={16} /></a>
          </div>

          <div className="guide-panel" aria-live="polite">
            <div className="guide-start">
              <span className="guide-panel__number">06</span>
              <p className="guide-progress">A useful first read</p>
              <h3>Put the essential decisions in place. <em>Then build from there.</em></h3>
              <p>The guide explains why guardianship, decision-making authority, beneficiary coordination, and the core estate documents should come before a family spends months working through advanced planning questions.</p>
              <div className="guide-result__actions">
                <a className="button button--brick" href={foundationGuideUrl} download="corless-foundation-first-guide.md">Download the guide <ArrowDownRight size={18} /></a>
                <a className="text-link" href={publicPhoneHref}>Call Mr. Ted Now <MoveRight size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="inventory-section" id="inventory-workspace" aria-labelledby="inventory-title">
          <div className="inventory-copy">
            <p className="inventory-kicker"><LockKeyhole size={17} /> Stage 2 / private information map</p>
            <SectionLabel>Organize only after the foundation</SectionLabel>
            <h2 id="inventory-title">Private information. <em>Handled the right way.</em></h2>
            <p>The client information process begins only after the firm confirms the right next step. The public site never asks visitors to enter account numbers, asset values, documents, or passwords.</p>
            <a className="button button--ink" href={publicPhoneHref}>Call Mr. Ted Now <ArrowUpRight size={18} /></a>
          </div>
          <div className="inventory-preview" aria-label="Private inventory workspace preview">
            <div className="inventory-preview__header"><span>YOUR INFORMATION MAP</span><LockKeyhole size={17} /></div>
            <div className="inventory-preview__grid">
              <div><span>01</span><h3>People & professionals</h3><p>Trusted contacts and the advisers involved in your plan.</p></div>
              <div><span>02</span><h3>Records & locations</h3><p>Where important planning records can be found.</p></div>
              <div><span>03</span><h3>Asset categories</h3><p>A high-level picture for a later, more focused discussion.</p></div>
            </div>
            <p className="inventory-preview__notice"><LockKeyhole size={14} /> Client access is arranged privately after the firm confirms the right process.</p>
          </div>
        </section>

        <section className="video-section" id="field-notes" aria-labelledby="video-title">
          <div className="video-header">
            <div>
              <SectionLabel>Field notes / video series</SectionLabel>
              <h2 id="video-title">Short answers,<br /><em>grounded in Boulder County.</em></h2>
            </div>
            <p>The first videos are being recorded for the firm’s YouTube channel. When they are published, each field note will appear here with a direct player—no search required.</p>
          </div>
          <div className="video-grid">
            {firstVideos.map((video) => (
              <article className="video-card" key={video.number}>
                <div className="video-card__visual"><CirclePlay size={31} /><span>Video {video.number}</span></div>
                <div className="video-card__copy">
                  <p className="video-card__cue">{video.cue}</p>
                  <h3>{video.title}</h3>
                  <p>{video.copy}</p>
                  <span className="video-card__status">First film coming soon</span>
                </div>
              </article>
            ))}
          </div>
          <div className="video-footer"><CirclePlay size={18} /><p><strong>YouTube-ready.</strong> After the official Corless Estate Law Firm channel is created and the first recordings are uploaded, these cards will become embedded videos.</p></div>
        </section>

        <section className="communities-section" id="communities" aria-labelledby="communities-title">
          <div className="communities-copy">
            <SectionLabel>Boulder County route / 07 — Where the work begins</SectionLabel>
            <h2 id="communities-title">Boulder County first.<br /><em>Designed for the whole county.</em></h2>
            <p>
              Estate planning should feel like it knows the place you call home. The practice is grounded in Boulder County—from Boulder and Longmont to the east-county and foothill communities that make the county distinct.
            </p>
          </div>

          <div className="route-visual" aria-hidden="true">
            <img src={boulderFieldGuideUrl} alt="" />
            <span className="route-caption"><Route size={15} /> Boulder County / grounded here</span>
          </div>

          <div className="communities-grid">
            {communities.map((community) => (
              <a className={`community-card community-card--${community.tone}`} key={community.marker} href={community.href}>
                <div className="community-card__head"><span>{community.marker}</span><ArrowUpRight size={18} /></div>
                <p className="community-card__state">{community.state}</p>
                <h3>{community.place}</h3>
                <p className="community-card__note">{community.note}</p>
              </a>
            ))}
          </div>
          <p className="community-disclaimer">
            From Boulder and Longmont to East County and the foothill communities, the practice is built around the full county.
          </p>
        </section>

        <section className="human-section" aria-labelledby="human-title">
          <div className="human-image">
            <img src={boulderFamilyUrl} alt="A family walking together on a Boulder County foothill trail" />
            <span className="image-route-tag">Route point / the people</span>
          </div>
          <div className="human-copy">
            <SectionLabel>What a plan protects</SectionLabel>
            <h2 id="human-title">Protect what you own. <em>Protect who you love.</em></h2>
            <p>
              The work is about more than paperwork. It is about children, pets, the home you spent a life building, a business you created, and the people who may need direction one day when you are gone.
            </p>
            <div className="belief-list">
              <span><Check size={17} /> Clear documents, explained in plain English</span>
              <span><Check size={17} /> A focused path from first call to signing</span>
              <span><Check size={17} /> A foundation that can be reviewed as life changes</span>
            </div>
          </div>
        </section>

        <section className="conversation-section" id="conversation" aria-labelledby="conversation-title">
          <div className="conversation-topline">
            <span>COMPLIMENTARY FIRST CALL</span>
            <Sparkles size={17} />
            <span>IN-HOME • ZOOM • 8AM–8PM</span>
          </div>
          <div className="conversation-layout">
            <div>
              <SectionLabel>Route end / 08 — Planning conversation</SectionLabel>
              <h2 id="conversation-title">Call Mr. Ted now. <em>Get your plan moving.</em></h2>
            </div>
            <div className="conversation-detail">
              <p>
                Tell Mr. Ted what you want your plan to protect. Your complimentary first call is practical, confidential in approach, and designed to identify a useful starting point—not to ask you for a finished asset list or confidential documents online.
              </p>
              <div className="first-call-summary" aria-label="What the first conversation covers">
                <span>People & priorities</span>
                <span>Your foundation</span>
                <span>Simple next steps</span>
              </div>
              <p className="conversation-availability">In-home visits throughout Boulder County • Zoom calls available • Appointments 8:00 a.m.–8:00 p.m.</p>
              <a className="button button--ink conversation-call" href={publicPhoneHref}>Call Mr. Ted Now <MoveRight size={18} /></a>
              <address className="office-address">5235 Old Stage Road<br />Boulder, Colorado <a href="https://www.google.com/maps/search/?api=1&query=5235%20Old%20Stage%20Road%2C%20Boulder%2C%20Colorado" target="_blank" rel="noreferrer">Directions <ArrowUpRight size={13} /></a></address>
              <div className="inquiry-success inquiry-static">
                <div>
                  <p className="inquiry-success__eyebrow">Start with a conversation</p>
                  <h3>Call Mr. Ted or send a non-confidential email.</h3>
                  <p>Do not send account numbers, documents, passwords, or other sensitive information until the firm has arranged a secure method for doing so.</p>
                  <div className="guide-result__actions">
                    <a className="button button--brick" href={publicPhoneHref}>Call Mr. Ted Now <MoveRight size={18} /></a>
                    <a className="text-link" href="mailto:ted@corlessestatelaw.com?subject=Estate%20planning%20conversation">Email the firm <ArrowUpRight size={18} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a className="mobile-call-rail" href={publicPhoneHref} aria-label="Call Mr. Ted now at 720 378 8967">
        <span><b>Call Mr. Ted Now</b><small>Complimentary call · Zoom + in-home welcome</small></span>
        <MoveRight size={20} />
      </a>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={reversedLogoUrl} alt="" />
          <span>CORLESS ESTATE LAW FIRM</span>
        </div>
        <div className="footer-notes">
          <p>Complimentary first calls • In-home Boulder County visits • Zoom appointments • 8am–8pm</p>
          <p>General information on this site is not legal advice and does not create an attorney-client relationship.</p>
        </div>
        <a className="footer-top" href="#top" aria-label="Back to top"><ChevronDown size={19} /></a>
      </footer>
    </div>
  );
}
