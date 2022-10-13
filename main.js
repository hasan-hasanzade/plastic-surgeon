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
    dragSize: 200,
    el: '.swiper-scrollbar',
    draggable:true
  },
  navigation: {
    nextEl: ".image-gallery__right",
    prevEl: ".image-gallery__left",
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


function setupTabs() {
  document.querySelectorAll(".services__designation").forEach(button => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.services__operations[data-tab="${tabNumber}"]`)

      sideBar.querySelectorAll(".services__designation").forEach(button =>{
        button.classList.remove("services__designation-active");
      });
      tabsContainer.querySelectorAll(".services__operations").forEach(tab =>{
        tab.classList.remove("services__operations-active");
      });
      button.classList.add("services__designation-active");
      tabToActivate.classList.add("services__operations-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  document.querySelectorAll(".service__body").forEach(tabsContainer => {
    tabsContainer.querySelector(".services__other .services__designation").click();
  });
});



// "use strict"

// document.addEventListener('DOMContentLoaded',function(){
//    const form = document.getElementById('form');
//    form.addEventListener('submit',formSend);

//    async function formSend(e) {
//       e.preventDefault();

//       let error = formValidate(form);

//       const token = "5411923649:AAGu5tPox9Nc5aXzmywqqYTKuQIhkXamarU";
//       const chatID = "-1001573570775";
//       const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

//       if (error === 0) {

        
//         let message = `<b>Заявка с сайта</b>\n`;
//         message += `<b>Отправитель:</b> ${this.name.value}\n`;
//         message += `<b>Номер:</b> ${this.phone.value}\n`;
//         message += `<b>Текст:</b> ${this.msg.value}`;

//         form.classList.add('_sending');
        
//         axios.post(urlApi, {
//          chat_id: chatID,
//          parse_mode: 'html',
//          text:message
//         }) 
//         .then((res)=>{
//          this.name.value = "";
//          this.phone.value = "";
//          this.msg.value = "";
//          form.classList.remove('_sending');

//         })
//         .catch((err)=> {
//          Swal.fire({
//             icon: 'error',
//             title: 'Ошибка...',
//             text: 'Что-то пошло не так'
//           })
//         })
//         .finally(() => {
//          Swal.fire({
//             icon: 'success',
//             title: 'Заявка отправлена',
//             showConfirmButton: false,
//             timer: 2500
//           })
//         })

//       }else {
//          Swal.fire(
//             'Ошибка',
//             'Заполните обязательные поля',
//             'error'
//           );
//       }
//    }


//    function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll("._req");

//       for (let index = 0; index < formReq.length; index++) {
//          const input = formReq[index];
//          formRemoveError(input);

//             if (input.value === '') {
//                formAddError(input);
//                error++;
//             }
//       }
//       return error;
//    }


//    function formAddError(input) {
//       input.parentElement.classList.add('_error');
//       input.classList.add('_error');
//    }
//    function formRemoveError(input) {
//       input.parentElement.classList.remove('_error');
//       input.classList.remove('_error');
//    }


// });

var swiper = new Swiper(".clinics__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper:{
      el: '.clinics__mini-slider',
      slidesPerView: 5,
    }
  },
});

var swiper = new Swiper(".iphk__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoHeight: true,
  thumbs: {
    swiper:{
      el: '.iphk__mini-slider',
      slidesPerView: 5,
    }
  },
});