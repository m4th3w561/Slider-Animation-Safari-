const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.0, delay: 0.25 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 0.75 })
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 0.75 }, '-=0.75')