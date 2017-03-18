/**
 * Created by Administrator on 2017/3/6.
 */
$(function(){
    var swiper = new Swiper('.swiper-container', {
        //swiper.js的设置
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        effect : 'fade',
        lazyLoadingClass : 'bounceInDown',
        mousewheelControl: true,

        //swiper animate.js设置
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
})