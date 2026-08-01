/* =====================================
   MARVEL ADITYA ULTRA FLAGSHIP JS
   APPLE x IRON MAN INTERACTION
===================================== */


/* =========================
   LOADING SCREEN
========================= */


window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.transition="1s";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },2000);


});



/* =========================
   TYPING EFFECT
========================= */


const text = [

    "Full Stack Developer",

    "Creative Programmer",

    "UI Designer",

    "Photographer",

    "PPLG Student"

];


let textIndex = 0;

let charIndex = 0;

let deleting = false;


const typing = document.getElementById("typing");



function typeEffect(){


    let current = text[textIndex];


    if(!deleting){


        typing.textContent =
        current.substring(0,charIndex++);


        if(charIndex > current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }


    }else{


        typing.textContent =
        current.substring(0,charIndex--);


        if(charIndex < 0){

            deleting=false;

            textIndex++;

            if(textIndex >= text.length){

                textIndex=0;

            }

        }


    }


    setTimeout(typeEffect,80);


}


typeEffect();




/* =========================
   CUSTOM CURSOR
========================= */


const cursor =
document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


    cursor.style.left =
    e.clientX+"px";


    cursor.style.top =
    e.clientY+"px";


});



document.querySelectorAll("a,button")
.forEach(item=>{


    item.addEventListener("mouseenter",()=>{


        cursor.style.transform =
        "scale(2)";


    });


    item.addEventListener("mouseleave",()=>{


        cursor.style.transform =
        "scale(1)";


    });


});




/* =========================
   PARTICLE EFFECT
========================= */


const particleContainer =
document.getElementById("particles");



for(let i=0;i<60;i++){


    let particle =
    document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random()*100+"%";


    particle.style.top =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (Math.random()*10+5)+"s";


    particleContainer.appendChild(particle);


}





/* =========================
   COUNTER ANIMATION
========================= */


const counters =
document.querySelectorAll(".counter");



const observer =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const counter =
            entry.target;


            const target =
            +counter.dataset.target;


            let count=0;


            const update=()=>{


                const increment =
                target/100;


                if(count < target){


                    count+=increment;


                    counter.innerText =
                    Math.ceil(count);


                    setTimeout(update,20);


                }else{


                    counter.innerText =
                    target;


                }


            };


            update();


            observer.unobserve(counter);


        }


    });


});



counters.forEach(counter=>{

    observer.observe(counter);

});





/* =========================
   SCROLL REVEAL
========================= */


const reveals =
document.querySelectorAll(
"section,.project-card,.skill-card,.contact-card"
);



const revealObserver =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
            "reveal",
            "active"
            );


        }


    });


},{


    threshold:.15


});



reveals.forEach(el=>{


    revealObserver.observe(el);


});





/* =========================
   BACK TO TOP
========================= */


const topBtn =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topBtn.style.display="flex";


    }else{


        topBtn.style.display="none";


    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});





/* =========================
   MOBILE MENU
========================= */


const menu =
document.querySelector(".menu");


const nav =
document.querySelector("nav ul");



menu.addEventListener("click",()=>{


    nav.classList.toggle("show");


});





/* =========================
   3D CARD EFFECT
========================= */


const cards =
document.querySelectorAll(
".project-card,.skill-card,.hobby-card,.contact-card"
);



cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    e=>{


        let rect =
        card.getBoundingClientRect();



        let x =
        e.clientX - rect.left;



        let y =
        e.clientY - rect.top;



        let rotateX =
        (y-rect.height/2)/20;



        let rotateY =
        (rect.width/2-x)/20;



        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;



    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "translateY(0)";


    });



});





/* =========================
   ACTIVE NAVBAR
========================= */


const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let top =
        window.scrollY;


        let offset =
        section.offsetTop-200;



        if(top >= offset){


            current =
            section.getAttribute("id");


        }


    });



    links.forEach(link=>{


        link.classList.remove("active");



        if(
        link.getAttribute("href")
        ==
        "#"+current
        ){


            link.classList.add("active");


        }


    });



});