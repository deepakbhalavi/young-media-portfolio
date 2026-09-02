/*
  CUT & GRAIN — Young Media Marketing portfolio
  Vanilla JavaScript data model. Update portfolioItems, creativeItems, clientItems and contactLinks only;
  the grids, filters and fullscreen media viewer render automatically from those arrays.
*/

const ASSETS = {
  logo: "/ymm-logo.png",
  generatedMark: "/ymm-logo.png",
  hero: "/manus-storage/yma-hero-film-grain_e931b7c7.jpg",
  studioArt: "/manus-storage/yma-studio-abstract_5a09b614.jpg",
  contact: "/manus-storage/yma-contact-light_bac70a48.jpg",
  kanrivoLeadFlow: "/manus-storage/kanrivo-lead-flow_5aff37db.jpg",
  kanrivoProcess: "/manus-storage/kanrivo-process_19530d32.jpg",
  youngMediaProduction: "/manus-storage/young-media-production_bb8fedd5.jpg",
  youngMediaBts: "/manus-storage/young-media-bts_d7dd95bd.jpg",
  brandConsistency: "/manus-storage/brand-consistency_1338ce7b.jpg",
  brandMomentum: "/manus-storage/brand-momentum_99f4046b.jpg",
  visibilityCampaign: "/manus-storage/visibility-campaign_61ae1358.jpg",
  brandVisibility: "/manus-storage/brand-visibility_a480813f.jpg",
};

/*
  ADD OR UPDATE WORK HERE
  type: "video" opens the supplied file in the fullscreen player.
  type: "image" opens a poster or creative in the fullscreen lightbox.
  categories must use: reels, brand-reels, posters, social-media.
*/
// Helper: derive a Cloudinary JPEG thumbnail from a Cloudinary video URL.
// Uses the "so_0" (start offset 0) transformation to grab the first frame.
// Strips the original file extension (handles uppercase like .MP4) and appends .jpg.
function cloudinaryThumb(videoUrl) {
  // Remove the file extension from the public_id (case-insensitive) then add .jpg
  const withoutExt = videoUrl.replace(/\.[^/.]+$/, "");
  return withoutExt
    .replace("/video/upload/", "/video/upload/so_0,q_auto,f_jpg/")
    + ".jpg";
}

const portfolioItems = [
  {
    id: "edit-final",
    type: "video",
    title: "Young Media — Final Cut",
    label: "Brand Reel",
    meta: "CINEMATIC / 2026",
    categories: ["reels", "brand-reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/edit_final.mp4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/edit_final.mp4"),
    number: "01",
  },
  {
    id: "img-0611",
    type: "video",
    title: "Content Cut — 0611",
    label: "Social Content",
    meta: "SOCIAL MEDIA / 2026",
    categories: ["reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/IMG_0611.MP4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/IMG_0611.MP4"),
    number: "02",
  },



  {
    id: "img-0971",
    type: "video",
    title: "Social Cut — 0971",
    label: "Social Content",
    meta: "SOCIAL MEDIA / 2026",
    categories: ["reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/IMG_0971.MP4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/IMG_0971.MP4"),
    number: "06",
  },
  {
    id: "new-project-17",
    type: "video",
    title: "New Project — 17",
    label: "Brand Reel",
    meta: "BRAND CONTENT / 2026",
    categories: ["reels", "brand-reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/New_Project_17_45129C5.mp4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/New_Project_17_45129C5.mp4"),
    number: "07",
  },
  {
    id: "youngmedia-edit",
    type: "video",
    title: "Young Media Edit",
    label: "YMM Campaign",
    meta: "AGENCY PROMO / 2026",
    categories: ["reels", "brand-reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/youngmedia_edit.mp4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/youngmedia_edit.mp4"),
    number: "08",
  },
  {
    id: "lv-0-20260821",
    type: "video",
    title: "YMM — Creative Cut",
    label: "Brand Reel",
    meta: "CINEMATIC / 2026",
    categories: ["reels", "brand-reels", "social-media"],
    source: "https://res.cloudinary.com/w7c3yurt/video/upload/lv_0_20260821193956.mp4",
    poster: cloudinaryThumb("https://res.cloudinary.com/w7c3yurt/video/upload/lv_0_20260821193956.mp4"),
    number: "09",
  },
];

