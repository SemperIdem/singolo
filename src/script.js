window.onload = function() {
  chooseMenuPageHandler();  
  controlSliderButton();
  turnOffPhone();
  chooseFilterPageHandler();
  choosePicPageHandler();
  prevertSubmit();
  openeBurgerMenu();
  closeBurgerMenu();
  clickBurgerMenu();
}






// NAVIGATION-MENU
const chooseMenuPageHandler = () => {
  document.querySelector('.header__menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-link')) {
      console.log(e);
      let clickedMenuItem = e.target;
      removeSelectedItems();
      selectMenuItem(clickedMenuItem);
      const select = clickedMenuItem.innerHTML;
      switch(select) {
        case 'HOME': {
          slider.scrollIntoView({behavior: "smooth"});
          break;
        }
        case 'SERVICES': {
          window.scrollTo({top: services.offsetTop - 95, behavior: "smooth"});
          break;
       }
        case 'PORTFOLIO': {
        window.scrollTo({top: portfolio.offsetTop - 95, behavior: "smooth"});
        break;
       }
        case 'ABOUT': {
        window.scrollTo({top: about.offsetTop - 95, behavior: "smooth"});
        break;
      }
        case 'CONTACT': {
        window.scrollTo({top: contact.offsetTop - 95, behavior: "smooth"});
        break;
      }
    default: {
      window.scrollTo({top: 0, behavior: "smooth"});
  }
    }
  }
  })
}

const removeSelectedItems = () => {
  let menuItems = document.querySelectorAll('.header__menu .menu-link');
  menuItems.forEach(item => {
    item.classList.remove('menu-link_active');
  })
}

const selectMenuItem = (clickedMenuItem) => {
  clickedMenuItem.classList.add('menu-link_active');
}


/// slider
let currentIndex = 0;
let isEnabled = true;
let slides =  document.querySelectorAll('.slider__content');

const changeCurrentSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;
}

const hideSlide = (direction) => {
  const slide = slides[currentIndex];
  isEnabled = false;
  slide.classList.add(direction);
  slide.addEventListener('animationend', function() {
    console.log('hideESlide');
    this.classList.remove('slider__content_current', direction);
  })
}

const showSlide = (direction) => {
  const slide = slides[currentIndex];
  slide.classList.add('slider__content_next', direction);
  slide.addEventListener('animationend', function() {
    console.log('showWSlide');
    this.classList.remove('slider__content_next', direction);
    this.classList.add('slider__content_current');
    isEnabled = true;
  })

}

const nextSlide = (index) => {
  hideSlide('to-left');
  changeCurrentSlide(index + 1);
  showSlide('from-right')
}

const prevSlide = (index) => {
  hideSlide('to-right');
  changeCurrentSlide(index - 1);
  showSlide('from-left')
}

const controlSliderButton = () => {
  document.querySelector('.page__slider').addEventListener('click', (e) => {
      if (e.target.classList.contains('slider__control_next')) {
        if (isEnabled) {
        nextSlide(currentIndex);
        }
      }
      else if(e.target.classList.contains('slider__control_prev')) {
        if (isEnabled) {
        prevSlide(currentIndex);
        }
      }
  })
}


const openeBurgerMenu = () => {
  const burgerMenu = document.querySelector('.burger-menu__icon');
  burgerMenu.addEventListener('click', (event) => {
      const overlay = document.querySelector('.overlay');
      overlay.classList.add('overlay_active');
      document.body.style.overflow = 'hidden';
  });
}

const closeBurgerMenu = () => {
  const burgerMenuActive = document.querySelector('.burger-menu_active');
  burgerMenuActive.addEventListener('click', (event) => {
      const overlay = document.querySelector('.overlay');
      overlay.classList.remove('overlay_active');
      document.body.style.overflow = 'auto';
  });
}


