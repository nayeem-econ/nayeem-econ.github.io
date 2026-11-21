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
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>',
    cert: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9h10M7 12.5h6"/><circle cx="17" cy="17" r="3"/><path d="m15.5 19.5-.5 2.5 2-1 2 1-.5-2.5"/></svg>'
  };
  const MAIL = '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/></svg>';
  const LINKS = (S.links || []).filter(l => l.url);
  /* small coloured icons for the profile buttons */
  const LI = {
    email:   ["#e5545a", '<path d="M3 6h18v12H3z"/><path d="m3.5 6.5 8.5 7 8.5-7"/>'],
    scopus:  ["#f0892b", '<path d="M6 3h9l4 4v14H6z"/><circle cx="11.5" cy="13" r="3"/><path d="m14 15.5 2.5 2.5"/>'],
    wos:     ["#d9a52b", '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17"/>'],
    scholar: ["#4a7fe0", '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>'],
    rg:      ["#16b3a3", '<circle cx="6" cy="7" r="2.2"/><circle cx="18" cy="7" r="2.2"/><circle cx="12" cy="17" r="2.2"/><path d="M8 8l3 7m5-7-3 7M8.2 7h7.6"/>'],
    orcid:   ["#8cbf2f", '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7.5 10v5M7.5 8v.01M11 10v5h2.5a2.5 2.5 0 0 0 0-5z"/>'],
    linkedin:["#2f73c9", '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>'],
    github:  ["#5c6670", '<path d="m8 8-4 4 4 4m8-8 4 4-4 4M13.5 6l-3 12"/>']
  };
  const KEY = l => /scopus/i.test(l) ? "scopus" : /web of science/i.test(l) ? "wos" : /scholar/i.test(l) ? "scholar" : /orcid/i.test(l) ? "orcid" : /researchgate/i.test(l) ? "rg" : /linkedin/i.test(l) ? "linkedin" : /github/i.test(l) ? "github" : "email";
  const lico = k => `<span class="li" style="--c:${LI[k][0]}"><svg viewBox="0 0 24 24">${LI[k][1]}</svg></span>`;
  const certBtn = (src, cap, label = "View certificate") => src ? `<button type="button" class="vbtn" data-img="${src}" data-cap="${cap.replace(/"/g, "&quot;")}">${ICON.cert}${label}</button>` : "";

  /* ---------- profile ---------- */
  ["p-photo", "top-photo", "f-photo"].forEach(id => $(id).src = P.photo || "");
  $("top-name").textContent = P.name || "";
  $("top-title").textContent = P.title || "";
  $("p-name").textContent = P.name || "";
  $("p-role").textContent = P.role || P.title || "";
  $("p-loc").textContent = P.location || "";
  $("p-badges").innerHTML = map(P.badges, b => `<span class="badge">${b}</span>`);
  if (P.honour) $("p-honour").innerHTML = `<span class="hi">${ICON.award}</span><div><b>${P.honour.title}</b><span>${P.honour.place}</span></div>`;
  else $("p-honour").remove();
  [$("p-email"), $("c-mail")].forEach(a => { a.textContent = P.email || ""; a.href = "mailto:" + (P.email || ""); });
  const linkBtns = `<a class="plink" href="mailto:${P.email}">${lico("email")}Email</a>` +
    map(LINKS, l => `<a class="plink" href="${l.url}" target="_blank" rel="noopener">${lico(KEY(l.label))}${l.label}</a>`);
  $("p-links").innerHTML = linkBtns;
  if (P.cv) $("cv-btn").href = P.cv; else $("cv-btn").remove();
  $("bio").innerHTML = map(P.bio, p => `<p>${p}</p>`);
  $("interests").innerHTML = map(S.interests, i => `<li>${i}</li>`);

  /* footer */
  $("f-name").textContent = P.name || "";
  $("f-name2").textContent = P.copyrightName || P.name || "";
  if (P.copyrightLink) $("f-name2").href = P.copyrightLink; else $("f-name2").removeAttribute("href");
  $("f-role").textContent = (P.role || "") + (P.affiliation ? " · " + P.affiliation : "");
  $("f-year").textContent = new Date().getFullYear();
  $("f-links").innerHTML = map(LINKS.filter(l => l.footer !== false), l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`);

  /* "See all" helper */
  const limit = (el, n, total) => {
    if (!n || total <= n) return;
    [...el.children].forEach((c, i) => { if (i >= n) c.classList.add("more"); });
    const b = document.createElement("button");
    b.className = "seeall"; b.type = "button"; b.textContent = `See all (${total})`;
    b.addEventListener("click", () => { const o = el.classList.toggle("open"); b.textContent = o ? "Show less" : `See all (${total})`; });
    el.after(b);
  };

  /* ---------- education ---------- */
  $("edu-list").innerHTML = map(S.education, x => `<li><div class="when">${x.period || ""}</div><span class="dot"></span><div>
    <h3>${x.degree}</h3><p class="org">${x.institution}</p>${x.details ? `<p class="d">${x.details}</p>` : ""}${x.grade ? `<span class="pill">${x.grade}</span>` : ""}</div></li>`);
  limit($("edu-list"), +$("edu-list").dataset.limit, (S.education || []).length);

  /* ---------- experience ---------- */
  $("exp-list").innerHTML = map(S.experience, (x, i) => `<article class="xp${x.supervisor ? " study" : ""}">
    <h3>${x.role}</h3>${x.tag ? `<span class="tag">${x.tag}</span>` : ""}
    <p class="org">${x.org}</p><span class="when">${x.period || ""}</span>${x.details ? `<p class="d">${x.details}</p>` : ""}
    ${x.supervisor ? `<p class="sup"><b>Supervisor:</b> ${x.supervisor}</p>` : ""}
    ${x.link ? `<a class="vbtn xlink" href="${x.link.url}" target="_blank" rel="noopener">${ICON.ext}${x.link.label}</a>` : ""}</article>`);

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
  const revs = S.manuscripts || [];
  const pubItem = (p, review) => `<li class="pub ${review ? "press" : ""}">
    <div class="py"><b>${p.year || ""}</b>${p.date ? `<small>${p.date}</small>` : ""}</div>
    <div>
      <div class="ptop"><div class="ptags"><span class="st ${review ? "press" : ""}">${p.status || (review ? "Under review" : "Published")}</span>${p.badge ? `<span class="st q">${p.badge}</span>` : ""}</div>
        ${p.doi ? `<a class="doi" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi}${ICON.ext}</a>` : p.pdf ? `<a class="doi" href="${p.pdf}" target="_blank" rel="noopener">Read PDF${ICON.ext}</a>` : ""}</div>
      <h3>${p.title}</h3>
      <p class="pa">${(p.authors || "").replace("Pramanik, M. N. H.", "<b>Pramanik, M. N. H.</b>")}</p>
      ${p.journal ? `<p class="pj">${p.journal}${p.details ? ` · ${p.details}` : ""}</p>` : ""}
      ${p.summary ? `<details><summary>Key finding</summary><p>${p.summary}</p></details>` : ""}
    </div></li>`;
  $("pub-list").innerHTML = map(pubs, p => pubItem(p, false));
  $("rev-list").innerHTML = map(revs, p => pubItem(p, true));
  if (revs.length) $("rev-empty").remove();
  $("n-pub").textContent = pubs.length;
  $("n-rev").textContent = revs.length;
  $("pub-tabs").addEventListener("click", e => {
    const b = e.target.closest(".tab"); if (!b) return;
    [...$("pub-tabs").children].forEach(t => t.setAttribute("aria-selected", t === b));
    $("pub-list").hidden = b.dataset.p !== "pub";
    $("rev-panel").hidden = b.dataset.p !== "rev";
  });
  $("conf-list").innerHTML = map(S.conferences, c => `<li><span class="ic">${ICON.mic}</span><div><b>${c.title}</b><span><em>${c.date}</em> · ${c.event}</span></div>${certBtn(c.cert, c.title, "Certificate")}</li>`);

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

  /* ---------- extra-curricular ---------- */
  if ((S.leadership || []).length) {
    $("lead-list").innerHTML = map(S.leadership, g => `<article class="lead"><h3>${g.org}</h3><ol>
      ${map(g.roles, r => `<li><span class="when">${r.period}</span><span class="dot"></span><div><b>${r.role}</b>${r.text ? `<p>${r.text}</p>` : ""}</div></li>`)}</ol></article>`);
  } else $("beyond").remove();

  /* ---------- awards + training certificates ---------- */
  $("award-list").innerHTML = map(S.awards, a => `<div class="aw"><span class="ic">${ICON.award}</span><div>${a.year ? `<em>${a.year}</em>` : ""}<b>${a.title}</b><span>${a.org}</span>${certBtn(a.cert, a.title)}</div></div>`);
  $("train-list").innerHTML = map(S.training, t => `<article class="cert">
    <div class="body">
      <div class="top">${t.date ? `<span class="date">${t.date}</span>` : ""}${t.type ? `<span class="type">${t.type}</span>` : ""}</div>
      <h3>${t.title}</h3><p class="org">${t.org}</p>${t.text ? `<p>${t.text}</p>` : ""}
      ${certBtn(t.cert, t.title)}
    </div></article>`);
  limit($("train-list"), +$("train-list").dataset.limit, (S.training || []).length);

  /* ---------- fieldwork & media gallery: auto-sliding carousel ---------- */
  const plots = seed => {
    let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const c = ["#2f7a52", "#3b8758", "#4a9660", "#5fa566", "#7db56c", "#d9a62e", "#e4bf62", "#2a6b48"];
    let out = "", x = -10;
    while (x < 420) { const w = 40 + r() * 70; let y = -10; while (y < 310) { const h = 40 + r() * 70; out += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="${c[Math.floor(r() * c.length)]}" stroke="#173f2d" stroke-width="3"/>`; y += h; } x += w; }
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g transform="rotate(-6 200 150)">${out}</g><path d="M-10 220 C 90 170, 170 270, 260 210 S 360 150, 420 180" stroke="#8fb9c0" stroke-width="22" fill="none"/></svg>`;
  };
  const slides = [];
  (S.gallery || []).forEach(g => slides.push({ src: g.src, title: g.title, text: g.caption || "", cat: g.category || "Photo", place: g.place || "" }));
  (S.fieldwork || []).filter(f => f.gallery !== false).forEach((f, i) => {
    if ((f.photos || []).length) f.photos.forEach(src => slides.push({ src, title: f.title, text: f.details, cat: "Fieldwork", place: f.place }));
    else slides.push({ art: plots(11 + i * 37), title: f.title, text: f.details, cat: "Fieldwork", place: f.place });
  });
  const track = $("gal-track");
  track.innerHTML = map(slides, g => `<article class="slide" data-c="${g.cat}">
    <div class="media">${g.src ? `<img src="${g.src}" alt="${g.title}" loading="lazy">` : g.art}<span class="chip">${g.cat}</span></div>
    <div class="tx">${g.place ? `<span class="pl">${ICON.pin}${g.place}</span>` : ""}<h3>${g.title}</h3>${g.text ? `<p>${g.text}</p>` : ""}
    ${g.src ? `<button type="button" class="vbtn" data-img="${g.src}" data-cap="${(g.text || g.title).replace(/"/g, "&quot;")}">${ICON.ext}Expand view</button>` : ""}</div></article>`);
  const cats = ["All photos", ...new Set(slides.map(g => g.cat))];
  $("gal-tabs").innerHTML = cats.length > 2 ? map(cats, (c, i) => `<button class="tab" aria-selected="${i === 0}" data-c="${c}">${c}</button>`) : "";
  $("gal-tabs").addEventListener("click", e => {
    const b = e.target.closest(".tab"); if (!b) return;
    [...$("gal-tabs").children].forEach(t => t.setAttribute("aria-selected", t === b));
    [...track.children].forEach(g => g.classList.toggle("hide", b.dataset.c !== "All photos" && g.dataset.c !== b.dataset.c));
    track.classList.remove("anim"); track.style.transform = "";
  });
  let busy = false;
  const step = () => { const f = [...track.children].find(c => !c.classList.contains("hide")); return f ? f.getBoundingClientRect().width + 16 : 0; };
  const visibleCount = () => [...track.children].filter(c => !c.classList.contains("hide")).length;
  const next = () => {
    if (busy || visibleCount() < 2) return;
    busy = true;
    if (reduce) { track.appendChild(track.firstElementChild); busy = false; return; }
    track.classList.add("anim"); track.style.transform = `translateX(-${step()}px)`;
    track.addEventListener("transitionend", () => {
      track.classList.remove("anim"); track.appendChild(track.firstElementChild); track.style.transform = ""; busy = false;
    }, { once: true });
  };
  const prev = () => {
    if (busy || visibleCount() < 2) return;
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    if (reduce) return;
    busy = true;
    track.style.transform = `translateX(-${step()}px)`;
    void track.offsetWidth;
    track.classList.add("anim"); track.style.transform = "";
    track.addEventListener("transitionend", () => { track.classList.remove("anim"); busy = false; }, { once: true });
  };
  $("c-next").addEventListener("click", next);
  $("c-prev").addEventListener("click", prev);
  let paused = false, inView = false;
  const car = $("carousel");
  car.addEventListener("mouseenter", () => paused = true);
  car.addEventListener("mouseleave", () => paused = false);
  car.addEventListener("focusin", () => paused = true);
  car.addEventListener("focusout", () => paused = false);
  const carObs = new IntersectionObserver(es => { inView = es[0].isIntersecting; }, { threshold: .3 });
  carObs.observe(car);
  if (!reduce) setInterval(() => { if (!paused && inView && !document.hidden && $("lightbox").hidden) next(); }, 3500);
  if (slides.length < 2) { $("c-prev").remove(); $("c-next").remove(); }

  /* ---------- lightbox for certificates and gallery ---------- */
  const lb = $("lightbox");
  let lastFocus = null;
  const closeLb = () => { lb.hidden = true; if (lastFocus) lastFocus.focus(); };
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-img]"); if (!b) return;
    lastFocus = b;
    $("lb-img").src = b.dataset.img; $("lb-img").alt = b.dataset.cap || ""; $("lb-cap").textContent = b.dataset.cap || "";
    lb.hidden = false; $("lb-close").focus();
  });
  $("lb-close").addEventListener("click", closeLb);
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });

  /* ---------- references ---------- */
  const initials = n => n.replace(/(Prof\.|Dr\.|Md\.)\s*/g, "").split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join("");
  if ((S.references || []).length) {
    $("ref-list").innerHTML = map(S.references, r => `<div class="ref"><div class="av">${r.photo ? `<img src="${r.photo}" alt="${r.name}" loading="lazy">` : initials(r.name)}</div><h3>${r.name}</h3><p>${r.title}</p><p>${r.org}</p>${r.email ? `<a class="em" href="mailto:${r.email}">${MAIL}${r.email}</a>` : ""}<span class="rel">${r.relation}</span></div>`);
  } else $("references").remove();

  /* ---------- blog ---------- */
  if (S.blog && S.blog.url) $("blog").innerHTML = `<h3>${S.blog.name}</h3><p>${S.blog.text}</p><a href="${S.blog.url}" target="_blank" rel="noopener">${S.blog.url.replace(/^https?:\/\//, "")} ↗</a>`;
  else $("blog").remove();

  /* ---------- contact form: sends through FormSubmit, falls back to the email app ---------- */
  const form = $("c-form"), note = $("c-note"), sendBtn = form.querySelector(".send");
  const setNote = (t, cls) => { note.textContent = t; note.className = "form-note" + (cls ? " " + cls : ""); };
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const n = $("c-name").value.trim(), m = $("c-email").value.trim(), t = $("c-msg").value.trim();
    if (!n || !t || !/^\S+@\S+\.\S+$/.test(m)) { setNote("Please fill in your name, a valid email and a message.", "err"); return; }
    if ($("c-hp").value) return;
    if (!P.formEndpoint) {
      setNote("Opening your email app… If nothing opens, write to " + P.email);
      location.href = `mailto:${P.email}?subject=${encodeURIComponent("Message from " + n)}&body=${encodeURIComponent(t + "\n\n— " + n + " (" + m + ")")}`;
      return;
    }
    sendBtn.disabled = true; sendBtn.textContent = "Sending…"; setNote("");
    try {
      const r = await fetch(P.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: n, email: m, message: t, _replyto: m, _subject: "Portfolio message from " + n, _template: "table" })
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || String(d.success) === "false") throw new Error(d.message || "send failed");
      form.reset();
      setNote("Thank you! Your message has been sent. I will get back to you soon.", "ok");
    } catch (err) {
      setNote("Sorry, the message could not be sent right now. Please email me directly at " + P.email + ".", "err");
    } finally {
      sendBtn.disabled = false; sendBtn.textContent = "Send message";
    }
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
  document.addEventListener("keydown", e => { if (e.key === "Escape") { if (!lb.hidden) closeLb(); setMenu(false); } });
  const links = [...nav.querySelectorAll("a")];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-35% 0px -60% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
}
