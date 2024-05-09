class ImageContainer {
    constructor(imgSrc, parentEl) {
        this.imgSrc = imgSrc;
        this.parentEl = parentEl;
        this.translateX = 0;
        this.viewPort = document.querySelector('.slider__viewport');
        this.translateNum = +this.parentEl.dataset.transform;
        this.appendImage();
        this.setDimensions();
        this.addEventListeners();
    }
    appendImage() {
        this.el = document.createElement('div');
        this.el.classList.add('image__container');
        this.el.style.width = this.parentEl.dataset.width;
        this.image = document.createElement('img');
        this.image.src = this.imgSrc;
        this.el.appendChild(this.image);
        this.parentEl.appendChild(this.el);
    }
    setDimensions() {
        this.centerRef = window.innerWidth / 2;
    }
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.setDimensions();
        });
    }
    animate() {
        let { left, width } = this.parentEl.getBoundingClientRect();
        this.parentCenter = left + (width / 2);
        this.el.style.transform = `translateX(${(this.centerRef - this.parentCenter) * -this.translateNum}px)`;
    }
}


const images = [
    
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',

    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
];
export { ImageContainer, images };