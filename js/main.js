document.addEventListener("DOMContentLoaded", () => {
  window.ityped.init(document.querySelector(".ityped"), {
    strings: [
      "I love you javaScript",
      "I love Python",
      "I love R",
      "I love CSS",
    ],
    loop: true,
  });
});
