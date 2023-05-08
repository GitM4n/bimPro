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
  
/////////////////////////////////////////////////////////////////////////////////////////////////////  

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

//////////////////////////////////////////////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////////////////////////////////




const spoiler = document.querySelectorAll('.spoiler-title');
spoiler.forEach(title => {
  title.addEventListener('click', ()=>{
    
    if(title.nextElementSibling.classList.contains('_show')){
      title.nextElementSibling.classList.remove('_show');
      title.classList.remove('mark')
    }else{
      spoiler.forEach((s) =>{
        s.nextElementSibling.classList.remove('_show')
        s.classList.remove('mark')
      })
      title.nextElementSibling.classList.add('_show')
      title.classList.add('mark');
    }
   
    
  })
})


///////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const links = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик клика на каждую из них
links.forEach(link => {
  link.addEventListener('click', function(e) {
  e.preventDefault(); // отменяем стандартное поведение ссылки

  const targetId = this.getAttribute('href'); // получаем id элемента, к которому нужно прокрутить
  
  // проверяем, есть ли элемент на странице с таким id
  const targetEl = document.querySelector(targetId);
  if (!targetEl) return;

  const topOffset = targetEl.offsetTop; // получаем расстояние от верха страницы до элемента

  // делаем плавную прокрутку к элементу
    window.scrollTo({
    top: topOffset,
    behavior: 'smooth'
    });
  });
});



/////////////////////////////////////////////////////////////////////////////////////////



const filterTitle = document.querySelector('.filters-spoiler__title');
const filterItems = document.querySelector('.filters-spoiler__items')

filterTitle.addEventListener('click', ()=> {
  filterItems.classList.toggle('filter-show')
  if (window.innerWidth < 1399 && !filterItems.classList.contains('filter-show')){
   
  }
  
})


///////////////////////////////////////////////////////////////////////////////////////////

const dropdownItems = document.querySelectorAll('.dropdown-item');

function hideContent(){
  const dropdownMenu = document.querySelectorAll('.dropdown-menu');
  dropdownMenu.forEach(item => {

    const dropdownTextContents = item.querySelectorAll('.dropdown-content');
    dropdownTextContents.forEach((e)=>{
      e.classList.remove('_open')
    })

    const dropdownTitles = item.querySelectorAll('.dropdown-title');
    dropdownTitles.forEach(i => {
      i.classList.remove('_active')
    })

  })

  
}
hideContent()

dropdownItems.forEach(dropdownItem => {
  const dropdownTitle = dropdownItem.querySelector('.dropdown-title');
  const dropdowntTextContent = dropdownItem.querySelector('.dropdown-content');

  dropdownTitle.addEventListener('click', ()=>{
    if (!dropdowntTextContent.classList.contains('_open')){
      hideContent();
      dropdowntTextContent.classList.add('_open');
      dropdownTitle.classList.add('_active')
    }else{
      dropdowntTextContent.classList.remove('_open');
      dropdownTitle.classList.remove('_active')
    }
  })
})



///////////////////////////////////////////////////////////////////////////////////////////


const sendRequest = document.querySelector('.request__send')

const popUp = document.getElementById('popup')
const popUpClose = document.querySelector('.popup-close')

sendRequest.addEventListener('click', ()=>{
  popUp.classList.add('open')
  document.body.classList.add('_lock')
})

popUpClose.addEventListener('click', ()=>{
    popUp.classList.remove('open')
 
  document.body.classList.remove('_lock')
})






  

