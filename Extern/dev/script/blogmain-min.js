if(document.querySelector(".blogmain-sectionarticles")){function sliderHorizontalScroll(){let t=document.querySelector(".blogmain-sectionlist"),e=document.querySelector(".blogmain-sectionlist_slider"),i=document.querySelector(".blogmain-sectionList_elWrapper:nth-child(1)"),l=document.querySelector(".blogmain-sectionList .wrapper-12");t.style.height=e.clientWidth-(l.clientWidth-i.clientHeight)+"px",window.addEventListener("scroll",(function(){let i=t.offsetTop,n=window.pageYOffset-i+200;n>0&&n<=e.clientWidth-l.clientWidth?e.style.transform="translateX(-"+n+"px)":n<0?e.style.transform="translateX(0px)":n>e.clientWidth-l.clientWidth&&(e.style.transform="translateX(calc(-100% + "+l.clientWidth+"px))")}))}window.matchMedia("(min-width: 767px)").matches&&sliderHorizontalScroll()}