window.onload = function() {
  chooseMenuPageHandler();  
  controlSliderButton();
  turnOffPhone();
}


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



}