const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function videoAnimation() {
  let playCursor = document.querySelector("#play");
  let video = document.querySelector(".videoContainer");

  video.addEventListener("mouseenter", () => {
    gsap.to(playCursor, {
      scale: 1,
      display: "block",
    });
  });

  video.addEventListener("mouseleave", () => {
    gsap.to(playCursor, {
      scale: 0,
      display: "none",
    });
  });

  video.addEventListener("mousemove", (dets) => {
    gsap.to(playCursor, {
      left: dets.x - 40,
      top: dets.y - 40,
    });
  });
}
videoAnimation();

function textAnimation() {
  let tl = gsap.timeline();

  tl.from("h1", {
    y: 500,
    duration: 0.6,
    stagger: 0.3,
  });
  tl.from(".videoContainer", {
    y: 500,
    scale: 0,
    duration: 0.5,
  });
}

textAnimation();

let shoping = document.querySelectorAll(".child");

document.addEventListener("mousemove", (d) => {
  gsap.to(".cursor", {
    left: d.x,
    top: d.y,
  });
});

shoping.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%, -50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      transform: "translate(-50%, -50%) scale(0)",
    });
  });
});
// document.querySelector()
