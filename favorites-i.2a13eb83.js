!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequirefb13;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequirefb13=t),t("3GCax"),t("10uvC");var r=t("eMcUM"),i=t("dWbaE"),l=t("lIxsd"),a=t("gaAvG"),s=t("lJ0Sd"),d=t("jcFG7");(0,r.onAuthStateChanged)(i.auth,(e=>{e?(0,a.getIngrids)().then((e=>{if(console.log("response",e),l.refs.coctailTitel.textContent="Favorite ingredients",!e){const e="<p>You haven't added any favorite ingredients yet</p>";return void document.querySelector(".gallery.container").insertAdjacentHTML("beforeend",e)}const n=[];Object.entries(e).forEach((([e,o])=>{n.push(o),console.log(n)}));const o=[],t=n.map((e=>(0,s.getIngredientByName)(e)));Promise.all(t).then((e=>{console.log(e);for(const{ingredients:n}of e)o.push(n[0]);console.log(o),(0,d.main)(o)}))})).catch((e=>{console.log(e)})):location.replace("/")}))}();
//# sourceMappingURL=favorites-i.2a13eb83.js.map
