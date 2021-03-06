if( document.querySelector('.js_extern-home') ) {

    let section1Tabs = document.querySelectorAll('.home-section1-tab');
    let section1Bar = document.querySelector('.home-section1-slider');
    section1Tabs.forEach(function (section1Tab, index) {
        section1Tab.addEventListener('click', function () {
            
            let lists = document.querySelectorAll('.home-section1-content');
            lists.forEach(function (list) {
                list.classList.remove('style-show');
                document.querySelector('.home-section1-content:nth-child(' + (index+1) +')').classList.add('style-show');
                
            });

            let illus = document.querySelectorAll('.home-section1-illu');
            illus.forEach(function (illu) {
                illu.classList.remove('style-show');
                document.querySelector('.home-section1-illu:nth-child(' + (index+1) +')').classList.add('style-show');
            });

            section1Bar.classList.remove('style-active1');
            section1Bar.classList.remove('style-active2');
            section1Bar.classList.add('style-active' + (index+1));
            
            section1Tabs.forEach(function (section1Tab) {
                section1Tab.classList.remove('style-active');
            });
            
            section1Tab.classList.add('style-active');
            
        });
    });

    function sliderHorizontalScroll(){
        let section = document.querySelector('.home-section2-container');
        let containerEl = document.querySelector('.home-section2-slider');
        let el = document.querySelector('.home-section2-item:nth-child(1)');
        let grid = document.querySelector('.home-section2 .wrapper-12');
    
        /* INIT HEIGHT SECTION */
        section.style.height = (containerEl.clientWidth - (grid.clientWidth - el.clientHeight) + 'px');
    
        /* ON SCROLL */
        window.addEventListener('scroll', function(){
            let a = section.offsetTop;
            let b = 200;
            let c = window.pageYOffset;
            let scrollValue = c - a + b;
    
            if(scrollValue > 0 && scrollValue <= (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(-" + scrollValue + "px" + ")";
            } else if (scrollValue < 0){
                containerEl.style.transform = "translateX(0px)";
            } else if (scrollValue > (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(calc(-100% + " + grid.clientWidth + 'px))';
            };
        })
    }
    if (window.matchMedia("(min-width: 767px)").matches) {
        sliderHorizontalScroll();
    };

    let section7Btn = document.querySelectorAll('.home-section7-containerbtn');
    let section7Count = 1;
    let section7NumQuote = document.querySelectorAll('.home-section7-quote').length;
    section7Btn.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            if(index == 0){
                if (section7Count > 1){
                    section7Count --;
                }
                
            } else if(index == 1) {
                
                if (section7Count < section7NumQuote){
                    section7Count ++;
                }
            }
            
            section7Quotes = document.querySelectorAll('.home-section7-quote');
            section7Quotes.forEach(function (quote) {
                quote.classList.remove('style-show');
            });

            document.querySelector('.home-section7-quote:nth-child(' + section7Count + ')').classList.add('style-show'); 
        });
    });

    let section9Tabs = document.querySelectorAll('.home-section9-tab');
    let section9Bar = document.querySelector('.home-section9-slider');
    section9Tabs.forEach(function (section9Tab, index) {
        section9Tab.addEventListener('click', function () {
            
            let lists = document.querySelectorAll('.home-section9-list');
            lists.forEach(function (list) {
                list.classList.remove('style-show');
                document.querySelector('.home-section9-list:nth-child(' + (index+2) +')').classList.add('style-show');
            });

            section9Bar.classList.remove('style-active1');
            section9Bar.classList.remove('style-active2');
            section9Bar.classList.add('style-active' + (index+1));
            
            section9Tabs.forEach(function (section9Tab) {
                section9Tab.classList.remove('style-active');
            });
            
            section9Tab.classList.add('style-active');
            
        });
    });

    let section6 = document.querySelectorAll('.home-section6');
    section6.forEach(function (section) {
        section.querySelectorAll('.home-section6-el').forEach(function (el, index) {
            if(index != 0) {
                let iframe = el.querySelector('iframe');
                let player = new Vimeo.Player(iframe);
                el.querySelector('.home-section6-elbtn').addEventListener('click', function () {
                    setTimeout(function(){
                        section.querySelectorAll('.home-section6-el').forEach(function (r) {
                            r.classList.remove('style-video');
                        });
                        el.classList.add('style-video');
                        player.play();
                    }, 100);
                });
                el.addEventListener('click', function () {
                    if (this.classList.contains('style-video')) {
                        this.classList.remove('style-video');
                        player.pause();
                    }
                });
            }
        });  
    });

    let section8 = document.querySelectorAll('.home-section8');
    section8.forEach(function (section) {
        let iframe = section.querySelector('iframe');
        let player = new Vimeo.Player(iframe);
        section.querySelector('.home-section8-play').addEventListener('click', function () {
            setTimeout(function(){
                section.querySelector('.home-section8-containervideo').classList.add('style-video');
                player.play();
            }, 100);
        });
        section.querySelector('.home-section8-containervideo').addEventListener('click', function () {
            if (this.classList.contains('style-video')) {
                this.classList.remove('style-video');
                player.pause();
            }
        });     
    });

    /* ON LOAD */
    window.addEventListener('load', function() {
        let sectionHero = document.querySelector('.home-sectionhero');
        let section1TabActive = document.querySelector('.home-section1-tab:nth-child(1)');
        let section7QuoteActive = document.querySelector('.home-section7-quote:nth-child(1)');
        let section9TabActive = document.querySelector('.home-section9-tab:nth-child(1)');
        sectionHero.classList.add('style-ready');
        section1TabActive.click();
        section7QuoteActive.classList.add('style-show'); 
        section9TabActive.click();


        /* SCROLL ANM */
        let scrollpos = window.scrollY;
        let section3 = document.querySelector(".home-section3");
        let section3Pos = section3.offsetTop;
        let windowHeight = window.innerHeight;

        window.addEventListener('scroll', function(){ 
            scrollpos = window.scrollY;
            if(scrollpos > (section3Pos - (windowHeight / 2))){
                section3.classList.add("style-black");
                document.querySelector('.home-section2').classList.add("style-black");
            }
            else {
                section3.classList.remove("style-black");
                document.querySelector('.home-section2').classList.remove("style-black");
            }
        });
    });
    
}




