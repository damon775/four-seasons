/* ========= Helpers ========= */
function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

/* ========= Mobile Menu ========= */
function toggleMenu() {
  const el = document.getElementById("mobileNav");
  if (!el) return;
  el.classList.toggle("isOpen");
}

/* ========= Year ========= */
function setYear() {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

/* ========= i18n ========= */
const I18N = {
  ar: {
    brandTag: "LED • Lighting • AV",
    navAbout: "عن الشركة",
    navServices: "الخدمات",
    navProjects: "المشاريع",
    navContact: "تواصل",
    heroBadge: "حلول تقنية للفعاليات",
    heroTitle: "Four Seasons — حلول LED وإضاءة وAV بشكل احترافي",
    heroLead: "تجهيز مؤتمرات ومعارض وحفلات وافتتاحات: تصميم، تركيب، Mapping، معايرة ألوان، تشغيل ودعم ميداني.",
    heroCTA1: "اطلب عرض سعر",
    heroCTA2: "شاهد أعمالنا",
    kpi1: "سنوات خبرة",
    kpi2: "Indoor / Outdoor",
    kpi3: "Art-Net / sACN",
    kpi4: "Switching / Playback",
    heroWhy: "لماذا Four Seasons؟",
    why1: "تركيب سريع وتنظيم كابلات احترافي",
    why2: "Mapping مضبوط + ضبط Load/Resolution",
    why3: "معايرة ألوان (WB / Gamma / Brightness)",
    why4: "تشغيل أثناء الحدث وحلول فورية للأعطال",
    mini1t: "LED Wall",
    mini1s: "Calibration & Processor setup",
    mini2t: "Lighting",
    mini2s: "Patch, Universes, Scenes",
    mini3t: "AV",
    mini3s: "Switching, Playback, Audio",
    mini4t: "On-site",
    mini4s: "Live support & monitoring",

    aboutTitle: "عن الشركة",
    aboutLead: "حلول تقنية للفعاليات: نركز على الجودة، الأمان، وسلاسة التشغيل لضمان تجربة عرض قوية.",
    about1t: "خبرة ميدانية",
    about1d: "من التخطيط حتى التشغيل — تركيب، Mapping، معايرة، ودعم كامل أثناء الحدث.",
    about2t: "شبكات وكونترول",
    about2d: "Art-Net / sACN، توزيع يونيفرس، Patch، وربط الأنظمة بشكل مستقر.",
    about3t: "تجربة عميل أفضل",
    about3d: "تواصل سريع، حلول واضحة، وتسليم شغل نظيف واحترافي.",

    servicesTitle: "الخدمات",
    servicesLead: "خدمات متكاملة لتجهيز فعاليتك من A إلى Z.",
    s1tag: "توريد وتركيب",
    s1t: "توريد وتركيب شاشات",
    s1d: "شاشات داخلية/خارجية، كابينتات، تنظيم طاقة وبيانات، اختبار البكسلات.",
    s2tag: "إعداد البروسيسور",
    s2t: "إعداد البروسيسور",
    s2d: "Load، Resolution، Screen config، Sender/Receiver، وحلول مشاكل الإشارة.",
    s3tag: "DMX / Network",
    s3t: "إضاءة وكونترول",
    s3d: "DMX/Art-Net/sACN، Patch، تقسيم يونيفرس، ربط وتشغيل البرامج.",
    s4tag: "دعم ميداني",
    s4t: "تشغيل ودعم ميداني",
    s4d: "إدارة تشغيل الحدث، مراقبة الأداء، وحلول سريعة لأي أعطال.",

    projectsTitle: "المشاريع",
    projectsLead: "اختر القسم وشاهد صور الأعمال. اضغط على أي صورة للتكبير.",
    tab1: "المؤتمرات",
    tab2: "المعارض",
    tab3: "الحفلات",
    tab4: "الافتتاحات",
    projectsHint: "تلميح: أسماء الصور مثل: conf1.jpg… expo1.jpg… party1.jpg… open1.jpg",

    contactTitle: "تواصل معنا",
    contactLead: "اكتب تفاصيل مشروعك وسنرد عليك بسرعة.",
    phoneLbl: "الهاتف:",
    emailLbl: "الإيميل:",
    cityLbl: "المدينة:",
    cityVal: "جدة",
    contactCTA1: "راسلنا بريد",
    contactCTA2: "شاهد المشاريع",
    contactNote: "* سيتم حفظ الطلب في النظام وإرسال إشعار إلى بريدك عبر Netlify.",

    formTitle: "طلب عرض سعر",
    formPill: "رد سريع",
    nameLbl: "الاسم",
    phone2Lbl: "رقم الجوال",
    typeLbl: "نوع الفعالية",
    typePick: "اختر",
    type1: "مؤتمر",
    type2: "معرض",
    type3: "حفلة",
    type4: "افتتاح",
    detailsLbl: "تفاصيل الطلب",
    sendBtn: "إرسال الطلب",
    formNote: "* بعد الإرسال سيتم تحويلك لصفحة نجاح.",
    footer: "Four Seasons — جميع الحقوق محفوظة"
  },

  en: {
    brandTag: "LED • Lighting • AV",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",
    heroBadge: "Tech-grade event production",
    heroTitle: "Four Seasons — Professional LED • Lighting • AV",
    heroLead: "Conferences, exhibitions, concerts, openings: design, install, mapping, calibration, playback, and on-site support.",
    heroCTA1: "Request a Quote",
    heroCTA2: "View Projects",
    kpi1: "Years experience",
    kpi2: "Indoor / Outdoor",
    kpi3: "Art-Net / sACN",
    kpi4: "Switching / Playback",
    heroWhy: "Why Four Seasons?",
    why1: "Fast install & clean cable management",
    why2: "Accurate mapping + load/resolution setup",
    why3: "Color calibration (WB / Gamma / Brightness)",
    why4: "On-site operation & instant troubleshooting",
    mini1t: "LED Wall",
    mini1s: "Calibration & processor setup",
    mini2t: "Lighting",
    mini2s: "Patch, universes, scenes",
    mini3t: "AV",
    mini3s: "Switching, playback, audio",
    mini4t: "On-site",
    mini4s: "Live support & monitoring",

    aboutTitle: "About",
    aboutLead: "Technical event solutions focused on quality, safety, and smooth operations.",
    about1t: "Field experience",
    about1d: "From planning to showtime — install, mapping, calibration, and full on-site support.",
    about2t: "Networks & control",
    about2d: "Art-Net / sACN, universes, patching, stable integrations.",
    about3t: "Better client experience",
    about3d: "Fast communication, clear solutions, clean professional delivery.",

    servicesTitle: "Services",
    servicesLead: "End-to-end services for your event setup.",
    s1tag: "Supply & Install",
    s1t: "LED Supply & Installation",
    s1d: "Indoor/outdoor LED, cabinets, power/data, pixel checks.",
    s2tag: "Processor Setup",
    s2t: "Processor & Mapping",
    s2d: "Load, resolution, screen config, sender/receiver, signal troubleshooting.",
    s3tag: "DMX / Network",
    s3t: "Lighting & Control",
    s3d: "DMX/Art-Net/sACN, patching, universes, software linking.",
    s4tag: "On-site Support",
    s4t: "Show Operation",
    s4d: "Run the show, monitor performance, fast fixes.",

    projectsTitle: "Projects",
    projectsLead: "Pick a category and view the gallery. Click any image to enlarge.",
    tab1: "Conferences",
    tab2: "Exhibitions",
    tab3: "Concerts",
    tab4: "Openings",
    projectsHint: "Tip: Name your images like: conf1.jpg… expo1.jpg… party1.jpg… open1.jpg",

    contactTitle: "Contact",
    contactLead: "Send your project details and we’ll reply fast.",
    phoneLbl: "Phone:",
    emailLbl: "Email:",
    cityLbl: "City:",
    cityVal: "Jeddah",
    contactCTA1: "Email us",
    contactCTA2: "View projects",
    contactNote: "* Your request is saved and you’ll get an email notification via Netlify.",

    formTitle: "Request a Quote",
    formPill: "Fast Response",
    nameLbl: "Name",
    phone2Lbl: "Phone",
    typeLbl: "Event type",
    typePick: "Choose",
    type1: "Conference",
    type2: "Exhibition",
    type3: "Concert",
    type4: "Opening",
    detailsLbl: "Details",
    sendBtn: "Send Request",
    formNote: "* After sending, you’ll be redirected to a success page.",
    footer: "Four Seasons — All rights reserved"
  }
};

function applyLang(lang) {
  const html = document.documentElement;
  const isAR = lang === "ar";
  html.lang = isAR ? "ar" : "en";
  html.dir = isAR ? "rtl" : "ltr";

  qsa("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang]?.[key];
    if (val != null) el.textContent = val;
  });

  const btn1 = document.getElementById("langBtn");
  const btn2 = document.getElementById("langBtn2");
  const nextLabel = isAR ? "EN" : "AR";
  if (btn1) btn1.textContent = nextLabel;
  if (btn2) btn2.textContent = nextLabel;

  localStorage.setItem("fs_lang", lang);

  // تحديث الكابشن في المعرض عند تغيير اللغة
  renderGallery(currentCat);
}

