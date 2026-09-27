/* Optional progressive enhancement. All pages and navigation work without JS. */
(() => {
  const config = window.PORTFOLIO || {};
  const root = document.body.dataset.root || "./";
  const webURL = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : null;
    } catch { return null; }
  };
  document.querySelectorAll("[data-contact]").forEach((element) => {
    const kind = element.dataset.contact;
    const value = (config[kind] || "").trim();
    const href = kind === "email"
      ? (/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) ? `mailto:${encodeURIComponent(value)}` : null)
      : webURL(value);
    if (!href) return;
    const link = document.createElement("a");
    link.href = href;
    link.textContent = kind === "email" ? value : (kind === "github" ? "GitHub" : "LinkedIn");
    if (kind !== "email") { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    element.replaceChildren(link);
  });
  document.querySelectorAll("a[data-project]").forEach((link) => {
    const href = webURL((config.repositories || {})[link.dataset.project]);
    if (!href) return;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const label = link.querySelector("[data-link-label]");
    if (label) label.textContent = "GitHub repo ↗";
  });
  document.querySelectorAll("[data-repo-button]").forEach((link) => {
    const href = webURL((config.repositories || {})[link.dataset.repoButton]);
    if (!href) return;
    link.href = href;
    link.hidden = false;
  });
  const frame = document.querySelector("[data-portrait]");
  const photo = (config.photo || "").trim();
  if (frame && photo) {
    const safePath = /^[a-zA-Z0-9_./-]+$/.test(photo) && !photo.startsWith("/") && !photo.split("/").includes("..");
    const src = webURL(photo) || (safePath ? root + photo : null);
    if (!src) return;
    const img = document.createElement("img");
    img.className = "portrait-photo";
    img.alt = "Portrait of Jisun Kim";
    img.width = 420; img.height = 500;
    img.onload = () => frame.replaceChildren(img);
    img.src = src;
  }
})();
