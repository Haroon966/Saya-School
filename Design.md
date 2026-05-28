# SAYA School — Website Redesign Specification
> Minimalist · Purposeful · Human

---

## Design Philosophy

SAYA School began under the shadow of a tree (*saya* = shadow in Urdu). The entire visual language should breathe that origin — **organic minimalism**. Not cold tech minimalism. Warm, grounded, purposeful. Every element earns its place.

**Aesthetic direction**: Editorial meets organic. Think *The New York Times* meets a Scandinavian nature journal. Clean whitespace, expressive typography, deep greens, ink-black text, and moments of warmth.

**One thing visitors will remember**: The hero section where a single line — *"It started under a tree"* — anchors the entire school's story.

---

## Color System

```css
:root {
  /* Primary */
  --green-deep:     #1A5C2A;   /* Navbars, headings, footer */
  --green-mid:      #3AAA5C;   /* Buttons, links, CTAs */
  --green-light:    #72C47E;   /* Hover states, accents */
  --green-pale:     #A8DB89;   /* Tags, badges */

  /* Neutrals */
  --ink:            #0F1410;   /* Body text */
  --ink-muted:      #4D5E52;   /* Secondary text */
  --border:         #C8DECE;   /* Borders, dividers */
  --surface:        #F4FAF5;   /* Card backgrounds */
  --bg:             #FDFFFE;   /* Page background */

  /* Accent */
  --gold:           #C9973A;   /* Pull quotes, highlights */
  --gold-pale:      #FBF1E0;   /* Gold tint backgrounds */

  /* Dark Mode */
  --dm-bg:          #0C1510;
  --dm-surface:     #131F16;
  --dm-text:        #E8F2EA;
  --dm-muted:       #7A9E82;
}
```

---

## Typography

```css
/* Import in <head> */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;   /* Hero, headings, pull quotes */
  --font-body:    'DM Sans', sans-serif;                /* Body, UI, nav */
  --font-mono:    'DM Mono', monospace;                 /* Stats, labels, tags */
}

/* Type Scale */
--text-xs:    0.75rem;    /* 12px — labels, captions */
--text-sm:    0.875rem;   /* 14px — secondary body */
--text-base:  1rem;       /* 16px — body text */
--text-lg:    1.125rem;   /* 18px — lead paragraph */
--text-xl:    1.375rem;   /* 22px — section intros */
--text-2xl:   1.875rem;   /* 30px — section headings */
--text-3xl:   2.75rem;    /* 44px — hero sub */
--text-4xl:   4rem;       /* 64px — hero headline */
--text-5xl:   6rem;       /* 96px — display number stats */
```

---

## Spacing & Layout

```css
:root {
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   1.5rem;
  --space-lg:   3rem;
  --space-xl:   6rem;
  --space-2xl:  10rem;

  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-xl:  32px;
  --radius-full: 9999px;

  --max-width:  1200px;
  --content-width: 740px;
}
```

---

## Section-by-Section Spec

---

### 1. Navbar

**Behavior**: Sticky. Transparent on hero, white + border on scroll. Smooth transition.

**Desktop layout**:
```
[SAYA logo + wordmark]          [Home  About  Courses  News  Contact]     [Donate →]
```

**Mobile**: Hamburger. Full-screen overlay menu with staggered fade-in links.

**Code structure**:
```html
<nav class="navbar" id="navbar">
  <div class="nav-container">

    <!-- Logo -->
    <a href="/" class="nav-logo">
      <img src="/logo.png" alt="SAYA" width="36" height="36" />
      <span class="nav-wordmark">SAYA <span lang="ur">سایہ</span></span>
    </a>

    <!-- Links -->
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/courses">Courses</a></li>
      <li><a href="/news">News</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <!-- CTA -->
    <a href="/donate" class="btn-donate">Donate →</a>

    <!-- Hamburger (mobile) -->
    <button class="hamburger" aria-label="Open menu">
      <span></span><span></span>
    </button>

  </div>
</nav>
```

**CSS**:
```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem 2rem;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.navbar.scrolled {
  background: rgba(253, 255, 254, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-wordmark {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--green-deep);
  font-weight: 500;
}
.nav-wordmark span[lang="ur"] {
  font-size: 1rem;
  margin-left: 4px;
  opacity: 0.6;
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0 auto;
}
.nav-links a {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--ink-muted);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--green-deep); }
.btn-donate {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.6rem 1.4rem;
  background: var(--green-deep);
  color: #fff;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
}
.btn-donate:hover {
  background: var(--green-mid);
  transform: translateY(-1px);
}
```

