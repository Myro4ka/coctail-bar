function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=e.parcelRequirefb13;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequirefb13=s),s.register("kyEFX",(function(e,n){var o,s;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var i={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},s=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.487072f2.js","fdzo7":"modal-close.7c95fecb.svg"}'));const i={menuBtn:document.querySelector("[data-menu-button]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")},c={favorBtn:document.querySelector("[data-favorite-button]"),favorMenu:document.querySelector("[data-favorites-menu]")};function l(t){localStorage.setItem("theme",t),document.documentElement.className=t}(()=>{function t(){i.mobileMenu.classList.toggle("is-hidden"),i.body.classList.toggle("no-scroll")}i.menuBtn.addEventListener("click",t),i.closeMenuBtn.addEventListener("click",t),i.menuList.addEventListener("click",(function(){i.menuList.classList.add("is-hidden")}))})(),c.favorBtn.addEventListener("click",(()=>{const t="true"===c.favorBtn.getAttribute("aria-expanded")||!1;c.favorBtn.closest(".nav-item").classList.toggle("is-open"),c.favorBtn.setAttribute("aria-expanded",!t),c.favorMenu.classList.toggle("is-open")})),"theme-dark"===localStorage.getItem("theme")?(l("theme-dark"),document.getElementById("slider").checked=!1):(l("theme-light"),document.getElementById("slider").checked=!0);const a={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")},r={coctailsSection:document.querySelector(".gallery"),coctailTitel:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list")},d=(t="",e="",n="",o="",s=0)=>{t.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${n}" alt="${e}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${e}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${o}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${s}">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `},u=async t=>{const e=await fetch(t);return await e.json()},m=document.querySelector(".js-backdrop-cocktail"),h=document.querySelector(".js-backdrop-ingredient"),g=document.querySelector("[data-modal-cocktail]"),_=document.querySelector("[data-modal-ingredient]"),f=(document.querySelector(".js-modal-list-ingredients"),"https://www.thecocktaildb.com/");async function v(t){return await fetch(`${f}api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}async function L(t){return await fetch(`${f}api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}var p;function y(t,e,n,o,s){return`\n            <div class="modal js-modal-cocktail">\n                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>\n                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">\n                        <use href="${p}" />\n                    </svg>\n                </button>\n\n                <h1 class="modal__title">${e}</h1>\n                <div class="modal__content">\n                    <div class="modal__instructions">\n                        <h2 class="modal__subtitle">Instructions:</h2>\n                        <p class="modal__description modal__description--cocktail">${n}</p>\n                    </div>\n                    <img class="modal__image" src="${o}" alt="" width="280" height="280">\n                    <div class="modal__info">\n                        <h3 class="modal__ingredients">INGREDIENTS</h3>\n                        <p class="modal__per-cocktail">Per cocktail</p>\n                        <ul class="modal__list js-modal-list-ingredients">\n                       ${s}\n                        </ul>\n                    </div>\n                </div>\n\n\n                <button class="modal__button modal__button--add" type="button">\n                    Add to favorite\n                </button>\n            </div>\n    `}function b(t="",e="",n="",o=""){return`\n            <div class="modal modal--ingredient ">\n              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>\n                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">\n                      <use href="./img/modal-close.svg" />\n                  </svg>\n              </button>\n  \n              <h1 class="modal__title modal__title--ingredient">${t}</h1>\n              <h2 class="modal__subtitle modal__subtitle--ingredient">${e}</h2>\n              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${n}</p>\n  \n              <ul class="modal__list">\n\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Type: ${e}</a>\n                </li>\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Alcohol: ${o} </a>\n                </li>\n            \n              </ul>\n  \n              <button class="modal__button modal__button--add" type="button">\n                  Add to favorite\n              </button>\n            </div>\n          `}p=new URL(s("kyEFX").resolve("fdzo7"),import.meta.url).toString();let k=null;async function w(t){if(t.target.classList.contains("btn__learn")){let n=await t.target.closest("[data-cocktailId]");const o=await n.dataset.cocktailid;k=await v(o),g.classList.remove("is-hidden"),window.addEventListener("keydown",S);let s=k.drinks[0].strDrink,i=k.drinks[0].strInstructions,c=k.drinks[0].strDrinkThumb,l=function(t){let e=[],n=[],o=[];for(let o in t.drinks[0])o.includes("strMeasure")&&e.push(t.drinks[0][o]),o.includes("strIngredient")&&n.push(t.drinks[0][o]);const s=n.filter(Boolean),i=e.filter(Boolean);let c;c=i.length>=s.length?i.length:s.length;for(let t=0;t<c;t+=1){let e=s[t]?s[t]:"",n=i[t]?i[t]:"";e=e.replace(/\n/g,""),n=n.replace(/\n/g,""),o.push(n+" "+e)}//!+++++++++++++++
return console.log(i),//!+++++++++++++++
console.log(s),//!+++++++++++++++
console.log(o),{resultList:o,modIngredientsList:s}}(k),a=await(e=l.resultList,e.map((t=>`\n        <li class="modal__item" data-ingredient='${t}'>\n          <a class="modal__link js-modal-link" href="#">&sext;${t}</a>\n        </li>\n        `)).join(""));!async function(t,e,n,o,s){try{m.innerHTML=y(0,e,n,o,s)}catch(t){console.log(t.message)}}(0,s,i,c,a)}var e;if(t.target.classList.contains("modal__link")){_.classList.remove("is-hidden"),console.log(k);try{for(let e in k.drinks[0])if(e.includes("strIngredient")&&null!==k.drinks[0][e]&&""!==k.drinks[0][e]&&t.target.textContent.includes(k.drinks[0][e])){let t=await L(k.drinks[0][e]);const n=await t.ingredients[0],o=n.strIngredient,s=n.strType||"no information",i=n.strDescription||"no information";let c="";n.strABV,c="yes"===n.strAlcohol.toLowerCase()&&n.strABV?`${n.strABV} %`:"no information","no"===n.strAlcohol.toLowerCase()&&(c="no alcohol"),h.innerHTML=b(o,s,i,c)}}catch(t){console.log(t)}}else{if(!(t.target.classList.contains("js-modal-close-cocktail")||t.target.classList.contains("js-modal-icon-cocktail")||t.target.classList.contains("js-backdrop-cocktail")))return t.target.classList.contains("modal__close-button-ingredient")||t.target.classList.contains("modal__icon--ingredient")||t.target.classList.contains("js-backdrop-ingredient")?(_.classList.add("is-hidden"),void window.removeEventListener("keydown",S)):void 0;g.classList.add("is-hidden")}}function S(t){"Escape"!==t.code||_.classList.contains("is-hidden")?"Escape"!==t.code||g.classList.contains("is-hidden")||g.classList.add("is-hidden"):_.classList.add("is-hidden")}g.addEventListener("click",w);let j=0,q=0;function E(t,e,n,o){if(o){t<2&&o&&(o.innerHTML="");for(let s=0;s<n;s+=1)u(e).then((n=>{1===t&&u(e).then((t=>{j=t.drinks.length})),q+=1;let i=0;t&&(i=s);const{strDrinkThumb:c="",strDrink:l="",idDrink:a=""}=n.drinks[i];d(o,l,c,a)})).catch(alert.log)}}function $(t){const e=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`;return fetch(e).then((t=>{if(!t)throw new Error(t.message);return t.json()})).then((t=>{const{drinks:n}=t;if(null===n)return X();{a.coctailsList.classList.remove("coctails-section-hover");const n=t.drinks.length;E(1,e,n,a.coctailsList)}}))}(t=>{if(!t)return;const e=getComputedStyle(t);j="320px"===e.width?3:"768px"===e.width?6:9})(r.coctailsSection),E(0,"https://www.thecocktaildb.com/api/json/v1/1/random.php",j,r.coctailsList),r.coctailsList.addEventListener("click",w);const{heroList:T,heroTitle:A,hero:x,select:B,isHiden:I,heroItem:M,herospan:H,coctailTitel:C,cocktalisTitel:D,heroBox:F,heroSelect:N,heroListUl:O}=a;const R=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function U(t){return t.map((t=>`<li class=hero-item value=${t} id=${t}>${t}</li>`))}T.addEventListener("click",(function(t){const e=t.target.dataset.name,n=t.target,o=t.currentTarget.querySelectorAll(".hero-button");e&&innerWidth>767&&(o.forEach((t=>{t.classList.contains("is-hover")&&t.classList.remove("is-hover")})),n.classList.add("is-hover"),$(e))}));const V=U(R),P=R.map((t=>`<li class=hero-item >\n        <button class=hero-button data-name=${t}>${t}</button>\n        </li>`));const W='<div class="hero-container">\n</div>';if(innerWidth>767&&(I.classList.add("is-hiden"),T.insertAdjacentHTML("beforeend",P.join("")),x.insertAdjacentHTML("beforeend",W)),innerWidth<767){I.classList.remove("is-hiden"),A.insertAdjacentHTML("beforebegin",W),B.insertAdjacentHTML("beforeend",V.join("")),T.addEventListener("click",(function(t){const e=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),o=t.target;o===N||o===n||o===e?(O.classList.remove("is-hiden-select"),O.classList.add("is-hden-select_display")):(O.classList.add("is-hiden-select"),O.classList.remove("is-hden-select_display"));const s=t.target;if(s){const e=t.target.id;e&&$(e).then((t=>{H.textContent=e}))}}))}function X(){coctailsList.classList.add("coctails-section-hover"),D.innerHTML="";C.classList.remove("coctails-section__title"),C.classList.add("coctails-section-coctailTitel"),C.textContent="Sorry, we didn't find  any cocktail for you",D.innerHTML="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>"}const z=document.querySelector(".test-button"),G=document.querySelector(".js-backdrop-ingredient"),J=document.querySelector("[data-modal-ingredient]");async function Z(t){return await fetch(`${f}api/json/v1/1/lookup.php?iid=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}z.setAttribute("data-ingredientId","5"),z.addEventListener("click",(async function(t){window.addEventListener("keydown",S),J.classList.remove("is-hidden");try{let e=await t.target.closest("[data-ingredientId]");const n=await e.dataset.ingredientid;let o=(await Z(n)).ingredients[0];const s=o.strIngredient,i=o.strType||"no information",c=o.strDescription||"no information";let l="";l="yes"===o.strAlcohol.toLowerCase()&&o.strABV?`${o.strABV} %`:"no information","no"===o.strAlcohol.toLowerCase()&&(l="no alcohol"),G.innerHTML=b(s,i,c,l)}catch(t){console.log(t.message)}})),J.addEventListener("click",(async function(t){(t.target.classList.contains("js-modal-close-ingredient")||t.target.classList.contains("js-modal-icon-ingredient")||t.target.classList.contains("js-backdrop-ingredient"))&&J.classList.add("is-hidden")}));
//# sourceMappingURL=index.487072f2.js.map