function initLang() {
  const saved = localStorage.getItem("fs_lang");
  const lang = saved === "en" ? "en" : "ar";
  applyLang(lang);

  function toggleLang() {
    const current = (localStorage.getItem("fs_lang") === "en") ? "en" : "ar";
    applyLang(current === "en" ? "ar" : "en");
  }

  const btn1 = document.getElementById("langBtn");
  const btn2 = document.getElementById("langBtn2");
  if (btn1) btn1.addEventListener("click", toggleLang);
  if (btn2) btn2.addEventListener("click", toggleLang);
}

function getLang() {
  return (localStorage.getItem("fs_lang") === "en") ? "en" : "ar";
}

/* ========= Gallery Data (مطابق لملفاتك الحالية) ========= */
const galleryData = {
  conferences: [
    { src: "conf1.jpg", capAR: "مؤتمر 1", capEN: "Conference 1" },
    { src: "conf2.jpg", capAR: "مؤتمر 2", capEN: "Conference 2" },
    { src: "conf3.jpg", capAR: "مؤتمر 3", capEN: "Conference 3" }
  ],
  exhibitions: [
    { src: "expo1.jpg", capAR: "معرض 1", capEN: "Exhibition 1" },
    { src: "expo2.jpg", capAR: "معرض 2", capEN: "Exhibition 2" },
    { src: "expo3.jpg", capAR: "معرض 3", capEN: "Exhibition 3" },
    { src: "expo4.jpg", capAR: "معرض 4", capEN: "Exhibition 4" }
  ],
  concerts: [
    // لما تضيف صور حفلات لاحقًا:
    // { src: "party1.jpg", capAR: "حفلة 1", capEN: "Concert 1" },
  ],
  openings: [
    { src: "open1.jpg", capAR: "افتتاح 1", capEN: "Opening 1" }
  ]
};