**JS (scroll effect)**:
```js
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});
```

---

### 2. Hero Section

**Concept**: Full-viewport. Left-aligned editorial layout. Large serif headline. Subtle animated background — slowly drifting leaf-green ink blobs (CSS radial gradients with keyframe animation). The school's founding story distilled into one line.

**Layout**:
```
[Navbar]
─────────────────────────────────────────────────────
                          ╔══════════════╗
  It started              ║   [image]    ║
  under a tree.           ║  students    ║
                          ╚══════════════╝
  Saya School provides quality
  education to 800+ children on
  the outskirts of Islamabad.

  [Explore Our Story →]    [Donate Today]

  ↓ est. 2008  ·  800+ students  ·  3 buildings
─────────────────────────────────────────────────────
```

**HTML**:
```html
<section class="hero">
  <div class="hero-bg-blobs" aria-hidden="true">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>

  <div class="hero-container">
    <div class="hero-content">

      <span class="hero-eyebrow">Islamabad, Pakistan · Est. 2008</span>

      <h1 class="hero-headline">
        It started<br>
        <em>under a tree.</em>
      </h1>

      <p class="hero-body">
        Saya School provides free, quality education to 800+ underprivileged
        children living on the outskirts of Islamabad. From a dozen students
        in the open air to a full high school — this is their story.
      </p>

      <div class="hero-actions">
        <a href="/about" class="btn-primary">Explore our story →</a>
        <a href="/donate" class="btn-secondary">Donate today</a>
      </div>

    </div>

    <div class="hero-image-wrap">
      <img src="/images/students.jpg" alt="SAYA School students" class="hero-image" />
      <div class="hero-image-tag">800+ students enrolled</div>
    </div>
  </div>

  <div class="hero-stats">
    <div class="stat"><span class="stat-num">2008</span><span class="stat-label">Founded</span></div>
    <div class="stat-divider"></div>
    <div class="stat"><span class="stat-num">800+</span><span class="stat-label">Students</span></div>
    <div class="stat-divider"></div>
    <div class="stat"><span class="stat-num">3</span><span class="stat-label">Buildings</span></div>
    <div class="stat-divider"></div>
    <div class="stat"><span class="stat-num">Free</span><span class="stat-label">Education</span></div>
  </div>
</section>
```

**CSS**:
```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

/* Animated background blobs */
.hero-bg-blobs { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
  animation: drift 20s ease-in-out infinite alternate;
}
.blob-1 { width: 600px; height: 600px; background: var(--green-mid); top: -100px; right: -100px; animation-delay: 0s; }
.blob-2 { width: 400px; height: 400px; background: var(--green-pale); bottom: 0; left: 10%; animation-delay: -7s; }
.blob-3 { width: 300px; height: 300px; background: var(--gold); top: 40%; right: 30%; animation-delay: -13s; }
@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.05); }
}

.hero-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green-mid);
  display: block;
  margin-bottom: 1.5rem;
}
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 400;
  line-height: 1.05;
  color: var(--ink);
  margin-bottom: 1.5rem;
}
.hero-headline em {
  color: var(--green-deep);
  font-style: italic;
}
.hero-body {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--ink-muted);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 2.5rem;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-primary {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: var(--green-deep);
  color: #fff;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover { background: var(--green-mid); transform: translateY(-2px); }
.btn-secondary {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--green-deep);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--green-deep);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.btn-secondary:hover { background: var(--surface); }

/* Hero image */
.hero-image-wrap {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: visible;
}
.hero-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  display: block;
}
.hero-image-tag {
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  background: var(--gold-pale);
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 400;
  letter-spacing: 0.06em;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-full);
  border: 1px solid #E8C87A;
}

/* Stats bar */
.hero-stats {
  max-width: var(--max-width);
  margin: 4rem auto 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  position: relative;
  z-index: 1;
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat-num {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--green-deep);
}
.stat-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-muted);
}
.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
  flex-shrink: 0;
}
```

---

### 3. About Strip (Scroll-In Section)

**Concept**: Full-width editorial pull-quote section. Dark green background. Large italic serif quote from the founder. Reveals on scroll.

```html
<section class="about-strip">
  <div class="about-strip-inner">
    <span class="strip-tag">Our story</span>
    <blockquote class="strip-quote">
      "From a class of a dozen children under a tree,<br>
      to a high school of 800 — we never stopped growing."
    </blockquote>
    <cite class="strip-cite">Dr. Tughral Yamin · Founder, SAYA School</cite>
    <a href="/about" class="btn-outline-white">Read our full history →</a>
  </div>
</section>
```

