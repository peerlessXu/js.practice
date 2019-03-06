;
(function () {
    var Slider = function (sliderId) {
        this.slide = document.getElementById(sliderId);
        this.room = this.slide.getElementsByTagName('div')[0];
        this.img = this.room.getElementsByTagName('img');
        this.slideWidth = parseInt(getComputedStyle(this.slide).width);
        this.slideHeight = parseInt(getComputedStyle(this.slide).height);


        this.up = null;
        this.down = null;
        this.navButton = null;

        this.resetAllButton();

        this.time = null;
        this.imgIndex = 1;
        this.speed = (this.slideWidth / 10);


       this.slide.onmouseenter=this.onmouseenter();

        console.log(this.slideHeight)
    };

    Slider.prototype.resetCss = function () {
        //初始化需要的样式
        var createStyle = document.createElement('style');
        /*两个左右按钮公共样式*/
        createStyle.innerHTML += '.buttonCss{font-size:14px;position:absolute;;z-index:2;background:rgba(51,51,51,0.4);color:#fff;padding:4px;border-style:none;outline:none;cursor:pointer;display:none;}';
        createStyle.innerHTML += '.room{position:absolute;}'; //初始化room的css
        createStyle.innerHTML += '.slide{font-size:0;overflow:hidden;position:relative;}' //初始化slide样式
        createStyle.innerHTML += '.nav{padding:0 4px;list-style:none;position:absolute;font-size:0px;background:rgba(222,222,222,0.4);bottom:10px;right:10px;text-align:center;-moz-border-radius:10px;border-radius:10px;}'; //nav样式
        createStyle.innerHTML += '.navButton{display:inline-block;margin:6px 4px;background:#fff;width:8px;height:8px;-moz-border-radius:8px;border-radius:8px;cursor:pointer;}' //导航点样式
        document.head.appendChild(createStyle);
    }()

    Slider.prototype.resetAllButton = function () {

        this.navPosition = this.slideHeight / 2;
        this.slide.setAttribute('class', 'slide');

        var prev = document.createElement('div');
        prev.innerHTML = '<'
        prev.setAttribute('class', 'buttonCss prev');
        prev.style.left = 0;
        prev.style.top = this.navPosition + 'px';
        this.slide.appendChild(prev);
        this.up = document.querySelector('.prev');

        var next = document.createElement('div');
        next.innerHTML = '>';
        next.setAttribute('class', 'buttonCss next')
        next.style.right = 0;
        next.style.top = this.navPosition + 'px';
        this.slide.appendChild(next);
        this.down = document.querySelector('.next');

    }


    Slider.prototype.onmouseenter = function () {
        this.up.style.display='block';
        this.down.style.display='block';
        console.log('enter')
    }


    this.Slider = Slider;

})()