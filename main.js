const nav = document.getElementById("topNav")
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
}

const navButton = document.querySelector("button[aria-expanded]")

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false
  navButton.setAttribute("aria-expanded", !expanded)
}

navButton.addEventListener("click", toggleNav)

//smooth scrolling
const navigation = document.querySelector(".navbar .nav")

const navigationHeight = navigation.offsetHeight

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
)

//not sure if this is needed
const links = document.querySelectorAll(".nav a")

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    const target = document.querySelector(e.target.getAttribute("href"))

    window.scrollTo({
      top: target.offsetTop - navigationHeight,
      behavior: "smooth",
    })
  })
})

console.log("test")
