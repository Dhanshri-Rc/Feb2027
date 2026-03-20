import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const data = {
  hero: {
    seriesTag: "SIARE Conference Feb 2027",
    title: "World Conference on Business, Entrepreneurship, and Sustainable      Economic Development",
    subtitle: "February 2027",
    tagline: "Advancing Knowledge. Fostering Innovation. Building Sustainable Futures.",
    dates: "February 18–20, 2027",
    venue: "Hybrid Mode — Nagpur Maharashtra, India ",
  },
  about_series: {
    heading: "About SIARE",
    body: [
      "The Society for Interdisciplinary Academic Research and Exchange (SIARE) is a globally recognised academic body committed to advancing scholarly discourse, applied research, and policy-relevant knowledge across a broad spectrum of disciplines. The SIARE Conference Series (June–March) is a prestigious annual cycle of international academic conferences held across multiple months, each focused on a thematic domain of contemporary global significance.",
      "Since its inception, the SIARE series has hosted over 40 international conferences in cities spanning Asia, Europe, North America, Africa, and Oceania, bringing together more than 12,000 researchers, academicians, industry leaders, and policymakers from over 80 countries. Its interdisciplinary framework encourages the convergence of ideas across economics, management sciences, environmental studies, information technology, public policy, social entrepreneurship, and the humanities.",
      "The series is recognised for its rigorous double-blind peer review process, its commitment to publication in indexed academic outlets, and its role in fostering collaborative international networks. SIARE conferences are consistently rated among the most impactful academic forums in the Asia-Pacific region, and their proceedings are cited in peer-reviewed journals, institutional reports, and national policy documents worldwide.",
      "The June–March cycle is structured to address the most pressing global themes of the contemporary era — from digital transformation and climate resilience to inclusive economic development and governance innovation. Each conference within the series is independently themed, attracting a distinct scholarly community while collectively contributing to SIARE's broader mission of knowledge democratisation and academic excellence.",
    ],
  },
  about_conf: {
    heading: "About the Conference",
    body: [
      "The February 2027 World Conference on Business, Entrepreneurship, and Sustainable Economic Development is a flagship event within the SIARE Conference Series, convened to address the most critical intersections of contemporary business practice, entrepreneurial innovation, and globally sustainable economic policy.",
      "As the world navigates an era defined by rapid technological disruption, ecological imperatives, and shifting geopolitical economies, the need for evidence-based research and cross-sector dialogue has never been more urgent. This conference serves as an authoritative platform for scholars, practitioners, entrepreneurs, and policymakers to present original research, exchange transformative ideas, and co-create actionable frameworks that align economic growth with long-term sustainability.",
      "The conference welcomes contributions that examine sustainable business models, startup ecosystems, the green and circular economy, digital entrepreneurship, ESG governance, corporate social responsibility, fintech innovation, and the broader dimensions of inclusive economic development. Special emphasis is placed on research that bridges theory and practice, yielding insights applicable across both emerging and developed economies.",
      "With an expected participation of over 500 delegates from more than 50 countries, the conference will feature keynote addresses by internationally distinguished thought leaders, parallel thematic sessions, poster presentations, panel discussions, and dedicated networking forums designed to catalyse long-term collaborative partnerships.",
    ],
  },
  objectives: [
    "To provide a rigorous international forum for the presentation and critical evaluation of original research in business, entrepreneurship, and sustainable economic development.",
    "To explore innovative, scalable, and context-sensitive business models that reconcile commercial objectives with environmental and social sustainability imperatives.",
    "To examine the evolving role of entrepreneurship — including digital, social, and green entrepreneurship — as a driver of inclusive and resilient economic growth.",
    "To foster interdisciplinary dialogue among economists, management scholars, environmental scientists, technologists, and policymakers on shared challenges of sustainable development.",
    "To critically assess the impact of ESG frameworks, corporate governance standards, and responsible investment practices on long-term business performance and societal value creation.",
    "To investigate the transformative potential of emerging technologies — including artificial intelligence, blockchain, and clean energy innovations — in reshaping global business and entrepreneurial landscapes.",
    "To advance policy discourse on enabling environments for startup ecosystems, SME development, green economy transitions, and economic inclusion in both developing and developed contexts.",
    "To facilitate the development of cross-institutional, cross-national research collaborations and knowledge-sharing networks with sustained post-conference impact.",
  ],
  tracks: [
    { id: "T1", title: "Sustainable Business Models & Strategy", desc: "This track examines how organisations are redesigning their core business logic to align profitability with environmental stewardship and social value. Topics include net-zero business strategies, sustainability-integrated supply chains, regenerative business frameworks, and the transition from linear to circular value creation models." },
    { id: "T2", title: "Startup Ecosystems & Entrepreneurship Policy", desc: "Focused on the structural, institutional, and cultural determinants of thriving startup ecosystems, this track welcomes research on government policy, incubation infrastructure, access to venture capital, regulatory enablement, and the role of universities and industry clusters in nurturing high-growth entrepreneurial ventures." },
    { id: "T3", title: "Green Economy & Climate-Resilient Development", desc: "This track addresses the economic dimensions of the global green transition, including renewable energy business models, carbon pricing mechanisms, green finance instruments, sustainable agriculture, eco-industrial development, and the policy architecture required for a just and equitable low-carbon economy." },
    { id: "T4", title: "Digital Entrepreneurship & Platform Innovation", desc: "Exploring the intersection of digital technology and entrepreneurial activity, this track covers platform-based business models, digital marketplace dynamics, e-commerce ecosystems, AI-driven startups, gig economy structures, and the opportunities and challenges of entrepreneurship in an increasingly networked digital economy." },
    { id: "T5", title: "Circular Economy & Resource Efficiency", desc: "This track investigates business, policy, and technological strategies for decoupling economic growth from resource consumption and waste generation. Research submissions may address industrial symbiosis, product-as-a-service models, waste valorisation, extended producer responsibility, and the role of design thinking in advancing circularity." },
    { id: "T6", title: "ESG, Corporate Governance & Responsible Investment", desc: "Centred on environmental, social, and governance (ESG) frameworks, this track explores how corporations, institutional investors, and regulators are redefining standards of accountability and performance. Topics include ESG disclosure, sustainable finance, board diversity, stakeholder capitalism, and the role of impact investing in driving systemic change." },
    { id: "T7", title: "Innovation, Technology & Business Transformation", desc: "This track focuses on how disruptive technologies — including artificial intelligence, machine learning, blockchain, Internet of Things, and Industry 4.0 innovations — are transforming business processes, competitive strategy, organisational structures, and value chains across sectors." },
    { id: "T8", title: "Social Entrepreneurship & Inclusive Development", desc: "Examining entrepreneurship as a vehicle for social change, this track invites research on mission-driven ventures, hybrid organisational models, Base-of-the-Pyramid strategies, community-based enterprises, and the measurement of social impact. Special attention is given to the role of social entrepreneurship in achieving the UN Sustainable Development Goals." },
    { id: "T9", title: "Fintech, Financial Inclusion & Sustainable Finance", desc: "This track explores the transformative impact of financial technology on access to capital, payment systems, insurance, and investment, particularly in underserved markets. Research on digital banking, microfinance innovation, green bonds, sustainable investment products, and regulatory sandboxes is warmly encouraged." },
    { id: "T10", title: "Global Trade, Economic Policy & Development Finance", desc: "Addressing macroeconomic dimensions, this track covers international trade policy, foreign direct investment, development finance institutions, multilateral economic governance, and the strategic economic positioning of emerging markets. Contributions critically engaging with post-pandemic economic recovery and geopolitical trade dynamics are particularly welcome." },
  ],
  submission: {
    manuscript: [
      "All submitted manuscripts must represent original, previously unpublished research that is not currently under review at any other journal or conference.",
      "Full papers should be between 4,000 and 8,000 words, inclusive of abstract, references, tables, and figures. Extended abstracts must be between 500 and 800 words.",
      "The abstract must clearly articulate the research problem, methodology, key findings, and their implications. It should not exceed 300 words and must be accompanied by 4–6 keywords.",
      "Manuscripts must demonstrate methodological rigour, theoretical grounding, and a clear contribution to the existing body of knowledge in the relevant thematic track.",
      "All claims, data, and findings must be substantiated with appropriate citations. Statistical analyses must report significance levels, effect sizes, and confidence intervals where applicable.",
      "Review papers, conceptual frameworks, and policy briefs are accepted alongside empirical and case study research, provided they offer substantial scholarly contribution.",
    ],
    formatting: [
      "Manuscripts must be submitted in Microsoft Word (.docx) format. PDF submissions will not be accepted for initial review.",
      "Font: Times New Roman, 12pt for body text; 14pt Bold for the title. Section headings should be 12pt Bold.",
      "Line spacing: Double-spaced throughout, including references and appendices.",
      "Margins: 1 inch (2.54 cm) on all sides. Page size: A4.",
      "Referencing Style: APA 7th Edition is the required citation and reference format for all submissions.",
      "Tables and figures must be numbered sequentially, captioned appropriately, and cited in the text.",
      "The first page must include: paper title, abstract, keywords, and track designation. Author names and affiliations must appear on a separate title page to facilitate blind review.",
    ],
    process: [
      { step: "01", label: "Create Author Account", desc: "Register as an author on the SIARE Submission Portal at submissions.siare.org and create your author profile." },
      { step: "02", label: "Submit Abstract", desc: "Upload your structured abstract (500–800 words) and select the relevant conference track. Receive acknowledgement within 48 hours." },
      { step: "03", label: "Abstract Review & Notification", desc: "Abstracts are reviewed by the Programme Committee within 10 working days. Authors of accepted abstracts are invited to submit full papers." },
      { step: "04", label: "Full Paper Submission", desc: "Submit your complete manuscript (anonymised for blind review) via the portal before the full paper deadline. Ensure plagiarism report is attached." },
      { step: "05", label: "Double-Blind Peer Review", desc: "Each manuscript is reviewed by a minimum of two independent subject-matter experts. Reviewers assess originality, methodology, relevance, and clarity." },
      { step: "06", label: "Decision Notification", desc: "Authors receive an acceptance decision along with detailed reviewer comments. Three outcomes are possible: Accept, Minor Revision, Major Revision, or Reject." },
      { step: "07", label: "Camera-Ready Submission", desc: "Authors of accepted papers submit the final, formatted, author-attributed version with a signed copyright transfer form." },
      { step: "08", label: "Registration & Presentation", desc: "At least one author per accepted paper must register for the conference before the registration deadline to confirm inclusion in the proceedings." },
    ],
  },
  plagiarism: {
    threshold: "15%",
    body: [
      "SIARE upholds the highest standards of academic integrity. All submitted manuscripts are subject to mandatory plagiarism screening using iThenticate and Turnitin prior to peer review.",
      "The overall similarity index of any submitted manuscript must not exceed 15%, with no single source contributing more than 3% of the total content. Self-plagiarism — defined as the reuse of the author's own previously published material without appropriate attribution — is treated with the same seriousness as other forms of plagiarism.",
      "Authors are required to submit a plagiarism report generated by an approved tool (iThenticate, Turnitin, or equivalent) alongside their full paper submission. Submissions without an attached report will be returned without review.",
      "Papers found to exceed the stipulated threshold or to contain fabricated data, misattributed citations, or undisclosed conflicts of interest will be summarily rejected. In cases where such violations are discovered post-acceptance or post-publication, the paper will be retracted, and the author(s) may be permanently barred from future SIARE submissions.",
      "SIARE reserves the right to report confirmed cases of academic misconduct to the authors' affiliated institutions.",
    ],
  },
  registration: {
    categories: [
      { cat: "Student / Research Scholar", inr: "₹3,500", usd: "$75", note: "Valid student ID or supervisor letter required" },
      { cat: "Academician / Faculty Member", inr: "₹5,500", usd: "$110", note: "Includes one paper presentation" },
      { cat: "Industry Professional / Entrepreneur", inr: "₹7,000", usd: "$140", note: "Includes access to all sessions and networking events" },
      // { cat: "Foreign / International Delegate", inr: "—", usd: "$180", note: "Inclusive of virtual participation and digital kit" },
      { cat: "Virtual / Online Participation", inr: "₹2,500", usd: "$55", note: "All categories; includes digital certificate and proceedings" },
      // { cat: "Additional Paper (per extra paper)", inr: "₹2,000", usd: "$45", note: "Per additional accepted paper beyond the first" },
    ],
    benefits: [
      "Official SIARE Conference Kit (printed programme booklet, delegate badge, stationery)",
      "Certificate of Presentation and Participation issued by SIARE",
      // "Publication of accepted papers in the Conference Proceedings with an assigned ISBN",
      "Opportunity for extended papers to be considered for publication in SIARE-associated indexed journals",
      "Access to all keynote sessions, parallel tracks, panel discussions, and poster exhibitions",
      "Dedicated networking lunches, social events, and meet-the-speaker sessions",
      // "Post-conference access to presentation recordings and delegate e-compendium",
      // "Lifetime membership discount on all future SIARE conference registrations",
    ],
  },
  publication: {
    body: [
      "All accepted and presented papers will be published in the Official Conference Proceedings of the February 2027 WCBESD, issued with a unique ISBN number by SIARE Publications. The proceedings will be made available in both print and digital formats and distributed to all registered participants.",
      "Authors of outstanding papers, as identified by the Programme Committee, will be invited to submit extended versions (minimum 30% new content) for consideration in SIARE's partner journals, which include peer-reviewed periodicals associated with or indexed in Google Scholar, EBSCO, and ProQuest. Select journals in the SIARE network are currently under evaluation for Scopus and Web of Science listing; authors are encouraged to review journal-specific indexing status at the time of submission.",
      "A Best Paper Award will be presented in each thematic track. Awardees will receive a formal certificate, a monetary prize of USD 150, and priority recommendation for journal fast-track review.",
      "SIARE strictly prohibits predatory publishing practices. All associated journals maintain transparent editorial policies, article processing timelines, and editorial board disclosures in compliance with COPE (Committee on Publication Ethics) standards.",
    ],
  },
  dates: [
    { event: "Abstract Submission Deadline", date: "October 15, 2026" },
    { event: "Abstract Acceptance Notification", date: "October 30, 2026" },
    { event: "Full Paper Submission Deadline", date: "December 10, 2026" },
    { event: "Peer Review Completion / Decision Notification", date: "January 10, 2027" },
    // { event: "Camera-Ready Paper Submission", date: "January 25, 2027" },
    // { event: "Early Bird Registration Deadline", date: "November 30, 2026" },
    // { event: "Standard Registration Deadline", date: "February 5, 2027" },
    { event: "Conference Dates", date: "February 18–20, 2027", highlight: true },
  ],
  committee: {
    chair: { name: "Prof. Rajendra Mehta", affil: "Indian Institute of Management, Ahmedabad, India" },
    cochair: { name: "Prof. Dr. Elise Fontaine", affil: "HEC Paris School of Management, France" },
    program: [
      { name: "Prof. Samuel Okoye", affil: "University of Lagos, Nigeria" },
      { name: "Dr. Mei-Ling Chen", affil: "National Taiwan University, Taiwan" },
      { name: "Prof. Andrés Villanueva", affil: "Universidad Autónoma de Madrid, Spain" },
      // { name: "Dr. Priya Krishnaswamy", affil: "IIT Bombay, India" },
     
    ],
    advisory: [
      { name: "Prof. Hans-Dieter Müller", affil: "Humboldt University of Berlin, Germany" },
      { name: "Prof. Susan Nakamura", affil: "Keio University, Japan" },
      { name: "Dr. Kwame Asante-Boafo", affil: "University of Ghana, Ghana" },
      
    ],
  },
  contact: {
    email: "secretariat@siare-wcbesd2027.org",
    support: "support@siaresociety.org",
    phone: "+91 11 4567 8900",
    website: "www.siare-wcbesd2027.org",
    address: "SIARE Society Nagpur Maharastra, India - 440001",
  },
};

