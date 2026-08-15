# Evidence — consolidated subagent reports

All paths relative to repo root. Sections appended as subagent reports arrive.

## A. Structural evidence

**Interactive elements: 70 base** (always-rendered, source-level). Navbar 21 (7 desktop + 7 sidebar ScrollLinks from one NAV_ITEMS array, brand link, hamburger, locale checkbox, close, 3 sidebar socials) · Intro 7 (6 MediaIcons anchors + CTA button) · About 2 (carousel prev/next) · Activities 5 (3 external CTAs + 2 lightbox images; 3rd card is autoplay video) · Courses 2 (`<video controls>` ×2; 3rd card static image) · Gallery 23 clickable slides · Certificates 3 buttons · Contact 7 (6 MediaIcons repeat + scroll-to-top) · Footer 0. Runtime extras excluded: 3 conditional Modals, ~23 Swiper pagination bullets, loop clones.

**Nesting depth: 4 custom / 5 with third-party** (Home→Gallery→Swiper→SwiperSlide→Image) — shallow tree.

**Repeated patterns: 10**
1. Social links ×2 implementations — MediaIcons (6 PNG anchors, `MediaIcons.tsx:13-117`) vs Navbar sidebar (3 react-icons anchors, `Navbar.tsx:31-35,147-160`); MediaIcons itself mounted twice (Intro + Contact)
2. Carousels ×2 systems — Swiper coverflow (`Gallery.tsx:24-63`) vs hand-rolled 3D rotateY (`Carousel.tsx:52-97`)
3. Lightbox — same useModal+Modal pair instantiated 3× (`ActivityCard.tsx:14,74`, `Gallery.tsx:18,65`, `Certificates.tsx:18,41`)
4. "contact-button" CTA ×2 — `<button>` via Button.tsx vs raw `<a className="contact-button">` (`ActivityCard.tsx:33-40`)
5. Section titles ×2 styles — `.portfolio-section-title` (5 sections) vs `.courses-title` (`Courses.tsx:13`), the latter also reused on card `h3`s (`Courses.tsx:33`)
6. Enter/Space key handler ×3 implementations (`Navbar.tsx:38-42`, `ActivityCard.tsx:63-68`, `Gallery.tsx:49-54`)
7. Escape-close listener ×2 (`Navbar.tsx:61-63`, `Modal.tsx:18-20`)
8. Video embed ×2 (`Courses.tsx:18-23` raw vs LazyVideo)
9. Social/external URLs hardcoded in 2 places each (Navbar vs MediaIcons; activityData vs MediaIcons)
10. Scroll-to-section ×2 mechanisms (declarative ScrollLink vs imperative `scroller.scrollTo`)

**Dead code: 2 strict + 1 data-level** — orphaned `StarGrid` component (`Stars.tsx:7`, zero imports repo-wide); unused `import React` (`MediaIcons.tsx:1`); never-rendered `img: nextArtistPhoto` (`activityData.ts:48`, video branch wins).

**Notable usefulness facts**: contact email is a plain `<div>`, not a `mailto:` link (`Contact.tsx:32`); third course card has `videoUrl: ""` → static image with no path to the content (`coursesData.ts:26`).

**Gaps**: static analysis only (runtime DOM/Swiper clones not counted); SCSS dead selectors and i18n key usage not audited here; Cloudinary URLs not verified reachable.

## B. Copy & honesty evidence

**Dark patterns: none** in any category (no forced continuity, hidden cost, fake scarcity, or confirmshaming — no forms/purchases exist at all).

**Primary-task blockers**:
- Zero `mailto:`/`tel:` links in the entire src tree. The contact email is an inert `<div>` (`Contact.tsx:32`); the same address in all 3 course descriptions is plain `<p>` text (`Courses.tsx:34`). Initiating contact = manual copy-paste or leaving via social icons.
- Courses section has no enrollment mechanism, price, date, or CTA — heading promises a catalog, cards are teasers pointing at unclickable email text (`bg/en.json:62-73`).
- Course card 3 shows card 1's artwork (`coursesData.ts:26-27` reuses `/public-assets/isi-2-pic.jpg`) and has `videoUrl: ""`.

**Inflations (mild)**: "some of the country's finest producers" (no producer named on page); en-only "a team of 20 exceptional teachers" (`en.json:30` — bg gives no number); mission-quote marketing phrasing is framed as a first-person attributed statement (acceptable form).

**Locale divergence (same key, different substance)**: bg bio contains a Eurovision-2017 sentence absent from en (`bg.json:30`); "Основател" (founder) vs "Owner" (`:20`); "Вокален педагог" vs "Vocal and artist coach" (`:19`); SLS method spelled differently per locale; "X-Фактор"/"X Factor" spelled two ways within bg alone.

**English-only strings served to Bulgarian users**: visible "Loading video..." (`LazyVideo.tsx:44`); aria-labels "Image preview"/"Close"/"Full size view" (`Modal.tsx:39,44,52`), "Back to top" (`ScrollToTopBtn.tsx:36`), "Previous"/"Next" (`Carousel.tsx:87,93`); alt suffix "logo" (`ActivityCard.tsx:27`).

