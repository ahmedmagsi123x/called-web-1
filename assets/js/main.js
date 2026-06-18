/* =============================================================
   MERIDIAN MEDIA — single-page interactions
   Sticky nav · scroll reveal · word reveal · count-up ·
   FAQ accordion · mobile menu · scroll progress · badge parallax
   ============================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---- Sticky nav state + scroll progress ---- */
  var nav = $(".nav");
  var progress = $(".progress");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("scrolled", y > 20);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var burger = $(".nav__burger");
  var links = $(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      links.classList.toggle("show", open);
    });
    $$(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        links.classList.remove("show");
      });
    });
  }

  /* ---- Split headline words for reveal ---- */
  $$("[data-words]").forEach(function (el) {
    // Skip elements that are already manually marked up (e.g. the hero title)
    if (el.querySelector(".word")) return;

    var frag = document.createDocumentFragment();
    Array.prototype.forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        // text node: wrap each word
        node.textContent.split(/(\s+)/).forEach(function (p) {
          if (p === "") return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var s = document.createElement("span");
          s.className = "word";
          s.textContent = p;
          frag.appendChild(s);
        });
      } else if (node.nodeType === 1) {
        // element (e.g. .accent): treat as one animated word, keep its classes
        node.classList.add("word");
        frag.appendChild(node);
      } else {
        frag.appendChild(node);
      }
    });
    el.innerHTML = "";
    el.appendChild(frag);
    $$(".word", el).forEach(function (w, i) { w.style.transitionDelay = (i * 0.06) + "s"; });
  });

  /* ---- IntersectionObserver: reveals + word headlines + counters ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var t = e.target;
      t.classList.add("in");
      if (t.hasAttribute("data-count")) runCount(t);
      io.unobserve(t);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  $$(".reveal, [data-words], [data-count]").forEach(function (el) {
    if (reduce) { el.classList.add("in"); if (el.hasAttribute("data-count")) finishCount(el); return; }
    io.observe(el);
  });

  /* ---- Count-up ---- */
  function finishCount(el) {
    el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
  }
  function runCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var dur = 1500, start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
    }
    requestAnimationFrame(frame);
  }

  /* ---- FAQ accordion ---- */
  $$(".faq__item").forEach(function (item) {
    var q = $(".faq__q", item);
    var a = $(".faq__a", item);
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      $$(".faq__item.open").forEach(function (o) {
        o.classList.remove("open");
        $(".faq__a", o).style.maxHeight = null;
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---- Badge parallax on mouse (hero) ---- */
  var hero = $(".hero__card");
  if (hero && !reduce && window.matchMedia("(pointer:fine)").matches) {
    var badges = $$(".badge", hero);
    hero.addEventListener("mousemove", function (ev) {
      var r = hero.getBoundingClientRect();
      var cx = (ev.clientX - r.left) / r.width - 0.5;
      var cy = (ev.clientY - r.top) / r.height - 0.5;
      badges.forEach(function (b, i) {
        var depth = (i + 1) * 9;
        b.style.transform = "translate(" + (cx * depth) + "px," + (cy * depth) + "px)";
      });
    });
    hero.addEventListener("mouseleave", function () {
      badges.forEach(function (b) { b.style.transform = ""; });
    });
  }

  /* ---- Contact / book demo handler ---- */
  var form = $("#book-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector("[name=name]") || {}).value || "there";
      var note = $("#book-note");
      if (note) {
        note.hidden = false;
        note.textContent = "Thanks, " + name.split(" ")[0] + "! We'll be in touch within one business day to lock in your call. 🎉";
      }
      form.reset();
    });
  }

  /* ---- Year ---- */
  var yr = $("#year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