const clickBurgerMenu = () => {
document.querySelector('.side-menu__navigation').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('side-menu__navigation__text')) {
        document.querySelectorAll('.side-menu__navigation__text_active').forEach(item => {
            item.classList.remove('menu__navigation__text_active');
        });
        target.classList.add('menu__navigation__text_active');

        const text = target.innerHTML;
        switch (text) {
            case 'Home': {
                slider.scrollIntoView({behavior: "smooth"});
                break;
            }
            case 'Services': {
                window.scrollTo({top: services.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Portfolio': {
                window.scrollTo({top: portfolio.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'About': {
                window.scrollTo({top: about.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Contact': {
                window.scrollTo({top: contact.offsetTop - 95, behavior: "smooth"});
                break;
            }
            default: {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }

        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('overlay_active');
        document.body.style.overflow = 'auto';
    }
})
}





// TURN ON-OFF PHONE SCREEN 
var verticalScreenOn = true;
var horizontalScreenOn = true;


var verticalScreen = document.createElement('img');
verticalScreen.src = 'src/assets/black_screen.png';
let slider__content = document.querySelector('.slider__content')
verticalScreen.style.position = 'absolute';
verticalScreen.style.display = 'none';
verticalScreen.style.zIndex = 1000;
verticalScreen.style.top = '211px';
verticalScreen.style.left = '121px';
slider__content.appendChild(verticalScreen);


var horizontalScreen = verticalScreen.cloneNode();
horizontalScreen.style.transform = 'rotate(90deg)';
horizontalScreen.style.left = '553px';
slider__content.appendChild(horizontalScreen);




const turnOffPhone = () => {
  document.querySelector('.slider__content_current').addEventListener('click', (e) => {
    if (e.target.classList.contains('iphone_vertical')) {
        turnOffVertical();
    }
  else if (e.target.classList.contains('iphone_horizontal')) {
    turnOffHorizontal();
    } 
  })
}


const turnOffVertical = () => {
  let verticalScreen = document.querySelector('.slider__black-screen');
  if (verticalScreen.classList.contains('slider__black-screen_active') ) {
    verticalScreen.classList.remove('slider__black-screen_active');
  }
  else {
    verticalScreen.classList.add('slider__black-screen_active');
  }
}

const turnOffHorizontal = () => {
  let verticalScreen = document.querySelector('.slider__black-screen_horizontal');
  if (verticalScreen.classList.contains('slider__black-screen_active') ) {
    verticalScreen.classList.remove('slider__black-screen_active');
  }
  else {
    verticalScreen.classList.add('slider__black-screen_active');
  }
}


//move pics

const chooseFilterPageHandler = () => {
  document.querySelector('.filter__items').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter__item')) {
      let clickedFilterItem = e.target;
      removeSelectedFilter();
      selectFilterItem(clickedFilterItem);
      moveCollectionElement();
    }
  })
}

const removeSelectedFilter = () => {
  let menuItems = document.querySelectorAll('.filter__item_active');
  menuItems.forEach(item => {
    item.classList.remove('filter__item_active');
  })
}

const selectFilterItem = (clickedFilterItem) => {
  clickedFilterItem.classList.add('filter__item_active');
}

const moveCollectionElement = () => {
  let collection = document.querySelector('.portfolio__collection')
  let elements = document.querySelectorAll('.collection__element');
  console.log(elements);
  let arr_elements = Array.from(elements);
  let last = arr_elements[arr_elements.length-1]
  for (let i = arr_elements.length - 1; i > 0; i--) {
    arr_elements[i] = arr_elements[i-1]
  }
  arr_elements[0] = last;
  for (item of arr_elements) {
    collection.appendChild(item);
  }
}


// choose pic
const choosePicPageHandler = () => {
  document.querySelector('.portfolio__collection').addEventListener('click', (e) => {
    if (e.target.classList.contains('collection__element')) {
      let clickedPic = e.target;
      removeBorderedElement();
      addBorderedElement(clickedPic);
    }
  })
}


const removeBorderedElement = () => {
  document.querySelectorAll('.collection__element_bordered').forEach((e) => {
    e.classList.remove('collection__element_bordered');
  })
}

const addBorderedElement = (clickedPic) => {
  clickedPic.classList.add('collection__element_bordered');
}



//send

const prevertSubmit = () => {
 let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let action = 'The letter was sent';
    let subject, description;
    if (!form.subject.value.trim() =='') {
        subject = `Subject: ${form.subject.value}`;
    }
    else {
      subject = 'Without subject';
    }
    if (!form.description.value.trim() == '') {
        description = `Description: ${form.description.value}`;
    }
    else {
      description = 'Without description';
    }
    let modal = document.querySelector('.modal-window');
    let modalButton = document.querySelector('.modal-window__button');
    let windowText = document.querySelector('.modal-window__text');
    modal.classList.add('modal-window_active');
    windowText.innerHTML = (action + '<br>' + subject + '<br>' + description);
    modalButton.addEventListener('click', () => {
      console.log('test');
      modal.classList.remove('modal-window_active');
      form.reset();
    })
 })
}