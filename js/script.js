(() => {
  "use strict";

  /* ---------- Header: shadow on scroll ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    toTop.classList.toggle("is-visible", window.scrollY > 600);
  };

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------- Samples filter ---------- */
  const filterTabs = document.querySelectorAll(".filter-tab");
  const sampleCards = document.querySelectorAll(".sample-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const filter = tab.dataset.filter;
      sampleCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------- Pricing card -> contact form plan link ---------- */
  const planSelect = document.getElementById("plan");
  document.querySelectorAll(".pricing-card__cta").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.plan) {
        planSelect.value = btn.dataset.plan;
      }
    });
  });

  /* ---------- Contact form (client-side simulation) ---------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      formNote.textContent = "未入力の必須項目があります。ご確認ください。";
      formNote.classList.add("is-error");
      return;
    }

    formNote.classList.remove("is-error");
    formNote.textContent = "送信中...";

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    // NOTE: フォームの実送信処理は未実装です。
    // 実運用時はここで fetch() 等を使い、フォーム送信サービスや
    // 自社サーバーのエンドポイントへ送信してください。
    window.setTimeout(() => {
      formNote.textContent = "お問い合わせありがとうございます。担当より折り返しご連絡いたします。";
      form.reset();
      submitBtn.disabled = false;
    }, 900);
  });

  /* ---------- Back to top ---------- */
  const toTop = document.getElementById("toTop");
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