let currentCat = "conferences";
let currentIndex = 0;

function renderGallery(cat) {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const items = galleryData[cat] || [];
  grid.innerHTML = "";

  if (!items.length) {
    const msg = document.createElement("div");
    msg.style.gridColumn = "1 / -1";
    msg.style.padding = "14px";
    msg.style.border = "1px solid rgba(255,255,255,.12)";
    msg.style.borderRadius = "14px";
    msg.style.background = "rgba(255,255,255,.04)";
    msg.style.color = "rgba(234,240,255,.75)";
    msg.textContent = (getLang() === "en")
      ? "No images yet. Add files like party1.jpg, party2.jpg..."
      : "لا توجد صور الان سيتم ارفاق الصور قريبا.";
    grid.appendChild(msg);
    return;
  }

  items.forEach((it, idx) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    const img = document.createElement("img");
    img.src = it.src;
    img.alt = (getLang() === "en") ? it.capEN : it.capAR;
    img.loading = "lazy";

    // لو الصورة غير موجودة
    img.onerror = () => {
      tile.style.display = "none";
      console.warn("Missing image:", it.src);
    };

    const cap = document.createElement("div");
    cap.className = "cap";
    cap.textContent = (getLang() === "en") ? it.capEN : it.capAR;

    tile.appendChild(img);
    tile.appendChild(cap);

    // ✅ تكبير عند الضغط
    tile.addEventListener("click", () => openLightbox(cat, idx));

    grid.appendChild(tile);
  });
}

function bindTabs() {
  const tabs = qsa(".tab");
  if (!tabs.length) return;

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("isActive"));
      btn.classList.add("isActive");

      currentCat = btn.getAttribute("data-cat") || "conferences";
      renderGallery(currentCat);
    });
  });
}

/* ========= Lightbox (تكبير الصور) ========= */
function openLightbox(cat, idx) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCaption");
  if (!lb || !img || !cap) return;

  currentCat = cat;
  currentIndex = idx;

  const item = (galleryData[currentCat] || [])[currentIndex];
  if (!item) return;

  img.src = item.src;
  cap.textContent = (getLang() === "en") ? item.capEN : item.capAR;

  lb.classList.add("isOpen");
  lb.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.remove("isOpen");
  lb.setAttribute("aria-hidden", "true");
}

function navLightbox(dir) {
  const items = galleryData[currentCat] || [];
  if (!items.length) return;
  currentIndex = (currentIndex + dir + items.length) % items.length;
  openLightbox(currentCat, currentIndex);
}

function bindLightbox() {
  const lb = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lbClose");
  const prev = document.getElementById("lbPrev");
  const next = document.getElementById("lbNext");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prev) prev.addEventListener("click", () => navLightbox(-1));
  if (next) next.addEventListener("click", () => navLightbox(+1));

  document.addEventListener("keydown", (e) => {
    if (!lb || !lb.classList.contains("isOpen")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(+1);
    if (e.key === "ArrowRight") navLightbox(-1);
  });

  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
  }
}

/* ========= Boot ========= */
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initLang();
  bindTabs();
  bindLightbox();
  renderGallery(currentCat);

  // ====== Formspree submit (redirect to your thanks page) ======
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (res.ok) {
          window.location.href = "/thanks.html";
        } else {
          alert("لم يتم إرسال الطلب. تأكد من البيانات وحاول مرة ثانية.");
        }
      } catch (err) {
        alert("فيه مشكلة اتصال. حاول مرة ثانية.");
      }
    });
  }
});