/* Posters & creatives — your real images from D:\post */
const creativeItems = [
  {
    id: "poster-0558",
    type: "image",
    title: "YMM / Poster 0558",
    label: "Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0558.JPG.jpeg",
    number: "14",
  },
  {
    id: "poster-0561",
    type: "image",
    title: "YMM / Poster 0561",
    label: "Campaign Still",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0561.JPG.jpeg",
    number: "15",
  },
  {
    id: "poster-0566",
    type: "image",
    title: "YMM / Poster 0566",
    label: "Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0566.JPG.jpeg",
    number: "16",
  },
  {
    id: "poster-0576",
    type: "image",
    title: "YMM / Poster 0576",
    label: "Social Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0576.JPG.jpeg",
    number: "17",
  },
  {
    id: "poster-0580",
    type: "image",
    title: "YMM / Poster 0580",
    label: "Campaign Still",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0580.JPG.jpeg",
    number: "18",
  },
  {
    id: "poster-0583",
    type: "image",
    title: "YMM / Poster 0583",
    label: "Agency Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0583.JPG.jpeg",
    number: "19",
  },
  {
    id: "poster-0591",
    type: "image",
    title: "YMM / Poster 0591",
    label: "Social Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0591.JPG.jpeg",
    number: "20",
  },
  {
    id: "poster-0593",
    type: "image",
    title: "YMM / Poster 0593",
    label: "Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0593.PNG",
    number: "21",
  },
  {
    id: "poster-0594",
    type: "image",
    title: "YMM / Poster 0594",
    label: "Campaign Still",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0594.PNG",
    number: "22",
  },
  {
    id: "poster-0596",
    type: "image",
    title: "YMM / Poster 0596",
    label: "Agency Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0596.PNG",
    number: "23",
  },
  {
    id: "poster-0604",
    type: "image",
    title: "YMM / Poster 0604",
    label: "Social Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0604.PNG",
    number: "24",
  },
  {
    id: "poster-0605",
    type: "image",
    title: "YMM / Poster 0605",
    label: "Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0605.PNG",
    number: "25",
  },
  {
    id: "poster-0606",
    type: "image",
    title: "YMM / Poster 0606",
    label: "Campaign Still",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0606.PNG",
    number: "26",
  },
  {
    id: "poster-0675",
    type: "image",
    title: "YMM / Poster 0675",
    label: "Social Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0675.JPG.jpeg",
    number: "27",
  },
  {
    id: "poster-0709",
    type: "image",
    title: "YMM / Poster 0709",
    label: "Agency Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0709.PNG",
    number: "28",
  },
  {
    id: "poster-0735",
    type: "image",
    title: "YMM / Poster 0735",
    label: "Key Art",
    meta: "POSTER / 2026",
    categories: ["posters", "social-media"],
    source: "/posters/IMG_0735.JPG.jpeg",
    number: "29",
  },
  {
    id: "poster-0747",
    type: "image",
    title: "YMM / Poster 0747",
    label: "Campaign Still",
    meta: "POSTER / 2026",
    categories: ["posters", "brand-reels"],
    source: "/posters/IMG_0747.JPG.jpeg",
    number: "30",
  },
];

/* Keep client names and project labels here to update this section without editing HTML. */
const clientItems = [
  { name: "SS COLLECTION", kind: "CLIENT / 2026" },
  { name: "DOLLY MOBILE", kind: "CLIENT / 2026" },
  { name: "CARSZPA", kind: "CLIENT / 2026" },
  { name: "ZHAMAD CLINIC", kind: "CLIENT / 2026" },
  { name: "KANRIVO", kind: "CLIENT / 2026" },
];

/* Paste your exact Instagram, WhatsApp and email URLs below. Empty URLs intentionally show a clear update note instead of inventing contact details. */
const contactLinks = [
  { label: "INSTAGRAM", url: "https://www.instagram.com/youngmedia7" },
  { label: "WHATSAPP", url: "https://wa.me/message/JXLOS47K24N2L1" },
  { label: "EMAIL", url: "mailto:hello@youngmedia.in" },
];

