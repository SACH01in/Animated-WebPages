document.body.style.backgroundColor = "#000";
function HeroAnimation(){
    const tl = gsap.timeline({
        default:{
            duration: 0.3,
            ease: "power4.easeInOut",
        }
    });

    tl.from('.logo h2',{
        y:-100,
        opacity:0,
    });

    tl.fromTo('.navlink a',{
        y:-100,
    }, {
        y:0,
        stagger: 0.2,
    });

    tl.from('.headCon h1', {
        top: "100%",
        stagger: 0.2,
    });

    tl.from('.imgDiv',{
        filter:"blur(10px)",
        x:200,
        opacity:0,
        rotate:0,
        stagger:0.2,
    },"heroBottom")

    tl.fromTo('.textDiv1 li',{
        x:-200
    },{
        x:0,
        delay:0.3,
    },"heroBottom")
    tl.fromTo('.textDiv2 a',{
        y:100,
        opacity:0,
    },{
        y:0,
        opacity:1,
        delay:0.3,
        stagger:0.2,
    },"heroBottom")
}

HeroAnimation();

// section 2
document.querySelectorAll('section').forEach(elem => {
  ScrollTrigger.create({
    trigger: elem,
    start: "top top",
    end: "bottom top",
    onEnter: () => {
      document.body.style.backgroundColor = elem.dataset.background;
    },
    onEnterBack: () => {
      document.body.style.backgroundColor = elem.dataset.background;
    }
  });
});



const tl2 = gsap.timeline();
tl2.fromTo('.ssp',{
    y:-300,
    opacity:0,
    scale:0,
},{
    y:0,
    opacity: 1,
    scale:15,
    duration:2,
    scrollTrigger:{
        trigger: '.two',
        start: "top 50%",
        end: "bottom bottom",
        scrub:2,
        onEnterBack: () => {
            gsap.to('.ssp',{
            display:"block"
        })
        }
    },
    onComplete: () => {
        gsap.to('.ssp',{
            display:"none"
        })
    },
    
})

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start: 'top top',
        end: "bottom top",
        scrub:2,
        pin:true,
    }
})

tl3.from('.left',{
    x:-500,
    opacity:0,
    duration:2,
},'wrapper')
tl3.from('.right',{
    x:500,
    opacity:0,
    duration:2,
},'wrapper')

gsap.from('.four p',{
    y:100,
    filter:"blur(5px)",
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".four",
        start:"top top",
        end:"bottom bottom",
        scrub:2,
        pin:true,
    }
})

gsap.from('.four h1',{
    bottom: "-80%",
    duration:1,
    scrollTrigger:{
        trigger:".four",
        start:"top top",
        end:"bottom bottom",
        scrub:2,
        pin:true,
    }
})