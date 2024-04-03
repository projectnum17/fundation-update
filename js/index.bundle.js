/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 703:
/***/ (function() {

if (document.getElementById("page4Identifier")) {
  $(function () {

    $('.dropdown ').on('click', function () {
      $(this).parent().toggleClass('open');
    });

    $('.dropdown > .list > .item').on('click', function () {
      $('.dropdown > .list > .item').removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
    });

    $(document).on('keyup', function (evt) {
      if ((evt.keyCode || evt.which) === 27) {
        $('.dropdown').removeClass('open');
      }
    });

    $(document).on('click', function (evt) {
      if ($(evt.target).closest(".dropdown > .caption").length === 0) {
        $('.dropdown').removeClass('open');
      }
    });

  });

  //pagination

  document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page-blog");
    const pageNumbers = document.querySelectorAll(".page-number");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
      pages.forEach((page, index) => {
        if (index === pageNumber) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    }

    function updateButtons() {
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
    }

    function setActive() {
      pageNumbers.forEach((page, index) => {
        if (currentPage === index) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    }

    pageNumbers.forEach((page, index) => {
      page.addEventListener("click", function () {
        showPage(index);
        currentPage = index;
        updateButtons();
        setActive();
      });
    });

    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    showPage(currentPage);
    updateButtons();



  });

  //numers for pagination (PAGES BLOCK)

  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  nextPageButton.addEventListener('click', function () {
    if (currentPage < pageCount) {
      goToPage(currentPage + 1);
    }
  });


  const pageCount = document.querySelectorAll('.page-blog').length;
  const pagesInner = document.querySelector('.pages-inner');
  const totalPagesToShow = 5;
  let currentPage = 1;

  function renderPageNumbers(startPage, endPage) {
    pagesInner.innerHTML = '';

    // Создать и добавить номера страниц
    for (let i = startPage; i <= endPage; i++) {
      const pageNumber = document.createElement('div');
      pageNumber.classList.add('page-number');
      pageNumber.textContent = i;
      if (i === currentPage) {
        pageNumber.classList.add('active');
      }
      pagesInner.appendChild(pageNumber);
    }

    if (startPage > 1) {
      const ellipsisStart = document.createElement('div');
      ellipsisStart.classList.add('ellipsis');
      ellipsisStart.textContent = '...';
      pagesInner.insertBefore(ellipsisStart, pagesInner.firstChild);
    }

    if (endPage < pageCount) {
      const ellipsisEnd = document.createElement('div');
      ellipsisEnd.classList.add('ellipsis');
      ellipsisEnd.textContent = '...';
      pagesInner.appendChild(ellipsisEnd);
    }
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    if (currentPage < Math.ceil(totalPagesToShow / 2)) {
      renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));
    } else if (currentPage > pageCount - Math.floor(totalPagesToShow / 2)) {
      renderPageNumbers(Math.max(1, pageCount - totalPagesToShow + 1), pageCount);
    } else {
      renderPageNumbers(currentPage - Math.floor(totalPagesToShow / 2), currentPage + Math.floor(totalPagesToShow / 2));
    }
  }

  renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));


  pagesInner.addEventListener('click', function (event) {
    if (event.target.classList.contains('page-number')) {
      const pageNumber = parseInt(event.target.textContent);
      goToPage(pageNumber);
    }
  });

}


/***/ }),

/***/ 16:
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {

  const allLanguageBlocks = document.querySelectorAll(".header-multilang");

  allLanguageBlocks.forEach(function (languageBlock) {
    const languageItems = languageBlock.querySelectorAll(".header-multilang__link");

    languageItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        const selectedLanguage = this.textContent;

        allLanguageBlocks.forEach(function (block) {
          const itemsInBlock = block.querySelectorAll(".header-multilang__link");

          itemsInBlock.forEach(function (languageItem) {
            if (languageItem.textContent === selectedLanguage) {
              languageItem.classList.add("active-lang");
            } else {
              languageItem.classList.remove("active-lang");
            }
          });
        });
      });
    });
  });


  const header = document.querySelector(".header")
  let isHidden = false
  let lastScrollTop = 0

  window.addEventListener("scroll", function () {
    const st = window.pageYOffset || document.documentElement.scrollTop

    if (st > lastScrollTop && st > 100) {
      if (!isHidden) {
        header.classList.remove("header-show")
        header.classList.add("header-hide")
        isHidden = true
      }
    } else {
      if (isHidden) {
        header.classList.remove("header-hide")
        header.classList.add("header-show")
        isHidden = false
      }
    }

    lastScrollTop = st <= 0 ? 0 : st
  })

});


/***/ }),

/***/ 642:
/***/ (function() {

const openMenu = document.querySelector('.js-open')
const closeMenu = document.querySelector('.js-close')
const menuItem = document.querySelector('.mobile-nav')
const body = document.body


openMenu.addEventListener('click', function () {
	menuItem.classList.add('active')
	body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', function () {
	menuItem.classList.remove('active')
	body.style.overflow = 'auto'
})



/***/ }),