const portfolioGrid = document.querySelector("#portfolio-grid");
const reelsList = document.querySelector("#reels-list");
const creativeMasonry = document.querySelector("#creative-masonry");
const clientList = document.querySelector("#client-list");
const contactLinksMount = document.querySelector("#contact-links");
const dialog = document.querySelector("#media-dialog");
const dialogStage = document.querySelector("#dialog-stage");
const dialogTitle = document.querySelector("#media-dialog-title");
const dialogCaption = document.querySelector("#dialog-caption");
const dialogPrev = document.querySelector("#dialog-prev");
const dialogNext = document.querySelector("#dialog-next");
const toast = document.querySelector("#toast");

// Page-aware media pool: on posters.html navigate posters; on index.html navigate videos only
const isPostersPage = !!document.querySelector("#creative-masonry");
const allMediaItems = () => isPostersPage ? creativeItems : portfolioItems.filter((i) => i.type === "video");

let currentMediaIndex = -1;

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function mediaMarkup(item, className) {
  if (item.type === "image") return `<img class="${className}" src="${escapeHtml(item.source)}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
  // Render an explicit <img> cover so the thumbnail is always visible on all devices.
  // Browsers can silently skip the video `poster` attribute on slow/mobile connections.
  const coverImg = item.poster
    ? `<img class="${className}-cover" src="${escapeHtml(item.poster)}" alt="${escapeHtml(item.title)} cover" loading="lazy" aria-hidden="true" />`
    : "";
  return `${coverImg}<video class="${className}" src="${escapeHtml(item.source)}" poster="${item.poster ? escapeHtml(item.poster) : ""}" preload="none" muted playsinline aria-label="Preview of ${escapeHtml(item.title)}"></video>`;
}

function createWorkCard(item) {
  const isVideo = item.type === "video";
  return `
    <article class="work-card" data-id="${escapeHtml(item.id)}" data-categories="${item.categories.join(" ")}" tabindex="0" role="button" aria-label="Open ${escapeHtml(item.title)}">
      <div class="work-card-media">
        ${mediaMarkup(item, "work-media")}
        <span class="work-number">${item.number}</span>
        ${isVideo ? `<span class="work-play" aria-hidden="true">▶</span>` : `<span class="work-play" aria-hidden="true">↗</span>`}
      </div>
      <div class="work-caption">
        <div class="work-caption-text">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.label)} · ${escapeHtml(item.meta)}</p>
        </div>
        <span class="work-caption-arrow" aria-hidden="true">↗</span>
      </div>
    </article>`;
}

function createReelCard(item) {
  return `
    <article class="reel-card" data-id="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="Play ${escapeHtml(item.title)}">
      <div class="reel-card-media">
        ${mediaMarkup(item, "reel-poster")}
        <span class="reel-number">${item.number}</span>
        <span class="reel-play" aria-hidden="true">▶</span>
      </div>
      <div class="reel-caption">
        <div class="work-caption-text">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.label)} · ${escapeHtml(item.meta)}</p>
        </div>
        <span class="reel-caption-arrow" aria-hidden="true">↗</span>
      </div>
    </article>`;
}

function renderPortfolio() {
  // On index.html: show only videos in the work grid (posters live on posters.html)
  if (portfolioGrid) portfolioGrid.innerHTML = portfolioItems.filter((item) => item.type === "video").map(createWorkCard).join("");
  if (reelsList) reelsList.innerHTML = portfolioItems.filter((item) => item.type === "video").map(createReelCard).join("");
  // On posters.html: render the creative masonry grid
  if (creativeMasonry) {
    if (!creativeItems.length) {
      creativeMasonry.innerHTML = `<div class="empty-state">POSTERS &amp; SOCIAL CREATIVES WILL APPEAR HERE.<br />ADD IMAGE ITEMS TO <strong>creativeItems</strong> IN script.js.</div>`;
    } else {
      creativeMasonry.innerHTML = creativeItems.map((item) => `
      <article class="creative-card" data-id="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="View ${escapeHtml(item.title)}">
        ${mediaMarkup(item, "creative-image")}
        <div class="creative-caption"><h3>${escapeHtml(item.title)}</h3><span>${escapeHtml(item.label)}</span></div>
      </article>`).join("");
    }
  }
}

function renderClients() {
  if (!clientList) return;
  clientList.innerHTML = clientItems.map((item, index) => `
    <article class="client-row">
      <span class="client-number">${String(index + 1).padStart(2, "0")}</span>
      <h3 class="client-name">${escapeHtml(item.name)}</h3>
      <span class="client-kind">${escapeHtml(item.kind)}</span>
    </article>`).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function renderContactLinks() {
  if (!contactLinksMount) return;
  contactLinksMount.innerHTML = contactLinks.map((item) => {
    if (!item.url) return `<button class="contact-link" type="button" data-missing-contact="${escapeHtml(item.label)}">${escapeHtml(item.label)} <span aria-hidden="true">↗</span></button>`;
    return `<a class="contact-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)} <span aria-hidden="true">↗</span></a>`;
  }).join("");
}

