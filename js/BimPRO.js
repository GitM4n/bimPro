const accordingCounterMax = document.querySelector('.according__counter_max');
const accordingCounterMin = document.querySelector('.according__counter_min');


function runCounter() {
    accordingCounterMax.innerHTML = '';
    let counter = 1;
    let interval = setInterval(function() {
      accordingCounterMax.innerHTML = `+${counter}`;
      accordingCounterMin.style.height = '100%';
      counter++;
      if (counter > 20) {
        clearInterval(interval);
      }
    }, 100);
  }










const according = document.querySelector(".warranty");

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains('triggered')) {  
            entry.target.classList.add('triggered');// добавляем класс, чтобы пометить, что функция уже была вызвана
             // здесь можно выполнить нужный скрипт
            runCounter(); 
        }
      }
    });
  }, options);   
  observer.observe(according);   
  
  

const steps = document.querySelector('.Steps');
const stepArrow = document.querySelectorAll('.steps__arrow')
let stepsObrerve = new IntersectionObserver((e)=>{
  e.forEach((step)=>{
    if(step.isIntersecting){
        stepArrow.forEach((arrow)=>{
          if(!arrow.classList.contains('visible')){
              arrow.classList.add('visible')
          }
        })
      
    }
  })
}, options);
stepsObrerve.observe(steps)



const dropdownOne = document.querySelector('.helpBusiness__selector');
const dropdownTwo = document.querySelector('.ourSolutions__selector');
const dropdownThree = document.querySelector('.aboutWork__selector');

dropdownOne.nextElementSibling.classList.add('hidden')
dropdownTwo.nextElementSibling.classList.add('hidden')
dropdownThree.nextElementSibling.classList.add('hidden')


dropdownOne.addEventListener('click', ()=>{
   dropdownOne.nextElementSibling.classList.toggle('hidden')
   dropdownTwo.nextElementSibling.classList.add('hidden')
   dropdownThree.nextElementSibling.classList.add('hidden')
   
})
dropdownTwo.addEventListener('click', ()=>{
  dropdownOne.nextElementSibling.classList.add('hidden')
  dropdownTwo.nextElementSibling.classList.toggle('hidden')
  dropdownThree.nextElementSibling.classList.add('hidden')
  
})
dropdownThree.addEventListener('click', ()=>{
  dropdownOne.nextElementSibling.classList.add('hidden')
  dropdownTwo.nextElementSibling.classList.add('hidden')
  dropdownThree.nextElementSibling.classList.toggle('hidden')
  
})







const spoiler = document.querySelectorAll('.spoiler-title');
spoiler.forEach(title => {
  title.addEventListener('click', ()=>{
   
    if(title.nextElementSibling.classList.contains('_show')){
      title.nextElementSibling.classList.remove('_show');
      title.classList.remove('mark');
    }else{
      spoiler.forEach((s) =>{
        s.nextElementSibling.classList.remove('_show')
      })
      title.nextElementSibling.classList.add('_show')
      title.classList.add('mark');
    }
   
    
  })
})


const tooltip = document.querySelectorAll('.tooltip');
const tooltipText = document.querySelectorAll('.tooltipText');


tooltip.forEach((pictures)=>{
  tooltipText.forEach((i)=>{
      pictures.addEventListener('mousemove', (e) => {
        i.style.top = e.clientY + 5 + 'px';
        i.style.left = e.clientX + 5 + 'px';
      })

   
    pictures.addEventListener('mouseover', ()=>{
      pictures.lastElementChild.classList.add('_active');
    })
    pictures.addEventListener('mouseout', ()=>{
      pictures.lastElementChild.classList.remove('_active');
    })
   
    
  });
})











  

