/* ==========================================================================
   Portfolio — renderer and interactions.
   Reads window.PORTFOLIO (data/portfolio.js) and builds the page from it.
   No dependencies, no build step.
   ========================================================================== */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  if (!D || !D.profile) return;
  const P = D.profile;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const root = document.documentElement;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Text helpers ---------- */

  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);
  // *word* becomes an italic accent. Everything else is escaped.
  const fmt = (s) => esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const plain = (s) => String(s == null ? "" : s).replace(/\*/g, "");
  const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const pad2 = (n) => String(n).padStart(2, "0");
  const initials = (name) =>
    String(name || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");

  /* ---------- Colour helpers ----------
     Project colours are used as text and glow on a near-black page, so a
     dark brand colour is lightened until it reads. */

  const BG = [7, 8, 11];

  function toRgb(hex) {
    let h = String(hex || "").trim().replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    if (!/^[0-9a-f]{6}$/i.test(h)) return null;
    const n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function luminance(rgb) {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]);
  }

  function contrast(a, b) {
    const la = luminance(a);
    const lb = luminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  const toHex = (rgb) => "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("");

  function readable(hex, fallback) {
    let rgb = toRgb(hex) || toRgb(fallback) || [255, 180, 84];
    for (let i = 0; i < 24 && contrast(rgb, BG) < 5.5; i++) {
      rgb = rgb.map((v) => Math.round(v + (255 - v) * 0.12));
    }
    return toHex(rgb);
  }

  const onColor = (hex) => (luminance(toRgb(hex) || BG) > 0.4 ? "#0a0b0e" : "#ffffff");

  /* ---------- Icons (inline SVG, stroke follows text colour) ---------- */

  const svg = (body) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

  const ICON = {
    arrow: svg('<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'),
    down: svg('<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    copy: svg('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'),
    github: svg(
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
    ),
    linkedin: svg(
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
    ),
    appstore: svg(
      '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>'
    ),
    play: svg('<path d="m6 3 14 9-14 9V3z"/>'),
    web: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"/>'),
  };

  /* ---------- Data ---------- */

  const accent = readable((D.theme && D.theme.accent) || "#ffb454");
  root.style.setProperty("--accent", accent);

  const projects = list(D.projects)
    .filter((p) => p && !p.hidden)
    .map((p) => {
      const tone = readable(p.color, accent);
      return Object.assign({}, p, {
        tone,
        splash: toRgb(p.splash) ? p.splash : p.color || "#14161c",
      });
    });

  const featured = projects.filter((p) => p.featured !== false);
  const archive = projects.filter((p) => p.featured === false);
  const hooks = projects.filter((p) => p.hook);
  const deck = featured.filter((p) => p.type === "mobile").slice(0, 4);

  /* ---------- Mock-ups ---------- */

  function phone(p) {
    const shots = list(p.screens);
    const inner = shots.length
      ? `<div class="phone__shots">${shots
          .map(
            (src, i) =>
              `<img src="${esc(src)}" alt="${i === 0 ? esc(p.name + " app screenshot") : ""}" loading="lazy" decoding="async"${i === 0 ? ' class="is-on"' : ""}>`
          )
          .join("")}</div>`
      : `<div class="splash">
           <span class="splash__ring"></span>
           ${
             p.icon
               ? `<img class="splash__icon${p.iconPlain ? " splash__icon--plain" : ""}" src="${esc(p.icon)}" alt="" width="384" height="384" loading="lazy" decoding="async">`
               : `<span class="splash__mono">${esc(initials(p.name))}</span>`
           }
           <span class="splash__name">${esc(p.name)}</span>
         </div>`;

    return `<div class="phone" style="--c:${p.tone};--splash:${esc(p.splash)};--on:${onColor(p.splash)}" role="img" aria-label="${esc(p.name)} on a phone">
      <div class="phone__screen">
        <span class="phone__island"></span>
        ${shots.length ? "" : '<div class="phone__status" aria-hidden="true"><span>9:41</span><i></i></div>'}
        ${inner}
        <span class="phone__glare"></span>
      </div>
    </div>`;
  }

  function terminal(p) {
    const lines = list(p.terminal).map((l) => (typeof l === "string" ? { kind: "out", text: l } : l));
    return `<div class="term" style="--c:${p.tone}" role="img" aria-label="${esc(p.name)} in a terminal">
      <div class="term__bar"><i></i><i></i><i></i><span>${esc(p.terminalTitle || p.name)}</span></div>
      <pre class="term__body">${lines
        .map((l, i) => {
          const last = i === lines.length - 1 ? " term__caret" : "";
          return `<span class="term__${esc(l.kind || "out")}${last}">${esc(l.text)}</span>`;
        })
        .join("")}</pre>
    </div>`;
  }

  function hostOf(url) {
    try {
      return new URL(url).host.replace(/^www\./, "");
    } catch (e) {
      return "";
    }
  }

  function browser(p) {
    const shot = list(p.screens)[0];
    const site = list(p.links).find((l) => l.kind === "web");
    return `<div class="browser" style="--c:${p.tone}">
      <div class="browser__bar"><i></i><i></i><i></i><span>${esc((site && hostOf(site.url)) || p.name)}</span></div>
      <div class="browser__view">${
        shot
          ? `<img src="${esc(shot)}" alt="${esc(p.name)} screenshot" loading="lazy" decoding="async">`
          : `<div class="browser__ph">${esc(p.name)}</div>`
      }</div>
    </div>`;
  }

  const mockup = (p) => (p.type === "mobile" ? phone(p) : p.type === "web" ? browser(p) : terminal(p));

  /* ---------- Small render pieces ---------- */

  const chips = (items) =>
    list(items).length ? `<ul class="chips">${list(items).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : "";

  function linkButtons(links, solidFirst) {
    const items = list(links).filter((l) => l && l.url);
    if (!items.length) return "";
    return `<div class="links">${items
      .map(
        (l, i) =>
          `<a class="btn ${solidFirst && i === 0 ? "btn--solid" : "btn--ghost"}" href="${esc(l.url)}" target="_blank" rel="noopener" data-magnet>${ICON[l.kind] || ICON.web}<span>${esc(l.label)}</span><span class="sr-only"> (opens in a new tab)</span></a>`
      )
      .join("")}</div>`;
  }

  const sectionHead = (idx, title, text) => `
    <header class="shead" data-lines>
      <span class="mono">(${idx})</span>
      <h2><span class="mask"><span>${fmt(title)}</span></span></h2>
      ${text ? `<p data-reveal style="--d:.15s">${esc(text)}</p>` : ""}
    </header>`;

  // Split a headline into two visual lines of similar length.
  function twoLines(text) {
    const words = String(text || "").trim().split(/\s+/);
    if (words.length < 3) return [words.join(" ")];
    const total = words.join(" ").length;
    let best = 1;
    let bestDiff = Infinity;
    for (let i = 1; i < words.length; i++) {
      const diff = Math.abs(words.slice(0, i).join(" ").length - total / 2);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = i;
      }
    }
    return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
  }

  /* ---------- Nav ---------- */

  const NAV = [
    ["work", "Work"],
    ["about", "About"],
    ["stack", "Toolbox"],
    ["contact", "Contact"],
  ];

  $("#nav").innerHTML =
    `<a class="nav__brand" href="#top" aria-label="${esc(P.name)}, back to top">${esc(P.initials || initials(P.name))}</a>` +
    NAV.map(([id, label]) => `<a class="nav__link" href="#${id}" data-nav="${id}">${label}</a>`).join("");

  /* ---------- Hero ---------- */

  const heroLines = twoLines(P.headline || "");
  const srHeadline =
    (P.headline || "") + (hooks.length ? " " + hooks.map((h) => plain(h.hook).replace(/\.$/, "")).join(", ") + "." : "");

  $("#top").innerHTML = `
    <div class="hero__copy" data-lines>
      <p class="hero__eyebrow mono" data-reveal><span class="pulse"></span><b>${esc(P.name)}</b><span>${esc(
        [P.role, P.location].filter(Boolean).join(" · ")
      )}</span></p>
      <h1 class="hero__title">
        <span class="sr-only">${esc(srHeadline)}</span>
        <span aria-hidden="true">
          ${heroLines.map((l, i) => `<span class="mask" style="--d:${0.05 + i * 0.09}s"><span>${esc(l)}</span></span>`).join("")}
          ${
            hooks.length
              ? `<span class="mask" style="--d:${0.05 + heroLines.length * 0.09}s"><span class="rot">${hooks
                  .map((h, i) => `<em style="--t:${h.tone}"${i === 0 ? ' class="is-on"' : ""}>${esc(h.hook)}</em>`)
                  .join("")}</span></span>`
              : ""
          }
        </span>
      </h1>
      ${P.lede ? `<p class="hero__lede" data-reveal style="--d:.35s">${esc(P.lede)}</p>` : ""}
      <div class="hero__cta" data-reveal style="--d:.45s">
        <a class="btn btn--solid" href="#work" data-magnet><span>See the work</span>${ICON.down}</a>
        <a class="btn btn--ghost" href="#contact" data-magnet><span>Get in touch</span>${ICON.arrow}</a>
      </div>
    </div>
    ${
      deck.length
        ? `<div class="deck" data-reveal style="--d:.25s" aria-hidden="true"><div class="deck__tilt">${deck
            .map(
              (p, i) =>
                `<div class="deck__item" data-id="${esc(p.id)}" style="--p:${i};z-index:${deck.length - i}">${phone(p)}</div>`
            )
            .join("")}</div></div>`
        : ""
    }
    <div class="hero__foot" data-reveal style="--d:.55s">
      ${
        list(P.stats).length
          ? `<dl class="stats">${P.stats
              .map((s) => `<div><dt class="mono">${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`)
              .join("")}</dl>`
          : "<span></span>"
      }
      <a class="scrollhint mono" href="#work"><i></i>Scroll</a>
    </div>`;

  /* ---------- Marquee ---------- */

  const marqueeItems = list(P.marquee).length
    ? P.marquee
    : list(P.toolbox)
        .flatMap((g) => list(g.items).slice(0, 4))
        .slice(0, 16);

  if (marqueeItems.length) {
    const track = (hidden) =>
      `<ul class="marquee__track"${hidden ? ' aria-hidden="true"' : ""}>${marqueeItems.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
    $("#marquee").innerHTML = `<div class="marquee" aria-label="Technologies">${track(false)}${track(true)}</div>`;
  }

  /* ---------- Work ---------- */

  function chapter(p, i, total) {
    const summary = list(p.summary);
    const meta = list(p.meta).filter((m) => m && m.value);
    const highlights = list(p.highlights);
    const engineering = list(p.engineering);
    const badges = list(p.badges).slice(0, 3);

    return `
    <article class="chapter${i % 2 ? " chapter--flip" : ""}" id="p-${esc(p.id)}" data-tone="${p.tone}" style="--c:${p.tone}">
      <header class="chapter__head" data-lines>
        <p class="chapter__kicker mono"><b>${pad2(i + 1)}</b><i></i><span>${pad2(total)}</span>${
          p.group ? `<span>${esc(p.group)}</span>` : ""
        }</p>
        <h3 class="chapter__title"><span class="mask"><span>${fmt(p.title || p.name)}</span></span></h3>
        ${p.nameAr ? `<span class="chapter__ghost" lang="ar" dir="rtl" aria-hidden="true">${esc(p.nameAr)}</span>` : ""}
        ${p.tagline ? `<p class="chapter__tagline" data-reveal style="--d:.15s">${esc(p.tagline)}</p>` : ""}
      </header>
      <div class="chapter__body">
        <div class="chapter__text">
          ${summary.map((s) => `<p class="chapter__summary" data-reveal>${esc(s)}</p>`).join("")}
          ${
            meta.length
              ? `<dl class="meta" data-reveal>${meta
                  .map((m) => `<div><dt class="mono">${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`)
                  .join("")}</dl>`
              : ""
          }
          ${
            highlights.length
              ? `<ol class="hl" data-reveal>${highlights
                  .map((h) => `<li><b>${esc(h.title)}</b><span>${esc(h.text)}</span></li>`)
                  .join("")}</ol>`
              : ""
          }
          ${
            engineering.length
              ? `<div class="hood" data-reveal><h4 class="mono">Under the hood</h4><ul>${engineering
                  .map((e) => `<li>${esc(e)}</li>`)
                  .join("")}</ul></div>`
              : ""
          }
          <div data-reveal>${chips(p.stack)}</div>
          <div data-reveal>${linkButtons(p.links, true)}</div>
        </div>
        <div class="chapter__visual">
          <div class="stage" data-reveal>
            <i class="stage__orbit" aria-hidden="true"></i>
            <div class="stage__tilt">${mockup(p)}</div>
            ${badges.map((b) => `<span class="badge">${esc(b)}</span>`).join("")}
          </div>
        </div>
      </div>
    </article>`;
  }

  function archiveRow(p, n) {
    return `
    <details class="row" style="--c:${p.tone}" data-reveal>
      <summary>
        <span class="mono row__idx">${pad2(n)}</span>
        <span class="row__name">${esc(p.name)}</span>
        <span class="row__plus" aria-hidden="true"></span>
        ${p.tagline ? `<span class="row__tag">${esc(p.tagline)}</span>` : ""}
        ${p.year ? `<span class="mono row__year">${esc(p.year)}</span>` : ""}
      </summary>
      <div class="row__body">
        ${list(p.summary).map((s) => `<p>${esc(s)}</p>`).join("")}
        ${chips(p.stack)}
        ${linkButtons(p.links, false)}
      </div>
    </details>`;
  }

  $("#work").innerHTML = `
    <div class="wrap">
      ${sectionHead("01", "Selected *work*", "Products I have worked on with their teams, from healthcare to travel.")}
      ${featured.map((p, i) => chapter(p, i, featured.length)).join("")}
      ${
        archive.length
          ? `<div class="archive"><h3 class="mono" data-reveal>More work</h3>${archive
              .map((p, i) => archiveRow(p, featured.length + i + 1))
              .join("")}</div>`
          : ""
      }
    </div>`;

  /* ---------- About ---------- */

  // Wrap every word so the paragraph can light up as it is scrolled through.
  function wordSpans(text) {
    let em = false;
    return String(text || "")
      .trim()
      .split(/\s+/)
      .map((word) => {
        const html = word
          .split("*")
          .map((part, i) => {
            if (i > 0) em = !em;
            if (!part) return "";
            return em ? `<em>${esc(part)}</em>` : esc(part);
          })
          .join("");
        return `<span class="w">${html}</span>`;
      })
      .join(" ");
  }

  const experience = list(P.experience);

  $("#about").innerHTML = `
    <div class="wrap">
      ${sectionHead("02", "About *me*", "")}
      ${P.statement ? `<p class="about__statement" aria-label="${esc(plain(P.statement))}"><span aria-hidden="true">${wordSpans(P.statement)}</span></p>` : ""}
      ${
        list(P.capabilities).length
          ? `<div class="cards">${P.capabilities
              .map(
                (c, i) =>
                  `<article class="card" data-reveal style="--d:${i * 0.07}s"><span class="mono">${pad2(i + 1)}</span><h3>${esc(
                    c.title
                  )}</h3><p>${esc(c.text)}</p></article>`
              )
              .join("")}</div>`
          : ""
      }
      ${
        experience.length
          ? `<ol class="timeline">${experience
              .map(
                (e) =>
                  `<li data-reveal><span class="mono">${esc(e.period)}</span><div><b>${esc(e.role)}</b><p>${esc(
                    e.company
                  )}</p></div>${e.text ? `<p>${esc(e.text)}</p>` : "<span></span>"}</li>`
              )
              .join("")}</ol>`
          : ""
      }
    </div>`;

  /* ---------- Toolbox ---------- */

  const toolbox = list(P.toolbox);
  if (toolbox.length) {
    $("#stack").innerHTML = `
      <div class="wrap">
        ${sectionHead("03", "Tool*box*", "What I reach for most. The list follows the work, not the other way round.")}
        <div>${toolbox
          .map((g) => `<div class="stackrow" data-reveal><h3>${esc(g.title)}</h3>${chips(g.items)}</div>`)
          .join("")}</div>
      </div>`;
  } else {
    $("#stack").remove();
    const link = $('[data-nav="stack"]');
    if (link) link.remove();
  }

  /* ---------- Contact + footer ---------- */

  const contact = P.contact || {};
  const socials = list(P.links).filter((l) => l && l.url);

  $("#contact").innerHTML = `
    <div class="wrap">
      <div data-lines>
        <p class="mono" data-reveal>(04) Contact</p>
        <h2 class="contact__title"><span class="mask"><span>${fmt(contact.title || "Let's *talk.*")}</span></span></h2>
      </div>
      <div class="contact__row" data-reveal style="--d:.15s">
        ${P.email ? `<a class="contact__mail" href="mailto:${esc(P.email)}">${esc(P.email)}</a>` : ""}
        ${contact.note ? `<p class="contact__note">${esc(contact.note)}</p>` : ""}
      </div>
      <div class="socials" data-reveal style="--d:.25s">
        ${P.email ? `<button class="btn btn--solid" type="button" data-copy="${esc(P.email)}" data-magnet>${ICON.copy}<span>Copy email</span></button>` : ""}
        ${socials
          .map(
            (l) =>
              `<a class="btn btn--ghost" href="${esc(l.url)}" target="_blank" rel="noopener me" data-magnet>${ICON[l.kind] || ICON.web}<span>${esc(
                l.label
              )}</span><span class="sr-only"> (opens in a new tab)</span></a>`
          )
          .join("")}
      </div>
    </div>`;

  $("#footer").innerHTML = `
    <div class="wrap footer mono">
      <span>© ${new Date().getFullYear()} ${esc(P.fullName || P.name)}</span>
      ${P.location ? `<span>${esc(P.location)}</span>` : ""}
      <a href="#top">Back to top ↑</a>
    </div>`;

  document.title = `${P.name} — ${P.role}`;

  /* ==========================================================================
     Interactions
     ========================================================================== */

  /* Reveal on scroll */
  const revealables = $$("[data-reveal], [data-lines]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  }

  /* Page colour follows whichever [data-tone] block crosses the middle of the screen */
  const hero = $("#top");
  hero.dataset.tone = hooks.length ? hooks[0].tone : accent;
  ["about", "stack", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.dataset.tone = accent;
  });

  let toneOwner = hero;
  const setTone = (c) => root.style.setProperty("--tone", c);
  setTone(hero.dataset.tone);

  if ("IntersectionObserver" in window) {
    const toneIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            toneOwner = en.target;
            setTone(en.target.dataset.tone);
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    $$("[data-tone]").forEach((el) => toneIO.observe(el));

    const navLinks = $$("[data-nav]");
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((a) => {
            const on = a.dataset.nav === en.target.id;
            a.classList.toggle("is-active", on);
            if (on) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    ["work", "about", "stack", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) navIO.observe(el);
    });
    // Back in the hero: no section is current.
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          navLinks.forEach((a) => {
            a.classList.remove("is-active");
            a.removeAttribute("aria-current");
          });
        }
      },
      { rootMargin: "-48% 0px -48% 0px" }
    ).observe(hero);
  }

  /* Hero: rotating phrase, with the matching phone coming to the front */
  const rotItems = $$(".rot em");
  const deckItems = $$(".deck__item");
  let hookIndex = 0;

  function frontPhone(id) {
    const n = deckItems.length;
    const front = deckItems.findIndex((el) => el.dataset.id === id);
    if (front < 0) return;
    deckItems.forEach((el, i) => {
      const p = (i - front + n) % n;
      el.style.setProperty("--p", p);
      el.style.zIndex = String(n - p);
    });
  }

  function showHook(next) {
    if (next === hookIndex) return;
    const prev = rotItems[hookIndex];
    const cur = rotItems[next];
    prev.classList.remove("is-on");
    prev.classList.add("is-out");
    setTimeout(() => prev.classList.remove("is-out"), 700);
    cur.classList.add("is-on");
    hookIndex = next;
    hero.dataset.tone = hooks[next].tone;
    if (toneOwner === hero) setTone(hooks[next].tone);
    frontPhone(hooks[next].id);
  }

  if (rotItems.length > 1 && !reduceMotion) {
    setInterval(() => {
      if (document.hidden || toneOwner !== hero) return;
      showHook((hookIndex + 1) % rotItems.length);
    }, 2800);
  }

  /* Scroll-linked: progress bar and the About paragraph lighting up */
  const statement = $(".about__statement");
  const words = statement ? $$(".w", statement) : [];
  if (reduceMotion) words.forEach((w) => w.classList.add("on"));

  let ticking = false;
  function onScroll() {
    ticking = false;
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty("--sp", max > 0 ? (scrollY / max).toFixed(4) : "0");

    if (statement && !reduceMotion) {
      const r = statement.getBoundingClientRect();
      const start = innerHeight * 0.85;
      const end = innerHeight * 0.35;
      const t = (start - r.top) / (r.height + start - end);
      const lit = Math.round(Math.min(1, Math.max(0, t)) * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    }
  }
  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  addEventListener("resize", onScroll);
  onScroll();

  /* Screenshots cycle inside a phone */
  $$(".phone__shots").forEach((box) => {
    const imgs = $$("img", box);
    if (imgs.length < 2 || reduceMotion) return;
    let i = 0;
    setInterval(() => {
      if (document.hidden) return;
      imgs[i].classList.remove("is-on");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("is-on");
    }, 3200);
  });

  /* Copy email */
  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = $("span", btn);
      const done = (ok) => {
        label.textContent = ok ? "Copied" : "Copy failed";
        setTimeout(() => (label.textContent = "Copy email"), 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(btn.dataset.copy).then(
          () => done(true),
          () => done(false)
        );
      } else {
        done(false);
      }
    });
  });

  /* Pointer-only flourishes: tilt, spotlight, magnetic buttons, cursor ring */
  if (finePointer && !reduceMotion) {
    const tilt = (area, target, strength) => {
      if (!area || !target) return;
      area.addEventListener("pointermove", (e) => {
        const r = area.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        target.style.setProperty("--ry", (x * strength).toFixed(2) + "deg");
        target.style.setProperty("--rx", (-y * strength).toFixed(2) + "deg");
      });
      area.addEventListener("pointerleave", () => {
        target.style.setProperty("--ry", "0deg");
        target.style.setProperty("--rx", "0deg");
      });
    };

    tilt(hero, $(".deck__tilt"), 10);
    $$(".stage").forEach((stage) => tilt(stage, $(".stage__tilt", stage), 14));

    $$(".card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });

    $$("[data-magnet]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${(x * 0.22).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });

    const ring = document.createElement("div");
    ring.className = "cursor";
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(ring);

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let running = false;

    const follow = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      ring.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) requestAnimationFrame(follow);
      else running = false;
    };

    addEventListener(
      "pointermove",
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
        if (!ring.classList.contains("is-on")) {
          cx = tx;
          cy = ty;
          ring.classList.add("is-on");
        }
        ring.classList.toggle("is-hover", !!e.target.closest("a, button, summary, .card"));
        if (!running) {
          running = true;
          requestAnimationFrame(follow);
        }
      },
      { passive: true }
    );
    document.addEventListener("pointerleave", () => ring.classList.remove("is-on"));
  }
})();