```css
.about-strip {
  background: var(--green-deep);
  padding: var(--space-xl) 2rem;
}
.about-strip-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.strip-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green-pale);
}
.strip-quote {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 400;
  font-style: italic;
  color: #fff;
  line-height: 1.4;
  margin: 0;
}
.strip-cite {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.55);
  font-style: normal;
}
.btn-outline-white {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border: 1.5px solid rgba(255,255,255,0.35);
  color: #fff;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
```

---

### 4. Programs / Courses Section

**Concept**: Clean 3-column card grid. Each card has an icon, title, short description, and a subtle hover lift. Cards use the surface color, accented with a thin top border in green.

```html
<section class="programs">
  <div class="section-container">
    <div class="section-header">
      <span class="section-tag">What we offer</span>
      <h2 class="section-heading">Education for every stage</h2>
    </div>

    <div class="programs-grid">

      <div class="program-card">
        <div class="program-icon">📚</div>
        <h3 class="program-title">Primary School</h3>
        <p class="program-body">Building strong foundations in literacy, numeracy, and critical thinking for young learners.</p>
        <a href="/courses#primary" class="card-link">View curriculum →</a>
      </div>

      <div class="program-card">
        <div class="program-icon">🔬</div>
        <h3 class="program-title">Middle School</h3>
        <p class="program-body">Expanding horizons with science labs, computer access, and a well-stocked library.</p>
        <a href="/courses#middle" class="card-link">View curriculum →</a>
      </div>

      <div class="program-card">
        <div class="program-icon">🎓</div>
        <h3 class="program-title">High School</h3>
        <p class="program-body">Preparing students for matriculation and university — with tech, science, and arts tracks.</p>
        <a href="/courses#high" class="card-link">View curriculum →</a>
      </div>

    </div>
  </div>
</section>
```

```css
.programs { padding: var(--space-xl) 2rem; background: var(--bg); }
.section-container { max-width: var(--max-width); margin: 0 auto; }
.section-header { margin-bottom: 3rem; }
.section-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--green-mid);
  display: block;
  margin-bottom: 0.75rem;
}
.section-heading {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 500;
  color: var(--ink);
  line-height: 1.1;
}
.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.program-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-top: 3px solid var(--green-mid);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.program-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(26, 92, 42, 0.1);
}
.program-icon { font-size: 2rem; line-height: 1; }
.program-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--green-deep);
}
.program-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--ink-muted);
  line-height: 1.65;
  flex: 1;
}
.card-link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--green-mid);
  text-decoration: none;
  margin-top: 0.5rem;
}
.card-link:hover { color: var(--green-deep); }
```

---

### 5. Success Stories (Alumni Section)

**Concept**: Horizontal scroll on mobile, masonry-like grid on desktop. Each card = photo, name, role, and a short one-liner. Warm surface background.

```html
<section class="alumni">
  <div class="section-container">
    <div class="section-header">
      <span class="section-tag">Alumni</span>
      <h2 class="section-heading">Their stories inspire us</h2>
      <p class="section-subhead">After matriculation, our students are making their mark across tech, education, and beyond.</p>
    </div>

    <div class="alumni-grid">
      <!-- Repeat for each alumnus -->
      <div class="alumni-card">
        <img src="/images/malaika.jpg" alt="Malaika Karobeen" class="alumni-photo" />
        <div class="alumni-info">
          <strong class="alumni-name">Malaika Karobeen</strong>
          <span class="alumni-role">Full Stack Web Developer</span>
        </div>
      </div>
      <!-- ... more cards ... -->
    </div>
  </div>
</section>
```

```css
.alumni { padding: var(--space-xl) 2rem; background: var(--gold-pale); }
.section-subhead {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--ink-muted);
  margin-top: 0.75rem;
  max-width: 560px;
  line-height: 1.65;
}
.alumni-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}
.alumni-card {
  background: #fff;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(201, 151, 58, 0.2);
  transition: transform 0.2s;
}
.alumni-card:hover { transform: translateY(-4px); }
.alumni-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
  display: block;
}
.alumni-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.alumni-name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--ink);
}
.alumni-role {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--gold);
}
```

---

### 6. Leadership / SAYA Core

**Concept**: Minimal horizontal card row. Photo circle, name, title. Clean and understated.

