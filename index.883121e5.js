var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequirefb13;function o(e){localStorage.setItem("theme",e),document.documentElement.className=e}null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequirefb13=n),n("30HO2"),"theme-dark"===localStorage.getItem("theme")?(o("theme-dark"),document.getElementById("slider").checked=!1):(o("theme-light"),document.getElementById("slider").checked=!0);var s=n("29EdN"),i=n("atLwq");n("fvTqB");var c=n("fy93h");s.refsSearch.form.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();(0,i.searchCocktailsInput)(t),s.refsSearch.form.reset()})),s.refsSearch.authBtn.addEventListener("click",(function(e){e.currentTarget.classList.add("is-active"),e.currentTarget.classList.contains("is-active")&&e.currentTarget.classList.remove("is-active");c.auth.currentUser?((0,c.signOutUser)(),location.reload()):(0,c.oNsignInWithPopup)()}));const l={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsTitle:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")};var a=n("2nhTy"),d=n("3J0QU");function u(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:t}=e;if(null===t)return(0,d.responseNull)();l.coctailsTitle.textContent="Cocktails",(0,a.main)(t)}))}const{heroList:h,heroTitle:m,hero:f,select:v,isHiden:L,heroItem:g,herospan:p,coctailTitel:y,cocktalisTitel:S,heroBox:T,heroSelect:b,heroListUl:q}=l;const E=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];h.addEventListener("click",(function(e){const t=e.target.dataset.name,r=e.target,n=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(n.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),r.classList.add("is-hover"),u(t))}));const k=E.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`));const w=function(e){return e.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`))}(E),x='<div class="hero-container">\n</div>';if(innerWidth>767&&(L.classList.add("is-hiden"),h.insertAdjacentHTML("beforeend",w.join("")),f.insertAdjacentHTML("beforeend",x)),innerWidth<767){L.classList.remove("is-hiden"),m.insertAdjacentHTML("beforebegin",x),v.insertAdjacentHTML("beforeend",k.join("")),h.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),r=document.querySelector(".hero-span"),n=e.target;n===b||n===r||n===t?(q.classList.remove("is-hiden-select"),q.classList.add("is-hden-select_display")):(q.classList.add("is-hiden-select"),q.classList.remove("is-hden-select_display"));const o=e.target;if(o){const t=e.target.id;t&&u(t).then((e=>{p.textContent=t}))}}))}n("aFV0K"),n("eujXJ"),n("hAisU"),n("3J0QU"),n("2nhTy");
//# sourceMappingURL=index.883121e5.js.map
