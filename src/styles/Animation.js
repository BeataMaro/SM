import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animationMoveX = el => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, x: "-=100", duration: 1 },
    { autoAlpha: 1, x: 0 }
  )
}

export const animationMoveY = (el, toTop) => {
  if (toTop)
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: "+=100", duration: 1 },
      { autoAlpha: 1, y: 0 }
    )
  else
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: "-=100", duration: 1 },
      { autoAlpha: 1, y: 0 }
    )
}

export const animationFade = (el, durationTime) => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, duration: `${durationTime}` },
    { autoAlpha: 1 }
  )
}

export const animationScrollBottom = el => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, y: "+=100", duration: 0.7 },
    {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
      },
    }
  )
}

export const animationMoveXScroll = (el, translate) => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, x: `${translate}`, duration: 1 },
    {
      autoAlpha: 1,
      x: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    }
  )
}