// ─── Nav section IDs ──────────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: "about",        label: "About" },
  // { id: "conference",   label: "Conference" },
  { id: "tracks",       label: "Call For Papers" },
  { id: "submission",   label: "Submission" },
  { id: "registration", label: "Registration" },
  { id: "dates",        label: "Dates" },
  { id: "committee",    label: "Committee" },
  { id: "contact",      label: "Contact" },
];

// ─── Reusable Components ──────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <div className="section-label__bar" />
      <span className="section-label__text">{children}</span>
    </div>
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <h2 className={`section-title${light ? " section-title--light" : ""}`}>
      {children}
    </h2>
  );
}

function BulletList({ items, accent = false }) {
  return (
    <ul className="bullet-list">
      {items.map((item, i) => (
        <li key={i} className={`bullet-list__item${accent ? " bullet-list__item--accent" : ""}`}>
          <span className="bullet-list__dot">◆</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GoldBar() {
  return <div className="gold-bar" />;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // offset for sticky nav height (56px)
      const top = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="nav__inner">
          <a href="#" className="nav__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            SIARE.Feb 2027
          </a>

          {/* Desktop links */}
          <ul className="nav__links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link${activeSection === id ? " nav__link--active" : ""}`}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`nav__hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav__mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__mobile-link${activeSection === id ? " nav__mobile-link--active" : ""}`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero__decor hero__decor--1" aria-hidden="true" />
      <div className="hero__decor hero__decor--2" aria-hidden="true" />
      <div className="hero__decor hero__decor--3" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__tag">
          <span className="hero__tag-text">{data.hero.seriesTag}</span>
        </div>
        
        <h1 className="hero__title">{data.hero.title}</h1>
        <p className="hero__tagline">"{data.hero.tagline}"</p>
        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-icon" aria-hidden="true">📅</span>
            <span className="hero__meta-text">{data.hero.dates}</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-icon" aria-hidden="true">📍</span>
            <span className="hero__meta-text">{data.hero.venue}</span>
          </div>
        </div>
        <div className="hero__cta">
          <a href="#submission" className="btn btn--primary"
            onClick={(e) => { e.preventDefault(); document.getElementById("submission")?.scrollIntoView({ behavior: "smooth" }); }}>
            Submit Paper
          </a>
          <a href="#registration" className="btn btn--outline"
            onClick={(e) => { e.preventDefault(); document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" }); }}>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Stat Bar ─────────────────────────────────────────────────────────────────
// function StatBar() {
//   const stats = [
//     { val: "500+", label: "Expected Delegates" },
//     { val: "50+",  label: "Countries Represented" },
//     { val: "10",   label: "Thematic Tracks" },
//     { val: "40+",  label: "SIARE Global Events" },
//   ];
//   return (
//     <div className="stat-bar" aria-label="Conference statistics">
//       <div className="stat-bar__inner">
//         {stats.map(({ val, label }) => (
//           <div key={label} className="stat-bar__item">
//             <div className="stat-bar__value">{val}</div>
//             <div className="stat-bar__label">{label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="section section--cream">
      <div className="container text-justify">
        {/* SIARE Series */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel>The SIARE Series</SectionLabel>
          <SectionTitle>{data.about_series.heading}</SectionTitle>
          <div className="grid-2 text-justify">
            {data.about_series.body.map((para, i) => (
              <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>{para}</p>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* About Conference */}
        <div style={{ marginBottom: 64 }}>
          <SectionLabel>February 2027 Edition</SectionLabel>
          <SectionTitle>{data.about_conf.heading}</SectionTitle>
          <div className="grid-2">
            {data.about_conf.body.map((para, i) => (
              <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>{para}</p>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Objectives */}
        <div>
          <SectionLabel>Purpose &amp; Goals</SectionLabel>
          <SectionTitle>Conference Objectives</SectionTitle>
          <div className="objectives-grid">
            {data.objectives.map((obj, i) => (
              <div key={i} className="objective-card">
                <span className="objective-card__num">0{i + 1}</span>
                <p className="objective-card__text">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tracks ───────────────────────────────────────────────────────────────────
function TracksSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="tracks" className="section section--navy">
      <div className="container">
        <SectionLabel>Thematic Areas</SectionLabel>
        <SectionTitle light>Conference Tracks</SectionTitle>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#A0B8CC", lineHeight: 1.8, maxWidth: 760, marginBottom: 44 }}>
          The conference is organised around ten thematic tracks that collectively encompass the full spectrum of contemporary research in business, entrepreneurship, and sustainable economic development. Authors are invited to submit papers to the track most closely aligned with their research focus.
        </p>
        <div className="grid-tracks">
          {data.tracks.map((t) => (
            <div
              key={t.id}
              className={`track-card${open === t.id ? " track-card--open" : ""}`}
              onClick={() => setOpen(open === t.id ? null : t.id)}
              role="button"
              aria-expanded={open === t.id}
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(open === t.id ? null : t.id)}
            >
              <div className="track-card__header">
                <div>
                  <span className="track-card__id">{t.id}</span>
                  <span className="track-card__title">{t.title}</span>
                </div>
                <span className="track-card__toggle" aria-hidden="true">{open === t.id ? "−" : "+"}</span>
              </div>
              {open === t.id && <p className="track-card__desc">{t.desc}</p>}
            </div>
          ))}
        </div>
        <p className="track-hint">Click any track card to view the full description.</p>
      </div>
    </section>
  );
}

// ─── Submission ───────────────────────────────────────────────────────────────
function SubmissionSection() {
  const [tab, setTab] = useState("manuscript");
  const tabs = [
    { id: "manuscript", label: "Manuscript Requirements" },
    { id: "formatting", label: "Formatting Guidelines" },
    { id: "process",    label: "Submission Process" },
    { id: "plagiarism", label: "Plagiarism Policy" },
  ];
  return (
    <section id="submission" className="section section--cream">
      <div className="container">
        <SectionLabel>Author Guidelines</SectionLabel>
        <SectionTitle>Paper Submission</SectionTitle>

        <div className="tabs" role="tablist" aria-label="Submission guidelines tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`tab-btn${tab === t.id ? " tab-btn--active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "manuscript" && (
          <div className="card" role="tabpanel">
            <GoldBar />
            <BulletList items={data.submission.manuscript} />
          </div>
        )}

        {tab === "formatting" && (
          <div className="card" role="tabpanel">
            <GoldBar />
            <BulletList items={data.submission.formatting} />
          </div>
        )}

        {tab === "process" && (
          <div className="step-grid" role="tabpanel">
            {data.submission.process.map((s) => (
              <div key={s.step} className="step-card">
                <div className="step-card__number">{s.step}</div>
                <div className="step-card__label">{s.label}</div>
                <p className="step-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "plagiarism" && (
          <div className="plagiarism-card" role="tabpanel">
            <div className="plagiarism-card__header">
              <span className="plagiarism-card__badge">Max Similarity: {data.plagiarism.threshold}</span>
              <span className="plagiarism-card__tool-note">Verified via iThenticate / Turnitin</span>
            </div>
            <BulletList items={data.plagiarism.body} accent />
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Registration ─────────────────────────────────────────────────────────────
function RegistrationSection() {
  return (
    <section id="registration" className="section section--navy-mid">
      <div className="container">
        <SectionLabel>Join the Conference</SectionLabel>
        <SectionTitle light>Registration Information</SectionTitle>
        <div className="reg-section">
          {/* Fee table */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
              Registration Categories &amp; Fees
            </h3>
            <div className="reg-table-wrap">
              <table className="reg-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>INR</th>
                    <th>USD</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {data.registration.categories.map((r, i) => (
                    <tr key={i}>
                      <td className="td-cat">{r.cat}</td>
                      <td className="td-inr">{r.inr}</td>
                      <td className="td-usd">{r.usd}</td>
                      <td className="td-note">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reg-note">* GST applicable for Indian registrations. Group discounts available for 5+ participants from the same institution.</p>
          </div>

          {/* Benefits */}
          <div>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
              Registration Benefits
            </h3>
            <ul className="benefits-list">
              {data.registration.benefits.map((b, i) => (
                <li key={i} className="benefits-list__item">
                  <span className="benefits-list__check" aria-hidden="true">✓</span>
                  <span className="benefits-list__text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Publication ──────────────────────────────────────────────────────────────
function PublicationSection() {
  const tags = ["ISBN Proceedings", "Google Scholar", "EBSCO", "ProQuest", "COPE Compliant", "Best Paper Award"];
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionLabel>Scholarly Output</SectionLabel>
        <SectionTitle>Publication Opportunities</SectionTitle>
        <div className="grid-2">
          {data.publication.body.map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text)", lineHeight: 1.8, margin: 0 }}>{para}</p>
          ))}
        </div>
        <div className="pub-tags">
          {tags.map((tag) => <span key={tag} className="pub-tag">{tag}</span>)}
        </div>
      </div>
    </section>
  );
}

// ─── Dates ────────────────────────────────────────────────────────────────────
function DatesSection() {
  return (
    <section id="dates" className="section section--navy">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionLabel>Timeline</SectionLabel>
        <SectionTitle light>Important Dates</SectionTitle>
        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {data.dates.map((d, i) => (
            <div key={i} className="timeline__item">
              <div className={`timeline__dot${d.highlight ? " timeline__dot--highlight" : ""}`} aria-hidden="true" />
              <div className={`timeline__card${d.highlight ? " timeline__card--highlight" : ""}`}>
                <span className={`timeline__event${d.highlight ? " timeline__event--highlight" : ""}`}>{d.event}</span>
                <span className={`timeline__date${d.highlight ? " timeline__date--highlight" : ""}`}>{d.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Committee ────────────────────────────────────────────────────────────────
function CommitteeSection() {
  const { chair, cochair, program, advisory } = data.committee;
  return (
    <section id="committee" className="section section--cream">
      <div className="container">
        <SectionLabel>Leadership</SectionLabel>
        <SectionTitle>Organising Committee</SectionTitle>

        <div className="chair-grid">
          {[{ role: "Conference Chair", ...chair }, { role: "Co-Chair", ...cochair }].map((p) => (
            <div key={p.role} className="chair-card">
              <div className="chair-card__role">{p.role}</div>
              <div className="chair-card__name">{p.name}</div>
              <div className="chair-card__affil">{p.affil}</div>
            </div>
          ))}
        </div>

        <div className="committee-grid">
          {[
            { label: "Programme Committee", members: program },
            { label: "Advisory Board", members: advisory },
          ].map(({ label, members }) => (
            <div key={label}>
              <h3 className="committee-group__heading">{label}</h3>
              <div className="member-list">
                {members.map((m) => (
                  <div key={m.name} className="member-card">
                    <div className="member-avatar" aria-hidden="true">
                      <span className="member-avatar__initial">{m.name.split(" ").pop()[0]}</span>
                    </div>
                    <div>
                      <div className="member-card__name">{m.name}</div>
                      <div className="member-card__affil">{m.affil}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const { email, support, phone, website, address } = data.contact;
  const cards = [
    { icon: "✉️", label: "Secretariat Email", val: email, link: `mailto:${email}` },
    { icon: "🛠️", label: "Support Email",     val: support, link: `mailto:${support}` },
    { icon: "📞", label: "Phone",             val: phone,  link: `tel:${phone.replace(/\s/g, "")}` },
    { icon: "🌐", label: "Website",           val: website, link: `https://${website}` },
  ];
  return (
    <section id="contact" className="section section--navy">
      <div className="container">
        <SectionLabel>Get in Touch</SectionLabel>
        <SectionTitle light>Contact Us</SectionTitle>
        <div className="contact-grid">
          {cards.map(({ icon, label, val, link }) => (
            <div key={label} className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">{icon}</div>
              <div className="contact-card__label">{label}</div>
              <a href={link} className="contact-card__value">{val}</a>
            </div>
          ))}
        </div>
        <div className="contact-address">
          <span className="contact-address__icon" aria-hidden="true">🏛️</span>
          <div>
            <div className="contact-address__label">Mailing Address</div>
            <p className="contact-address__text">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2027 SIARE Conference Series. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
        February 2027 World Conference on Business, Entrepreneurship, and Sustainable Economic Development
      </p>
    </footer>
  );
}

// ─── Root App with IntersectionObserver ──────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers = [];

    // We track which sections are currently intersecting and pick the topmost one
    const visible = new Set();

    const updateActive = () => {
      if (visible.size === 0) return;
      // Find the topmost visible section in DOM order
      for (const id of sectionIds) {
        if (visible.has(id)) {
          setActiveSection(id);
          break;
        }
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
          updateActive();
        },
        {
          rootMargin: "-56px 0px -40% 0px", // account for sticky nav height
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        {/* <StatBar /> */}
        <AboutSection />
        <TracksSection />
        <SubmissionSection />
        <RegistrationSection />
        <PublicationSection />
        <DatesSection />
        <CommitteeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
