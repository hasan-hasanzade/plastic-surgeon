let myID = document.querySelector('.header__hidden');

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    myID.classList.add('__show')
  }else {
   myID.classList.remove('__show')
  }
};

window.addEventListener("scroll", myScrollFunc);

var rellax = new Rellax('.rellax');

ScrollOut ({
  threshold: .6
})


var swiper = new Swiper(".qualification-slider__swiper", {
  slidesPerView: 2.7,
  // spaceBetween: 10,
  freeMode: true,
  autoPlay: true,
  navigation: {
    nextEl: ".qualification-slider__next",
    prevEl: ".qualification-slider__prev",
  },
});



var swiper = new Swiper(".image-gallery__slider", {
  slidesPerView: 4,
  scrollbar: {
    dragSize: 150,
    el: '.swiper-scrollbar',
    draggable:true
  },

});

var swiper = new Swiper(".video-gallery__slider", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  scrollbar: {
    dragSize: 150,
    el: '.swiper-scrollbar',
    draggable:true
  },

});

const video = document.querySelector('.video-gallery__video');
const playBtn = document.querySelector('.video-gallery__playbtn');
const muteBtn = document.querySelector('.video-gallery__mutebtn');
const fullscBtn = document.querySelector('.video-gallery__fullscbtn');


function togglePlayPause() {
  if(video.paused) {
    playBtn.className = 'pause';
    video.play();
  }else {
    playBtn.className = 'play'
    video.pause();
  }
}

playBtn.addEventListener('click',togglePlayPause);

video.addEventListener('timeupdate',function() {
  if(video.ended) {
    playBtn.className = 'play'
  }
})

muteBtn.addEventListener('click', function() {
  video.muted = true;
})

fullscBtn.addEventListener('click', function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
  fullscBtn.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { 
  video.msRequestFullscreen();
  }
});

