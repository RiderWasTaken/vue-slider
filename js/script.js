Vue.config.devtools = true;

new Vue(
    {
        el: '#box',
        data: {
            pics: [
                'img/Genshin1.jpg',
                'img/Genshin2.jpg',
                'img/Genshin3.jpg',
                'img/Genshin4.jpg',
                'img/Genshin5.jpg',
                'img/Genshin6.jpg',
                'img/Genshin7.jpg',
                'img/Genshin8.jpg',
                'img/Genshin9.jpg',
                'img/Genshin10.jpg'
            ],
            picSlider: 0,
        },
        created () {
            // setInterval(() => {
            //     this.nextPic();
            // },1500);
        },
        methods: {
            nextPic: function () {
                // (this.picSlider = 0) ? (this.picSlider === (this.pics.length - 1)) : this.picSlider++;
                if (this.picSlider == (this.pics.length - 1)) {
                    this.picSlider = 0;
                } else {
                    this.picSlider ++;
                }
            },
            prevPic: function () {
                // (this.picSlider = this.pics.length - 1) ? this.picSlider === 0 : this.picSlider--;
                if (this.picSlider === 0) {
                    this.picSlider = this.pics.length - 1;
                } else {
                    this.picSlider--;
                }
            },
            moveTo: function(i) {
                this.picSlider = i;
            },
            currentPlayerDot: function (i) {
                // return 'this' ? (i === this.picSlider) : '';
                if (i === this.picSlider) {
                    return 'current';
                } else {
                    return '';
                }
            }
        }
    }
);