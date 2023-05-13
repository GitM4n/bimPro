
const sliders = document.querySelectorAll('.slider');



  sliders.forEach( slider =>{
    const container =  slider.querySelector('.slider__container');
    const slides = container.querySelectorAll('.slider__items img')
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    setTimeout(()=>{
      let slideIndex = 0;
      let slideWidth = slides[0].clientWidth;
      let progress;
      let progBarTimer = setInterval(showNextSlide, 5000);


      function AnimateBar(){
        const progressBar = slider.querySelector('.progress-bar__bg');
        progressBar.style.animationName = 'none';
        setTimeout(()=>{progressBar.style.animationName = 'progressWidth';}, 0)

      
    }

    function showPrevSlide() {
      slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        
      
      }
      
      function showNextSlide() {
        slideIndex++;
        if (slideIndex > slides.length - 1) {
          slideIndex = 0;
        }
        container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      }

    prevBtn.addEventListener('click', ()=>{
      showPrevSlide();
      clearInterval(progBarTimer);
      progBarTimer = setInterval(showNextSlide, 5000);
      progress = 0;
      AnimateBar();

    })

    nextBtn.addEventListener('click', ()=>{
      showNextSlide();
      clearInterval(progBarTimer);
      progBarTimer = setInterval(showNextSlide, 5000);
      progress = 0;
      AnimateBar();

    })
    window.addEventListener('resize', () => {
          slideWidth = slides[0].clientWidth;
          container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
      
        
    });
    AnimateBar();  
  },500);
  
})


 


///////////////////SLIDER SMI////////////////////////////

const smiSlider =  document.querySelector('.smi-slider')
const smiSliderCon = document.querySelector('.smi-slider__container')
const smiSlides = document.querySelectorAll('.smi-slider__item')
const smiPrev = document.querySelector('.smi-prev')
const smiNext = document.querySelector('.smi-next')
const smiPag = document.querySelector('.smi-slider__pagination-text')



let slidePos;  // нач позиция слайдера
let slideScroll = 1; // кол-во прокручиваемых слайдеров
let slidePerView; // кол-во видимых слайдеров
let slideSmiWidth;
let slidePag = slidePerView;

setTimeout(()=>{
  slideSmiWidth = smiSliderCon.clientWidth;
}, 800)


smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`

checkSliderWidht();

function checkSliderWidht(){

  if (window.innerWidth < 690){
    slidePos = 0;
    slidePerView = 1;
    slidePag = slidePerView;
    slideSmiWidth = smiSliderCon.clientWidth;
    smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
    smiSlides.forEach(e => {
      e.style.cssText = `padding:15px 25px; max-width:100%;flex:1 0 100%;`
    })
    smiSliderCon.style.cssText = `max-width: calc(100%); `
    
  }else if (window.innerWidth < 990){
    slidePos = 0;
    slidePerView = 2;
    slidePag = slidePerView;
    slideSmiWidth = smiSliderCon.clientWidth;
    smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
    smiSlides.forEach(e => {
      e.style.cssText = `padding:15px 25px; max-width:100%; flex:1 0 50%;`
    })
    smiSliderCon.style.cssText = `max-width: calc(100% - 30px);`

  }else if (window.innerWidth < 1450){
    slidePos = 0;
    slidePerView = 3;
    slidePag = slidePerView;
    slideSmiWidth = smiSliderCon.clientWidth;
    smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
    smiSlides.forEach(e => {
      e.style.cssText = `padding:20px 30px; max-width:100%; flex:1 0 33.333%;`
    })
    smiSliderCon.style.cssText = `max-width: calc(100% - 60px);`
  
  }else{
    slidePos = 0;
    slidePerView = 4;
    slidePag = slidePerView;
    slideSmiWidth = smiSliderCon.clientWidth;
    smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
    smiSlides.forEach(e => {
      e.style.cssText = `padding:40px 50px; max-width:320px; flex:0 0 auto;`
    })
    smiSliderCon.style.cssText = `max-width: calc(100% - 90px);`
  }

  smiSliderCon.style.transform = `translateX(-${slidePos * (slideSmiWidth / slidePerView + 30)}px)`;
}




window.addEventListener('resize', ()=>{

checkSliderWidht()

})



smiNext.addEventListener('click', ()=>{
  const slideRem = smiSlides.length - (slidePos + slidePerView);  // получаем количество оставшихся слайдеров
  if (slideRem > 0){
    slidePos += slideScroll;
    slidePag++;
  }else{
    slidePos = 0;
    slidePag = slidePerView;
  }
  smiSliderCon.style.transform = `translateX(-${slidePos * (slideSmiWidth / slidePerView + 30)}px)`;
  smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
})


smiPrev.addEventListener('click', ()=>{
  if (slidePos > 0 ){
    slidePos -= slideScroll;
    slidePag--;
  }else{
    slidePos = smiSlides.length - slidePerView;
    slidePag = smiSlides.length ;
  }
  smiSliderCon.style.transform = `translateX(-${slidePos * (slideSmiWidth / slidePerView + 30 )}px)`;
  smiPag.innerHTML = `${slidePag} / ${smiSlides.length}`
})