```html
<section class="leadership">
  <div class="section-container">
    <span class="section-tag">Leadership</span>
    <h2 class="section-heading">SAYA Core</h2>
    <div class="leadership-row">

      <div class="leader-card">
        <div class="leader-avatar">SY</div>
        <div>
          <strong class="leader-name">Safia Yamin</strong>
          <span class="leader-title">Patron</span>
          <p class="leader-bio">A source of inspiration and guiding spirit for everything SAYA stands for.</p>
        </div>
      </div>

      <div class="leader-card">
        <div class="leader-avatar">TY</div>
        <div>
          <strong class="leader-name">Dr. Tughral Yamin</strong>
          <span class="leader-title">Founder</span>
          <p class="leader-bio">The visionary who turned a class under a tree into a high school of 800 students.</p>
        </div>
      </div>

      <div class="leader-card">
        <div class="leader-avatar">AT</div>
        <div>
          <strong class="leader-name">Asma Tughral Yamin</strong>
          <span class="leader-title">CEO</span>
          <p class="leader-bio">Leads daily operations with expertise and an unwavering commitment to the mission.</p>
        </div>
      </div>

    </div>
  </div>
</section>
```

```css
.leadership { padding: var(--space-xl) 2rem; background: var(--bg); }
.leadership-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
}
.leader-card {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
}
.leader-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--green-deep);
  color: #fff;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.leader-name {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--ink);
}
.leader-title {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--green-mid);
  margin: 4px 0 8px;
}
.leader-bio {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--ink-muted);
  line-height: 1.6;
  margin: 0;
}
```

---

### 7. Donate CTA Section

**Concept**: Full-width. Left: emotional copy. Right: simple stat/impact visual. Deep green background.

```html
<section class="donate-cta">
  <div class="donate-container">
    <div class="donate-copy">
      <span class="section-tag" style="color: var(--green-pale);">Make a difference</span>
      <h2 class="donate-heading">Education is the<br><em>greatest gift.</em></h2>
      <p class="donate-body">Your donation directly funds a child's education — books, meals, uniforms, and more. Every rupee matters.</p>
      <a href="/donate" class="btn-white">Donate now →</a>
    </div>
    <div class="donate-impact">
      <div class="impact-item">
        <span class="impact-num">Rs. 500</span>
        <span class="impact-label">Buys a full set of textbooks</span>
      </div>
      <div class="impact-divider"></div>
      <div class="impact-item">
        <span class="impact-num">Rs. 2,000</span>
        <span class="impact-label">Sponsors a child for a month</span>
      </div>
      <div class="impact-divider"></div>
      <div class="impact-item">
        <span class="impact-num">Rs. 24,000</span>
        <span class="impact-label">Fully sponsors a child for a year</span>
      </div>
    </div>
  </div>
</section>
```

```css
.donate-cta {
  background: var(--green-deep);
  padding: var(--space-xl) 2rem;
}
.donate-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.donate-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  color: #fff;
  line-height: 1.1;
  margin: 1rem 0 1.5rem;
}
.donate-heading em { color: var(--green-pale); }
.donate-body {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin-bottom: 2rem;
}
.btn-white {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: #fff;
  color: var(--green-deep);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: opacity 0.2s;
}
.btn-white:hover { opacity: 0.9; }
.donate-impact { display: flex; flex-direction: column; gap: 1.5rem; }
.impact-item { display: flex; flex-direction: column; gap: 6px; }
.impact-num {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--green-pale);
}
.impact-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.55);
}
.impact-divider { height: 1px; background: rgba(255,255,255,0.12); }
```

---

### 8. Footer

**Concept**: Clean 3-column footer. Dark ink background. Logo + short mission left. Links center. Social + contact right.

```html
<footer class="footer">
  <div class="footer-container">

    <div class="footer-brand">
      <img src="/logo.png" alt="SAYA" width="40" />
      <p class="footer-mission">Empowering underprivileged children through free, quality education since 2008.</p>
      <div class="social-links">
        <a href="https://facebook.com" aria-label="Facebook">FB</a>
        <a href="https://instagram.com" aria-label="Instagram">IG</a>
        <a href="https://twitter.com" aria-label="Twitter">X</a>
      </div>
    </div>

    <nav class="footer-nav">
      <strong>Quick links</strong>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/donate">Donate</a></li>
      </ul>
    </nav>

    <div class="footer-contact">
      <strong>Contact Us</strong>
      <p>SAYA School,<br>Islamabad, Pakistan</p>
      <a href="mailto:info@saya.edu.pk">info@saya.edu.pk</a>
    </div>

  </div>
  <div class="footer-bottom">
    <p>© 2026 SAYA Welfare Society · All rights reserved</p>
  </div>
</footer>
```

