(function () {
	new Date().getFullYear();
	document.getElementById("year").innerHTML = new Date().getFullYear();
})();

const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% )`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    // linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}

// const items = document.querySelectorAll('.item')
// const image = document.querySelector('hidden-i')

// items.forEach((el) => {
//   el.addEventListener('mouseover', (e) => {
//     imageData = e.target.getAttribute('data-image')
//     console.log(imageData)
//     e.target.style.zIndex = 99
//     image.setAttribute('src', imageData)
//   })
//   el.addEventListener('mousemove', (e) => {
//     image.style.top = e.clientY + 'px'
//     image.style.left = e.clientX + 'px'
//   })
//   el.addEventListener('mouseleave', (e) => {
//     e.target.style.zIndex = 1
//     image.setAttribute('src', '')
//   })
// })

// let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

// tl.to(".create", {y: 0%, duration:0.7, stagger: 0.2});
// tl.to("main", {y: 100%, duration: 1.5, delay: 0.5});
// tl.to("h1", {opacity:0}, {opacity:1, delay: .5});