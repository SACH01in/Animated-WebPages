const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

function LoaderAnimation(){
    function loaderLogoAnimation(){
        const LoaderTl = gsap.timeline()
        
        LoaderTl.to('.loader .logo',{
            width:200,
            duration:1,
        })
        LoaderTl.to('.loader .logo h2 span',{
            y:0,
            duration:0.5,
            stagger:0.1,
        })
        LoaderTl.to('.loader .logo h2 span',{
            y:"100%",
            duration:0.5,
            stagger:0.1,
        })
        
        LoaderTl.to('.loader .logo',{
            width:0,
            duration:1,
        })
        
    }
    loaderLogoAnimation();
    const logoanimate = setInterval(() => {
        loaderLogoAnimation()
    },4000);

    let loadVal = 0;
    const counter = setInterval(() => {
        if(loadVal < 100){
            loadVal++;
            document.querySelector('#loadVal').innerText = loadVal;
        }
        if(loadVal >= 100 ){
            clearInterval(counter);
            clearInterval(logoanimate);
            gsap.set('.loader .logo',{ width: 200});
            gsap.set('.loader .logo h2 span',{ y:0});
            gsap.to(".loader", {
                y: "-100vh",
                duration: 1,
                delay: 0.5,
                // oncomplete: () => {
                //     gsap.to('.loader', {
                //         opacity:0,
                //         duration:0.5
                //     });
                // }
            });
            
        }
    },40);
    
}
LoaderAnimation();



document.body.style.backgroundColor = "#000";
function HeroAnimation(){
    const tl = gsap.timeline({
        default:{
            duration: 0.3,
            ease: "power4.easeInOut",
        }
    });
    tl.from('.one',{
        y:"-100%",
        duration:1,
        delay:4,
    });
    tl.fromTo('#navbar .logo h2',{
        y:-100,
        opacity:0,
    },{
        y:0,
        opacity:1,
        stagger: 0.2,
    });
    tl.fromTo('.navlink a',{
        y:-100,
        opacity:0,
    }, {
        y:0,
        opacity:1,
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
    },"heroBottom");
    tl.to('.loader',{
        display:"none",
    })
}
HeroAnimation();