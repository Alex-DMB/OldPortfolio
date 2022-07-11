/* Light Mode */

const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function(){
  document.body.classList.toggle("light-mode");
})

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



/* Scroll Reveal */

ScrollReveal().reveal('.scrollReveal',{ duration: 1500, reset: false, distance: '120px' } );

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
  
