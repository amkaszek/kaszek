(function () {
  var btn = document.querySelector(".menu-btn");
  var overlay = document.querySelector(".overlay");
  var drawer = document.querySelector(".drawer");
  var closeBtn = document.querySelector(".close-btn");
  if (!btn || !drawer) return;

  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    btn.classList.add("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    btn.classList.remove("hidden");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
})();
