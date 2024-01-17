const elements = document.querySelectorAll('h1');

elements.forEach((e) => {
    gsap.to((e), {
        // y:-30,
        //  stagger: 0, // Adjust the stagger value as needed
        //   ease: 'power2.out',
        yoyo: true,
        //  repit: -1,
        //  opacity: 0.

    })
    var tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(e, {
        y: -110,
        duration: 1,

         opacity: 1,

    });

})


// Include GSAP library in your HTML file