function itemById(id) {
  return allMediaItems().find((item) => item.id === id);
}

function openMedia(item) {
  if (!item) return;
  const items = allMediaItems();
  currentMediaIndex = items.findIndex((i) => i.id === item.id);
  dialogStage.innerHTML = item.type === "video"
    ? `<video src="${escapeHtml(item.source)}" ${item.poster ? `poster="${escapeHtml(item.poster)}"` : ""} controls playsinline></video>`
    : `<img src="${escapeHtml(item.source)}" alt="${escapeHtml(item.title)}" />`;
  dialogTitle.textContent = item.title;
  dialogCaption.textContent = `${item.label} / ${item.meta}`;
  dialogPrev.disabled = currentMediaIndex <= 0;
  dialogNext.disabled = currentMediaIndex >= items.length - 1;
  dialog.showModal();
  document.body.style.overflow = "hidden";
  const activeVideo = dialogStage.querySelector("video");
  if (activeVideo) activeVideo.play().catch(() => {});
}

function navigateMedia(direction) {
  const items = allMediaItems();
  const nextIndex = currentMediaIndex + direction;
  if (nextIndex < 0 || nextIndex >= items.length) return;
  const activeVideo = dialogStage.querySelector("video");
  if (activeVideo) activeVideo.pause();
  openMedia(items[nextIndex]);
}

function closeMedia() {
  const activeVideo = dialogStage.querySelector("video");
  if (activeVideo) activeVideo.pause();
  dialog.close();
  dialogStage.innerHTML = "";
  document.body.style.overflow = "";
}

function activateItemFromEvent(event) {
  const card = event.target.closest("[data-id]");
  if (card) openMedia(itemById(card.dataset.id));
}

function attachMediaEvents(container) {
  container.addEventListener("click", activateItemFromEvent);
  container.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-id]")) {
      event.preventDefault();
      activateItemFromEvent(event);
    }
  });
}

function configureFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((otherButton) => {
        const selected = otherButton === button;
        otherButton.classList.toggle("is-active", selected);
        otherButton.setAttribute("aria-selected", String(selected));
      });
      document.querySelectorAll(".portfolio-grid .work-card").forEach((card) => {
        const categories = card.dataset.categories.split(" ");
        card.classList.toggle("is-hidden", activeFilter !== "all" && !categories.includes(activeFilter));
      });
    });
  });
}

function configureMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const setMenuState = (isOpen) => {
    menuToggle.classList.toggle("is-open", isOpen);
    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };
  menuToggle.addEventListener("click", () => setMenuState(!mobileMenu.classList.contains("is-open")));
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenuState(false)));
}

function configureReveal() {
  document.body.classList.add("is-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".stagger-reveal").forEach((element) => observer.observe(element));
}

function configureHeader() {
  const header = document.querySelector(".site-header");
  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function init() {
  renderPortfolio();
  renderClients();
  renderContactLinks();
  if (portfolioGrid) attachMediaEvents(portfolioGrid);
  if (reelsList) attachMediaEvents(reelsList);
  if (creativeMasonry) attachMediaEvents(creativeMasonry);
  if (document.querySelector(".filter-button")) configureFilters();
  configureMenu();
  configureReveal();
  configureHeader();
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  if (contactLinksMount) {
    contactLinksMount.addEventListener("click", (event) => {
      const button = event.target.closest("[data-missing-contact]");
      if (button) showToast(`Add the ${button.dataset.missingContact} URL in script.js to activate this link.`);
    });
  }
  dialog.querySelector(".dialog-close").addEventListener("click", closeMedia);
  dialogPrev.addEventListener("click", () => navigateMedia(-1));
  dialogNext.addEventListener("click", () => navigateMedia(1));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeMedia(); });
  dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeMedia(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") navigateMedia(-1);
    if (event.key === "ArrowRight") navigateMedia(1);
  });
}

init();
