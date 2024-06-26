document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const body = document.body;
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const modeIcon = document.querySelector(".icon");

  let darkMode = true;
  let currentLanguage = 0;
  const languages = ["English", "O'zbek", "Russian"];

  const imagePaths = {
    English: {
      dark: ["./img/DARK.svg", "./img/light.svg"],
      light: ["./img/darkk.svg", "./img/power.svg"],
    },
    Ozbek: {
      dark: ["./img/DARK.svg", "./img/light.svg"],
      light: ["./img/darkk.svg", "./img/power.svg"],
    },
    Ruscha: {
      dark: ["./img/DARK.svg", "./img/light.svg"],
      light: ["./img/darkk.svg", "./img/power.svg"],
    },
  };

  function updateImages() {
    const mode = darkMode ? "dark" : "light";
    const lang = languages[currentLanguage];
    img1.src = imagePaths[lang][mode][0];
    img2.src = imagePaths[lang][mode][1];
  }

  function outside(element, callback) {
    element.style.animation = 'fadeOutImage 0.5s forwards';
    setTimeout(callback, 1);
  }

  function inside(element) {
    element.style.animation = 'fadeInImage 0.5s forwards';
  }

  btn.addEventListener("click", function () {
    darkMode = !darkMode;
    body.classList.toggle("light-mode", !darkMode);
    modeIcon.textContent = darkMode ? "🌙" : "☀️";
    modeIcon.style.transform = darkMode ? "rotate(0deg)" : "rotate(360deg)";
    
    outside(img1, () => {
      updateImages();
      inside(img1);
    });

    outside(img2, () => {
      updateImages();
      inside(img2);
    });
  });

  const languageToggle = document.getElementById("languageToggle");
  const caption1 = document.getElementById("caption1");
  const caption2 = document.getElementById("caption2");
  languageToggle.addEventListener("click", function () {
    currentLanguage = (currentLanguage + 1) % languages.length;
    caption1.textContent = languages[currentLanguage];
    caption2.textContent = languages[currentLanguage];

    outside(img1, () => {
      updateImages();
      inside(img1);
    });

    outside(img2, () => {
      updateImages();
      inside(img2);
    });
  });
});