/***/ 6:
/***/ (function() {

if (document.getElementById("page2Identifier")) {
  document.addEventListener("DOMContentLoaded", function () {
    const tabsItem = document.querySelectorAll(".tabs-item");

    tabsItem.forEach(function (item) {
      item.addEventListener("click", function (event) {

        tabsItem.forEach(function (item) {
          item.classList.remove("active-tab");
          item.classList.add("light-to-black");
        });

        this.classList.add("active-tab");
        this.classList.remove("light-to-black");
      });
    });
  });


  $(function () {

    $('.dropdown ').on('click', function () {
      $(this).parent().toggleClass('open');
    });

    $('.dropdown > .list > .item').on('click', function () {
      $('.dropdown > .list > .item').removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
    });

    $(document).on('keyup', function (evt) {
      if ((evt.keyCode || evt.which) === 27) {
        $('.dropdown').removeClass('open');
      }
    });

    $(document).on('click', function (evt) {
      if ($(evt.target).closest(".dropdown > .caption").length === 0) {
        $('.dropdown').removeClass('open');
      }
    });

  });

  //pagination

  document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const pageNumbers = document.querySelectorAll(".page-number");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
      pages.forEach((page, index) => {
        if (index === pageNumber) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    }

    function updateButtons() {
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
    }

    function setActive() {
      pageNumbers.forEach((page, index) => {
        if (currentPage === index) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    }

    pageNumbers.forEach((page, index) => {
      page.addEventListener("click", function () {
        showPage(index);
        currentPage = index;
        updateButtons();
        setActive();
      });
    });

    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    showPage(currentPage);
    updateButtons();



  });

  //numers for pagination (PAGES BLOCK)

  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  nextPageButton.addEventListener('click', function () {
    if (currentPage < pageCount) {
      goToPage(currentPage + 1);
    }
  });


  const pageCount = document.querySelectorAll('.page').length;
  const pagesInner = document.querySelector('.pages-inner');
  const totalPagesToShow = 5;
  
  let currentPage = 1;

  

  function renderPageNumbers(startPage, endPage) {
    pagesInner.innerHTML = '';

    // Создать и добавить номера страниц
    for (let i = startPage; i <= endPage; i++) {
      const pageNumber = document.createElement('div');
      pageNumber.classList.add('page-number');
      pageNumber.textContent = i;
      if (i === currentPage) {
        pageNumber.classList.add('active');
      }
      pagesInner.appendChild(pageNumber);
    }

    if (startPage > 1) {
      const ellipsisStart = document.createElement('div');
      ellipsisStart.classList.add('ellipsis');
      ellipsisStart.textContent = '...';
      pagesInner.insertBefore(ellipsisStart, pagesInner.firstChild);
    }

    if (endPage < pageCount) {
      const ellipsisEnd = document.createElement('div');
      ellipsisEnd.classList.add('ellipsis');
      ellipsisEnd.textContent = '...';
      pagesInner.appendChild(ellipsisEnd);
    }
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    if (currentPage < Math.ceil(totalPagesToShow / 2)) {
      renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));
    } else if (currentPage > pageCount - Math.floor(totalPagesToShow / 2)) {
      renderPageNumbers(Math.max(1, pageCount - totalPagesToShow + 1), pageCount);
    } else {
      renderPageNumbers(currentPage - Math.floor(totalPagesToShow / 2), currentPage + Math.floor(totalPagesToShow / 2));
    }
  }

  renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));


  pagesInner.addEventListener('click', function (event) {
    if (event.target.classList.contains('page-number')) {
      const pageNumber = parseInt(event.target.textContent);
      goToPage(pageNumber);
    }
  });
}

/***/ }),

/***/ 794:
/***/ (function() {

if (document.getElementById("page1Identifier")) {

  const introSlider = new Swiper('.intro-slider', {
    //loop: true,
    slidesPerView: 1.5,
    spaceBetween: 24,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    }
  });


  const sponsorsSlider = new Swiper('.sponsor-slider', {
    //loop: true,
    spaceBetween: 20,
    slidesPerView: 4,

    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1001: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3.5,

      },
      320: {
        slidesPerView: 1.7,
      }
    }
  });


  const supportSlider = new Swiper('.support-slider', {
    //loop: true,
    spaceBetween: 24,
    slidesPerView: 2.3,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    }
  });
}

if (document.getElementById("page3Identifier")) {

  const supportSlider = new Swiper('.support-slider', {
    //loop: true,
    spaceBetween: 24,
    slidesPerView: 2.3,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     breakpoints: {
      768: {
        spaceBetween: 24,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    }
  });
}

if (document.getElementById("page5Identifier")) {

  const supportSlider = new Swiper('.support-slider', {
    //loop: true,
    spaceBetween: 24,
    slidesPerView: 2.3,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     breakpoints: {
      768: {
        spaceBetween: 24,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      }
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_projects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(703);
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_blog__WEBPACK_IMPORTED_MODULE_4__);






}();
/******/ })()
;