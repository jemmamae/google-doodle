// GSAP included in `index.html`
console.log("OK");

// What are listening on?
const stage = document.querySelector("#stage");

// Listen for mouse on stage
stage.addEventListener("mouseenter", () => {
  
  gsap.to(".letter", {
    x: 40,
    yoyo: true,
    duration: 2,
    ease: 'elastic'
  });
  
  gsap.from(".letter", {
    x: 0,
    yoyo: true, 
    duration: 2,
    ease: 'elastic'
  });
  
});
