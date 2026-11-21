/* Builds the page from data.js. You normally do not need to edit this file. */
{
  const S = window.SITE || {};
  const P = S.profile || {};
  const $ = id => document.getElementById(id);
  const map = (a, f) => (a || []).map(f).join("");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICON = {
    chart: '<svg viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="m7 15 4-5 3 3 5-7"/></svg>',
    field: '<svg viewBox="0 0 24 24"><path d="M3 20h18M6 20V10m6 10V6m6 14v-8"/><path d="M6 10c-2 0-3-1.5-3-3 2 0 3 1.5 3 3zm0 0c0-1.5 1-3 3-3 0 1.5-1 3-3 3zm6-4c-2 0-3-1.5-3-3 2 0 3 1.5 3 3zm0 0c0-1.5 1-3 3-3 0 1.5-1 3-3 3zm6 6c-2 0-3-1.5-3-3 2 0 3 1.5 3 3zm0 0c0-1.5 1-3 3-3 0 1.5-1 3-3 3z"/></svg>',
    code: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M9 9l-2 2 2 2m6-4 2 2-2 2"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>'
  };
  const BADGE = l => /scholar/i.test(l) ? "GS" : /orcid/i.test(l) ? "iD" : /researchgate/i.test(l) ? "RG" : /linkedin/i.test(l) ? "in" : /github/i.test(l) ? "GH" : l.slice(0, 2);

  /* ---------- profile ---------- */
  ["p-photo", "top-photo"].forEach(id => $(id).src = P.photo || "");
  $("top-name").textContent = P.name || "";
  $("top-title").textContent = P.title || "";
  $("p-name").textContent = P.name || "";
  $("p-role").textContent = P.role || P.title || "";
  $("p-aff").textContent = P.affiliation || "";
  $("p-loc").textContent = P.location || "";
  $("p-badges").innerHTML = map(P.badges, b => `<span class="badge">${b}</span>`);
  [$("p-email"), $("c-mail")].forEach(a => { a.textContent = P.email || ""; a.href = "mailto:" + (P.email || ""); });
  $("p-links").innerHTML = `<a class="plink" href="mailto:${P.email}"><i>@</i>Email</a>` +
    map(S.links, l => `<a class="plink" href="${l.url}" target="_blank" rel="noopener"><i>${BADGE(l.label)}</i>${l.label}</a>`);
  if (P.cv) $("cv-btn").href = P.cv; else $("cv-btn").remove();
  $("bio").innerHTML = map(P.bio, p => `<p>${p}</p>`);
  $("interests").innerHTML = map(S.interests, i => `<li>${i}</li>`);
  $("foot-name").textContent = P.name || "";
  $("foot-year").textContent = new Date().getFullYear();

  /* ---------- timelines ---------- */
  const tl = (el, items, f) => {
    el.innerHTML = map(items, (x, i) => `<li><div class="when">${f.when(x) || ""}</div><span class="dot"></span><div>${f.body(x)}</div></li>`);
    const lim = +el.dataset.limit;
    if (lim && items && items.length > lim) {
      [...el.children].forEach((li, i) => { if (i >= lim) li.classList.add("more"); });
      const b = document.createElement("button");
      b.className = "seeall"; b.type = "button"; b.textContent = `See all (${items.length})`;
      b.addEventListener("click", () => { const o = el.classList.toggle("open"); b.textContent = o ? "Show less" : `See all (${items.length})`; });
      el.after(b);
    }
  };
  tl($("edu-list"), S.education, {
    when: x => x.period,
    body: x => `<h3>${x.degree}</h3><p class="org">${x.institution}</p>${x.details ? `<p class="d">${x.details}</p>` : ""}${x.grade ? `<span class="pill">${x.grade}</span>` : ""}`
  });
  tl($("exp-list"), S.experience, {
    when: x => x.period,
    body: x => `<h3>${x.role}</h3><p class="org">${x.org}</p>${x.details ? `<p class="d">${x.details}</p>` : ""}`
  });
  tl($("train-list"), S.training, { when: x => x.year, body: x => `<h3>${x.title}</h3><p class="d">${x.org}</p>` });
  tl($("lead-list"), S.leadership, { when: x => x.period, body: x => `<h3>${x.role}</h3><p class="d">${x.org}</p>` });

  /* ---------- stats with count-up ---------- */
  $("stats").innerHTML = map(S.stats, s => `<div class="stat"><b data-v="${s.value}" data-s="${s.suffix || ""}">${reduce ? s.value + (s.suffix || "") : 0}</b><span>${s.label}</span></div>`);
  if (!reduce) {
    const countObs = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      countObs.disconnect();
      e.target.querySelectorAll("b").forEach(b => {
        const v = +b.dataset.v, t0 = performance.now();
        const step = t => { const k = Math.min(1, (t - t0) / 1100); b.textContent = Math.round(v * (1 - Math.pow(1 - k, 3))) + b.dataset.s; if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
    }), { threshold: .4 });
    countObs.observe($("stats"));
  }

  /* ---------- expertise ---------- */
  $("x-grid").innerHTML = map(S.expertise, x => `<article class="x">
    <div class="x-head"><span class="x-ico">${ICON[x.icon] || ICON.book}</span><div><h3>${x.title}</h3><small>${x.sub || ""}</small></div></div>
    <ul>${map(x.items, i => `<li>${i}</li>`)}</ul></article>`);

  /* ---------- publications ---------- */
  const pubs = S.publications || [];
  const isPub = p => /published/i.test(p.status);
  const groups = [["All", () => true], ["Published", isPub], ["In press", p => !isPub(p)]].filter(([, f]) => pubs.some(f));
  $("pub-tabs").innerHTML = map(groups, ([g, f], i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-g="${i}">${g}<span>${pubs.filter(f).length}</span></button>`);
  $("pub-list").innerHTML = map(pubs, (p, i) => `<li class="pub ${isPub(p) ? "" : "press"}" data-i="${i}">
    <div class="py">${p.year}</div>
    <div>
      <div class="ptop"><div class="ptags"><span class="st ${isPub(p) ? "" : "press"}">${p.status}</span>${p.badge ? `<span class="st q">${p.badge}</span>` : ""}</div>
        ${p.doi ? `<a class="doi" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi}${ICON.ext}</a>` : p.pdf ? `<a class="doi" href="${p.pdf}" target="_blank" rel="noopener">Read PDF${ICON.ext}</a>` : ""}</div>
      <h3>${p.title}</h3>
      <p class="pa">${(p.authors || "").replace("Pramanik, M. N. H.", "<b>Pramanik, M. N. H.</b>")}</p>
      <p class="pj">${p.journal}${p.details ? ` · ${p.details}` : ""}</p>
      ${p.summary ? `<details><summary>Key finding</summary><p>${p.summary}</p></details>` : ""}
    </div></li>`);
  $("pub-tabs").addEventListener("click", e => {
    const b = e.target.closest(".tab"); if (!b) return;
    const f = groups[+b.dataset.g][1];
    [...$("pub-tabs").children].forEach(t => t.setAttribute("aria-selected", t === b));
    [...$("pub-list").children].forEach(li => li.classList.toggle("hide", !f(pubs[+li.dataset.i])));
  });
  $("conf-list").innerHTML = map(S.conferences, c => `<li><span class="ic">${ICON.mic}</span><div><b>${c.title}</b><span><em>${c.date}</em> · ${c.event}</span></div></li>`);

  /* ---------- updates ticker ---------- */
  const news = S.news || [];
  const row = n => `<li><time>${n.date}</time><span>${n.text}</span></li>`;
  if (!reduce && news.length > 4) {
    $("news-list").innerHTML = map(news, row) + map(news, row).replace(/<li>/g, '<li aria-hidden="true">');
    $("ticker").classList.add("run");
    $("ticker").style.setProperty("--dur", news.length * 4.5 + "s");
    $("ticker").tabIndex = 0;
  } else {
    $("news-list").innerHTML = map(news, row);
    $("ticker").style.maxHeight = "none";
  }

  /* ---------- fieldwork cards with a small field-plot drawing ---------- */
  const plots = seed => {
    let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const c = ["#2f7a52", "#3b8758", "#4a9660", "#5fa566", "#7db56c", "#d9a62e", "#e4bf62", "#2a6b48"];
    let out = "", x = -10;
    while (x < 420) { const w = 40 + r() * 70; let y = -10; while (y < 130) { const h = 30 + r() * 50; out += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="${c[Math.floor(r() * c.length)]}" stroke="#173f2d" stroke-width="3"/>`; y += h; } x += w; }
    return `<svg viewBox="0 0 400 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g transform="rotate(-6 200 60)">${out}</g><path d="M-10 92 C 90 60, 170 120, 260 84 S 360 50, 420 70" stroke="#8fb9c0" stroke-width="16" fill="none"/></svg>`;
  };
  $("field-list").innerHTML = map(S.fieldwork, (f, i) => `<article class="fc">
    <div class="art">${(f.photos || []).length ? `<img src="${f.photos[0]}" alt="${f.title}, ${f.place}" loading="lazy">` : plots(11 + i * 37)}</div>
    <div class="tx"><span class="pl">${ICON.pin}${f.place}</span><h3>${f.title}</h3><p>${f.details}</p></div></article>`);

  /* ---------- gallery with filters and lightbox ---------- */
  const gal = S.gallery || [];
  const cats = ["All", ...new Set(gal.map(g => g.category).filter(Boolean))];
  if (gal.length) {
    $("gal-tabs").innerHTML = cats.length > 2 ? map(cats, (c, i) => `<button class="tab" aria-selected="${i === 0}" data-c="${c}">${c}</button>`) : "";
    $("gal-grid").innerHTML = map(gal, (g, i) => `<button class="gi" data-i="${i}" data-c="${g.category || ""}"><img src="${g.src}" alt="${g.title}" loading="lazy"><span>${g.title}</span></button>`);
  }
  $("gal-tabs").addEventListener("click", e => {
    const b = e.target.closest(".tab"); if (!b) return;
    [...$("gal-tabs").children].forEach(t => t.setAttribute("aria-selected", t === b));
    [...$("gal-grid").children].forEach(g => g.classList.toggle("hide", b.dataset.c !== "All" && g.dataset.c !== b.dataset.c));
  });
  const lb = $("lightbox");
  const closeLb = () => { lb.hidden = true; };
  $("gal-grid").addEventListener("click", e => {
    const b = e.target.closest(".gi"); if (!b) return;
    const g = gal[+b.dataset.i];
    $("lb-img").src = g.src; $("lb-img").alt = g.title; $("lb-cap").textContent = g.caption || g.title;
    lb.hidden = false; $("lb-close").focus();
  });
  $("lb-close").addEventListener("click", closeLb);
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeLb(); setMenu(false); } });

  /* ---------- awards + references ---------- */
  $("award-list").innerHTML = map(S.awards, a => `<div class="aw"><span class="ic">${ICON.award}</span><div>${a.year ? `<em>${a.year}</em>` : ""}<b>${a.title}</b><span>${a.org}</span></div></div>`);
  const initials = n => n.replace(/^(Prof\.|Dr\.|Md\.)\s*/g, "").replace(/(Prof\.|Dr\.)\s*/g, "").split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join("");
  if ((S.references || []).length) {
    $("ref-list").innerHTML = map(S.references, r => `<div class="ref"><div class="av">${initials(r.name)}</div><h3>${r.name}</h3><p>${r.title}</p><p>${r.org}</p>${r.email ? `<p><a href="mailto:${r.email}">${r.email}</a></p>` : ""}<span class="rel">${r.relation}</span></div>`);
  } else $("references").remove();

  /* ---------- blog ---------- */
  if (S.blog && S.blog.url) $("blog").innerHTML = `<h3>${S.blog.name}</h3><p>${S.blog.text}</p><a href="${S.blog.url}" target="_blank" rel="noopener">${S.blog.url.replace(/^https?:\/\//, "")} ↗</a>`;
  else $("blog").remove();

  /* ---------- contact form: opens the visitor's email app ---------- */
  $("c-form").addEventListener("submit", e => {
    e.preventDefault();
    const n = $("c-name").value.trim(), m = $("c-email").value.trim(), t = $("c-msg").value.trim(), note = $("c-note");
    if (!n || !t || !/^\S+@\S+\.\S+$/.test(m)) { note.textContent = "Please fill in your name, a valid email and a message."; note.classList.add("err"); return; }
    note.classList.remove("err");
    note.textContent = "Opening your email app… If nothing opens, write to " + P.email;
    location.href = `mailto:${P.email}?subject=${encodeURIComponent("Message from " + n)}&body=${encodeURIComponent(t + "\n\n— " + n + " (" + m + ")")}`;
  });

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  $("theme-btn").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* ---------- mobile menu + active section ---------- */
  const nav = $("nav"), mb = $("menu-btn");
  const setMenu = o => { nav.classList.toggle("open", o); mb.setAttribute("aria-expanded", o); };
  mb.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  const links = [...nav.querySelectorAll("a")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-35% 0px -60% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
}
