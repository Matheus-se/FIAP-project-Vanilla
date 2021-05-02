document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".header-title", {
    y: +80,
    autoAlpha: 0.6,
    opacity: 0.6,
    duration: 1,
    ease: "expo.out",
  });

  gsap.from(".content-title", {
    scrollTrigger: {
      trigger: ".content-section",
      start: "top center",
    },
    x: -80,
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5,
  });

  gsap.from(".first-content-container", {
    scrollTrigger: {
      trigger: ".content-section",
      start: "top+=100 center",
    },
    x: +200,
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5,
  });

  gsap.from(".white-bar", {
    scrollTrigger: {
      trigger: ".content-section",
      start: "top center",
      end: "center center",
      scrub: 1,
    },
    width: 0,
  });

  gsap.from(".second-content-container", {
    scrollTrigger: {
      trigger: ".content-section",
      start: "center-=100 center",
    },
    x: -200,
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5,
  });
});
