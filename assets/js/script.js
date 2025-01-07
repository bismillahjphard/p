let typed = new Typed(".teks", {
  strings: ["Node Validator"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

const showPortofolio = (type = null) => {
  const projects = document.querySelectorAll(`#network .project-container`);

  if (type) {
    [...projects].forEach((x) => {
      if (x.getAttribute("data-type") == type) {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  } else {
    [...projects].forEach((x) => {
      x.style.display = "block";
    });
  }
};

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
navBar = document.querySelector(".navigasi_bar");
navBar.classList.toggle("active");
}

