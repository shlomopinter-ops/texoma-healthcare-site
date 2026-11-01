(function () {
  var cfg = window.SITE_CONFIG || {};
  var name = (cfg.PRODUCT_NAME || "").trim();
  var company = (cfg.COMPANY_NAME || "").trim();
  var email = (cfg.CONTACT_EMAIL || "").trim();
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  // Product name: [data-product] and [data-brand] show the name, or keep their neutral fallback text.
  if (name) {
    each("[data-product],[data-brand]", function (el) { el.textContent = name; });
  }
  // Company name: every [data-company] element shows the configured company.
  if (company) {
    each("[data-company]", function (el) { el.textContent = company; });
    document.title = document.title.replace("Texoma Healthcare Group", company);
  }
  // Contact email: link shown only once set.
  each("[data-email]", function (el) {
    el.hidden = !email;
    if (!email) return;
    el.setAttribute("href", "mailto:" + email);
    var label = el.querySelector("[data-email-label]");
    if (label) label.textContent = email;
  });
  each("[data-email-pending]", function (el) { el.hidden = !!email; });
  // Mobile menu
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    each("#site-nav a", function (a) {
      a.addEventListener("click", function () { btn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); });
    });
  }
  each("[data-year]", function (el) { el.textContent = new Date().getFullYear(); });
})();
