var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
tl.to(
  ".fanta",
  {
    top: "120%",
    left: "2%",
    rotate:"360deg"
  },
  "orange"
);
tl.to(
  ".orange1",
  {
    top: "115%",
    left: "23%",
    rotate:"180deg"
  },
  "orange"
);
tl.to(
  ".orange2",
  {
    top: "167%",
    right: "5%",
  },
  "orange"
);
tl.to(
  ".leaf1",
  {
    top: "120%",
    left: "85%",
    rotate:"130deg"
  },
  "orange"
);
tl.to(
  ".leaf2",
  {
    top: "110%",
    left: "2%",
    rotate:"130deg"
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#third",
    start: "30% 95%",
    end: "60% 60%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(".pepsi",{
  rotate:"-180deg",
  top:"110%",
  left: "0"
},"can")
tl2.from(".coca-cola",{
  rotate:"180deg",
  top:"110%",
  left: "0"
},"can")

tl2.to(".fanta",{
  left:"35%",
  top:"232%",
  width:"60vh",
  rotate:"-360deg"
},"can")