```css
.footer {
  background: #0C1510;
  padding: var(--space-xl) 2rem var(--space-sm);
}
.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-mission {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.45);
  line-height: 1.7;
  margin: 1rem 0 1.5rem;
}
.social-links { display: flex; gap: 1rem; }
.social-links a {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.social-links a:hover { color: var(--green-pale); }
.footer-nav strong,
.footer-contact strong {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  margin-bottom: 1rem;
}
.footer-nav ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
.footer-nav a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-nav a:hover { color: #fff; }
.footer-contact p,
.footer-contact a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.4);
  line-height: 1.7;
  text-decoration: none;
  display: block;
}
.footer-contact a:hover { color: var(--green-pale); }
.footer-bottom {
  max-width: var(--max-width);
  margin: 1.5rem auto 0;
  text-align: center;
}
.footer-bottom p {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.04em;
}
```

---

## Scroll Animations

```js
// Animate elements as they enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('in-view');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.program-card, .alumni-card, .leader-card, .impact-item, .about-strip-inner, .section-header')
  .forEach(el => observer.observe(el));
```

```css
.program-card, .alumni-card, .leader-card, .impact-item, .about-strip-inner, .section-header {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.in-view {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger children in a grid */
.programs-grid .program-card:nth-child(2) { transition-delay: 0.1s; }
.programs-grid .program-card:nth-child(3) { transition-delay: 0.2s; }
.alumni-grid .alumni-card:nth-child(even) { transition-delay: 0.08s; }
```

---

## Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 900px) {
  .hero-container { grid-template-columns: 1fr; }
  .hero-image-wrap { display: none; }
  .donate-container { grid-template-columns: 1fr; gap: 3rem; }
  .footer-container { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .footer-brand { grid-column: 1 / -1; }
}

/* Mobile */
@media (max-width: 600px) {
  .navbar { padding: 1rem 1.25rem; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero { padding: 6rem 1.25rem 3rem; }
  .hero-stats { flex-wrap: wrap; gap: 1.25rem; }
  .stat-divider { display: none; }
  .footer-container { grid-template-columns: 1fr; gap: 2rem; }
}
```

---

## File Structure (for Cursor)

```
saya-redesign/
├── index.html
├── about.html
├── courses.html
├── news.html
├── contact.html
├── donate.html
│
├── css/
│   ├── variables.css       ← Colors, typography, spacing tokens
│   ├── reset.css           ← CSS reset
│   ├── global.css          ← Body, links, base elements
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css        ← About strip, programs, alumni, leadership
│   ├── donate.css
│   ├── footer.css
│   └── animations.css
│
├── js/
│   ├── navbar.js           ← Scroll effect + mobile menu
│   └── animations.js       ← Intersection Observer
│
├── images/
│   ├── logo.png
│   ├── students.jpg        ← Hero image
│   └── alumni/             ← Alumni photos
│
└── fonts/                  ← (Optional: self-host Playfair + DM Sans)
```

---

## Quick-Start HTML Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SAYA School — Quality Education for All</title>
  <meta name="description" content="SAYA School provides free, quality education to 800+ underprivileged children in Islamabad since 2008." />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />

  <!-- Styles -->
  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/global.css" />
  <link rel="stylesheet" href="css/navbar.css" />
  <link rel="stylesheet" href="css/hero.css" />
  <link rel="stylesheet" href="css/sections.css" />
  <link rel="stylesheet" href="css/donate.css" />
  <link rel="stylesheet" href="css/footer.css" />
  <link rel="stylesheet" href="css/animations.css" />
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar" id="navbar">…</nav>

  <main>
    <!-- Hero -->
    <section class="hero">…</section>

    <!-- About Strip -->
    <section class="about-strip">…</section>

    <!-- Programs -->
    <section class="programs">…</section>

    <!-- Alumni -->
    <section class="alumni">…</section>

    <!-- Leadership -->
    <section class="leadership">…</section>

    <!-- Donate CTA -->
    <section class="donate-cta">…</section>
  </main>

  <!-- Footer -->
  <footer class="footer">…</footer>

  <!-- Scripts -->
  <script src="js/navbar.js"></script>
  <script src="js/animations.js"></script>

</body>
</html>
```

---

*Design system by Claude for SAYA School redesign · 2026*
