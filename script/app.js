// --------------------------------------------
$(".owl-carousel").owlCarousel({
  // loop:true,
  rtl: true,
  margin: 80,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 2,
      nav: true,
    },
    992: {
      items: 3,
      nav: true,
    },
  },
});

const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".header-ul");
menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList = "fas fa-times menu-icon";
    menu.classList.add("active");
  } else {
    menuIcon.classList = "fas fa-bars menu-icon";
    menu.classList.remove("active");
  }
});

// Variabels

const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-row");

function onTabClick(e) {
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active-opa");
  }

  const dataTarget = e.target.getAttribute("data-target");
  console.log(dataTarget);

  document.getElementsByClassName(dataTarget)[0].classList.add("active");
  setInterval(() => {
    document.getElementsByClassName(dataTarget)[0].classList.add("active-opa");
  }, 200);
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick);
}
