(function () {
  const D = PORTFOLIO;
  const $ = (id) => document.getElementById(id);

  // safe element builder (uses textContent, no HTML injection)
  function el(tag, opts = {}, kids = []) {
    const n = document.createElement(tag);
    if (opts.cls) n.className = opts.cls;
    if (opts.text) n.textContent = opts.text;
    if (opts.href) { n.href = opts.href; if (/^https?:/.test(opts.href)) { n.target = "_blank"; n.rel = "noopener"; } }
    kids.forEach((k) => n.appendChild(k));
    return n;
  }
  const chips = (arr, cls = "chip") => el("div", { cls: "chips" }, arr.map((t) => el("span", { cls, text: t })));
  const bullets = (arr) => el("ul", {}, arr.map((t) => el("li", { text: t })));

  // ---------- Theme ----------
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  $("themeBtn").onclick = () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next; localStorage.setItem("theme", next);
  };

  // ---------- Hero / About ----------
  document.title = `${D.name} | ${D.roles[0]}`;
  $("brand").textContent = D.name.split(" ").map((w) => w[0]).join("");
  $("heroName").textContent = D.name;
  $("heroSummary").textContent = D.summary.split(". ")[0] + ".";
  $("aboutText").textContent = D.summary;
  $("aboutMeta").append(
    el("span", { cls: "pill", text: "📍 " + D.location }),
    el("span", { cls: "pill", text: "✉ " + D.email })
  );
  $("stats").append(...D.stats.map((s) => el("div", { cls: "stat" }, [el("b", { text: s.value }), el("span", { text: s.label })])));
  $("year").textContent = "© " + new Date().getFullYear() + " " + D.name;

  // typing role rotator
  (function typer() {
    let i = 0, j = 0, del = false; const t = $("roleText");
    (function tick() {
      const word = D.roles[i];
      t.textContent = word.slice(0, j);
      if (!del && j === word.length) { del = true; return setTimeout(tick, 1400); }
      if (del && j === 0) { del = false; i = (i + 1) % D.roles.length; }
      j += del ? -1 : 1;
      setTimeout(tick, del ? 40 : 80);
    })();
  })();

  // ---------- Skills ----------
  $("skillGrid").append(...Object.entries(D.skills).map(([g, list]) =>
    el("div", { cls: "skill-box" }, [el("h4", { text: g }), chips(list)])));

  // ---------- Experience ----------
  $("timeline").append(...D.experience.map((x) =>
    el("div", { cls: "tl-item" }, [
      el("h4", { text: x.role }),
      el("div", { cls: "sub", text: `${x.company} · ${x.place} · ${x.period}` }),
      bullets(x.points)
    ])));

  // ---------- Projects with tech filter ----------
  const allTech = [...new Set(D.projects.flatMap((p) => p.tech))].sort();
  let active = "All";
  function renderProjects() {
    const list = D.projects.filter((p) => active === "All" || p.tech.includes(active));
    const grid = $("projectGrid"); grid.replaceChildren(...list.map((p) =>
      el("article", { cls: "card" }, [
        el("h4", { text: p.title }),
        el("div", { cls: "when", text: p.period }),
        bullets(p.points),
        chips(p.tech),
        ...(p.repo ? [el("div", { cls: "links" }, [el("a", { href: p.repo, text: "Source code ↗" })])] : [])
      ])));
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("on", b.dataset.t === active));
  }
  $("filters").append(...["All", ...allTech].map((t) => {
    const b = el("button", { cls: "filter", text: t }); b.dataset.t = t;
    b.onclick = () => { active = t; renderProjects(); }; return b;
  }));
  renderProjects();

  // ---------- Live GitHub repos ----------
  (async function github() {
    const note = $("ghNote"), grid = $("repoGrid");
    if (!D.github || D.github.startsWith("YOUR_")) {
      note.textContent = "Set your GitHub username in data.js to show your latest repositories here.";
      return;
    }
    note.textContent = "Loading latest repositories…";
    try {
      const r = await fetch(`https://api.github.com/users/${D.github}/repos?sort=updated&per_page=30`);
      if (!r.ok) throw new Error(r.status);
      const repos = (await r.json()).filter((x) => !x.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 6);
      note.textContent = repos.length ? `Latest public repositories of @${D.github}` : "No public repositories yet.";
      grid.append(...repos.map((x) => el("article", { cls: "card" }, [
        el("h4", { text: x.name }),
        el("p", { cls: "muted", text: x.description || "No description." }),
        el("div", { cls: "chips" }, [
          ...(x.language ? [el("span", { cls: "chip", text: x.language })] : []),
          el("span", { cls: "chip", text: "★ " + x.stargazers_count }),
          el("span", { cls: "chip", text: "Updated " + new Date(x.pushed_at).toLocaleDateString() })
        ]),
        el("div", { cls: "links" }, [el("a", { href: x.html_url, text: "View repo ↗" })])
      ])));
    } catch (e) {
      note.textContent = "Couldn't load repositories right now (GitHub API limit or offline).";
    }
  })();

  // ---------- Resume holder ----------
  const file = D.resumeFile;
  $("dlResume").href = file; $("openResume").href = file; $("heroResume").href = "#resume";
  const frame = $("resumeFrame");
  fetch(file, { method: "HEAD" }).then((r) => {
    if (!r.ok) throw 0;
    frame.src = file + "#view=FitH";
  }).catch(() => {
    frame.hidden = true;
    const m = $("resumeMissing"); m.hidden = false;
    m.textContent = `Resume PDF not found. Add your PDF to the repo at "${file}" and refresh.`;
  });
  $("toggleViewer").onclick = (e) => {
    const w = $("viewerWrap"); w.classList.toggle("hidden");
    e.target.textContent = w.classList.contains("hidden") ? "Show preview" : "Hide preview";
  };
  $("edu").append(...D.education.map((x) => el("div", {}, [
    el("strong", { text: x.degree }), el("div", { cls: "muted", text: `${x.school} · ${x.period}` })])));
  $("certs").append(...D.certifications.map((c) => el("li", { text: c })));
  $("langs").append(...D.languages.map((l) => el("li", { text: `${l.name}: ${l.level}` })));

  // ---------- Contact ----------
  const links = [
    ["✉ Email", "mailto:" + D.email],
    ["📞 " + D.phone, "tel:" + D.phone.replace(/[^+\d]/g, "")],
    ["GitHub", "https://github.com/" + D.github],
    ["LinkedIn", D.linkedin]
  ];
  $("contactLinks").append(...links.map(([t, h]) => el("a", { href: h, text: t })));

  // ---------- Scroll reveal + active nav ----------
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      document.querySelectorAll(".nav nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((s) => io.observe(s));
})();
