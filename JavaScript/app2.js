


// ANIMATED REGISTER FORM -------------------------------------------------

function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-circle-right");

   
   
    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;


            //Check for validation
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease"
            }
            //get rid animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            })

        });
    });
}






function validateUser(user){
    if(user.value.length < 6){
        console.log('not enough characters');
        error('rgb(189,87,87)');
    }else{
        error('rgb(87,189,130)')
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(87,189,130)')
        return true;
    }else{
        error('rgb(189,87,87)');
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();

// ----------------------------------------------------------------

// NAVIGATION AND HAMBURGER ---------------------------------------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
    
});

// ---------------------------------------------------------------

