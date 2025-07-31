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