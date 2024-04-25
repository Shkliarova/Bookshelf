import"./assets/modal-pop-up-c5af880c.js";import{N as c,a as p}from"./assets/vendor-eb6adf60.js";function l(){c.Notify.warning("Ooops, something went wrong. Try reloading page")}function w(){c.Loading.dots("Please wait");const t="https://books-backend.p.goit.global/books/top-books";try{return p.get(t)}catch{l()}}async function b(){const t="https://books-backend.p.goit.global/books/category-list";try{const e=await fetch(t);if(!e.ok){l();return}return await e.json()}catch{l()}}function L(t,e){let o=!1,n,r;function a(){if(o){n=arguments,r=this;return}t.apply(this,arguments),o=!0,setTimeout(()=>{o=!1,n&&(a.apply(r,n),n=r=null)},e)}return a}const s=document.querySelector(".scroll-up-btn");s.addEventListener("click",$);const E=L(()=>{document.documentElement.scrollTop>100?(s.classList.add("show"),s.classList.remove("hide")):(s.classList.add("hide"),s.classList.remove("show"))},350);window.addEventListener("scroll",E);function $(){window.scrollTo({top:0,behavior:"smooth"})}function u(){return{header:document.querySelector("header"),headerNavLinks:document.querySelectorAll(".page-navigation-link "),scrollToTopButton:document.querySelector(".back-to-top"),toTopTarget:document.querySelector(".to-top-target"),colorSwitcherCnt:document.querySelector(".color-scheme-switcher"),colorSwitcher:document.querySelector("#color-scheme-switcher-checkbox"),colorSwitcherSlider:document.querySelector(".color-scheme-switcher-slider"),allCategoriesBtn:document.querySelector("button[name=allcategories]"),categoryListEl:document.querySelector(".categories_list"),categoriesListContainer:document.querySelector(".categories"),categoryContainerEl:document.querySelector(".content-rendering-container"),mainTitle:document.querySelector(".main-title"),selectedBooksListEl:document.querySelector(".category-blocks-list"),renderingContainer:document.querySelector(".content-rendering-container"),supportUkraineCnt:document.querySelector(".support-list"),openSignUpBtnEl:document.querySelector("#signUp-open-btn"),signUpModalEl:document.querySelector("#sign-up-modal"),signUpModalWindowEl:document.querySelector("#sign-up-modal-window"),closeSignUpBtnEl:document.querySelector("#signUp-modal-close-btn"),openSignUpBtnSecondEl:document.querySelector("#signUp-open-btn-second"),openSignInBtnEl:document.querySelector("#signIn-open-btn"),signInModalEl:document.querySelector("#sign-in-modal"),signInModalWindowEl:document.querySelector("#sign-in-modal-window"),closeSignInBtnEl:document.querySelector("#signIn-modal-close-btn"),authForm:document.querySelector(".modal-form"),nameField:document.querySelector("[name=user_name]"),emailField:document.querySelector("[name=user_email]"),passwordField:document.querySelector("#signup-user-password"),authSubmitBtn:document.querySelector("modal-form__submit"),bookCard:document.querySelector(".book-link"),closeModalPopUpBtn:document.querySelector("[data-pop-up-close]"),modalPopUp:document.querySelector("[data-pop-up]"),modalContentEl:document.querySelector(".modal-pop-up-content"),userName:document.getElementById("user-name"),formSingUp:document.getElementById("singUp"),logOut:document.getElementById("logOut"),userBarMenu:document.getElementById("userBarMenu"),logOutMenu:document.getElementById("logOutMenu"),formLogIn:document.getElementById("logIn"),divEl:document.querySelector(".shopping__list"),addBtnEL:document.querySelector(".modal-pop-up-btn"),paginationsSection:document.querySelector(".paginations"),paginationContainerPages:document.querySelector(".paginations__container-pages"),paginationContainerBackBtn:document.querySelector(".paginations__container-back"),paginationContainerEndBtn:document.querySelector(".paginations__container-end"),startButton:document.querySelector("button[name='startButton']"),previousButton:document.querySelector("button[name='previousButton']"),nextButton:document.querySelector("button[name='nextButton']"),endButton:document.querySelector("button[name='endButton']"),activButton:document.querySelector(".active"),singUpBtn:document.querySelector(".userbar-btn")}}function C({_id:t,title:e,author:o,description:n,book_image:r}){return`
    <a class="book-link" href="" aria-label="Book thumbnail">
      <div class="book-thumb">
        <img class="book-image js-book" src="${r}" loading="lazy" data_id=${t} alt="${n}"/>
        <div class="book-image-overlay js-overlay" data_id=${t} aria-label="${e}">
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${e}</h3>
        <p class="book-author">${o}</p>
      </div>
    </a>
  `}function T(t){return`
      <ul class="category-books-list">
        ${t.map(e=>`
            <li class="books-list-item">
              ${C(e)}
            </li>
          `).join("")}
      </ul>
    `}const{renderingContainer:_}=u();function k(t){const e=T(t);_.innerHTML=e}async function S(t){c.Loading.dots("Please wait");const e=async o=>{const r=await(await fetch(`https://books-backend.p.goit.global/books/category?category=${o}`)).json();return console.log(r),c.Loading.remove(),r};try{const{data:o}=await p.get(`https://books-backend.p.goit.global/books/category?category=${t}`);return c.Loading.remove(),o;return e(t)}catch(o){c.Loading.remove(),c.Notify.failure("Something went wrong. Please try again"),console.log(o)}}const{mainTitle:M}=u();function h(t){const e=t.split(" ").slice(0,-1).join(" "),o=t.split(" "),n=o[o.length-1];M.innerHTML=`${e} <span class="main-title--last-word-static">${n}</span>`}function d(){document.body.style.overflow="hidden"}function m(){document.body.style.removeProperty("overflow")}const U=document.querySelector(".content-rendering-container");async function f(){try{d();const o=`
      <ul class="category-blocks-list">
        ${(await w()).data.map(({list_name:n,books:r})=>`
          <li class="bestseller-category">
            <h3 class="bestseller-category-title"> ${n}</h3> 
            <ul class="books-list">
            ${r.map(({_id:a,author:v,book_image:g,title:y,description:B})=>`
              <li class="books-list-item bestsellers-book-item">
                  <a class="book-link" href="${g}" aria-label="Book thumbnail">
                    <div class="book-thumb">
                      <img class="book-image js-book" src="${g}" loading="lazy" data_id=${a} alt="${B}"/>
                      <div class="book-image-overlay js-overlay" data_id=${a} aria-label="${y}">
                        <p class="book-image-overlay-text">Quick view</p>
                      </div>
                    </div>
                    <div class="book-item-meta">
                      <h3 class="book-title">${y}</h3>
                      <p class="book-author">${v}</p>
                    </div>
                  </a>
                  </li>`).join("")}
            </ul> 
            <button type="button" class="button see-more-btn" data-id="${n}">See more</button>
          </li>`).join("")}
      </ul>`;U.innerHTML=o,m(),c.Loading.remove()}catch{console.log("помилка"),l()}}f();const q=document.querySelector(".categories-list"),i=document.querySelector(".categories-btn");b().then(t=>{console.log(t),t.forEach(e=>{q.insertAdjacentHTML("beforeend",`<li><button type="submit" class="item-btn" data-id="${e.list_name}">${e.list_name}</button></li>`)})});b();q.addEventListener("click",I);async function I(t){d(),i.classList.remove("categories-btn"),i.classList.add("item-btn");try{if(!t.target.dataset.id)return;const e=t.target.dataset.id,o=await S(e);k(o),h(e),m()}catch{l()}}i.addEventListener("click",j);function j(){f(),location.reload()}const{categoryContainerEl:A}=u();A.addEventListener("click",x);async function x(t){if(d(),!t.target.classList.contains("see-more-btn"))return;const e=t.target.dataset.id,o=await S(e);h(e);const n=document.querySelectorAll(".category-btn"),r=document.querySelector(".active-category");for(const a of n)a.dataset.id===e&&a.classList.add("active-category"),r.classList.remove("active-category");k(o),m()}
//# sourceMappingURL=commonHelpers.js.map
