const Slider = (function () {
    function Slider__showImage(evt) {
        if (evt.target != this) {
            this.previousElementSibling.firstElementChild.src = evt.target.href;
            let el;
            for (let i = 0; i < this.childElementCount; ++i) {
                el = this.children[i];
                el.className = (el == evt.target) ? 'activ' : '';
            }
            evt.preventDefault();
        }
    }
    function Slider(buttonset, config) {
        this.buttonset = buttonset;
        this.buttonset.addEventListener('click', Slider__showImage);
        if (!config.initial)
            config.initial = 0;
        this.buttonset.classList.add('slider');
        let button;
        config.images.forEach((el, i) => {
            button = document.createElement('a');
            button.href = el;
            button.textContent = i + 1;
            if (i == config.initial)
                button.classList.add('activ');
            this.buttonset.appendChild(button);
        });
        const panel = document.createElement('section');
        panel.classList.add('slider-panel');
        const img = document.createElement('img');
        img.src = config.images[config.initial];
        panel.appendChild(img);
        this.buttonset.insertAdjacentElement('beforebegin', panel);
    }
    function Slider__getCurrentIndex() {
        for (let i = 0; i < this.buttonset.childElementCount; ++i) {
            if (this.buttonset.children[i].classList.contains('activ'))
                return i;
        }
    }
    function Slider__setCurrentIndex(ind) {
        if (ind < 0)
            ind = 0;
        if (ind > this.buttonset.childElementCount - 1)
            ind = this.buttonset.childElementCount - 1;
        this.buttonset.previousElementSibling.firstElementChild.src = this.buttonset.children[ind].href;
        for (let i = 0; i < this.buttonset.childElementCount; ++i)
            this.buttonset.children[i].className = (i == ind) ? 'activ' : '';
    }
    Object.defineProperty(Slider.prototype, 'currentIndex', {
        get: Slider__getCurrentIndex,
        set: Slider__setCurrentIndex
    });
    return Slider;
})();
const Slider2 = (function () {
    function Slider2(buttonset) {
        if (typeof buttonset == 'string')
            buttonset = document.getElementById(buttonset);
        Slider.apply(this, arguments);
    }
    Slider2.prototype = Object.create(Slider.prototype);
    Slider2.prototype.constructor = Slider2;
    Slider2.prototype.goNext = function () {
        if (this.currentIndex == this.buttonset.childElementCount - 1)
            this.currentIndex = 0;
        else
            this.currentIndex = this.currentIndex + 1;
    };
    Slider2.prototype.goPrevious = function () {
        if (this.currentIndex == 0)
            this.currentIndex = this.buttonset.childElementCount - 1;
        else
            this.currentIndex = this.currentIndex - 1;
    };
    return Slider2;
})();
/*
//Пример добавления слайдера
const cnfg1 = {
    images: ['imagesLearn/11.jpg', 'imagesLearn/22.jpg', 'imagesLearn/33.jpg', 'imagesLearn/44.jpg', 'imagesLearn/55.jpg']
};
const slider1 = new Slider2(document.getElementById('slider1'), cnfg1);
const previous = document.getElementById('previous');
const next = document.getElementById('next');
previous.addEventListener('click', () => {
    slider1.goPrevious();
});
next.addEventListener('click', () => {
    slider1.goNext();
});
*/
