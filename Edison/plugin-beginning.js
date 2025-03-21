(function () {
  const html = document.documentElement;
  const theme = localStorage.getItem("theme");
  const colorScheme = localStorage.getItem("color-scheme");

  html.removeAttribute("data-no-js");
  colorScheme && html.setAttribute("data-color-scheme", colorScheme);
  theme && html.setAttribute("data-theme", theme);
})();
