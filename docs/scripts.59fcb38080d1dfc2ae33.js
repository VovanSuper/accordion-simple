!function(e,t){var n,o,c,a,r;(function(e,t,n,o){let c=t.createElement("script");function a(){dataLayer.push(arguments)}c.async=1,c.src="https://www.googletagmanager.com/gtag/js?id=G-0G4LK2LFGZ",e.dataLayer=e.dataLayer||[],a("js",new Date),a("config","G-0G4LK2LFGZ"),a("config","G-EWVJVMTQHK")})(e=e||window,t=t||document),o=t,c="script",(n=e).ym=n.ym||function(){(n.ym.a=n.ym.a||[]).push(arguments)},n.ym.l=1*new Date,a=o.createElement(c),r=o.getElementsByTagName(c)[0],a.async=1,a.src="https://mc.yandex.ru/metrika/tag.js",r.parentNode.insertBefore(a,r),ym(67019512,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})}(window,document),function(){function e(e){e.open=!e.open}window.addEventListener("DOMContentLoaded",function(t){const n=new Swiper(".swiper-container",{effect:"flip",grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),o=window.mdc.topAppBar.MDCTopAppBar,c=window.mdc.drawer.MDCDrawer,a=window.mdc.list.MDCList,r=window.mdc.menu.MDCMenu,d=document.getElementById("forward"),i=document.getElementById("nav-to-docs"),m=document.getElementById("back"),s=c.attachTo(document.querySelector(".mdc-drawer")),l=new r(document.querySelector(".mdc-menu"));l.setFixedPosition(!0),l.setAnchorElement(vert_menu_opener),vert_menu_opener.addEventListener("click",e=>{l.open=!l.open}),d.addEventListener("click",t=>{t.preventDefault(),n.slideNext(),e(s)}),m.addEventListener("click",t=>{t.preventDefault(),n.slidePrev(),e(s)}),i.addEventListener("click",e=>{n.slideTo(n.slides.length-1,2e3)});const u=o.attachTo(document.getElementById("app-bar"));u.setScrollTarget(document.getElementById("main-content")),a.attachTo(document.querySelector(".mdc-list")).wrapFocus=!0,u.listen("MDCTopAppBar:nav",()=>{e(s)})})}();