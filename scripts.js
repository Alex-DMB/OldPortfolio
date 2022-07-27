/* Light Mode */

const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function(){
  document.body.classList.toggle("light-mode");
})

/* Menu Mobile */
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
const nav = document.getElementById('nav')
nav.classList.toggle('active')

}
btnMobile.addEventListener('click', toggleMenu)


/* Efeito Digitação */

function typeWriter(element){
  const arrayText = element.innerHTML.split('');
  element.innerHTML = ' ';
  arrayText.forEach(function(letter, i){   
    
  setTimeout(function(){
      element.innerHTML += letter;
  }, 200 * i)

});
}


const name = document.getElementById('myName');
typeWriter(name);

/* Saiba Mais */


const aboutMe = document.getElementById('aboutMe')
const aboutMoreButton = document.getElementById('aboutMore')
const aboutMoreText = `Gosto de assistir animes, jogar em Fliperama, sou flamenguista e adoro festas, meus estilos músicais favoritos são Funk e Trap. 

Desenho desde criança, hoje raramente devido ao foco na programação mas nunca perco o jeito, creio que esse seja um dos meus maiores talentos.`

function changeAboutMe(){
  aboutMoreButton.addEventListener("click",function(){
    aboutMe.textContent = aboutMoreText
  })
}

changeAboutMe()

/* Scroll Reveal */

ScrollReveal().reveal('.scrollReveal',{ duration: 1500, reset: false, distance: '120px' } ); 


function swiperDesktop(){
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 
}

function swiperTablet(){
  var swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 
  }

function swiperMobile(){
  var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 
  }
  

  if ((window.innerWidth > 959))  {

    swiperDesktop()

    
    }

    else if ((window.innerWidth > 767 && window.innerWidth < 960)) {

      swiperTablet()

    }

    else {
      swiperMobile()

    }