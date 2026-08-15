# Audit Scope — iskravocal.com portfolio UI

- **Audited artifact**: the single-page portfolio in this repo (`c:\Users\andre\Desktop\artist-portfolio`), current committed state (post performance/a11y fix sweep, 2026-08-15). Live-rendered via the dev server at `http://localhost:3000/bg` and `/en`. Production equivalent: https://iskravocal.com.
- **Surfaces**: Navbar (desktop + mobile sidebar), Intro, About (+ 3D moments carousel), Activities, Courses, Gallery (Swiper coverflow), Certificates, Contact, Footer, image lightbox modal, language switcher.
- **Primary user**: prospective vocal students (and parents of young singers) in Bulgaria, plus international/industry contacts; Bulgarian is the default locale.
- **Primary task**: assess Iskra's credibility as a vocal/artist coach and initiate contact (email or social profile).
- **Constraints**: existing brand — gold `#cca752` on near-black `#06080a`, Jost body + Eyesome script logo; Next.js 14 + SCSS stack; solo-maintained.
- **Input materials**: source code, live dev-server screenshots, production build stats from this session.
