const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const footer = document.querySelector('.footer');
const image = document.querySelector('.image2');

const coLogoWhitePath =  "./img/logo1.png";
const coLogoBlackPath =  "./img/logo2.png";

const moonPath = 
"M16.5 25.5C16.5 40.6878 27.5 54.5 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16.5 10.3122 16.5 25.5Z";
const sunPath = 
    "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector('#darkMode');
let toggle = false;
let logopath= coLogoBlackPath;

// WE NEED TO CLICK ON THE SUN

darkMode.addEventListener('click', () => {
    //we need to use anime.js
    //HERE WE SET UP THE TIMELINE
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    //ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [{ value: toggle ?  sunPath : moonPath }]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
        
    } ,'-= 500'
    ).add({
        targets: ".image2",
        rotate: toggle ? 360 : -360,
        
        src: toggle ? coLogoBlackPath: coLogoWhitePath
        
        }
     ).add({
        targets: "section",
        backgroundColor: toggle ? '#ba7453' :  'rgb(22,22,22)'
    }).add({
        targets: "section2",
        background: toggle ? '#ba7453' : 'rgb(22,22,22)'
    },'-= 500'
    ).add({
        targets: "slider",
        backgroundColor: toggle ? '#ba7453' : 'rgb(22,22,22)'
    },'-= 750'
    ).add({
        targets: "nav",
        backgroundColor: toggle ? '#ba7453' : 'rgb(22,22,22)'
    },'-= 750'
    )
        
        
    ;
    //Everytime we click no the sun I wantt that toggle to switch
    if(!toggle){
        toggle=true;

    }else{
        toggle=false;
   
    }
    });

const tl = new TimelineMax();

tl.fromTo(
    hero,   //dotyczy obiektu hero
    1,
    {height: '0%'}, 
    {height: '80%',
    ease: Power2.easeInOut} // ladniejszy sposob rozchodzenia się
).fromTo(
    hero, 
    1.2, 
    {width:"100%"}, 
    {width:'80%',
    ease: Power2.easeInOut}
)
.fromTo(
    slider, 
    1.2, 
    {x: '-100%'}, // zmiana na osi x;
    {x: '0%', 
    ease: Power2.easeInOut}, 
    "-=1.2" // wydazy się 1.2sec wczesniej
).fromTo(
    footer, 
    0.4, 
    {x: '-100%'}, // zmiana na osi x;
    {x: '0%', 
    ease: Power2.easeInOut}
     // wydazy się 1.2sec wczesniej
)


.fromTo(logo, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=1");