**Clarity issues**: two different sections both titled "Галерия/Gallery" (About's moments carousel `bg/en.json:31` + the photo gallery `:77`); "Activities" label holds her organizations/projects; certificates labeled only "Certificates 1-3" — the IVA claim in the intro is never wired to its certificate evidence; switcher flag shows the *target* language (ambiguous convention); gallery alts are index numbers.

**Consistency details**: footer says "2024 ©" (today: 2026, hardcoded in strings `bg/en.json:89`); the artist's name is rendered three different ways (hyphenated in metadata `layout.tsx:14`, abbreviated in navbar `Navbar.tsx:83`, full in intro `bg/en.json:17`); "NEXT ARTIST" vs "Next Artist"; association name with/without "The".

## C. Visual evidence (live computed styles + 16 screenshots in ./screens/; raw dump in computed-styles.json)

**Spacing**: 25 distinct non-zero values (14 rem + 11 px), two unit systems mixed even within single declarations (`margin: 40px 15px` ActivityCard.scss:10; `padding: 1.1rem 16px` About.scss:29); near-duplicate steps (15/16px/1rem; 1.1/1.2/1.3rem; 40px/2.5rem). **No spacing tokens exist** — `_variables.scss` holds only 6 color tokens.

**Type**: 45 font-size declarations; **38 (84%) bypass the four `_fonts.scss` tokens**; `$medium-font` and `$large-font` are defined but never referenced; hardcoded literals duplicate token values (26px ×7, 30px ×2, 34px, 18px ×3). 20 distinct sizes total (17 px steps + 3 rem overlapping none of them). One `!important` size override (About.scss:52). Computed: **h1 (34px/400) and h2 (34px/500) render at the same size**; body font-size is UA-default 16px (never set). **Buttons compute `font-family: Arial`** — Jost is set on `html, body` only and does not inherit into `<button>`; `.contact-button` and `.close-btn` render off-brand (computed-styles.json).

**Color**: 22 unique literals (13 opaque + 9 alpha) vs 4 distinct token values; `#0d1114` appears raw twice bypassing its token; `rgba(204,167,82,.5)` hardcodes the gold's RGB instead of `rgba($main-color,.5)` (Footer.scss:30); one-off accents `#e4c988`, `#ffd057`, `#484848`, `#333`, `gray`.

**Contrast (computed)**: primary text strong — #aeb0bc on #06080a = 9.30, gold on dark = 8.80, button text 12.52. Weak: `gray` close-btn on sidebar 4.80 (AA normal-text pass, barely); **button hover = white on gold 2.28 (AA fail)**; scrollbar thumb 2.07 (non-text). Three text blocks sit on photographic backgrounds (about text on heart.jpg, contact email/location on stars webp, intro over star png) — image-dependent contrast.

**States**: empty **missing** (static data, arguably n/a) · loading **partial** (LazyVideo placeholder, course poster; no route loading.tsx, no image blur placeholders) · error **missing** (no error.tsx/not-found.tsx) · success **n/a** (no forms) · **focus: zero `:focus`/`:focus-visible` rules in all SCSS — UA default ring only**, though JS focus management exists (modal autofocus, Escape handlers, sidebar tabIndex −1) · disabled n/a. Hover/active states present throughout.

**Incidental**: desktop contact title clips under the fixed navbar when scrolled by browser default (no CSS `scroll-margin` — only react-scroll offsets compensate); empty media query (MediaIcons.scss:48-50); duplicated mobile block in Gallery.scss; `//Needs rework` comment Gallery.scss:5; body text color never set globally (per-element only).

## D. Accessibility evidence (live keyboard walk, 1280×800, /bg)

**Contrast correction**: every text pair actually rendered computes ≥4.5:1 AA (modal close is #aeb0bc on #333 = 5.86, not gray; sidebar gray close 4.80 at 30px = large-text pass). The visual agent's 2.28 hover-fail (white on gold) stands as the one failing state.

**Keyboard reachability**: all 7 nav targets, intro CTA, carousel prev/next, certificate + gallery lightboxes (open via Enter, close via Escape), scroll-to-top, 12 social links — **all verified operable**. **Exception: the language switcher is keyboard-inoperable and absent from the accessibility tree** — input is `display:none` (Switcher.scss:10-12), label `aria-hidden` (Switcher.tsx:28); mouse/touch-only despite its aria-label.

**Focus order**: logical top-to-bottom, no invisible stops; hidden sidebar/scroll-top correctly excluded via tabIndex −1. But **59 tabbable elements at rest**, including all **23 gallery slides** (tabindex=0 even offscreen in the Swiper loop) and 3 native `<video controls>` consuming stops 23–30. **No skip link** (grep + DOM confirmed). **Zero `:focus-visible` styling** — UA default rings only.

**Modal**: `role=dialog aria-modal=true` + initial focus + Escape work, but **no focus trap** (Tab exits the open dialog) and **focus not restored to trigger on close** (lands on BODY).

**Landmarks/headings**: 5 landmarks (header, 2 unnamed navs, main, footer); no section aria-labels; courses `id` sits on the h2 itself (no wrapper). Heading outline clean: one h1, 14 headings, **no level skips**; duplicate "Галерия" text at h3 (About carousel) and h2 (Gallery).

**Reduced motion**: gated in exactly 3 places (globals scroll-behavior, About ScrollTrigger guard, Intro guard). **Not gated**: 2 infinite Lottie loops (Contact mic, scroll-top icon), CSS fadeIn, Swiper transitions, autoplay looped video (ActivityCard), 3D-carousel 1.5s transition, and all JS smooth-scrolling (react-scroll + window.scrollTo bypass the CSS media query).

**Localization of accessible names**: English-only on the bg page — "Image preview"/"Full size view"/"Close", "Previous"/"Next", "Back to top", sidebar social labels.
