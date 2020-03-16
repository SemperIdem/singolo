window.onload = function() {
  chooseMenuPageHandler();  
  controlSliderButton();
  turnOffPhone();
  chooseFilterPageHandler();
  choosePicPageHandler();
  prevertSubmit();
}




// NAVIGATION-MENU
const chooseMenuPageHandler = () => {
  document.querySelector('.header__menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-link')) {
      console.log(e);
      let clickedMenuItem = e.target;
      removeSelectedItems();
      selectMenuItem(clickedMenuItem);
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


const nextSlide = () => {
  let slides =  document.querySelectorAll('.page__slider .slider__content')
  if (currentIndex != slides.length-1) {
    slides[currentIndex].classList.remove('slider__content_current');
    currentIndex+=1;
    slides[currentIndex].classList.add('slider__content_current');
  }
  else {
    slides[currentIndex].classList.remove('slider__content_current');
    currentIndex = 0;
    slides[currentIndex].classList.add('slider__content_current');
  }
}

const prevSlide = () => {
  let slides =  document.querySelectorAll('.page__slider .slider__content')
  if (currentIndex != 0) {
    slides[currentIndex].classList.remove('slider__content_current');
    currentIndex-=1;
    slides[currentIndex].classList.add('slider__content_current');
  }
  else {
    slides[currentIndex].classList.remove('slider__content_current');
    currentIndex = slides.length-1;
    slides[currentIndex].classList.add('slider__content_current');
  }
}

const controlSliderButton = () => {
  document.querySelector('.page__slider').addEventListener('click', (e) => {
      if (e.target.classList.contains('slider__control_next')) {
        nextSlide();
      }
      else if(e.target.classList.contains('slider__control_prev')) {
        prevSlide();
      }
  })
}


// TURN ON-OFF PHONE SCREEN 
var currentIndex = 0;
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
  if (verticalScreenOn ) {
    console.log("off");
    verticalScreen.style.display = 'block';
    verticalScreenOn = false;
  }
  else {
    console.log("on");
    verticalScreen.style.display = 'none';
    verticalScreenOn = true;
  }
}

const turnOffHorizontal = () => {
  if (horizontalScreenOn ) {
    console.log("off");
    horizontalScreen.style.display = 'block';
    horizontalScreenOn = false;
  }
  else {
    console.log("on");
    horizontalScreen.style.display = 'none';
    horizontalScreenOn = true;
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
    alert(action + '\n' + subject + '\n' + description + '\n' + 'OK');
 })
}