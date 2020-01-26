const intro = document.querySelector('.intro');
const backhome= document.querySelector('.backHome')
const background = document.querySelector('.background')
    
    
    const tl = new TimelineMax();
  
  tl
    .fromTo(
    intro.children,   //dotyczy obiektu hero
    1,
    {x: '-250%'}, 
    {x: '0%',
    ease: Power2.easeInOut},  // ladniejszy sposob rozchodzenia się
    ).fromTo(
    backhome,   //dotyczy obiektu hero
    1.5,
    {y: '-100%'}, 
    {y: '0%',
    ease: Power2.easeInOut},  // ladniejszy sposob rozchodzenia się;
    )
    


function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
   }

  

 


// TYPEWRITING EFFECT -------------------------------------------------------------------

   const texts = ['  Web Developer     ', '  programmer     ', '  tybuszesDev          '];    //SET DELAY BY SPACE 
let count=0;                            //keep the text track
let index = 0;                          //keep the individual letter
let currentText = '';                   //currently selected text change dinamicaly
let letter = '';                        //idividual letter change dinamicaly

(function type(){

    

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
       
    }
    setTimeout(type, 500);              // You can change the speed 

}());                               // RUN IMMADIETLY (SELF INVOLVED)

// ----------------------------------------------------------------------------------------

  //NAV BAR AND HAMBURGER ------------------------------------

  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle("open");
      links.forEach(link =>{
          link.classList.toggle('fade');
      });
      
  });

  //------------------------------------------------------------------
  