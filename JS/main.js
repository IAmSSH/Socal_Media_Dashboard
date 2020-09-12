let textLight = document.getElementsByClassName("light-theme__text-light");
let textDark = document.getElementsByClassName("light-theme__text-dark");
let headerBg = document.getElementsByClassName("light-theme__header");
let cardBg = document.getElementsByClassName("light-theme__card");
let overviewTitle = document.getElementById("overview");
let bg = document.getElementsByTagName("body")[0];

let toggler = document.getElementsByClassName("toggle-text")[0];

toggler.addEventListener("click", () => {
  bg.classList.toggle("dark-theme__bg");

  for (const ele of headerBg) {
    ele.classList.toggle("dark-theme__header");
  }

  for (const ele of cardBg) {
    ele.classList.toggle("dark-theme__card");
  }

  for (const ele of textDark) {
    ele.classList.toggle("dark-theme__text-dark");
  }

  for (const ele of textLight) {
    ele.classList.toggle("dark-theme__text-light");
  }

  for (ele of overviewTitle.classList) {
    if (ele == "dark-theme__text-light") {
      overviewTitle.classList.toggle("dark-theme__text-light");
      overviewTitle.classList.toggle("dark-theme__text-dark");
      break;
    }
    if (ele == "dark-theme__text-dark") {
      overviewTitle.classList.toggle("dark-theme__text-dark");
      overviewTitle.classList.toggle("light-theme__text-light");
      break;
    }
  }
});
