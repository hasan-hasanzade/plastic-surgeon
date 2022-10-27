let myID = document.querySelector(".header__hidden");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 200) {
    myID.classList.add("__show");
  } else {
    myID.classList.remove("__show");
  }
};

window.addEventListener("scroll", myScrollFunc);

var rellax = new Rellax(".rellax");

ScrollOut({
  threshold: 0.6,
});

var swiper = new Swiper(".qualification-slider__swiper", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  freeMode: true,
  autoPlay: true,
  navigation: {
    nextEl: ".qualification-slider__next",
    prevEl: ".qualification-slider__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    378: {
      slidesPerView: 2.5,
    },
    578: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 3.8,
    },
    1000: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 2.7,
    },
  },
  
});

var swiper = new Swiper(".image-gallery__slider", {
  slidesPerView: 4,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 80,
  },
  navigation: {
    nextEl: ".image-gallery__right",
    prevEl: ".image-gallery__left",
  },
  breakpoints: {
    1870: {
      slidesPerView: 5,
    },
    
  },
});

var swiper = new Swiper(".video-gallery__slider", {
  
  scrollbar: {
    dragSize: 80,
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    440: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    868: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1124: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1510: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1722: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    }
    
  },
});


onload = e => {
  const containers = document.querySelectorAll('.video-gallery__slide');
  containers.forEach(container => {
    const video = container.querySelector('.video-gallery__video');
    const playBtn = container.querySelector('.video-gallery__playbtn');
    const muteBtn = container.querySelector('.video-gallery__mutebtn');
    const fullscBtn = container.querySelector(".video-gallery__fullscbtn");
    playBtn.addEventListener('click', e => {
      if (video.paused) {
            playBtn.className = "pause";
           video.play();
        } else {
          playBtn.className = "play";
          video.pause();
         }
    })
    video.addEventListener("timeupdate", e => {
      if (video.ended) {
        playBtn.className = "play";
      }
    }) 
    muteBtn.addEventListener('click', e => {
      video.muted = !video.muted;
    })
    fullscBtn.addEventListener("click", e => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        fullscBtn.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
  })
}





// fullscBtn.addEventListener("click", function () {
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.webkitRequestFullscreen) {
//     fullscBtn.webkitRequestFullscreen();
//   } else if (video.msRequestFullscreen) {
//     video.msRequestFullscreen();
//   }
// });

function setupTabs() {
  document.querySelectorAll(".services__designation").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.services__operations[data-tab="${tabNumber}"]`
      );

      sideBar.querySelectorAll(".services__designation").forEach((button) => {
        button.classList.remove("services__designation-active");
      });
      tabsContainer.querySelectorAll(".services__operations").forEach((tab) => {
        tab.classList.remove("services__operations-active");
      });
      button.classList.add("services__designation-active");
      tabToActivate.classList.add("services__operations-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  document.querySelectorAll(".service__body").forEach((tabsContainer) => {
    tabsContainer
      .querySelector(".services__other .services__designation")
      .click();
  });
});

const offerBtn = document.querySelector('.offer__close');

offerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const popUp = document.querySelector('.offer__center');
  popUp.classList.toggle("close-popup")
})

"use strict"

document.addEventListener('DOMContentLoaded',function(){
   const form = document.getElementById('form');
   form.addEventListener('submit',formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      const token = "5411923649:AAGu5tPox9Nc5aXzmywqqYTKuQIhkXamarU";
      const chatID = "-1001573570775";
      const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

      if (error === 0) {

        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Отправитель:</b> ${this.name.value}\n`;
        message += `<b>Номер:</b> ${this.phone.value}\n`;
        message += `<b>Текст:</b> ${this.msg.value}\n`;
        message += `<b>Консультация:</b> ${this.radio.value}`;
        

        form.classList.add('_sending');

        axios.post(urlApi, {
         chat_id: chatID,
         parse_mode: 'html',
         text:message
        })
        .then((res)=>{
         this.name.value = "";
         this.phone.value = "";
         this.msg.value = "";
         this.radio.value = "";
        })
        .catch((err)=> {
         Swal.fire({
            icon: 'error',
            title: 'Ошибка...',
            text: 'Что-то пошло не так'
          })
        })
        .finally(() => {
         Swal.fire({
            icon: 'success',
            title: 'Заявка отправлена',
            showConfirmButton: false,
            timer: 2500
          })
        })

      }else {
         Swal.fire(
            'Ошибка',
            'Заполните обязательные поля',
            'error'
          );
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll("._req");

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

            if (input.value === '') {
               formAddError(input);
               error++;
            }
      }
      return error;
   }

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }

});

var swiper = new Swiper(".clinics__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: {
      el: ".clinics__mini-slider",
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".iphk__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoHeight: true,
  thumbs: {
    swiper: {
      el: ".iphk__mini-slider",
      slidesPerView: 5,
    },
  },
});

ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [55.75440257, 37.62007669],
        zoom: 11,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [55.65585807, 37.55454425],
      {
        hintContent: "Собственный значок метки с контентом",
        
        balloonContentBody: '<img src="./src/images/map/smart.png" height="100" width="150"> <br/> ' +
            '<b>Smart Clinic</b> <br/> Сеансов нет.' + '<span><br>г.Москва, Научный проезд</br> 14Ас" (м.Калужская)</span>',
        

      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "./src/images/map/tag.png",
        // Размеры метки.
        iconImageSize: [48, 58],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-28, -28],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
        
      }
    );

  myPlacemarkWithContent2 = new ymaps.Placemark(
    [55.77553086, 37.66926769],
    {
      hintContent: "Собственный значок метки с контентом",
      balloonContentBody: '<img src="./src/images/map/iphk.png" height="100" width="150"> <br/> ' +
            '<b><br>Институт пластической</br> хирургии и косметологии</b> <br/> ' + '<span><br>г.Москва, Ольховская ул.,27</br> 14Ас" (м.Красносельская)</span>'
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#imageWithContent",
      // Своё изображение иконки метки.
      iconImageHref: "./src/images/map/tag.png",
      // Размеры метки.
      iconImageSize: [48, 58],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-28, -28],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout,
    }
  );
  myMap.behaviors.disable(['drag','scrollZoom'])
  myMap.geoObjects.add(myPlacemarkWithContent2).add(myPlacemarkWithContent);
  
});

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__hidden').offsetHeight;

      if(iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        headerMenu.classList.remove('active');
        iconsMenu.classList.remove('active');
      }


      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}



"use strict";
function DynamicAdapt(type) {
	this.type = type;
}
DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");
	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}
	this.arraySort(this.оbjects);
	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});
	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];
		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		//for (let i = 0; i < оbjects.length; i++) {
		for (let i = оbjects.length - 1; i >= 0; i--) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};
// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}
// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}
// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};
// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};
const da = new DynamicAdapt("max");
da.init();


const iconMenu = document.querySelector('.header__icon');
const iconsMenu = document.querySelector('.header__icons')
const headerMenu = document.querySelector('.header__menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    iconsMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });
}


var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });




// const btnMore = document.querySelector('.review__btn');

// function readMore(){
//     const dots = document.getElementById("dots");
//     const more = document.getElementById("more");
//     const text = document.querySelector('.review__text');
    

//     if(dots.style.display === "none") {
//       dots.style.display = "inline"
//       btnMore.innerHTML = "Подробнее"
//       more.style.display = "none"
//       text.classList.remove('collapsed')
//     } else {
//       dots.style.display = "none"
//       btnMore.innerHTML = "Скрыть"
//       more.style.display = "inline"
//       text.classList.add('collapsed')
//     }
// }

// btnMore.addEventListener('click',readMore)


