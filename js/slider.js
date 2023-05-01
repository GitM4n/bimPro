
const sliders = document.querySelectorAll('.slider');



sliders.forEach( slider =>{
  const container =  slider.querySelector('.slider__container');
  const slides = container.querySelectorAll('.slider__items img')
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');


  let slideIndex = 0;
  let slideWidth;
  setTimeout(()=>{
    slideWidth = slides[0].clientWidth;
  }, 500);
  
  
  function updateSlider(){
    container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
   
  }

function showPrevSlide() {
  slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    
    updateSlider();
   
  }
  
  function showNextSlide() {
    slideIndex++;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    updateSlider();
  }


  let progBarTimer = setInterval(showNextSlide, 5000);
 


  window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    slideIndex = 0; //возвращение к 1-му слайду при изменении ширины окна браузера
    updateSlider();
   
  });

  function resetProgressBar(){
    const progBar = document.querySelectorAll('.progress-bar__bg');
    progBar.forEach((item)=>{
      item.style.animationName = 'none';
      setTimeout(()=>{item.style.animationName = 'progressWidth';}, 10)
    });   
  };

  prevBtn.addEventListener('click', ()=>{
      showPrevSlide();
      resetProgressBar();
      clearInterval(progBarTimer);
      progBarTimer = setInterval(showNextSlide, 5000);
    });
  

  nextBtn.addEventListener('click', ()=>{
      showNextSlide();
      resetProgressBar();
      clearInterval(progBarTimer);
      progBarTimer = setInterval(showNextSlide, 5000);
    });
  

})


 