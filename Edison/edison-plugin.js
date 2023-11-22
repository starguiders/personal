(function () {
  var html = document.documentElement;
  var themeControls = document.querySelector("[data-theme-controls]");
  var toggle = themeControls.querySelector(".color-scheme-toggle");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  var setToggleLabel = function () {
    let mode;

    mode = !html.dataset.colorScheme
      ? prefersDark.matches
        ? "dark"
        : "light"
      : html.dataset.colorScheme;
  };

  var setColorScheme = function (value) {
    html.dataset.colorScheme = value;
    localStorage.setItem("color-scheme", value);
    setToggleLabel();
  };

  var init = function () {
    setToggleLabel();
  };

  toggle.addEventListener("click", function () {
    if (!html.dataset.colorScheme && prefersDark.matches) {
      setColorScheme("light");
      updateColorSchemeStatus("light");
      return;
    }

    var scheme = html.dataset.colorScheme === "dark" ? "light" : "dark";

    setColorScheme(scheme);
  });

  init();
})();
