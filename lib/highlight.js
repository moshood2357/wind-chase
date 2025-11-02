// lib/highlight.js

export const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home");
  const servicesMenu = document.querySelector("#services");
  const aboutMenu = document.querySelector("#about");

  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu?.classList.add("highlight");
    aboutMenu?.classList.remove("highlight");
    servicesMenu?.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu?.classList.add("highlight");
    homeMenu?.classList.remove("highlight");
    servicesMenu?.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu?.classList.add("highlight");
    aboutMenu?.classList.remove("highlight");
    homeMenu?.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};
