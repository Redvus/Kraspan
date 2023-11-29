class Counters{counterLoad(e,o){let t=setInterval((function(){document.getElementById(e).innerHTML=++a,a===o&&clearInterval(t)})),a=0}}function scrollSmooth(){document.getElementById("scrollLine");const e=document.getElementById("wrapperMain"),o=new LocomotiveScroll({el:e,smooth:!0,multiplier:.7});o.on("scroll",ScrollTrigger.update),ScrollTrigger.addEventListener("refreshInit",(()=>o.update())),ScrollTrigger.refresh()}gsap.registerPlugin(ScrollTrigger);const navButtonMobile=document.getElementById("navButtonMobile"),navMainMobile=document.getElementById("navMainMobile"),navMainListMobile=document.querySelectorAll("#navMainMobile ul > li"),navBack=document.querySelector(".header-mobile__nav-mask"),navButtonLineTop=document.querySelector(".header-mobile__nav-line__top"),navButtonLineMiddle=document.querySelector(".header-mobile__nav-line__middle"),navButtonLineBottom=document.querySelector(".header-mobile__nav-line__bottom");function navMenuOpenMobile(){let e=new gsap.timeline({reversed:!0});e.to(navBack,{duration:.3,delay:"-1.1",autoAlpha:1,display:"block",zIndex:"9995",ease:"power1"}).to(navMainMobile,{duration:.3,delay:"-1.2",x:"0%",zIndex:"9996",ease:"power2"}).to(navButtonLineMiddle,{duration:.2,delay:"-0.4",rotation:"180deg",ease:"power2"}).to(navButtonLineTop,{duration:.2,delay:"-0.4",rotation:"135deg",x:"27%",y:"200%",scaleX:.6,ease:"power2"}).to(navButtonLineBottom,{duration:.2,delay:"-0.4",rotation:"-135deg",x:"27%",y:"-200%",scaleX:.6,ease:"power2"}),navButtonMobile.addEventListener("click",(function(){e.reversed()?e.restart():e.reverse()})),navBack.addEventListener("click",(function(){e.reverse()}))}function navMain(){document.querySelector(".item-has-children > a").addEventListener("click",(e=>{e.preventDefault(),this.classList.toggle("submenu-open").next(".submenu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").classList.remove("submenu-open").next(".submenu").slideUp(200)}))}const bodyDiv=document.querySelector("body"),wrapperDesktop=document.querySelector(".wrapper--desktop"),wrapperMobile=document.querySelector(".wrapper--mobile"),headerDesktop=document.querySelector(".header--desktop"),headerMobile=document.querySelector(".header--mobile"),footerDesktop=document.querySelector(".footer--desktop"),footerMobile=document.querySelector(".footer--mobile"),navMobile=document.querySelector(".header-mobile__nav"),navMobileMask=document.querySelector(".header-mobile__nav-mask");function scriptDesktopHide(){bodyDiv.removeChild(wrapperDesktop),bodyDiv.removeChild(headerDesktop)}function scriptMobileHide(){bodyDiv.removeChild(wrapperMobile),bodyDiv.removeChild(headerMobile),bodyDiv.removeChild(footerMobile),bodyDiv.removeChild(navMobile),bodyDiv.removeChild(navMobileMask)}function objectsTabs(){const e=document.querySelectorAll(".tab__menu_trigger"),o=document.querySelectorAll(".js-tab-target");let t=0;for(let t=0;t<e.length;t++)e[t].addEventListener("click",a,!1),e[t]!==e[0]&&gsap.set(o,{autoAlpha:0,display:"none"});function a(){document.getElementsByClassName("is-active")[0].classList.remove("is-active"),this.classList.add("is-active");const t=Array.prototype.slice.call(e).indexOf(this);let a=document.getElementsByClassName("js-tab-target")[t];o.forEach((e=>{gsap.set(e,{autoAlpha:0,display:"none"})})),gsap.timeline().fromTo(a,{autoAlpha:0},{duration:.3,autoAlpha:1,display:"flex",ease:"power2.in"})}0===t&&(gsap.set(o[0],{autoAlpha:1,display:"flex"}),t=1)}function frontSlider(){let e=new MasterSlider;e.control("arrows",{insertTo:"#slider_arrow_front",autohide:!1}),e.setup("sliderFront",{width:1920,height:1080,autoHeight:!1,space:0,loop:!0,autoplay:!0,view:"parallaxMask",layout:"autofill",speed:20,swipe:!1,mouse:!1,wheel:!1,overPause:!1})}class Modal{modalLoad(e,o){const t=document.createElement("div"),a=document.createElement("div"),r=document.querySelector("body"),n=document.createElement("div"),i=document.createElement("div"),l=document.createElement("iframe");document.querySelector(".wrapper"),document.documentElement.scrollTop;t.className+="wrapper-modal",a.className+="wrapper-modal__container",i.className+="wrapper-modal__close",n.className+="wrapper-modal__mask",i.innerHTML='\n            <i class="fas fa-close"></i>\n        ',function(){const d=document.getElementById(e);let s=new gsap.timeline({reversed:!0,onStart:()=>{r.appendChild(t),t.appendChild(a),t.appendChild(i),a.appendChild(l),l.src=`https://kraspan.redvus.ru/materials-all/${o}`,l.onload=()=>{l.contentDocument}}});s.from(n,{duration:.4,autoAlpha:0}).from(t,{duration:.3,delay:"-0.3",autoAlpha:0,x:"100%",ease:"power1.inOut"}).from(l,{duration:.3,delay:"0.2",autoAlpha:0}).from(i,{duration:.3,autoAlpha:0}),d.addEventListener("click",(()=>{s.play(),r.appendChild(n)})),i.addEventListener("click",(()=>{s.reversed()?s.restart():s.reverse(),setTimeout((()=>{r.removeChild(n),t.removeChild(a),t.removeChild(i),r.removeChild(t),a.removeChild(l)}),1100)})),n.addEventListener("click",(()=>{s.reversed()?s.restart():s.reverse(),setTimeout((()=>{r.removeChild(n),t.removeChild(a),t.removeChild(i),r.removeChild(t),a.removeChild(l)}),1100)}))}()}}const sliderFront=document.getElementById("sliderFront"),objectsTab=document.getElementById("objectsTab"),sectionMaterials=document.getElementById("sectionMaterials"),sectionMaterialsAll=document.getElementById("sectionMaterialsAll"),wrapperSingle=document.querySelector(".wrapper-single");function countersFront(){const e=new Counters;e.counterLoad("counterFasad",180),e.counterLoad("counterObjects",150),e.counterLoad("counterDistrict",9)}const wrapper=document.querySelector(".wrapper"),headerMob=document.querySelector(".header"),headerTopPart=document.querySelector(".header__top_part"),headerTopAdress=document.querySelector(".header__top_adress"),headerTopPartRight=document.querySelector(".header__top_part--right"),headerTopAdressMobile=document.querySelector(".header__top_adress--mobile-right"),wrapperMain=document.getElementById("wrapperMain");function wrapperMob(){wrapper.classList="wrapper wrapper--mobile",headerMob.classList="header header--mobile",headerTopPart.removeChild(headerTopAdress)}function wrapperDesk(){headerTopPart.removeChild(headerTopAdressMobile)}function initMain(){if(objectsTabs(),frontSlider(),sectionMaterials){const e=new Modal;e.modalLoad("materialLink_1","kraspan-metallomagnezite/metallomagnezit-info/"),e.modalLoad("materialLink_2","kraspanbrickform-brick/brickform-info/"),e.modalLoad("materialLink_3","kraspanfibrocementcolor/fiber-cement-info/"),e.modalLoad("materialLink_4","kraspan-photo-printing/photo-printing-info/")}if(sectionMaterialsAll){const e=new Modal;e.modalLoad("materialLink_1","kraspan-metallomagnezite/metallomagnezit-info/"),e.modalLoad("materialLink_2","kraspanbrickform-brick/brickform-info/"),e.modalLoad("materialLink_3","kraspanfibrocementcolor/fiber-cement-info/"),e.modalLoad("materialLink_4","kraspan-photo-printing/photo-printing-info/"),e.modalLoad("materialLink_5","kraspanmetaltex/kraspanmetaltex-long-cassettes-info/"),e.modalLoad("materialLink_6","kraspanmetaltex-large-format-cassettes/kraspanmetaltex-large-info/"),e.modalLoad("materialLink_7","kraspanmetalcolor/metalcolor-info/"),e.modalLoad("materialLink_8","kraspancomposite-st/composite-st-info/"),e.modalLoad("materialLink_9","porcelain-stoneware-slabs/porcelain-tiles-info/"),e.modalLoad("materialLink_10","kraspangranite/granit-info/"),e.modalLoad("materialLink_11","kraspantunnelcolor/kraspantunnelcolor-info/")}}function initMainMobile(){objectsTabs(),frontSlider(),wrapperMob()}document.body.clientWidth>820||screen.width>820?initMain():initMainMobile();